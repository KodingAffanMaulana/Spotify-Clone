import './index.css';

const Sidebar = () => {
  return (
    <div className="sidebar rounded-xl flex flex-col">
      <div className='bg-[#0E0E0E] p-2 m-2 rounded-xl'>
        <ul className='p-2'>
          <div className="list-items">
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              className="white-search-icon" // Use the CSS class for white icon
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>  <p>Home</p>
          </div>
          <div className="list-items">
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              className="white-search-icon" // Use the CSS class for white icon
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
            </svg>
            <p>Cari</p>
          </div>
        </ul>
      </div>

      <div className='bg-[#0E0E0E] p-2 m-2 rounded-xl'>
        <ul className='p-2'>
          <div className="list-items flex justify-between">
            <div className='flex gap-[20px]'>
              <svg className="white-search-icon" role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
              <p>Koleksi Kamu</p>
            </div>
            <div>
              <svg className="white-search-icon" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
            </div>
          </div>

          <div className="list-items text-white bg-[#242424] rounded-lg">
            <section className='my-[4px] mx-[0] py-[8px] px-[10px]'>
              <div className='text-[14px]'>
                <p className='pb-2'>Buat playlist pertamamu</p>
                <p className='pb-4 font-normal'>Caranya mudah, kami akan membantumu</p>
              </div>
              <div>
                <button className='py-2 px-4 rounded-[500px] bg-white text-black'>
                  <span>Buat playlist</span>
                </button>
              </div>
            </section>
          </div>

          <div className="list-items text-white bg-[#242424] rounded-lg mt-4">
            <section className='my-[4px] mx-[0] py-[8px] px-[10px]'>
              <div className='text-[14px]'>
                <p className='pb-2'>Ayo cari beberapa podcast untuk diikuti</p>
                <p className='pb-4 font-normal'>Kami akan terus mengabarimu tentang episode baru</p>
              </div>
              <div>
                <button className='py-2 px-4 rounded-[500px] bg-white text-black'>
                  <span>Jelajahi podcast</span>
                </button>
              </div>
            </section>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
