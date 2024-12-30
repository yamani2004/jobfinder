import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { useNavigate } from 'react-router-dom'

export default function Job({job}) {
    const navigate = useNavigate();
    //const jobId = "lsedghfbbskla";
    const daysAgo = (dbTime) => {
        const createdAt = new Date(dbTime);
        const curTime = new Date();
        const timeDif = curTime - createdAt;
        return Math.floor(timeDif/(1000*24*60*60))
    }
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className='flex items-center justify-between'>
                <p className='font-bold text-gray-600'>{daysAgo(job?.createdAt) === 0 ? "Today" : `${daysAgo(job?.createdAt)} Days Ago`}</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/047/656/219/small_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-semibold'>{job?.company.name}</h1>
                    <p className='text-sm text-gray-600'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge variant='ghost' className={'text-blue-600 font-bold'}> {job?.position} position</Badge>
                <Badge variant='ghost' className={'text-red-600 font-bold'}> {job?.salary} LPA</Badge>
                <Badge variant='ghost' className={'text-purple-600 font-bold'}>{job?.jobType}</Badge>
            </div>
            <div className='flex item-center gap-4 mt-4'>
                <Button onClick={()=> navigate(`/description/${job?._id}`)}variant="outline">Details</Button>
                <Button className="bg-red-500">Save for later</Button>
            </div>
        </div>
    )
}
