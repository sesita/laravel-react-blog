import { Link, usePage } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    const { user } = props.auth;
    const { blogs } = usePage().props;
    return (
        <>
            <main className='p-4 max-w-md m-auto'>

                <header>
                    <Link href='/'><h1 className='font-bold mb-2'>Julian Ivaldy </h1></Link>
                </header>
                <p>
                    Working on <Link href={''}>Farcaster</Link>. More
                    <a href='/test' className="mx-1">
                        About
                    </a>
                    {user &&
                        <>
                            <Link href={route('Dashboard')} className='mt-4 block'> Admin Panel - {props.auth.user.name} </Link>
                        </>
                    }
                </p>
                <hr />
                <h2 className='font-semibold'>Posts</h2>
                <ul>
                    {blogs.map(blog => (
                        <li>
                            <Link href={route('Blog.Detail', blog.slug)}>{blog.title}</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}
