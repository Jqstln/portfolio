'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { MailCheck } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactPage() {
  const [notificationMessage, setNotificationMessage] = useState(null);
  const recaptchaRef = useRef(null);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '94952b2d-dc7c-476b-a1c2-84c934b7b9c7');

    const formObject = Object.fromEntries(formData);
    const formJson = JSON.stringify(formObject);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: formJson,
      });

      const result = await response.json();

      if (result.success) {
        event.target.reset();
        setNotificationMessage('Your message has been sent. Please allow up to one business week for a response.');
        setTimeout(() => setNotificationMessage(null), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">Contact Me</h1>
      <p className="text-md mx-auto max-w-lg">
        Would you like to contact me or ask me a question? You can use the form below, and I will
        try to respond within one business week.
      </p>
      {notificationMessage && (
        <div className="mx-auto mt-3 mb-3 flex w-96 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 p-3 text-gray-400 transition-opacity duration-500">
          <MailCheck className="mr-6 h-12 w-12" />
          <span>{notificationMessage}</span>
        </div>
      )}
      <div className="mx-auto mt-8 mb-8 w-96 rounded-lg border border-gray-700 p-6">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-left font-bold text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-left font-bold text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-left font-bold text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="7"
              placeholder="Enter Message"
              className="w-full resize-none rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-blue-500"
            />
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey="6LclXMIpAAAAAB8_-yYDVnRa9assX0oRjdBkapO9"
          />
          <button
            type="submit"
            className="w-full rounded-sm bg-sky-400 px-4 py-2 font-bold text-white transition duration-300 hover:bg-sky-500"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-6">
        <Link href="/">
          <button className="cursor-pointer rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

