import { Link, Head, useAuth } from '@inertiajs/inertia-react';
export default function Welcome(props) {
    const { user } = props.auth;

    return (
        <>
            <main className='p-4 max-w-md m-auto'>

                <header>
                    <h1 className='font-bold mb-2'>Julian Ivaldy</h1>
                </header>
                <p>
                    Working on <Link href={''}>Farcaster</Link>. More
                    <a href='/test' className="mx-1">
                        About
                    </a>
                    {user ?
                        <>
                            <Link href={route('Dashboard')} className='mt-4 block'> Admin Panel - {props.auth.user.name} </Link>
                        </>
                        : null
                    }
                </p>
                <hr />
                <h2 className='font-semibold'>Posts</h2>
                <ul>
                    <li>
                        <Link href={''}>Crypto Reading list</Link>
                    </li>
                    <li>
                        <Link href={''}>Book recommendations</Link>
                    </li>
                </ul>
            </main>
        </>
    );
}
