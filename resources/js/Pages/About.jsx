import { Link, usePage } from '@inertiajs/inertia-react';

export default function About(props) {
    const { user } = props.auth;
    const { about } = usePage().props;

    const description = {
        __html: `${about.description}`
    };

    return (
        <>
            <main className='py-5 md:w-2/6 px-6 m-auto'>

                <header>
                    <Link href='/'><h1 className='font-bold mb-2'>Julian Ivaldy </h1></Link>
                    {user &&
                        <>
                            <Link href={route('Dashboard')} className='mt-2 mb-3 block'> Admin Panel - {props.auth.user.name} </Link>
                        </>
                    }
                </header>
                <hr />
                <div dangerouslySetInnerHTML={description} className="mt-4"></div>
            </main>
        </>
    );
}
