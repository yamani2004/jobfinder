import React from 'react'
import {Badge} from './ui/badge'


export default function LatestJobCards() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
            <h1 className='font-medium text-lg'>Company name</h1>
            <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Job Title</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge variant='ghost' className={'text-blue-600 font-bold'}> Position </Badge>
            <Badge variant='ghost' className={'text-red-600 font-bold'}> 24 LPA </Badge>
            <Badge variant='ghost' className={'text-purple-600 font-bold'}> Part Time</Badge>
        </div>

    </div>
  )
}
