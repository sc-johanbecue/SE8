import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Mock user database
const users = [
  { username: 'demo1', password: 'demo1', name: 'Sarah Johnson', company: 'Tech Solutions Inc' },
  { username: 'demo2', password: 'demo2', name: 'Michael Chen', company: 'Digital Partners LLC' },
];

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const user = users.find((u) => u.username === username && u.password === password);

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
      return NextResponse.json({
        success: true,
        user: { username: user.username, name: user.name, company: user.company },
      });
    }

    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 });
  }
}
