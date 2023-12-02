'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ContactForm.module.css'
import { TextareaAutosize } from '@mui/material';
import FancyButton from './fancyButton';
import ContactEmoji from './ContactEmoji';


const Modal = ({ message, onClose } : {message:any, onClose:any}) => {
	return (
	  <div className={styles.modalBackground}>
		<div className={styles.modalContainer}>
		  <div className={styles.modalContent}>
			<p>{message}</p>
		  </div>
		  <button className={styles.closeButton} onClick={onClose}>Close</button>
		</div>
	  </div>
	);
  };

export default function Contactform() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [emailBody, setEmailBody] = useState('A message from your portfolio!');
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
	const [modalMessage, setModalMessage] = useState('');
	const [autoCorrectedEmail, setAutoCorrectedEmail] = useState('');
    const abstractApikey = process.env.NEXT_PUBLIC_ABSTRACTAPI;
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };
    const handleNameChange = (e: any) => {
        setName(e.target.value);
    };
    const handleMessageChange = (e: any) => {
        setMessage(e.target.value);
    };
    const sendmailToMe = async () => {
        await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string,
            },
            body: JSON.stringify({
              personalizations: [{
                to: [{ email: "jordan.julio.jap@gmail.com", name: "Jordan J" }],
                subject: "Someone contacted you from Portfolio!"
              }],
              content: [{ type: "text/plain", value: `Name: ${name}\nEmail: ${email}\nDescription: ${message}` }],
              from: { email: "jordan.julio.jap@hotmail.com", name: "Portfolio Contact" },
              reply_to: { email: "jordan.julio.jap@hotmail.com", name: "Portfolio Contact" }
            })
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch((error) => {
			console.error('Error:', error);
			setModalMessage('Email Sending is being fixed. Please contact jordan141202@gmail.com');
		});
    }

    const sendmailToOthers = async () => {
        await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string,
            },
            body: JSON.stringify({
              personalizations: [{
                to: [{ email: email, name: name }],
                subject: "Your contact have been received by Jordan :)"
              }],
              content: [
                {
                  type: "text/html",
                  value: `
                    <p>Hey there,</p>
                    <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
                    <p>In the meantime, feel free to check out my work:</p>
                    <ul>
                      <li>
                        <a href="https://github.com/jordan-julio">
                          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="20" height="20">
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/jordan-julio-jap-370331189">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="20" height="20">
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                    <p>Looking forward to connecting with you!</p>
                    <p>Best regards,<br>Jordan J</p>
                  `
                }
              ],
              from: { email: "jordan.julio.jap@hotmail.com", name: "Jordan J" },
            })
          })
          .then(response => response.json())
          .then(data => {
			console.log(data)
			// clear form
			const form = document.querySelector('#form')
		})
          .catch((error) => {
			console.error('Error:', error)
            setModalMessage('Error sending email. Please contact jordan141202@gmail.com');
            setShowModal(true);
		});
    }

	const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    const checkEmail = async () => {
        if (email !== '' && email.includes('@')) {
            await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${abstractApikey}&email=${email}`)
            .then(response => {
                if (response.data.deliverability !== 'DELIVERABLE' || response.data.is_smtp_valid.value !== true) {
                    setErrorMessage('Check your email again!');
                } else {
                    setErrorMessage('');
                }
                if (response.data.autocorrect !== '') {
                    setAutoCorrectedEmail(response.data.autocorrect);
                } else {
                    setAutoCorrectedEmail('');
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (email !== '' && name !== '' && message !== '') {
			try {
				await sendmailToMe();
				await sendmailToOthers();
				setEmail('');
				setName('');
				setMessage('');
				setModalMessage('Email Sent!');
				setShowModal(true);
				// Clear form fields
			} catch (error) {
				// Handle error, set modal message accordingly
				setModalMessage('Error sending email. Please try again.');
				setShowModal(true);
			}
		}
	}
	

    return (
        <div className={styles.contactdiv}>
	    	<ContactEmoji />
			<form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
				<h1 className="title text-center mb-4">Contact Me</h1>
				<div className="form-group position-relative">
					<label htmlFor="formname" className="d-block">
						<i className="icon" data-feather="user"></i>
					</label>
					<div className={styles.inputbox}>
						<input value={name} className={styles.inputText} onChange={handleNameChange} required={true} type="text" id='formname' />
						<span>Name</span>
						<i></i>
					</div>
				</div>
				<div className="form-group position-relative">
					<label htmlFor="email" className="d-block">
						<i className="icon" data-feather="mail"></i>
					</label>
					<div className={styles.inputbox}>
						<input
						required={true}
						type='text'
						value={email}
						id='email'
						onChange={handleEmailChange}
						onBlur={checkEmail}
						/>
						<span>Email</span>
						<i></i>
					</div>
					{/**error message**/}
					<div className={styles.error} style={{ display: errorMessage === '' ? 'none' : 'block' }}>
						{errorMessage}
					</div>
					{/** Auto Suggestion */}
					<div className={styles.suggestions} style={{ display: autoCorrectedEmail === '' ? 'none' : 'block' }}>
						Suggested Email: {autoCorrectedEmail}
					</div>
				</div>
				<div className="form-group message">
					<div className={styles.inputbox}>
					<label htmlFor="message" className="d-block">
						Message
					</label>
						<TextareaAutosize
							value={message}
							aria-label="minimum height"
							minRows={3}
							maxRows={3}
							placeholder="Message"
							onChange={handleMessageChange}
							id='message'
							required={true}
							className={styles.textArea}    
						/>
					</div>
				</div>
				<div className="text-center">
					<FancyButton ButtonText='Send Contact' type='submit' style={styles.customButton} disabled={errorMessage !== '' || autoCorrectedEmail !== ''} />
				</div>
				{/** Error message **/}
				{showModal && <Modal message={modalMessage} onClose={closeModal} />}
			</form>
		</div>
    )
}