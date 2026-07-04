import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { firstName, lastName, email, company, market, message } = await request.json();

  if (!firstName || !lastName || !email || !company || !message) {
    return Response.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const user = process.env.ZOHO_EMAIL_USER;
  const pass = process.env.ZOHO_EMAIL_PASSWORD;

  if (!user || !pass) {
    return Response.json({ error: 'Email is not configured.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"RegSci Website" <${user}>`,
      to: user,
      replyTo: email,
      subject: `New consultation request from ${firstName} ${lastName} (${company})`,
      text: [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Company Email: ${email}`,
        `Company Name: ${company}`,
        `Target Market: ${market || 'Not specified'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Failed to send contact form email:', error);
    return Response.json({ error: 'Failed to send message.' }, { status: 502 });
  }
}
