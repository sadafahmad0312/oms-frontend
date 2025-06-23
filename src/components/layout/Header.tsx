'use client'

//This is header Layout
export const Header = () => {
    return (
      <nav className="fixed z-50 w-full top-0 left-0 py-0 px-0">
        <div className="bg-lime-900 rounded-none h-[100px] flex  items-center w-full px-2 flex-wrap ">
          <div className="flex space-x-2  items-right  px-4 ">
            
            <span className="text-white font-serif  text-lg lg:text-3xl italic">
              Welcome to OMS app
            </span>
          </div>
          <div className=" hidden md:flex space-x-4 lg:space-x-8 items-center text-white  flex-nowrap px-2">
            
          </div>
       
       
         
        </div>
      </nav>
    );
  };
  
;
  