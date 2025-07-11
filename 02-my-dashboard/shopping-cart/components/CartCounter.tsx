'use client'
import { useState } from "react"

interface Props {
  value?: number
}

const CartCounter = ({value= 10}: Props) => {
  const [counter, setCounter] = useState(value)

	const handleIncrease = () => {
		setCounter((c) => c + 1)
	}

	const handleDecrease = () => {
		setCounter((c) => (c > 0 ? c - 1 : c))
	}


	return (
		<>
			<span className='text-9xl'>{counter}</span>
			<div className='flex gap-4'>
				<button
					onClick={handleIncrease}
					className='rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all py-2 px-4'
				>
					+1
				</button>
				<button
					onClick={handleDecrease}
					className='rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all py-2 px-4'
				>
					-1
				</button>
			</div>
		</>
	)
}

export default CartCounter
