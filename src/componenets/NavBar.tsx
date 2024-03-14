import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const NavBar: React.FC = () => {
  const router = useRouter();

  return(
    <nav>
      <div className='flex py-12'>
        <Link
          href={'/'}
          className={`text-2xl font-bold mx-6 border-slate-400 ${router.pathname === '/' ? 'border-b-2': ''}`}
        >
          Home
        </Link>
        <Link
          className={`text-2xl font-bold mx-6 border-slate-400 ${router.pathname === '/about' ? 'border-b-2': ''}`}
          href={'/about'}
        >
          About
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;