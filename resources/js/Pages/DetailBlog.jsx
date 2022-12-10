import { Link, usePage } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/inertia-react'

export default function Welcome(props) {
    const { user } = props.auth;
    const { blog } = usePage().props;

    const description = {
        __html: `${blog.description}`
    };

    return (
        <>
            <Head title="Your page title" />

            <main className='p-4 max-w-md m-auto'>

                <header>
                    <Link href='/'><h1 className='font-bold mb-2'>Julian Ivaldy </h1></Link>
                    {user &&
                        <>
                            <Link href={route('Dashboard')} className='mt-2 mb-3 block'> Admin Panel - {props.auth.user.name} </Link>
                        </>
                    }
                </header>
                <hr />
                <p className='mt-4 mb-4'>{blog.title}</p>

                <div dangerouslySetInnerHTML={description}></div>
            </main>
        </>
    );
}
