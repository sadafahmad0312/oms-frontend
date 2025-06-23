'use client'
import { createContext, useContext, useState } from "react"
import { uploadUserDetails } from "@/lib/api"


//Defination for the expected response from the backend
type UploadResult ={
    fullName: string;
    age: number;
    text: string;
}

//this describes what context will provide
type UploadContextType ={
    result: UploadResult | null  //data retunred from backend after submission
    loading:boolean      //indicates the request is in progress
    error: string| null // to hold error messaages
    submitUserDetails: (formData: FormData)=> Promise<UploadResult> // the function to trigger submission
}

 const UploadContext = createContext<UploadContextType | undefined>(undefined);
                                

//this is the context provider which wraps the component which needs access to the state
export const UploadProvider = ({children}: {children:React.ReactNode})=>{

    const [result, setResult] = useState<UploadResult | null>(null); 
    const [loading,setLoading] = useState(false);  //false until an API call is triggered
    const[error, setError] = useState<string |null>(null)

    //async function that accepts form data and send to backend api
    const  submitUserDetails = async(formData: FormData): Promise<UploadResult>=> {
        setLoading(true); //set loading to true to show spinners
        setError(null); //clear any old errors
        try{
            console.log('entering into sumit frunc of context')
            const response: UploadResult = await uploadUserDetails(formData); //sends the data using an imported API function
            console.log('response from uploaduserdetails', response)
            setResult(response) //stores the result
            return response;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }catch(error : any){
            setError(error.message) //catches the error
            throw error

        }finally{
            setLoading(false)  //turn off loading in the end
        }

    }

    return(   
        <UploadContext.Provider value={{ result, loading, error, submitUserDetails }} >
        {children}
        </UploadContext.Provider>
    );
   
}

export const useUploadContext= ()=>{
    const context = useContext(UploadContext);
    if(!context) throw new Error('useUploadContext must be used within upload provider');
    return context;
}