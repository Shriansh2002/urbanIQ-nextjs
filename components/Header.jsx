import Image from 'next/image';

const avatarLogo = require('../static/images/avatar.png');

const Header = () => {
    return (
        <div className="h-18 sticky p-4 top-0 z-50 bg-white flex align-middle justify-between border-b ">
            <div className='flex'>
                <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.1667 27.125H2.98943C1.38088 27.125 0.0727615 25.8169 0.0727615 24.2083V6.70833V3.79167C0.0727615 2.18313 1.38088 0.875 2.98943 0.875H26.1667C27.7752 0.875 29.0834 2.18313 29.0834 3.79167V24.2083C29.0834 25.8169 27.7752 27.125 26.1667 27.125ZM26.1667 24.2083V16.9167H20.3334V24.2083H26.1667ZM11.5834 6.70833V14H17.4167V6.70833H11.5834ZM20.3334 6.70833V14H26.1667V6.70833H20.3334ZM17.4167 24.2083V16.9167H11.5834V24.2083H17.4167ZM8.66672 24.2083V16.9167H2.98797V24.2083H8.66672ZM2.98943 14H8.66672V6.70833H2.98943V14Z" fill="url(#paint0_linear)"></path>
                    <defs>
                        <linearGradient id="paint0_linear" x1="29.0834" y1="0.875" x2="2.96407" y2="29.7412" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#72EDF2"></stop>
                            <stop offset="1" stopColor="#5151E5"></stop>
                        </linearGradient>
                    </defs>
                </svg>{""}
                <p className='px-2'>Use CSV</p>
            </div>
            <Image
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src={avatarLogo}
                alt=""
            />
        </div>
    );
};

export default Header;