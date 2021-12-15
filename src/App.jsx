import React, { useState } from 'react';

const App = () => {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};

	const decrementCount = () => {
		setCount(count - 1);
	};

	return (
		<div className='App w-screen h-screen flex flex-col justify-center items-center gap-10'>
			<p className='font-mono text-4xl'>{count}</p>
			<div className='flex gap-2'>
				<button
					onClick={incrementCount}
					className='bg-green-600 py-4 px-6 rounded-full text-white'
				>
					increment
				</button>

				<button
					className='bg-red-400 text-white py-4 px-6 rounded-full'
					onClick={decrementCount}
				>
					decrement
				</button>
			</div>
		</div>
	);
};

export default App;
