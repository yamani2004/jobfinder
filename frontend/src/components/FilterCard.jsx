import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
    {
        filterType: "Location",
        arr: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        arr: ["FrontEnd Devloper", "Backend Devloper", "Data Science", "Graphic Designer"]
    },
    {
        filterType: "Salary",
        arr: ["0-40k", " 50k-1Lakh", "1Lakh-5Lakh", "6Lakh-12Lakh", "12Lakh+"]
    },
]

export default function FilterCard() {
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup>
                {
                    filterData.map((data, index) => (
                        <div>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.arr.map((el, ind) => {
                                    return (
                                        <div className='flex item-center space-x-2 my-2'>
                                            <RadioGroupItem value={el} />
                                            <Label>{el}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}
