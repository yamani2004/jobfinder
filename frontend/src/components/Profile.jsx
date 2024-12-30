import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'


///const skills = ["Html", "Css", "JavaScript", "ReactJS"]
const haveResume = true;

export default function Profile() {
    const [open, setOpen] = useState(false);
    const {user} = useSelector(store=>store.auth);
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
                <div className="flex justify-between">
                    <div className="flex  items-center gap-4">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"} />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className='text-right' variant="outline"><Pen /></Button>
                </div>
                <div>
                    <div className="flex items-center gap-3 mt-5">
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-2 my-2'>
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((el, ind) => <Badge key={ind}> { el } </Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-ceter gap-2'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        haveResume ? <a target="blank" href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}
