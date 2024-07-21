import { useState } from 'react';

const SlidingButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    // Custom sliding button 
    
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div className={`block h-8 w-14 rounded-full ${isChecked ? 'bg-[#ff3253]' : 'bg-[#E5E7EB]'}`}></div>
        <div
          className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition transform ${isChecked ? 'translate-x-6' : ''}`}
        ></div>
      </div>
    </label>
  );
};

export default SlidingButton;
