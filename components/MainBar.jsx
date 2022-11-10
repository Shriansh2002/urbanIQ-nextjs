import { Dialog, Listbox, RadioGroup, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const formats = [
    {
        name: 'Text (any value)',
        Description: 'Any String of Characters',
    },
    {
        name: 'Number',
        Description: 'Numbers with , and . characters allowed',
    },
    {
        name: 'Date',
        Description: 'Matches selected Format',
        formats: [
            '27/03/1998',
            '27/03/98',
            '27-03-1998',
            '27-03-98',
            '27.03.1998',
            '27.03.98',
            '03/27/1998',
            '03/27/98',
            '03-27-1998',
            '03-27-98',
            '03.27.1998',
            '03.27.98',
            '1998-03-27',
            'DATEVALUE 35881'
        ]
    },
    {
        name: 'Phone Number',
        Description: 'Matches phone number with symbols: ()[]-+.',
    },
    {
        name: 'Email',
        Description: 'Valid Email Address',
    }
];

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#0000FF" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#0000FF"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}


const MainBar = () => {
    let [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(formats[0]);
    const [selectedPerson, setSelectedPerson] = useState(formats[2].formats[0]);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <div className='p-12'>
            <div className='flex align-middle justify-between'>
                <h1 className='text-2xl font-bold'>Importers</h1>
                <button className="bg-[#3182CE] hover:bg-[#2c71b2] text-white py-2 px-4 rounded">
                    Add Importer
                </button>
            </div>

            <div className='mt-14 border-2 rounded-md p-4 flex align-middle justify-between'>

                <div className='flex flex-col'>
                    <h2 className='text-lg font-bold'>
                        My First Importer
                    </h2>
                    <p className='text-stone-500'>No imports</p>
                </div>

                <div>
                    <button
                        type="button"
                        onClick={openModal}
                        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#2c71b2] border-2 border-[#2c71b2] items-center"
                    >
                        View
                    </button>


                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-fit justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md mt-16 bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h2"
                                                className="text-lg flex items-center font-medium leading-6 text-gray-900"
                                            >
                                                Choose Validation Format
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"
                                                    onClick={closeModal}>
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <RadioGroup value={selected} onChange={setSelected}>
                                                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                                                    <div className="space-y-2">
                                                        {formats.map((plan) => (
                                                            <RadioGroup.Option
                                                                key={plan.name}
                                                                value={plan}
                                                                className={({ active, checked }) =>
                                                                    `${active
                                                                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                                                        : ''
                                                                    }
                                                                        ${checked ? 'bg-white' : 'bg-white'}
                                                                        relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                                                }
                                                            >
                                                                {({ active, checked }) => (
                                                                    <>
                                                                        <div className="flex w-full items-center justify-between">

                                                                            <div className="flex items-center">
                                                                                <div className="text-sm">
                                                                                    <RadioGroup.Label className='flex justify-between items-center'>
                                                                                        <p>
                                                                                            {plan.name}
                                                                                        </p>
                                                                                        {plan?.formats &&
                                                                                            <Listbox value={selectedPerson} onChange={setSelectedPerson} className='w-52 ml-12 z-50'>
                                                                                                <div className="relative w-fit">
                                                                                                    <Listbox.Button className="rounded-lg bg-white p-2 items-center text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                                                                        <span>{selectedPerson}</span>
                                                                                                    </Listbox.Button>
                                                                                                    <Transition
                                                                                                        as={Fragment}
                                                                                                        leave="transition ease-in duration-100"
                                                                                                        leaveFrom="opacity-100"
                                                                                                        leaveTo="opacity-0"
                                                                                                    >
                                                                                                        <Listbox.Options className="absolute mt-1 h-48 overflow-scroll rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                                            {plan?.formats?.map((person, personIdx) => (
                                                                                                                <Listbox.Option
                                                                                                                    key={personIdx}
                                                                                                                    className={({ active }) =>
                                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                                                                        }`
                                                                                                                    }
                                                                                                                    value={person}
                                                                                                                >
                                                                                                                    {({ selected }) => (
                                                                                                                        <>
                                                                                                                            <span className={`blocktext-black truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                                                                                                {person}
                                                                                                                            </span>
                                                                                                                        </>
                                                                                                                    )}
                                                                                                                </Listbox.Option>
                                                                                                            ))}
                                                                                                        </Listbox.Options>
                                                                                                    </Transition>
                                                                                                </div>
                                                                                            </Listbox>
                                                                                        }


                                                                                    </RadioGroup.Label>

                                                                                    <RadioGroup.Description
                                                                                        as="span"
                                                                                        className={`italic inline text-gray-500`}
                                                                                    >
                                                                                        <span>{plan.Description}</span>
                                                                                    </RadioGroup.Description>
                                                                                </div>
                                                                            </div>


                                                                            {checked ? (
                                                                                <div className="shrink-0">
                                                                                    <CheckIcon className="h-6 w-6" />
                                                                                </div>
                                                                            ) : null}

                                                                        </div>
                                                                    </>
                                                                )}
                                                            </RadioGroup.Option>
                                                        ))}
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </div>
    );
};

export default MainBar;