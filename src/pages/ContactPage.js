import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"your_service_id",
			"your_template_id",
			form.current,
			"your_user_id"
		).then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<input type="text" name="name" placeholder="Your Name" required />
			<input type="email" name="email" placeholder="Your Email" required />
			<textarea name="message" placeholder="Your Message" required />
			<button type="submit">Send Message</button>
		</form>
	);
};

export default ContactPage;
