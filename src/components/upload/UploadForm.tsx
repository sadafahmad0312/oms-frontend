'use client'

import {  useState } from "react"
import { toast } from "react-toastify";
import {useUploadContext} from '@/context/UploadContext'
import { useRouter } from "next/navigation";

const ALLOWED_TYPES= ["image/jpeg", "image/jpg", "image/png", 'application/pdf']
const MAX_FILE_SIZE = 5*1024*1024

export default function UploadForm(){


    //Declartion of variable using usestate react hook
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const router = useRouter()

    const { loading, error, submitUserDetails} = useUploadContext() //Destructures the context value from UploadContext

    //validate file logic

    const validateFiles = (file: File)=>{
      if(file.size> MAX_FILE_SIZE)
      {
        toast.error(`${file.name } has exceeded time limit`);
        return false;
      }else if(!ALLOWED_TYPES.includes(file.type))

        {
          toast.error(`${file.name} is not allowed`)
          return false
        }
        return true;
    }
 

    //handler for file change
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      e.preventDefault()
      const files = e.target.files;
      if(!files ||files.length === 0)
      {
        setFile(null);
        toast.warn('No file selected')
        return;
      }
      const selected = files[0];
      console.log(selected);
      console.log('This is to check if files are valid or not', validateFiles(selected));
      if(!validateFiles(selected))
      {
        setFile(null)
        return ;
      }else
      {
        setFile(selected)
      }

    }

    //Async handler for form submission
    const handleSubmit = async(e: React.FormEvent)=>{
        e.preventDefault()
        if(!file || !firstName || !lastName ||!dob)
        {
      toast.error("Please fill all fields and select a file");
      return
        }

        try{
            const formData = new FormData()
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('dob', dob);
            formData.append('file', file);
           await submitUserDetails(formData);
           router.push('/display');

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }catch(error: any){
            toast.error('Error uploading users', error);
        }




    }

    return(
        <div>
           

            <form onSubmit={handleSubmit}  className="mx-auto max-w-md  p-6 mt-4 bg-white rounded-2xl shadow-md  ">
            <h1 className="text-2xl font-[itim] font-boldtext-center text-gray-800 text-center  ">Upload Form</h1>
                <div className="max-w-2xl flex flex-col mx-auto justify-between gap-5  ">

                <label htmlFor='name' className='block  text-gray-700 font-medium mx-1'>
                  First Name
                </label>
                <input type= 'text' placeholder="FirstName" value={firstName || ''} onChange={e =>setFirstName(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" ></input>
                <label htmlFor='name' className='block  text-gray-700 font-medium mx-1'>
                  Last Name
                </label>
                <input type= 'text' placeholder="LastName" value={lastName || ''} onChange={e =>setLastName(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" ></input>
                <label htmlFor='name' className='block  text-gray-700 font-medium mx-1'>
                  Date of Birth
                </label>
                <input type= 'date'  value={dob || ''} onChange={e =>setDob(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" ></input>
                <label htmlFor='name' className='block  text-gray-700 font-medium mx-1'>
                  Attach File
                </label>
                <input type= 'file' accept= 'image/*, application/pdf' placeholder="Media"  onChange={handleFileChange} required className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 file:mr-4 file:bg-lime-900 file:rounded-full file:py-2 file:px-4 file:border-0 file:text-white hover:file:bg-lime-950 file:text-sm file:font-semibold " ></input> 

                <button type="submit" disabled={loading}  className="bg-lime-900 w-full px-4 py-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200">
                {loading? 'Uplaoding..' : 'Upload'}
                </button>
                {error && <p className="text-red-500">{error}</p>}
                </div>
               
                </form>
        </div>
    )

}