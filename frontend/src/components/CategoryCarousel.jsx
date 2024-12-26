import React from 'react'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from './ui/carousel'
import { Button } from './ui/button'
const category = [
    "FullStack Devloper",
    "Frontend Devloper",
    "Backend Devloper",
    "Data Science",
    "Graphic Designer",
    "AI/ML"
]

export default function CategoryCarousel() {
  return (
    <div>
        <Carousel className='w-full max-w-xl mx-auto my-29'>
            <CarouselContent>
                {
                    category.map((cat, index) => (
                        <CarouselItem className='md:basis-1/2 lg: basis-1/3'>
                           <Button variant='outline' className='rounded-full'>{cat}</Button> 
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    </div>
  )
}
