import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Your message has been sent!');
      } else {
        alert('There was a problem sending your message.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.13005435264!2d27.947513049999994!3d-26.2041026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9515ea348ac25f%3A0x25c4214b3a2e55d8!2sJohannesburg!5e0!3m2!1sen!2sza!4v1689340238292!5m2!1sen!2sza"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="mb-6 rounded-lg shadow-lg"
      ></iframe>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full name"
            required
            className="p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            className="p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            rows="4"
            className="p-3 rounded bg-gray-800 text-white border border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 flex items-center justify-center"
        >
          <span className="mr-2">Send</span> ✉️
        </button>
      </form>
    </section>
  );
};

export default Contact;
