import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us'
    className=' flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    ><div className='flex flex-1 flex-col'>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">

            We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-[28px]">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni, expedita qui id repellat cupiditate laudantium, delectus libero distinctio alias voluptates sequi autem perferendis aliquam impedit eius ad, assumenda et?
       </p>
        <Button label="Shop now" iconURL={arrowRight} /></div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe8" width={570}
        height={522} className='object-contain' />
      </div>
      </section>
  )
}

export default SuperQuality