import { Dialog, Switch, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const MainModel = ({ isOpen, closeModal }) => {
    const [mustBeMatched, setMustBeMatched] = useState(false);
    const [valueNotNull, setValueNotNull] = useState(false);

    return (
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
                    <div className="flex justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-md mt-16 bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h2"
                                    className="text-lg flex items-center font-medium leading-6 text-gray-900"
                                >
                                    Add Column
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"
                                        onClick={closeModal}>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </Dialog.Title>
                                <Dialog.Description>
                                    <div className='mt-2 p-2'>
                                        <div className="mb-6">
                                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                            <input
                                                type="text"
                                                id="default-input"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                            <p className='text-gray-500 text-sm'>
                                                Input the column name exactly as in your CSV or Excel file.
                                            </p>

                                            <div className="flex items-center mt-4 gap-4">
                                                <div className='w-12'>
                                                    <Switch
                                                        checked={mustBeMatched}
                                                        onChange={setMustBeMatched}
                                                        className={`${mustBeMatched ? 'bg-blue-600' : 'bg-gray-200'
                                                            }  relative inline-flex h-6 w-11 items-center rounded-full`}
                                                    >
                                                        <span className="sr-only">Must Be Matched</span>
                                                        <span
                                                            className={`${mustBeMatched ? 'translate-x-6' : 'translate-x-1'
                                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                        />
                                                    </Switch>
                                                </div>
                                                <div className="flex flex-col ml-2">
                                                    <label htmlFor="must-be-matched" className="text-md font-medium text-gray-900 dark:text-gray-300">Must Be Matched</label>
                                                    <p className="text-xs text-gray-500 dark:text-gray-300">Require that users must match this column to a column in their imported data.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center mt-4 gap-4">
                                                <div className='w-12'>
                                                    <Switch
                                                        checked={valueNotNull}
                                                        onChange={setValueNotNull}
                                                        className={`${valueNotNull ? 'bg-blue-600' : 'bg-gray-200'
                                                            }  relative inline-flex h-6 w-11 items-center rounded-full`}
                                                    >
                                                        <span className="sr-only">Value Cannot Be Blank</span>
                                                        <span
                                                            className={`${valueNotNull ? 'translate-x-6' : 'translate-x-1'
                                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                        />
                                                    </Switch>
                                                </div>
                                                <label htmlFor="must-be-matched" className="text-md font-medium text-gray-900 dark:text-gray-300">Value Cannot Be Blank</label>
                                            </div>


                                            <div className="flex items-center mt-4 gap-4">
                                                <div className='w-12'>
                                                    <Switch
                                                        checked={mustBeMatched}
                                                        onChange={setMustBeMatched}
                                                        className={`${mustBeMatched ? 'bg-blue-600' : 'bg-gray-200'
                                                            }  relative inline-flex h-6 w-11 items-center rounded-full`}
                                                    >
                                                        <span className="sr-only">Validation Hook</span>
                                                        <span
                                                            className={`${mustBeMatched ? 'translate-x-6' : 'translate-x-1'
                                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                        />
                                                    </Switch>
                                                </div>
                                                <div className="flex flex-col ml-2">
                                                    <label htmlFor="must-be-matched" className="text-md font-medium text-gray-900 dark:text-gray-300">Validation Hook</label>
                                                    <p className="text-xs text-gray-500 dark:text-gray-300">
                                                        If enabled, data in this column will be sent to onRecordsInitial and onRecordEdit callback functions. Validation Hooks docs
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <InputField name="Description" desc="Users will see this description when using the Importer." />
                                        <InputField name="Example" desc="An example of content for this column." />
                                    </div>
                                </Dialog.Description>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

const InputField = ({ name, desc }) => {
    return (
        <>
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {name}
            </label>
            <input
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

            <p className='text-gray-500 text-sm'>
                {desc}
            </p>
        </>
    );
};



export default MainModel;;