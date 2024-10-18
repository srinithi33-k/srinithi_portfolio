import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";
const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});


	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// cleaning the form data
		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			toast.error("Please fill all the fields.", {
				position: 'bottom-right',
			});
			return;
		}
		console.log(username,user_email,user_message)

		emailjs
			.send(
				EMAIL_JS_SERVICE_ID,
				EMAIL_JS_TEMPLATE_ID,
				{
					from_name: username,
					to_name: "Srinithi K",
					reply_to: user_email,
					to_email: "srinithi33.k@gmail.com",
					message: user_message,
				},
				EMAIL_JS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success("Message sent successfully!", {
						position: 'bottom-right',
					});
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					toast.error("Uh, oh! Something went wrong. Please try again later.", {
						position: 'bottom-right',
					});
				}
			);
	};

	return (

        <div className='relative z-0 bg-black w-screen h-screen mt-12'>   
			<div className='text-white contact overflow-x-hidden pt-12 mt-8 ' id='contact'>
				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl' >
					<p className='font-light'>REACH OUT TO ME</p>
					<h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='mt-12 flex flex-col gap-8'
					>
						<label className='flex flex-col'>
							<span className=' font-medium mb-4'>Srinithi K</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder="Srinithi K"
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className=' font-medium mb-4'>srinithi33.k@gmail.com</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder="Ex:srinithi33.k@gmail.com"
								className='py-4 px-6 rounded-lg  font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>To contribute my talents and innovative skills for development of the company and to shape
								myself as a sagacious professional while serving the company.</span>
							<textarea
								rows={7}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder=''
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>

						<button
							type='submit'
							className='pt-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900'
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
				<ToastContainer />
			</div>
		<Footer/>
        </div>
	);
};

export default Contact;