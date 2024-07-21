import React from 'react'

const CusomizeCards = () => {
    let custom = ["Lot Min", "Lot Max", "Fixed StopLoss", "Fixed TradeProfit", "Force Exit and Stop", "Worst Deviation"]
  return (

    // Cards for showing the customizing buttons with specification
    
    <div className='flex flex-wrap gap-10 space-between rounded'>
    {custom.map((el, index) => (
      <div key={index} className='flex flex-col  p-4 rounded-lg shadow-md w-48'>
        <div className='flex items-left justify-center w-full h-20  text-[#e0354e]'>
          {el}
        </div>
        <div className='flex justify-between mt-2 w-full bg-[#94ecd1] rounded-lg'>
          <button className='px-4 py-2 bg-[#94ecd1] text-white rounded-lg '>
            +
          </button>
          <button className='px-4 py-2 bg-[#94ecd1] text-white rounded-lg '>
            -
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default CusomizeCards