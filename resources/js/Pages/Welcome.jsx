import { Link, usePage } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    const { user } = props.auth;
    const { blogs } = usePage().props;
    return (
        <>
            <main className='py-5 md:w-2/6 px-6 m-auto'>

                <header>
                    <Link href='/'><h1 className='font-bold mb-2'>Julian Ivaldy </h1></Link>
                </header>
                <p>
                    View Information
                    <Link href={route('About')} className="mx-1">
                        About Me
                    </Link>
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
