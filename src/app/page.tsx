import { cookies } from 'next/headers';

async function login() {
  'use server';
  // verify the user credentials
  // if the user is valid, set the token in the cookie

  cookies().set('token', '1234567890', {
    httpOnly: true,
  });
}

async function logout() {
  'use server';
  cookies().delete('token');
}

export default function Protected() {
  const token = cookies().get('token')?.value;

  return (
    <div className='grid place-content-center min-h-screen'>
      <p className='text-2xl font-semibold'>{token ? 'Authorized' : 'Not Authorized'}</p>
      <form className='grid place-content-center mt-6' action={token ? logout : login}>
        <button className='rounded border px-3 py-1'>{token ? 'Logout' : 'Login'}</button>
      </form>
    </div>
  );
}
