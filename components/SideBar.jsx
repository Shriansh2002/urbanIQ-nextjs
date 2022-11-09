import { BiDownload, BiBook } from 'react-icons/bi';
import { BsCurrencyDollar, BsGearFill } from 'react-icons/bs';

const SideBar = () => {
    return (
        <div className='flex flex-col justify-between h-full'>

            <div className="p-4 w-48 flex flex-col align-middle justify-between">

                <div className='flex items-center text-center gap-3 bg-[#E2E8F0] rounded-md p-2'>
                    <div>
                        <BiDownload size='20' />
                    </div>
                    <p className='font-medium'>Importers</p>
                </div>

                <hr className="my-7 h-px bg-gray-200 border-0 dark:bg-gray-700" />

                <div className='flex items-center text-center gap-3 p-2'>
                    <div>
                        <BiBook size='20' />
                    </div>
                    <p>Documentation</p>
                </div>
            </div>

            <div className="p-4 w-52 flex flex-col align-middle justify-between gap-3">
                <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <div className='flex items-center text-center gap-3 p-2'>
                    <div>
                        <BsGearFill size='20' />
                    </div>
                    <p>Settings</p>
                </div>
                <div className='flex items-center text-center gap-3 p-2'>
                    <div>
                        <BsCurrencyDollar size='20' />
                    </div>
                    <p>Billing</p>
                </div>
            </div>
        </div>

    );
};

export default SideBar;