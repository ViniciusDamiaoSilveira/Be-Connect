import { InputHTMLAttributes} from "react";
import { twMerge } from "tailwind-merge";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
}

export default function Input({className, ...props} : InputProps) {

    return (
        <input
            {...props} 
            className={twMerge('w-60 h-10 rounded-md bg-gray placeholder:text-light-gray pl-4 outline-none text-light-gray', className)}
            />
    )
}