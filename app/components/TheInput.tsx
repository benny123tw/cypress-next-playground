import React, { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

export default function TheInput({ children, className, ...props }: Props) {
  return (
    <input
      type="text"
      className={cn(
        'px-4 py-2 w-64 text-center bg-transparent',
        'border rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </input>
  )
}
