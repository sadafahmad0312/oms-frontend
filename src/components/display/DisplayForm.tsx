'use client'

import { useUploadContext } from "@/context/UploadContext";
import { useRouter } from "next/navigation";

export default function DisplayForm()
{

    const{result } = useUploadContext()

    const router = useRouter()

    const uploadNewUser =()=>{
      router.push('./upload');
    }

    if(!result){return <div className="min-h-screen flex flex-col space-y-5 p-5 max-w-2xl mx-auto text-center text-gray-500 ">
        <h1 className=" text-2xl font-[itim] items-center"> No Data Found. Upload User Detail First</h1>
        <button onClick={uploadNewUser} className="bg-lime-900 block rounded-md p-3 text-white max-w-2xl">Upload New User</button>
    </div>}

    return(
        <div className="min-h-screen max-w-5xl mx-auto p-6 mt-10 bg-white flex flex-col space-x-6 space-y-5 rounded-xl shadow-md border border-gray-200">
            <h1 className="text-3xl font-semibold tex-gray-800 text-center">Uploaded User Details</h1>
            <div className="space-y-8 space-x-8 text-gray-500  gap-5">
                <div className=" flex  items-center space-x-2">
                    <label className="font-bold">Full Name</label>
                    <span className="font-medium">{result.fullName}</span>

                </div>

            </div>
            <div className="space-y-4 text-gray-500">
                <div className=" flex  items-center space-x-5 gap-6">
                    <label className="font-bold">Age</label>
                    <span className="font-medium">{result.age}</span>

                </div>

            </div>

            <div className="space-y-4 text-gray-500">
                <div className="    items-center  gap-6 space-y-2">
                    <label className="font-bold">Extracted Text</label>
                    <span className=" flex font-medium whitespace-pre-wrap bg-gray-100 p-4 rounded-lg border border-gray-300 text-sm overflow-auto max-h-96">{result.text}</span>

                </div>

            </div>

            <button onClick={uploadNewUser} className="bg-lime-900 block rounded-md p-3 text-white">Upload New User</button>
         
        </div>
    )
}