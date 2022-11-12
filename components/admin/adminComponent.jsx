import { Listbox, Switch, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import MainModel from '../MainModel';

const newLocal = <div className='flex align-middle justify-between'>
    <h1 className='text-2xl font-bold'>My First Importer</h1>
    <div className='flex gap-2'>
        <button className="bg-[#3182CE] hover:bg-[#2c71b2] text-white py-2 px-4 rounded">
            Actions
        </button>
        <button className="bg-[#3182CE] hover:bg-[#2c71b2] text-white py-2 px-4 rounded">
            Preview
        </button>
    </div>
</div>;


const AdminComponent = () => {
    const people = [
        {
            id: 1, name: 'Webhook', description: 'Uploaded data will be sent to our servers, and we will send you a webhook with the data. Webhook docs'
        },
        {
            id: 2, name: 'onData Callback', description: 'Use the onData callback method to receive the data in your frontend (only upload metadata will be sent to our servers). onData Callback docs'
        },
    ];

    let [isOpen, setIsOpen] = useState(false);

    const [selected, setSelected] = useState(people[0]);
    const [enabled, setEnabled] = useState(false);
    const [enabledOne, setEnabledOne] = useState(false);
    const [enabledTwo, setEnabledTwo] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const newLocal_1 = <div className="flex">
        <div className="flex flex-col w-5/12">
            <h2 className='text-lg font-bold'>
                Where to send uploaded data
            </h2>
            <p className='text-stone-500'>
                Choose how we send uploaded data to your app. Choose Webhook to have us send uploads to the Webhook URL you enter below. Alternatively, choose onData callback to have data received directly in your app frontend.
            </p>
        </div>
        <div className='ml-10 flex flex-col justify-center w-72'>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <FaChevronDown
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`}
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                            >
                                                {person.name}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>

                            ))}
                        </Listbox.Options>
                    </Transition>
                    <p className='text-stone-500 text-xs mt-2'>
                        {selected.description}
                    </p>
                </div>
            </Listbox>
        </div>
    </div>;


    return (
        <div className='p-12'>
            {newLocal}

            <div className='mt-14 border-2 rounded-md p-4 flex flex-col align-middle'>
                {newLocal_1}

                <hr className="my-7 h-px bg-gray-200 border-0 dark:bg-gray-700" />

                <div>

                    <div className="flex mb-8">
                        <div className="flex flex-col w-5/12">
                            <h2 className='text-md font-bold'>
                                Development Mode
                            </h2>
                            <p className='text-stone-500'>
                                Enable to test the Importer without uploads counting against your plan limits. A warning it shown to users when in Development Mode.
                            </p>
                        </div>
                        <div className='ml-10 flex flex-col justify-center w-72'>
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>

                    <div className="flex my-8">
                        <div className="flex flex-col w-5/12">
                            <h2 className='text-md font-bold'>
                                Include all un-matched columns in import
                            </h2>
                            <p className='text-stone-500'>
                                Enable this to import all columns uploaded by users, even if they are un-matched. This is useful if users have a variable number of additional columns they want to import. See the docs for details about the data format for un-matched columns
                            </p>
                        </div>
                        <div className='ml-10 flex flex-col justify-center w-72'>
                            <Switch
                                checked={enabledOne}
                                onChange={setEnabledOne}
                                className={`${enabledOne ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabledOne ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>

                    <div className="flex my-8">
                        <div className="flex flex-col w-5/12">
                            <h2 className='text-md font-bold'>
                                Filter invalid rows
                            </h2>
                            <p className='text-stone-500'>
                                Enable to prevent rows that fail any column validation criteria being imported. If disabled, users will be warned about invalid rows, but they will still be imported.
                            </p>
                        </div>
                        <div className='ml-10 flex flex-col justify-center w-72'>
                            <Switch
                                checked={enabledTwo}
                                onChange={setEnabledTwo}
                                className={`${enabledTwo ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabledTwo ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>

                    <hr className="my-7 h-px bg-gray-200 border-0 dark:bg-gray-700" />


                    <div className="flex">
                        <div className="flex flex-col w-5/12">
                            <h2 className='text-md font-bold'>
                                Importer Modal Theme
                            </h2>
                        </div>
                        <div className='ml-10 flex flex-col justify-center'>
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                                Customize Theme
                            </button>
                        </div>
                    </div>
                </div>


                <button className="bg-[#3182CE] hover:bg-[#2c71b2] text-white py-2 px-4 rounded float-right r-0 ml-auto ">
                    Save Changes
                </button>
            </div>

            {newFunction(openModal, isOpen, closeModal)}

            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Order
                            </th>
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
                                Required
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
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
