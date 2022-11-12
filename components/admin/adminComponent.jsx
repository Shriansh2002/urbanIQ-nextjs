import { useState } from 'react';
import MainModel from '../MainModel';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';

const AdminComponent = () => {
    let [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('My First Template');

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <div className='p-12'>
            <Link href='/'>
                <h1 className='text-md flex items-center text-blue-500'>
                    <AiOutlineArrowLeft /> {" \b "}
                    Back to list
                </h1>
            </Link>
            <div className='mt-8 flex align-middle justify-between'>
                <h1 className='text-2xl font-bold'>{inputValue}</h1>
            </div>

            <div className='mt-14 border-2 rounded-md p-4 flex flex-col align-middle'>
                <div className="flex">
                    <div className="flex flex-col w-5/12">
                        <h2 className='text-lg font-bold text-[#A0AEBF]'>
                            Key
                        </h2>
                        <p className='text-[#A0AEBF]'>
                            The unique key used to identify this Template
                        </p>
                    </div>
                    <div className='ml-10 flex flex-col justify-center w-72'>

                        <div className="mb-2">
                            <input
                                type="text"
                                id="default-input"
                                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-not-allowed"
                                placeholder='f94f4de8-b7b9-43e3-968a-964cf9917fbe'
                            />
                            <Link href="/">
                                <p className='text-sm text-blue-500 underline'>
                                    How to embed the template into your app
                                </p>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="flex mt-8">
                    <div className="flex flex-col w-5/12">
                        <h2 className='text-lg font-bold'>
                            Name
                        </h2>
                        <p className='text-stone-500'>
                            Give your importer a useful name
                        </p>
                    </div>
                    <div className='ml-10 flex flex-col justify-center w-72'>

                        <div className="mb-2">
                            <input
                                type="text"
                                id="default-input"
                                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </div>

                    </div>
                </div>

            </div>

            {newFunction(openModal, isOpen, closeModal)}

            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Column name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Format
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Example
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                <span></span>
                            </th>
                        </tr>
                    </thead>

                </table>
            </div>

        </div>
    );
};

export default AdminComponent;

function newFunction(openModal, isOpen, closeModal) {
    return <div className='mt-14 rounded-md p-4 flex align-middle justify-between'>

        <h1 className='text-xl font-bold'>Columns</h1>
        <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium border-2 items-center"
        >
            Add Column
        </button>

        <MainModel isOpen={isOpen} closeModal={closeModal} />

    </div>;
}