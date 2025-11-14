import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Mock user database
const users = [
  { username: 'demo1', password: 'demo1', name: 'Sarah Johnson', company: 'Tech Solutions Inc' },
  { username: 'demo2', password: 'demo2', name: 'Michael Chen', company: 'Digital Partners LLC' },
];

export async function POST(request: Request) {
  try {
    console.log('[v0] Login attempt received');
    const { username, password } = await request.json();
    console.log('[v0] Credentials:', { username, passwordLength: password?.length });

    const user = users.find((u) => u.username === username && u.password === password);
    console.log('[v0] User found:', !!user);

    if (user) {
      const cookieStore = await cookies();
      cookieStore.set(
        'auth-user',
        JSON.stringify({ username: user.username, name: user.name, company: user.company }),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7, // 1 week
        }
      );
      console.log('[v0] Cookie set successfully');
      return NextResponse.json({
        success: true,
        user: { username: user.username, name: user.name, company: user.company },
      });
    }

    console.log('[v0] Invalid credentials');
    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('[v0] Login error:', error);
    return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 });
  }
}
