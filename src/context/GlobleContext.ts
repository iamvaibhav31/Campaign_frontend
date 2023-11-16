import { createContext, useState } from "react";
import { toast } from 'react-toastify';
interface initialState {
    status: "idle" | "loading" | "successful" | "failed";
    error: null | string;
    throughToasts: (type: "success" | "error" | "warning", error?: string, message?: string) => void
    setError: React.Dispatch<React.SetStateAction<string>>;
    setStatus: React.Dispatch<React.SetStateAction<'idle' | 'loading' | 'successful' | 'failed'>>
}

function GlobleContextStore() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'successful' | 'failed'>('idle')
    const [error, setError] = useState<null | string>("")

    console.log("GlobleContextStore", error)

    const throughToasts = (type: "success" | "error" | "warning", error?: string, message?: string) => {
        toast[type](type === "success" ? message : error)
    
    }

    return {
        status,
        error,
        setError,
        setStatus,
        throughToasts
    }
}



const AuthContext = createContext<initialState>({
    status: "idle",
    error: null,
    setError: () => { },
    setStatus: () => { },
    throughToasts: (type: "success" | "error" | "warning", error?: string, message?: string) => { }
});


export default AuthContext;

export {
    GlobleContextStore
}
