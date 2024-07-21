import React from 'react'
import SlidingButton from './SlidingButton'
import CusomizeCards from './CusomizeCards'

const MiddleComponent = () => {

  return (

    <>
        {/* Middle component with header, customise button and cards containing buttons for differenct customizations */}

    <div className='flex justify-between items-center w-full mt-20 ml-5'>
    <h3 className='text-[#e0354e]'>Minimum Trade Size</h3>
    <div className='flex items-center space-x-4 mr-5'>
      <span className='text-white'>Customize</span>
      <SlidingButton />
    </div>
  </div>
  <p className='text-white ml-5 mt-10'>
  Set the minimum trade size that will be executed in your brokerage account. If the parameter is set to "0.50", our trading server will place trades with minimum size of 0.50 lot or 50000 units of base currency. Default recommended value is "0.01".
  </p>
  <CusomizeCards />
    </>
  )
}

export default MiddleComponent