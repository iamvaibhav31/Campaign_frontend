import { createContext, Dispatch, SetStateAction, useState } from "react";
import { toast } from 'react-toastify';

export interface GlobleContextStatetype {
    status: "idle" | "loading" | "successful" | "failed";
    error: null | string;
    throughToasts: (type: "success" | "error" | "warning", message: string) => void
    setError: Dispatch<SetStateAction<string | null>>;
    setStatus: Dispatch<SetStateAction<'idle' | 'loading' | 'successful' | 'failed'>>
}

function GlobleContextStore() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'successful' | 'failed'>('idle')
    const [error, setError] = useState<null | string>("")

    console.log("GlobleContextStore", error)

    const throughToasts = (type: "success" | "error" | "warning", message: string) => {
        toast[type](message)
    }

    return {
        status,
        error,
        setError,
        setStatus,
        throughToasts
    }
}

const AuthContext = createContext<GlobleContextStatetype | undefined>(undefined);

export default AuthContext;

export {
    GlobleContextStore
}
