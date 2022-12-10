import React, { useEffect } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head, usePage } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const { blogs } = usePage().props;
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Slug
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {blogs.map(blog => (
                                        <tr key={blog.id}>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {blog.title}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {blog.slug}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <Link
                                                    className="text-red-500 hover:text-red-700"
                                                    href={route('blog.destroy', blog.id)}
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
