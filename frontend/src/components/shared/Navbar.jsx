import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { useSelector } from 'react-redux'
import store from '../../redux/store'
export default function Navbar() {
    const {user} = useSelector(store => store.auth);
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Finder</span></h1>
                </div>
                <div className='flex items-center gap-10'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/jobs'}>Jobs</Link></li>
                        <li><Link to={'/browse'}>Browse</Link></li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to='/login'><Button variant='outline'>LogIn</Button></Link>
                                <Link to='/signup'><Button className='bg-[#ec4444] hover:bg-[#c42b2b]'>SignUp</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className='flex gap-4'>
                                        <Avatar className='cursor-pointer'>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>Anant</h4>
                                            <p className='text-sm'>sddbfev kjfkjd</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-gray-600 my-2'>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant='link'>View Profile</Button>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button variant='link'>LogOut</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
