import { useRef, useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Editor } from '@tinymce/tinymce-react';

export default function editBlog(props) {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const { blog } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        title: blog.title,
        slug: blog.slug,
        description: blog.description,
        metaTitle: blog.metaTitle,
        metaDescription: blog.metaDescription,
        metaData: blog.metaData,
        created_at: blog.created_at,
    });

    const editorChange = (event) => {
        data.description = event
    }

    const onHandleChange = (event) => {
        if (event.target.name == 'title') {
            const titleText = event.target.value;
            data.title = titleText;
            data.slug = titleText.replace(/ /g, '-');
        }
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('blog.update', blog.id));
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Blog</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel forInput="title" value="Title" />

                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="slug" value="Slug" />

                                    <TextInput
                                        id="slug"
                                        type="text"
                                        name="slug"
                                        value={data.slug}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.slug} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="description" className='mb-2' value="Description" />

                                    <Editor apiKey='txt9y8vk9ycde0f2bdi79ijksbxiiwicw0wypxlpg2de2i7z'
                                        textareaName='description'
                                        value={data.description}
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        onEditorChange={editorChange}
                                        init={{
                                            height: 500,
                                            menubar: false,
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount stylebuttons'
                                            ],
                                            toolbar: 'undo redo | formatselect | ' +
                                                'bold italic backcolor | alignleft aligncenter ' +
                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                'removeformat | help | | h1 h2 h3',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />

                                    <InputError message={errors.description} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel forInput="metaTitle" value="Meta Title" />

                                    <TextInput
                                        id="metaTitle"
                                        type="text"
                                        name="metaTitle"
                                        value={data.metaTitle}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.metaTitle} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel forInput="metaDescription" value="Meta Description" />

                                    <TextInput
                                        id="metaDescription"
                                        type="text"
                                        name="metaDescription"
                                        value={data.metaDescription}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.metaDescription} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel forInput="metaData" value="Meta Data" />

                                    <TextInput
                                        id="metaData"
                                        type="text"
                                        name="metaData"
                                        value={data.metaData}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.metaData} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel forInput="created_at" value="Blog Create Date" />

                                    <TextInput
                                        id="created_at"
                                        type="date"
                                        name="created_at"
                                        value={data.created_at}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.created_at} className="mt-2" />
                                </div>
                                <PrimaryButton className='mt-4' processing={processing}>
                                    Edit Blog
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
