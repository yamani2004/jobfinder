import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/const'
import { toast } from 'sonner'
export default function Login() {

    const [input, setInput] = useState({
            email:"",
            password:"",
        });

        const navigate = useNavigate();
    
        const changeEventHandler = (e) => {
            setInput({...input, [e.target.name]:e.target.value});
        }
    
        const submitHandler = async (e) => {
            e.preventDefault();
            try {
                const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                    headers:{
                        "Content-Type":"application/json"
                    },
                    withCredentials: true
                })
    
                if(res.data.success){
                    navigate("/");
                    toast.success(res.data.message);
                }
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.message);
            }
        }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-500 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Log In</h1>
                    
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input 
                        type='email' 
                        placeholder='abc@gmail.com'
                        value={input.email}
                        name="email"
                        onChange = {changeEventHandler}
                         />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input 
                        type='password' 
                        placeholder='Enter password' 
                        value={input.password}
                        name="password"
                        onChange = {changeEventHandler}
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className='flex items-center gap-3 my-5'>
                            <div className="flex items-center space-x-2">
                                <Input 
                                type='radio' 
                                name='role' 
                                value='student' 
                                className='cursor-pointer w-5' 
                                checked={input.role === 'student'}
                                onChange={changeEventHandler}
                                />
                                <Label htmlFor="r1">As a student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input 
                                type='radio' 
                                name='role' 
                                value='recruiter' 
                                className='cursor-pointer w-5' 
                                checked={input.role === 'recruiter'}
                                onChange={changeEventHandler}
                                />
                                <Label htmlFor="r2">As a recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type='submit' className='w-full my-4'>Log In</Button>
                    <span className='flex items-center justify-center gap-5 text-red-500'>Don't have an account ? <Link to='/signup' className='text-blue-600'>SignUp</Link></span>
                </form>
            </div>
        </div>
    )
}
