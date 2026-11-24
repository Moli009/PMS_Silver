import nodemailer from 'nodemailer';
import crypto from 'crypto';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { email, fullName } = req.body || {};

    if (!email || !email.includes('@') || !email.includes('.')) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const recipientName = fullName && fullName.trim() ? fullName.trim() : 'Valued Customer';

    // Generate secure 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Generate HMAC signature (valid for 10 minutes)
    const secret = process.env.OTP_SECRET || 'pms-silver-trend-secret-key-2026';
    const expiresAt = Date.now() + 10 * 60 * 1000;
    const dataToSign = `${cleanEmail}:${otp}:${expiresAt}`;
    const token = crypto.createHmac('sha256', secret).update(dataToSign).digest('hex');

    const senderEmail = 'pmsdhampur25@gmail.com';
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASSWORD;

    if (!gmailAppPassword) {
      return res.status(500).json({
        error: 'GMAIL_APP_PASSWORD environment variable is not configured on Vercel.',
        needsConfig: true,
        senderEmail: senderEmail,
        hint: 'Please generate a 16-character App Password at https://myaccount.google.com/apppasswords and add GMAIL_APP_PASSWORD to Vercel Environment Variables.'
      });
    }

    // Configure Nodemailer transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: gmailAppPassword.replace(/\s+/g, '') // remove spaces from 16-char app password if any
      }
    });

    // Luxury HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF9F6; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
          .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
          .brand-title { font-family: Georgia, serif; font-size: 24px; font-weight: bold; letter-spacing: 2px; color: #ffffff; margin: 0; }
          .brand-sub { font-size: 11px; text-transform: uppercase; letter-spacing: 2.5px; color: #fbbf24; margin-top: 6px; font-weight: 600; }
          .content { padding: 32px 28px; }
          .greeting { font-size: 16px; font-weight: 600; color: #0f172a; margin-bottom: 8px; }
          .desc { font-size: 14px; color: #64748b; line-height: 1.6; margin-bottom: 24px; }
          .otp-box { background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 16px; padding: 20px; text-align: center; margin: 24px 0; }
          .otp-code { font-family: 'Courier New', Courier, monospace; font-size: 34px; font-weight: 800; letter-spacing: 8px; color: #0f172a; margin: 0; }
          .otp-expiry { font-size: 12px; color: #94a3b8; margin-top: 8px; }
          .benefits-box { background: #fffbeb; border: 1px solid #fef3c7; border-radius: 12px; padding: 14px 18px; margin-top: 20px; }
          .benefits-text { font-size: 12px; color: #92400e; margin: 0; font-weight: 500; }
          .footer { background: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #f1f5f9; font-size: 11px; color: #94a3b8; line-height: 1.5; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="brand-title">PMS SILVER TREND</h1>
            <p class="brand-sub">Lala Pradeep Kumar Mohit Agarwal Saraf</p>
          </div>
          <div class="content">
            <p class="greeting">Namaste, ${recipientName}!</p>
            <p class="desc">
              Your one-time verification code to sign in to your <strong>PMS Silver Trend</strong> member account is below:
            </p>
            <div class="otp-box">
              <div class="otp-code">${otp}</div>
              <div class="otp-expiry">Valid for 10 minutes • Do not share with anyone</div>
            </div>
            <div class="benefits-box">
              <p class="benefits-text">
                ✨ Signing in unlocks your <strong>₹200 Welcome Voucher</strong>, BIS 925 Hallmarking tracking, and exclusive silver coin rewards!
              </p>
            </div>
          </div>
          <div class="footer">
            <p>Sent securely from <strong>${senderEmail}</strong></p>
            <p>© ${new Date().getFullYear()} PMS Silver Trend (Lala Pradeep Kumar Mohit Agarwal Saraf). All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the actual email
    await transporter.sendMail({
      from: `"PMS Silver Trend" <${senderEmail}>`,
      to: cleanEmail,
      subject: `${otp} is your PMS Silver Trend Verification Code`,
      text: `Namaste ${recipientName}, Your verification code for PMS Silver Trend is: ${otp}. Valid for 10 minutes.`,
      html: htmlContent
    });

    return res.status(200).json({
      success: true,
      message: `Verification code sent to ${cleanEmail} from ${senderEmail}`,
      token,
      expiresAt
    });

  } catch (error) {
    console.error('Error in send-otp:', error);
    return res.status(500).json({
      error: error.message || 'Failed to send email. Please verify Gmail credentials.',
      details: error.code || 'UNKNOWN_ERROR'
    });
  }
}
