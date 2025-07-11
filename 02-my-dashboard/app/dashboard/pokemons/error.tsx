"use client"

import Image from "next/image"
import { useEffect } from "react"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div className='w-full h-screen flex flex-col items-center justify-center'>
			<Image
        width={300}
        height={300}
        src={'/error.svg'}
        alt=""
      />

			<div className='flex flex-col items-center justify-center'>
				<p className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8'>
					500
				</p>
				<p className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2'>
					Server Error
				</p>
				<p className='md:text-lg xl:text-xl text-gray-500 mt-4'>
					Whoops, something went wrong on our servers.
				</p>
				<button className='border-gray-800 text-gray-600 border-2 rounded-lg px-2 py-1 my-4 hover:bg-gray-300 hover:cursor-pointer ' onClick={() => reset()}>Try Again</button>
			</div>
		</div>
	)
}
