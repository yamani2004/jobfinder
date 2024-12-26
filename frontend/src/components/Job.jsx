import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'

export default function Job() {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className='flex items-center justify-between'>
                <p className='font-bold text-gray-600'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/047/656/219/small_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-semibold'>Company Name</h1>
                    <p className='text-sm text-gray-600'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor assumenda voluptate qui labore placeat dignissimos?</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge variant='ghost' className={'text-blue-600 font-bold'}> Position </Badge>
                <Badge variant='ghost' className={'text-red-600 font-bold'}> 24 LPA </Badge>
                <Badge variant='ghost' className={'text-purple-600 font-bold'}> Part Time</Badge>
            </div>
            <div className='flex item-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className="bg-red-500">Save for later</Button>
            </div>
        </div>
    )
}
