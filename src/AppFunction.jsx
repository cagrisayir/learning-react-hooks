import React, { useState, useEffect } from 'react';

const initialLocationState = {
	latitude: null,
	longitude: null,
	speed: null,
};

const App = () => {
	const [count, setCount] = useState(0);
	const [toggle, setToggle] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });
	const [status, setStatus] = useState(navigator.onLine);
	const [location, setLocation] = useState(initialLocationState);
	let mounted = true;

	useEffect(() => {
		document.title = `You have clicked ${count} times`;
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);
		navigator.geolocation.getCurrentPosition(handleGeoLocation);
		const watchId = navigator.geolocation.watchPosition(handleGeoLocation);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
			navigator.geolocation.clearWatch(watchId);
			mounted = false;
		};
	}, [count]);

	const handleGeoLocation = (event) => {
		if (mounted) {
			setLocation({
				latitude: event.coords.latitude,
				longitude: event.coords.longitude,
				speed: event.coords.speed,
			});
		}
	};

	const handleOnline = () => {
		setStatus(true);
	};

	const handleOffline = () => {
		setStatus(false);
	};

	const handleMouseMove = (event) => {
		setMousePosition({
			x: event.pageX,
			y: event.pageY,
		});
	};

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decrementCount = () => {
		setCount((prevCount) => prevCount - 1);
	};

	const toggleLight = () => {
		setToggle((prevToggle) => !prevToggle);
	};

	return (
		<div className='flex flex-col justify-center items-center gap-10 py-10'>
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
			<p className='font-mono text-4xl'>Toggle Light</p>
			<div
				className={!toggle ? 'bg-gray-400 p-20' : 'bg-blue-400 p-20'}
				onClick={toggleLight}
			></div>
			<p className='font-mono text-4xl'>Mouse Position</p>
			<h1>X: {mousePosition.x}</h1>
			<h1>Y: {mousePosition.y}</h1>
			<p className='font-mono text-4xl'>Network Status</p>
			<p>
				You are <strong>{status ? 'online' : 'offline'}</strong>.
			</p>
			<p className='font-mono text-4xl'>GeoLocation</p>
			<p>Latitude: {location.latitude}</p>
			<p>Longitude: {location.longitude}</p>
			<p>Your speed is {location.speed ? location.speed : '0'}</p>
		</div>
	);
};

export default App;
