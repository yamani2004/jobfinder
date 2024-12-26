import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
            <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f53d14] font-medium'>Best Job Finder Website </span>
            <h1 className='text-5xl font-bold'>Search, Apply & <br/> Get Your <span className='text-[#f53d14]'>Dream Job</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi delectus dolorem ab a culpa magnam?</p>
            <div className='flex items-center w-[40%] shadow-lg border-gray-300 rounded-full gap-4 mx-auto pl-5'>
                <input
                type="text"
                placeholder='Search for your Dream Job'
                className='outline-none border-none w-full'
                />
                <Button className='rounded-r-full bg-[#ef441d] hover:bg-[#ca5034] shadow-lg'>
                    <Search className='h-5 w-5'/>
                </Button>
            </div>
        </div>
    </div>
  )
}
