import axios from 'axios'
import {EndpointConfig} from './apiUrl';


//api calling to backend
export async function uploadUserDetails(formData: FormData)

{

  try {
     const {data} = await axios.post(`${EndpointConfig.baseUrl}${EndpointConfig.upload}`,formData,
      {
          headers:{
              'Content-Type': 'multipart/form-data'
          },
      }
  
     );
console.log('this is data', data);
     return data as {
        fullName: string;
        age: number;
        text: string;
     }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || error.message || 'Server error'
      )


    
  }
   
}