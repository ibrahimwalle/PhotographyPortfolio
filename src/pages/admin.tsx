import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import {
    listOfFiles,
    listOfGroups,
    deleteFile,
    deleteGroup,
    UploadcareSimpleAuthSchema,
    FileInfo,
    ListOfGroupsResponse,
    ListOfFilesResponse,
} from '@uploadcare/rest-client';
import { group } from '@uploadcare/upload-client';
import * as LR from "@uploadcare/blocks";
import blocksStyles from '@uploadcare/blocks/web/lr-file-uploader-regular.min.css?url';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// fetch secrets from .env file
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;
const secretKey = import.meta.env.VITE_APP_SECRET_KEY;
const accessKey = import.meta.env.VITE_APP_ACCESS_KEY;

LR.registerBlocks(LR);
const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
    publicKey: publicKey,
    secretKey: secretKey,
});

// new type
type dataRes = {
    filelist: ListOfFilesResponse,
    grouplist: ListOfGroupsResponse 
}

const Admin: React.FC = () => {
    const [password, setPassword] = useState('');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState( localStorage.getItem('password') === accessKey? true : false );
    const [selectedFiles, setSelectedFiles] = useState<FileInfo[]>([]);

    const fetchData = async () : Promise<dataRes> => {
        const filelist = await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema });
        const grouplist = await listOfGroups({}, { authSchema: uploadcareSimpleAuthSchema });
        return { filelist, grouplist }
    }

    const { data : dataRes , isLoading, isError, refetch } = useQuery('data', fetchData, {
        enabled: isPasswordCorrect,
    });

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Check if the entered password is correct
        if (password === accessKey) {
            setIsPasswordCorrect(true);
            localStorage.setItem('password', password);
        } else {
            toast.error('Incorrect password!');
        }
    };

    const handleDeleteFile = async (uuid: string) => {
       let result = await deleteFile({uuid},{ authSchema: uploadcareSimpleAuthSchema })
       result.datetimeRemoved && toast.success(`File deleted!`) && refetch();
    }

    const handleAddToGroup = async (file: any) => {
        if (selectedFiles.includes(file)) {
            toast.error('File already in group!');
            return;
        }
        setSelectedFiles([...selectedFiles, file]);
    }

    const handleRemoveFileFromGroup = (uuid: string) => {
        setSelectedFiles(selectedFiles.filter(file => file.uuid !== uuid));
    }

    const handleCreateGroup = async () => {
        if (selectedFiles.length === 0) {
            toast.error('No files selected!');
            return;
        }
        const uuidList = selectedFiles.map(file => file.uuid);
        const newGroup = await group(uuidList, { publicKey: uploadcareSimpleAuthSchema.publicKey });
        if (newGroup.datetimeCreated) {
            toast.success('Group created!');
            setSelectedFiles([]);
            refetch();
        }else
            toast.error('Error creating group!');
    }

    const handleDeleteGroup = async (id: string) => {
        await deleteGroup({ uuid: id }, { authSchema: uploadcareSimpleAuthSchema });
        toast.success(`Group deleted!`)
        refetch();
    }

    return (
        <div className='container mx-auto w-full'>
            <h1 className='text-3xl pt-10 pb-8 font-bold text-left'>Admin Page</h1>
            {!isPasswordCorrect ? (
                <form className='space-y-8' onSubmit={handleSubmit}>
                    <h2 className='block mb-2 font-medium text-gray-900 dark:text-gray-300'>Enter your Access Key to access the admin page!</h2>
                    <input required className='p-3 w-1/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' type="password" value={password} onChange={handlePasswordChange} placeholder='AccessKey' />
                    <br /><button className='py-3 px-5 text-sm font-medium text-center bg-black dark:bg-white text-white dark:text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' type="submit">Submit</button>
                </form>
            ) : (
                <div className='space-y-8'>
                    {isLoading ? (
                        <div className="flex items-center justify-center h-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-t-cyan-200 border-b-cyan-300"></div>
                        </div>
                    ) : isError ? (
                        <div>Error fetching image groups!</div>
                    ) : (
                        <section>
                            <h2 className='text-3xl text-left'>All Files</h2>
                            <ul className='bg-white dark:bg-neutral-900 p-5 my-6 rounded shadow-lg border border-gray-100 dark:border-neutral-800 relative h-fit w-full'>
                                {/* {dataRes?.filelist?.results[0].uuid} */}
                                {dataRes?.filelist?.results.map((file: any) => (
                                    <li key={file.uuid} className="flex items-center text-left space-x-4 my-2">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded" src={`https://ucarecdn.com/${file.uuid}/-/scale_crop/80x80/-/quality/smart_retina/-/format/auto/`} alt="" />
                                        </div>
                                        <div className="flex-grow">
                                            <a href={file.originalFileUrl} target='_blank' className="font-medium">{file.originalFilename}</a>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-sm text-gray-500">Size: {file.size}</div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-sm text-gray-500">MIME Type: {file.mimeType}</div>
                                        </div>
                                        <div>
                                            <button onClick={() => handleAddToGroup(file)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-1 px-2 rounded">Add to group</button>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDeleteFile(file.uuid)} className="bg-red-300 hover:bg-red-600 border-none text-white font-medium py-1 px-2 rounded">
                                                <FontAwesomeIcon icon={faTrash} className="h-5 w-5 inline-block" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    <section>
                        <h2 className='text-3xl text-left'>New Group</h2>
                        {/* show selected files */}
                        <ul className='bg-white dark:bg-neutral-900 p-5 my-6 rounded shadow-lg border border-gray-100 dark:border-neutral-800 relative h-fit w-full'>
                            {selectedFiles.length > 0 ? selectedFiles?.map((file: any) => (
                                <li key={file.uuid} className="flex items-center text-left space-x-4 my-2">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded" src={`https://ucarecdn.com/${file.uuid}/-/scale_crop/80x80/-/quality/smart_retina/-/format/auto/`} alt="" />
                                    </div>
                                    <div className="flex-grow">
                                        <a href={file.originalFileUrl} target='_blank' className="font-medium">{file.originalFilename}</a>
                                    </div>
                                    <div>
                                        <button onClick={() => handleRemoveFileFromGroup(file.uuid)} className="bg-red-300 hover:bg-red-600 border-none text-white font-medium py-1 px-2 rounded">
                                            <FontAwesomeIcon icon={faTrash} className="h-5 w-5 inline-block" />
                                        </button>
                                    </div>
                                </li>
                            )) : <div>Add files to group!</div>}     
                        </ul>
                        <button onClick={handleCreateGroup} className='py-3 px-5 text-sm font-medium text-center bg-black dark:bg-white text-white dark:text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' type="submit">Create Group</button>
                    </section>
                    <section>
                        <h2 className='text-3xl text-left'>All Groups</h2>
                        <ul className='bg-white dark:bg-neutral-900 p-5 my-6 rounded shadow-lg border border-gray-100 dark:border-neutral-800 relative h-fit w-full'>
                            {/* {dataRes?.grouplist.results[0].cdnUrl}  */}
                            {dataRes?.grouplist?.results.map((group: any) => (
                                <li key={group.id} className="flex items-center text-left space-x-4 my-2">
                                    <div className="flex-grow">
                                        <a href={group.cdnUrl} target='_blank' className="font-medium">Group URL</a>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-sm text-gray-500">Number of files: {group.filesCount}</div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-sm text-gray-500">Date created: {group.datetimeCreated}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => handleDeleteGroup(group.id)} className="bg-red-300 hover:bg-red-600 border-none text-white font-medium py-1 px-2 rounded">
                                            <FontAwesomeIcon icon={faTrash} className="h-5 w-5 inline-block" />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h2 className='text-3xl text-left'><b>Upload Files</b></h2>
                        {/* ignore error for build */}
                        {/* @ts-ignore */}
                        <lr-upload-ctx-provider 
                            ctx-name="my-uploader">
                            {/* @ts-ignore */}
                            <lr-config
                                ctx-name="my-uploader"
                                pubkey={uploadcareSimpleAuthSchema.publicKey}
                            />
                            {/* @ts-ignore */}
                            <lr-file-uploader-regular
                                ctx-name="my-uploader"
                                css-src={blocksStyles}
                            />
                        {/* @ts-ignore */}
                        </lr-upload-ctx-provider>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Admin;
