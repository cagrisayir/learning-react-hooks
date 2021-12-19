import React, { useState } from 'react';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const userData = {
			username,
			password,
		};

		setUser(userData);
		setUsername('');
		setPassword('');
	};

	return (
		<div className='flex flex-col justify-center items-center'>
			<h1>Login</h1>
			<form
				action=''
				onSubmit={handleSubmit}
				className='flex flex-col items-center justify-center'
			>
				<input
					type='text'
					placeholder='username'
					onChange={(event) => setUsername(event.target.value)}
					value={username}
				/>
				<input
					type='password'
					placeholder='Password'
					onChange={(event) => setPassword(event.target.value)}
					value={password}
				/>
				<button type='submit'>Submit</button>
			</form>

			{user && JSON.stringify(user, null, 2)}
		</div>
	);
};

export default Login;
