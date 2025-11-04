import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);

		const response = await fetch(form.action, {
			method: form.method,
			body: formData,
			headers: { Accept: 'application/json' },
		});		

		if (response.ok) {
			alert("Your message has been sent successfully!")
			form.reset();
		}
	};

	return (
		<div>
			<h2 className='text-primary font-semibold text-xl mb-8'>
				Send Us a Message
			</h2>

			<form
				action='https://formspree.io/f/mzzklndz'
				method='POST'
				onSubmit={handleSubmit}
				className='bg-white rounded-lg shadow-lg p-8'>
				<div className='space-y-6'>
					{/* Name Field */}
					<div>
						<Label
							htmlFor='name'
							className='text-gray-700 mb-2 block'>
							Full Name *
						</Label>
						<Input
							id='name'
							name='name'
							type='text'
							required
							className='w-full border-gray-300 focus:border-primary  focus:ring-primary '
							placeholder='Enter your full name'
						/>
					</div>

					{/* Email Field */}
					<div>
						<Label
							htmlFor='email'
							className='text-gray-700 mb-2 block'>
							Email Address *
						</Label>
						<Input
							id='email'
							name='email'
							type='email'
							required
							className='w-full border-gray-300 focus:border-primary  focus:ring-primary '
							placeholder='your.email@example.com'
						/>
					</div>

					{/* Phone Field */}
					<div>
						<Label
							htmlFor='phone'
							className='text-gray-700 mb-2 block'>
							Phone Number
						</Label>
						<Input
							id='phone'
							name='phone'
							type='tel'
							className='w-full border-gray-300 focus:border-primary  focus:ring-primary '
							placeholder='(123) 456-7890'
						/>
					</div>

					{/* Subject Field */}
					<div>
						<Label
							htmlFor='subject'
							className='text-gray-700 mb-2 block'>
							Subject *
						</Label>
						<Input
							id='subject'
							name='subject'
							type='text'
							required
							className='w-full border-gray-300 focus:border-primary  focus:ring-primary '
							placeholder='How can we help you?'
						/>
					</div>

					{/* Message Field */}
					<div>
						<Label
							htmlFor='message'
							className='text-gray-700 mb-2 block'>
							Message *
						</Label>
						<Textarea
							id='message'
							name='message'
							required
							rows={6}
							className='w-full border-gray-300 focus:border-primary  focus:ring-primary  resize-none'
							placeholder='Share your thoughts, questions, or prayer requests...'
						/>
					</div>

					{/* Submit Button */}
					<Button type='submit' className='w-full py-6'>
						<Send className='w-5 h-5' />
						Send Message
					</Button>
				</div>

				<p className='text-gray-500 mt-4 text-center'>
					* Required fields
				</p>
			</form>
		</div>
	);
};

export default ContactForm;
