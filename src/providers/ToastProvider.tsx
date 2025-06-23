import { ToastContainer } from "react-toastify";

export const ToastProvider = ()=>(
    <ToastContainer position="top-right" 
    autoClose ={3000}
    newestOnTop
    pauseOnHover
    closeOnClick
    draggable />
)