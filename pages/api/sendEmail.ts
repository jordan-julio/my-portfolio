import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(req.headers.authorization as string);
  
  const { personalizations, content, from, reply_to } = req.body;
  const msg = {
    personalizations,
    content,
    from,
    reply_to
  };

  
  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: error, error: 'Internal Server Error' });
  }
}
