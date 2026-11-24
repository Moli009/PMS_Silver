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
    const { email, otp, token, expiresAt } = req.body || {};

    if (!email || !otp || !token || !expiresAt) {
      return res.status(400).json({ error: 'Missing required parameters (email, otp, token, expiresAt).' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanOtp = otp.toString().trim();

    // Check expiration
    if (Date.now() > Number(expiresAt)) {
      return res.status(400).json({ error: 'This verification code has expired. Please request a new one.' });
    }

    // Verify HMAC signature
    const secret = process.env.OTP_SECRET || 'pms-silver-trend-secret-key-2026';
    const dataToVerify = `${cleanEmail}:${cleanOtp}:${expiresAt}`;
    const expectedToken = crypto.createHmac('sha256', secret).update(dataToVerify).digest('hex');

    if (expectedToken !== token) {
      return res.status(400).json({ error: 'Invalid verification code. Please check your email and try again.' });
    }

    return res.status(200).json({
      success: true,
      verified: true,
      message: 'OTP verified successfully!'
    });

  } catch (error) {
    console.error('Error in verify-otp:', error);
    return res.status(500).json({ error: error.message || 'Verification failed.' });
  }
}
