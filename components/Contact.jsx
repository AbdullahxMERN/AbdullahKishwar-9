"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdullahkishwar80@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/abdullahkishwar80@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Inquiry",
          message: formData.message
        })
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert("Oops! Something went wrong. Please try again or email directly.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again or email directly.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white border-t border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mt-1">
              Let's Build Together
            </h2>
          </div>

          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            Have a project in mind, SaaS platform inquiry, or AI automation
            requirement? Reach out directly below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-950">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-xs font-mono text-slate-800 font-semibold shadow-sm transition-all flex items-center gap-1.5"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block">
                  Direct Email
                </span>
                <a
                  href="mailto:abdullahkishwar80@gmail.com"
                  className="text-base sm:text-lg font-bold text-slate-950 hover:text-blue-600 transition-colors break-all block mt-0.5"
                >
                  abdullahkishwar80@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/abdullah-khan-1619383a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-slate-400 shadow-sm hover:shadow-md transition-all block group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-950">
                  <svg className="w-5 h-5 fill-slate-950" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="mt-4">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block">
                  Professional Network
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors block mt-0.5">
                  linkedin.com/in/abdullah-khan-1619383a3
                </span>
              </div>
            </a>

            {/* Work Availability Badge */}
          </div>

          {/* Right Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#f8fafc] border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out the form below and I will respond to your message
                  promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-white border border-emerald-300 text-center space-y-3 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-950">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you for getting in touch, {formData.name || "friend"}.
                    I will get back to you at{" "}
                    <strong className="text-slate-950 font-mono">
                      {formData.email}
                    </strong>{" "}
                    as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="px-5 py-2.5 rounded-full bg-slate-950 text-white text-xs font-mono font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-500 uppercase font-bold block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-950 text-sm focus:outline-none focus:border-slate-950 transition-colors shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-500 uppercase font-bold block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-950 text-sm focus:outline-none focus:border-slate-950 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-500 uppercase font-bold block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Project Inquiry / SaaS Development"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-950 text-sm focus:outline-none focus:border-slate-950 transition-colors shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-500 uppercase font-bold block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Abdullah, I'd like to discuss building a custom SaaS web application..."
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-950 text-sm focus:outline-none focus:border-slate-950 transition-colors shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-slate-950 text-white font-bold text-sm shadow-xl hover:bg-slate-800 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
