import { NextRequest, NextResponse } from 'next/server';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple email validation function
function isValidEmail(email: string): boolean {
  return emailRegex.test(email) && email.length <= 254;
}

// Sanitize input to prevent injection
function sanitizeInput(input: string): string {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Validate field lengths
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 1000 characters' },
        { status: 400 }
      );
    }

    // Try to send email if SMTP is configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const nodemailer = require('nodemailer');
        
        const transporter = nodemailer.createTransporter({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: [
            'kirankumar201018@gmail.com',
            'parasakirankumar1825@gmail.com',
            's561500@nwmissouri.edu'
          ],
          replyTo: sanitizedEmail,
          subject: `New Portfolio Message from ${sanitizedName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px;">New Portfolio Contact</h1>
              </div>
              
              <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Contact Details</h2>
                
                <div style="margin: 20px 0;">
                  <strong style="color: #0ea5e9;">Name:</strong>
                  <p style="margin: 5px 0; font-size: 16px;">${sanitizedName}</p>
                </div>
                
                <div style="margin: 20px 0;">
                  <strong style="color: #0ea5e9;">Email:</strong>
                  <p style="margin: 5px 0; font-size: 16px;">
                    <a href="mailto:${sanitizedEmail}" style="color: #6366f1; text-decoration: none;">${sanitizedEmail}</a>
                  </p>
                </div>
                
                <div style="margin: 20px 0;">
                  <strong style="color: #0ea5e9;">Message:</strong>
                  <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 10px 0; border-left: 4px solid #0ea5e9;">
                    <p style="margin: 0; line-height: 1.6; font-size: 16px;">${sanitizedMessage.replace(/\n/g, '<br>')}</p>
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

        await transporter.sendMail(mailOptions);
        
        // Log successful email
        console.log(`Email sent successfully from ${sanitizedEmail}`);
        
        return NextResponse.json(
          { message: 'Message sent successfully!' },
          { status: 200 }
        );
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Fall through to logging approach
      }
    }

    // Fallback: Log the message (for development/debugging)
    const contactData = {
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'
    };

    // Log to console (in production you might want to log to a file or database)
    console.log('New contact form submission:', JSON.stringify(contactData, null, 2));

    return NextResponse.json(
      { 
        message: 'Message received successfully! I will get back to you soon.',
        mailtoLink: `mailto:kirankumar201018@gmail.com?subject=Message from ${encodeURIComponent(sanitizedName)}&body=${encodeURIComponent(`From: ${sanitizedName} (${sanitizedEmail})\n\nMessage:\n${sanitizedMessage}`)}`
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact me directly.' },
      { status: 500 }
    );
  }
}
