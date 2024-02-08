import { CheckCircle } from "lucide-react";
import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
    base: 'font-medium bg-red-500 text-white rounded-md active:opacity-80',
  variants: {
    color: {
      primary: 'bg-red-500 text-white',
      secondary: 'bg-purple-500 text-white'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button> &  {
   
}

export default function Button({...props} : ButtonProps) {
    return (
        <div className="mt-5 ml-5">
            <button className={button()} {...props}>
                {props.children}   
            </button>
        </div>
    )
}