import Link from 'next/link';
import { useState } from 'react';
import MainModel from './MainModel';

const MainBar = () => {
    let [isOpen, setIsOpen] = useState(false);

    let importerId = 'ercmjoh6w1thk9cm2n0jp6tha';

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
                    <Link href={`/admin/view-importer/${importerId}`}>
                        <button
                            type="button"
                            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#2c71b2] border-2 border-[#2c71b2] items-center"
                        >
                            View
                        </button>
                    </Link>

                    <MainModel isOpen={isOpen} closeModal={closeModal} />

                </div>
            </div>
        </div>
    );
};


export default MainBar;