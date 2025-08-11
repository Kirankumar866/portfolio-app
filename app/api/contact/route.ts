import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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

    // Try to send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>', // Using Resend's verified domain
          to: [
            'kirankumar201018@gmail.com',
            'parasakirankumar1825@gmail.com',
            's561500@nwmissouri.edu'
          ],
          replyTo: sanitizedEmail,
          subject: `New Portfolio Message from ${sanitizedName}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
              <div style="background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%); padding: 32px; border-radius: 16px; text-align: center; margin-bottom: 32px;">
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">New Portfolio Contact</h1>
                <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">Someone reached out through your portfolio!</p>
              </div>
              
              <div style="background: white; padding: 32px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); margin-bottom: 24px;">
                <h2 style="color: #1f2937; margin: 0 0 24px 0; font-size: 24px; font-weight: 600; border-bottom: 3px solid #0ea5e9; padding-bottom: 12px;">Contact Details</h2>
                
                <div style="margin: 24px 0;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <span style="background: #eff6ff; color: #0ea5e9; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                  </div>
                  <p style="margin: 0; font-size: 18px; color: #374151; font-weight: 500;">${sanitizedName}</p>
                </div>
                
                <div style="margin: 24px 0;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <span style="background: #f0f9ff; color: #0284c7; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                  </div>
                  <p style="margin: 0; font-size: 16px;">
                    <a href="mailto:${sanitizedEmail}" style="color: #2563eb; text-decoration: none; font-weight: 500; background: #eff6ff; padding: 8px 12px; border-radius: 8px; display: inline-block;">${sanitizedEmail}</a>
                  </p>
                </div>
                
                <div style="margin: 24px 0;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <span style="background: #fdf4ff; color: #a855f7; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</span>
                  </div>
                  <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid #0ea5e9; margin: 12px 0;">
                    <p style="margin: 0; line-height: 1.7; font-size: 16px; color: #374151;">${sanitizedMessage.replace(/\n/g, '<br>')}</p>
                  </div>
                </div>
              </div>
              
              <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #e5e7eb;">
                <h3 style="margin: 0 0 16px 0; color: #374151; font-size: 18px; font-weight: 600;">Quick Actions</h3>
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                  <a href="mailto:${sanitizedEmail}?subject=Re: Your message to Kiran Kumar Parasa" style="background: #0ea5e9; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block;">Reply to ${sanitizedName}</a>
                  <a href="tel:+1234567890" style="background: #6366f1; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block;">Schedule Call</a>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 32px; padding: 16px; background: #f1f5f9; border-radius: 8px;">
                <p style="margin: 0; color: #64748b; font-size: 14px;">
                  This message was sent from your portfolio contact form on <strong>${new Date().toLocaleDateString()}</strong> at <strong>${new Date().toLocaleTimeString()}</strong>
                </p>
                <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 12px;">
                  Reply within 24 hours to maintain high response rates ⚡
                </p>
              </div>
            </div>
          `,
        });

        if (error) {
          console.error('Resend error:', error);
          throw new Error('Failed to send email via Resend');
        }

        // Log successful email
        console.log(`Email sent successfully via Resend. ID: ${data?.id}`);
        
        return NextResponse.json(
          { 
            message: 'Message sent successfully! I will get back to you within 24 hours.',
            emailId: data?.id 
          },
          { status: 200 }
        );
      } catch (emailError) {
        console.error('Resend email sending failed:', emailError);
        // Fall through to logging approach
      }
    }

    // Fallback: Log the message and provide mailto option
    const contactData = {
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'
    };

    // Log to console (in production this could be logged to a database)
    console.log('📧 New contact form submission:', JSON.stringify(contactData, null, 2));

    return NextResponse.json(
      { 
        message: 'Message received! I will get back to you soon. You can also email me directly if needed.',
        note: 'Email service is currently in setup mode. Your message has been logged.',
        directEmail: 'kirankumar201018@gmail.com'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try emailing me directly at kirankumar201018@gmail.com' },
      { status: 500 }
    );
  }
}
