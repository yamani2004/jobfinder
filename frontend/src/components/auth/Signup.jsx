import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import axios from 'axios';
import { USER_API_END_POINT } from '../../utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../redux/store'
import { setLoading } from '../../redux/authSlice'
import { Loader2 } from 'lucide-react'
export default function Signup() {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: "",
    });

    const { loading, user} = useSelector(store => store.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        //console.log(input);
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        //console.log(formData);
        dispatch(setLoading(true)); // loading effect
        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })
            //console.log(res);
            if (res.data.success) {
                navigate("/login");
                //console.log(res.data.message);
                toast.success(res.data.message);
            }
        } catch (error) {
            //console.log(error.response.data.message);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
    
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-500 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type='text'
                            placeholder='Enter your name'
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type='email'
                            placeholder='abc@gmail.com'
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type='text'
                            placeholder='Enter phone number'
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            placeholder='Enter password'
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
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
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept='image/*'
                                type='file'
                                className='cursor-pointer'
                                onChange={changeFileHandler}
                            />
                        </div>
                    </div>
                    {
                        loading ? <Button className='w-full my-4'> <Loader2 className='mr-2 w-4 animate-spin'>Please Wait</Loader2></Button> : <Button type='submit' className='w-full my-4'>Sign Up</Button>
                    }
                    <span className='flex items-center justify-center gap-5 text-red-500'>Already Have an account ? <Link to='/login' className='text-blue-600'>LogIn</Link></span>
                </form>
            </div>
        </div>
    )
}
