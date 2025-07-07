// src/app/api/courses/route.ts
'use client'
import { NextResponse } from 'next/server';

export async function GET() {

  try {
      console.log('STRAPI_URL:', process.env.NEXT_PUBLIC_STRAPI_URL);
console.log('STRAPI_API_TOKEN:', process.env.NEXT_PUBLIC_STRAPI_TOKEN?.slice(0, 10)); // partial
console.log('I fired.')

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    });
    console.log('res tho: ', res)
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch courses' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
