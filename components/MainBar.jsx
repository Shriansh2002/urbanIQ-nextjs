const MainBar = () => {
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
                    <button className="py-2 px-4 rounded border-2">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainBar;