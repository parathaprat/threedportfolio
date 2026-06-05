import React, { Suspense, useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { resumeUrl } from "../constants";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ResumeIcon,
} from "../components/SocialIcons";

const quickLinks = [
  { label: "Email", href: "mailto:prathamesh6550@gmail.com", Icon: MailIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prathamesh-dongritot-8b7575211/",
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/parathaprat",
    Icon: GitHubIcon,
    external: true,
  },
  { label: "Resume", href: resumeUrl, Icon: ResumeIcon, external: true },
];

const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const timeoutRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fail fast with a useful message if EmailJS isn't configured.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS env vars are missing. Add VITE_APP_EMAILJS_SERVICE_ID, " +
          "VITE_APP_EMAILJS_TEMPLATE_ID and VITE_APP_EMAILJS_PUBLIC_KEY to a .env file."
      );
      showAlert({
        text: "The form isn't configured yet. Email me at prathamesh6550@gmail.com.",
        type: "danger",
      });
      return;
    }

    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Prathamesh",
          from_email: form.email,
          reply_to: form.email,
          to_email: "prathamesh6550@gmail.com",
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      )
      .then(() => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        setForm({ name: "", email: "", message: "" });
        showAlert({
          text: "Message received. I'll be in touch shortly.",
          type: "success",
        });
        timeoutRef.current = setTimeout(hideAlert, 5000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        // Surface the real reason instead of a generic message.
        console.error("EmailJS send failed:", error);
        const detail =
          error?.text ||
          error?.message ||
          (typeof error === "string" ? error : "Please try again");
        showAlert({
          text: `Something went wrong. Reach me directly at prathamesh6550@gmail.com.`,
          type: "danger",
        });
        timeoutRef.current = setTimeout(hideAlert, 6000);
      });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="max-container">
      {alert.show && <Alert {...alert} />}

      {/* ---------------------------- Hero ---------------------------- */}
      <div className="fade-up max-w-2xl">
        <span className="chip mb-5">Get in touch</span>
        <h1 className="head-text mt-2">
          Let's{" "}
          <span className="blue-gradient_text font-bold drop-shadow">
            Connect
          </span>
        </h1>
        <p className="mt-5 text-slate-300 font-satoshi leading-relaxed">
          Have a role, project, or idea in mind? Drop me a message. I'm always
          open to interesting conversations and collaborations, and I usually
          reply within a day.
        </p>
      </div>

      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
        {/* form */}
        <div>
          <form
            ref={formRef}
            className="w-full glass rounded-2xl p-6 sm:p-7 flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <label className="text-slate-200 font-semibold font-satoshi text-sm">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-slate-200 font-semibold font-satoshi text-sm">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="john@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-slate-200 font-semibold font-satoshi text-sm">
              Your Message
              <textarea
                name="message"
                rows={4}
                className="textarea"
                placeholder="Let me know how I can help you!"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              type="submit"
              className="btn w-full"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* quick links */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-satoshi mr-1">
              Or reach me on
            </span>
            {quickLinks.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/[0.06] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* floating fox (no frame) */}
        <div className="h-[360px] lg:h-[560px] -mt-4">
          <Canvas
            className="!bg-transparent"
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
