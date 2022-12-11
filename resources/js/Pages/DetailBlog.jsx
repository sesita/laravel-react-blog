import { Link, usePage } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/inertia-react'
import DocumentMeta from 'react-document-meta';

export default function Welcome(props) {
    const { user } = props.auth;
    const { blog } = usePage().props;

    const description = {
        __html: `${blog.description}`
    };

    const meta = {
        meta: {
            charset: 'utf-8',
            name: {
                title: blog.metaTitle,
                description: blog.metaDescription,
                keywords: blog.metaData,
                robots: 'index, follow'
            }
        }
    }


    return (
        <>
            <DocumentMeta {...meta} />

            <Head title={blog.metaTitle} />

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
                <p className='mt-4 mb-4'>{blog.title}</p>

                <div dangerouslySetInnerHTML={description}></div>

                <h5>{blog.created_at}</h5>
            </main>
        </>
    );

}
