import React, { useState } from 'react';
import axios from 'axios';
import contactImage from '../assets/contact.jpg';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error(error);
      alert('❌ Failed to send message.');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-20 px-6 flex items-center justify-center scroll-smooth"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-16">

          <div className="flex-1 max-w-xl">
            <h2 className="text-5xl font-extrabold text-center md:text-left">HELLO THERE!</h2>
            <h3 className="text-xl font-semibold uppercase tracking-wide mt-2 text-center md:text-left">
              Let’s Talk
            </h3>

            <p className="text-white/70 text-sm mt-4 leading-relaxed text-center md:text-left">
              Have an idea or project in mind ? Drop your credentials and i’ll get back to you !
            </p>

            <div className="relative z-20">
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-transparent border border-white/20 px-4 py-2 text-white placeholder-white/50 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-transparent border border-white/20 px-4 py-2 text-white placeholder-white/50 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="bg-transparent border border-white/20 px-4 py-2 text-white placeholder-white/50 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <button
                  type="submit"
                  className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition w-fit mx-auto md:mx-0 z-30 relative"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>


          <div className="w-full md:w-[400px] flex-shrink-0">
            <img
              src={contactImage}
              alt="Contact"

            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
