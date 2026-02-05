import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  
  // Safety check to prevent the app from crashing if the token is missing
  if (!token) {
    return NextResponse.json({ error: 'Token not found' }, { status: 500 })
  }

  const url = `https://graph.facebook.com/v21.0/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${token}`
  
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 } // Vercel will cache this for 1 hour to stay under rate limits
    })
    const data = await res.json()
    
    return NextResponse.json(data.data || [])
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}
