import React from 'react'

const Spinner = () => {
  return (
    <div>
      <div className='absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 '>
        <div className='border-t-transparent border-solid animate-spin  rounded-full border-[#1d4eda85] border-8 h-64 w-64'></div>
      </div>
    </div>
  );
}

export default Spinner
