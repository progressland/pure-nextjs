import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const imagePath = path.join(process.cwd(), 'assets', 'cat_drink.jpeg');
    const imageBuffer = fs.readFileSync(imagePath);

    const response = new NextResponse(imageBuffer, {
        headers: {
            'Content-Type': 'image/png', // Set arbitrary content-type
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });

    return response;
}
