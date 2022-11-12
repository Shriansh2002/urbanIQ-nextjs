import Link from 'next/link';
import { BiDownload, BiBook } from 'react-icons/bi';
import { BsCurrencyDollar, BsGearFill } from 'react-icons/bs';

const sidebarList = [
    {
        name: 'Importers',
        icon: <BiDownload size='20' />,
        link: '/',
    },
    {
        name: 'Documentation',
        icon: <BiBook size='20' />,
        link: '/documentation',
    },
];


const SideBar = ({ active }) => {
    return (
        <div className='flex flex-col justify-between h-full'>

            <div className="p-4 w-48 flex flex-col align-middle justify-between">


                {sidebarList.map((item, index) => (
                    <div key={index}>
                        <Link href={item.link}>
                            <div className={`flex items-center text-center gap-3 rounded-md p-2 ${active === item.name && 'bg-[#E2E8F0]'} `}>
                                <div>
                                    {item.icon}
                                </div>
                                <p className='font-medium'>{item.name}</p>
                            </div>
                        </Link>
                        <hr className="my-7 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                ))}


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