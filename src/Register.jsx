import React, { useState } from 'react';

const initialFormState = {
	username: '',
	email: '',
	password: '',
};

const Register = () => {
	const [form, setForm] = useState(initialFormState);

	const [user, setUser] = useState(null);

	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setUser(form);
		setForm(initialFormState); // Do it for clean form after submit!!!
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
					name='username'
					className='border'
					onChange={handleChange}
					value={form.username}
				/>
				<input
					type='email'
					placeholder='E-mail'
					name='email'
					className='border'
					onChange={handleChange}
					value={form.email}
				/>
				<input
					type='password'
					placeholder='Password'
					className='border'
					name='password'
					onChange={handleChange}
					value={form.password}
				/>
				<button type='submit'>Submit</button>
			</form>

			{user && JSON.stringify(user, null, 2)}
		</div>
	);
};

export default Register;
