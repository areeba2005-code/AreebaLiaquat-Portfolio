import React, { useRef, useState } from 'react';
import { Mail, Phone, Link, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="text-cyan-500">{icon}</div>
    <div>
      <p className="text-xs text-slate-400 font-bold uppercase">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    emailjs
      .sendForm(
        'service_u1f8u5b',      
        'template_bmzi3pb',     
        form.current,
        { publicKey: '605T9vDlxQl68trhj' }
      )
      .then(
        (result) => {
          console.log('✅ Success:', result.text);
          setStatus({ 
            type: 'success', 
            message: 'Message sent successfully! ✅ I will reply soon.' 
          });
          form.current.reset();
        },
        (error) => {
          console.error('❌ Failed:', error);
          setStatus({ 
            type: 'error', 
            message: 'Failed to send message. Please try again or contact me directly.' 
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column */}
        <div>
          <h2 className="text-5xl font-bold mb-6">
            Let's Connect.
            <div className="h-1 w-20 bg-cyan-500 mt-2"></div>
          </h2>
          <p className="text-slate-400 mb-10 max-w-md">
            Available for Hire
          </p>

          <div className="space-y-6">
            <ContactItem icon={<Mail size={20} />} label="Email" value="areebaliaquat164@gmail.com" />
            <ContactItem icon={<Phone size={20} />} label="Phone" value="+92 321 9704525" />
            <ContactItem icon={<Link size={20} />} label="LinkedIn" value="www.linkedin.com/in/areeba-liaquat-421614371" />
            <ContactItem icon={<MapPin size={20} />} label="Location" value="Karachi, Pakistan" />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="John Doe" 
                required
                className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="your@email.com" 
                required
                className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                name="message"
                rows="4" 
                placeholder="Your Message ...." 
                required
                className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-cyan-500 transition"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
              <p className={`text-center text-sm mt-3 font-medium ${
                status.type === 'success' ? 'text-green-400' : 'text-red-400'
              }`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;