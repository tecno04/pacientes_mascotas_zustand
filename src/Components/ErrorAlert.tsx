import React from "react"

type ErrorProps = {
    children: React.ReactNode
}

export const ErrorAlert = ({children} : ErrorProps) => {
  return (
    <p className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase text-sm">{children}</p>
  )
}
