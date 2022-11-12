import { useState } from 'react';
import MainModel from '../MainModel';

const AdminComponent = () => {

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <div className='p-12'>
            <div className='flex align-middle justify-between'>
                <h1 className='text-2xl font-bold'>My First Importer</h1>
                <div className='flex gap-2'>
                    <button className="bg-[#3182CE] hover:bg-[#2c71b2] text-white py-2 px-4 rounded">
                        Actions
                    </button>
                    <button className="bg-[#3182CE] hover:bg-[#2c71b2] text-white py-2 px-4 rounded">
                        Preview
                    </button>
                </div>
            </div>

            <div className='mt-14 rounded-md p-4 flex align-middle justify-between'>
                <h1 className='text-xl font-bold'>Columns</h1>
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#2c71b2] border-2 border-[#2c71b2] items-center"
                >
                    Add Column
                </button>

                <MainModel isOpen={isOpen} closeModal={closeModal} />

            </div>
        </div>
    );
};

export default AdminComponent;