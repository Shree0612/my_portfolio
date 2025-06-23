// src/components/Contact.jsx
import React from 'react';

const Contact = () => (
  <section id="contact" className="min-h-screen flex flex-col justify-center px-6 md:px-20">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact</h2>

    <p className="text-center text-lg text-brand-50 max-w-2xl mx-auto mb-10">
      Whether you're a recruiter, client, or collaborator — I’m open to impactful opportunities in marketing, UI/UX design, and web development.
      Let’s connect and create something valuable.
    </p>

    <div className="max-w-xl mx-auto space-y-4 text-center text-brand-50 text-lg">
      <p><span className="font-semibold text-brand-100">Name:</span> Shree Shriya T</p>
      <p><span className="font-semibold text-brand-100">Email:</span> srisriyat@gmail.com</p>
      <p><span className="font-semibold text-brand-100">Phone:</span> +91-7829254444</p>
    </div>
  </section>
);

export default Contact;
