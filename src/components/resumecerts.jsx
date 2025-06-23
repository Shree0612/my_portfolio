import React from 'react';

const ResumeCerts = () => (
  <section id="resume" className="min-h-screen px-6 md:px-20 py-20 text-white">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Resume & Certifications</h2>

    {/* Resume Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      {/* View Resume */}
      <a
        href="assets/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition font-semibold"
      >
        View Resume
      </a>

      {/* Download Resume */}
      <a
        href="public/resume.pdf"
        download
        className="bg-white text-indigo-800 hover:bg-indigo-200 px-6 py-2 rounded-full transition font-semibold"
      >
        Download Resume
      </a>
    </div>

    {/* Certifications Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {[
        { title: 'Front-End Developer', org: 'One Roadmap', date: '2025' },
        { title: 'Java Programming', org: 'Simplilearn', date: '2024' },
        { title: 'Mobile App Development', org: 'Simplilearn', date: '2024' },
        { title: 'JavaScript – Scaler Academy', org: 'Scaler', date: '2024' },
      ].map((c, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-md p-5 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{c.title}</h3>
          <p className="text-sm text-indigo-100 mt-1">
            {c.org} · {c.date}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ResumeCerts;
