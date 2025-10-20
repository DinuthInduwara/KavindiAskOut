import { NextResponse } from 'next/server';
import { getRequiredEnv, EnvValidationError } from '@/lib/server/env';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    const correctPassword = getRequiredEnv('PASSWORD');
    const isCorrect = password.toLowerCase() === correctPassword.toLowerCase();
    
    return NextResponse.json({ isCorrect });
  } catch (error) {
    if (error instanceof EnvValidationError) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
