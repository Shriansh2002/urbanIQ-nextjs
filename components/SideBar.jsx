import { BiDownload, BiBook } from 'react-icons/bi';

const SideBar = () => {
    return (
        <div className="p-4 w-52 flex flex-col align-middle justify-between">
            <div className='flex items-center justify-center text-center gap-3 bg-[#E2E8F0] rounded-md p-2'>
                <BiDownload size='20' />
                <p className='font-medium'>Importers</p>
            </div>
            <hr className="my-7 h-px bg-gray-200 border-0 dark:bg-gray-700" />

            <div className='flex items-center justify-center text-center gap-3 p-2'>
                <BiBook size='20' />
                <p>Documentation</p>
            </div>

        </div>
    );
};

export default SideBar;