// app/api/contact/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, // 587 | 465
        secure: false, // 465 ? true : false
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        const { name, email, subject, message } = await req.json();
        const mailOptions = {
            from: 'tnbipin@gmail.com',
            to: 'tnbipin1@gmail.com',
            subject: {subject},
            text: `${name} | ${email} | >>>> ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ message: 'Form submitted successfully!'},{ status: 500 } );
        } catch (error) {
            console.log(error)
            return NextResponse.json({ error: 'Error submitting form to alchemist'},{ status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Error submitting form' }, { status: 500 });
    }
}

export function GET() {
  return new NextResponse('Method Not Allowed', { status: 405 });
}
