import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'kirankumar201018@gmail.com',
        pass: process.env.EMAIL_PASS, // You'll need to set this in environment variables
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'kirankumar201018@gmail.com',
      to: [
        'kirankumar201018@gmail.com',
        'parasakirankumar1825@gmail.com',
        's561500@nwmissouri.edu'
      ],
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Portfolio Contact</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Contact Details</h2>
            
            <div style="margin: 20px 0;">
              <strong style="color: #0ea5e9;">Name:</strong>
              <p style="margin: 5px 0; font-size: 16px;">${name}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <strong style="color: #0ea5e9;">Email:</strong>
              <p style="margin: 5px 0; font-size: 16px;">
                <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin: 20px 0;">
              <strong style="color: #0ea5e9;">Message:</strong>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 10px 0; border-left: 4px solid #0ea5e9;">
                <p style="margin: 0; line-height: 1.6; font-size: 16px;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #666; font-size: 14px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Received on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
