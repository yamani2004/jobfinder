import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { useSelector } from 'react-redux';
import store from '../redux/store';

// const jobArr = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Jobs() {
    const {allJobs} = useSelector(store => store.job)
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-30%'><FilterCard /></div>
                    {
                        allJobs.length < 1 ? <span>Job Not Found !!</span> : (
                            <div className='flex-1 h-[85vh] overflow-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        allJobs.map((job) => (
                                            <div key={job?._id} >
                                                <Job job={job}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
