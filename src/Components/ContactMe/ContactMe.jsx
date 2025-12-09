import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import floralanimation from "../../assets/weddingfloral.json";
import onboardinganimation from "../../assets/Onboarding Kit.json";
/**
 * Glassmorphism contact form with:
 * - Framer Motion animations
 * - react-hot-toast notifications
 * - Loading spinner
 * - Simple custom validation
 * - Accessible and reduced-motion friendly
 *
 * EmailJS: replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY below.
 */

const SERVICE_ID = "service_l5fl2c4";
const TEMPLATE_ID = "template_a7ala95";
const PUBLIC_KEY = "5MRaNGEeqeGvb2DFZ";

// very small email regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const reduce = useReducedMotion();

  // simple client-side validation
  function validate(data) {
    const e = {};
    if (!data.from_name || data.from_name.trim().length < 2) {
      e.from_name = "Please enter your name (min 2 characters).";
    }
    if (!data.reply_to || !emailRegex.test(data.reply_to)) {
      e.reply_to = "Please enter a valid email.";
    }
    if (!data.message || data.message.trim().length < 10) {
      e.message = "Message should be at least 10 characters.";
    }
    return e;
  }

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.name]: undefined }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setStatus("sending");
    const toastId = toast.loading("Sending message...");

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.from_name,
          reply_to: formData.reply_to,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      // success
      setStatus("idle");
      formRef.current.reset();
      setFormData({ from_name: "", reply_to: "", message: "" });
      toast.success("Message sent — I will reply soon!", { id: toastId });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("idle");
      toast.error("Failed to send message. Try again later.", { id: toastId });
    }
  };

  const inputFocus = {
    whileFocus: {
      scale: reduce ? 1 : 1.01,
      boxShadow: "0 6px 24px rgba(99,102,241,0.12)",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      viewport={{ once: true, amount: 0.2 }}
      className="container font-aladin w-full md:max-w-3xl max-w-sm p-6 mt-8 mb-8 rounded-2xl bg-blue/30 backdrop-blur-md border border-beige shadow-xl"
      aria-live="polite"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <form ref={formRef} onSubmit={sendEmail} noValidate>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="from_name"
              className="block text-sm md:text-lg font-medium text-blue/90 mb-2"
            >
              Name
            </label>
            <motion.input
              {...inputFocus}
              id="from_name"
              name="from_name"
              type="text"
              onChange={handleChange}
              aria-invalid={!!errors.from_name}
              aria-describedby={
                errors.from_name ? "from_name_error" : undefined
              }
              placeholder="Your name"
              className={`w-full px-4 py-2 rounded-lg bg-white/6 text-blue placeholder-pastleblue/60 border ${
                errors.from_name ? "border-red-400" : "border-transparent"
              } focus:outline-none focus:ring-2 focus:ring-purple-400 transition`}
            />
            {errors.from_name && (
              <p id="from_name_error" className="text-xs text-red-300 mt-1">
                {errors.from_name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="reply_to"
              className="block text-sm md:text-lg font-medium text-blue/90 mb-2"
            >
              Email
            </label>
            <motion.input
              {...inputFocus}
              id="reply_to"
              name="reply_to"
              type="email"
              onChange={handleChange}
              aria-invalid={!!errors.reply_to}
              aria-describedby={errors.reply_to ? "reply_to_error" : undefined}
              placeholder="you@example.com"
              className={`w-full px-4 py-2 rounded-lg bg-white/6 text-blue placeholder-pastleblue/60 border ${
                errors.reply_to ? "border-red-400" : "border-transparent"
              } focus:outline-none focus:ring-2 focus:ring-purple-400 transition`}
            />
            {errors.reply_to && (
              <p id="reply_to_error" className="text-xs text-red-300 mt-1">
                {errors.reply_to}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm md:text-lg font-medium text-blue/90 mb-2"
            >
              Message
            </label>
            <motion.textarea
              {...inputFocus}
              id="message"
              name="message"
              rows="5"
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message_error" : undefined}
              placeholder="Tell me about your project..."
              className={`w-full px-4 py-3 rounded-lg bg-white/6 text-blue placeholder-pastleblue/60 border ${
                errors.message ? "border-red-400" : "border-transparent"
              } focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none`}
            />
            {errors.message && (
              <p id="message_error" className="text-xs text-red-300 mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex items-center gap-3">
            <motion.button
              animate={{
                boxShadow: [
                  `0 0 6px rgba(0, 119, 182, 0.12)`,
                  `0 0 22px rgba(0, 119, 182, 0.55)`,
                  `0 0 6px rgba(0, 119, 182, 0.12)`,
                ],
                scale: [1, 1.02, 1],
              }}
              whileHover={{
                boxShadow: `0 0 24px rgba(253, 253, 150, 0.95), 0 0 48px rgba(0, 119, 182, 0.6), 0 0 96px rgba(0, 119, 182, 0.28)`,
                scale: 1.06,
              }}
              whileTap={{ scale: 0.985 }}
              className="flex flex-cols cursor-pointer bg-blue rounded-lg w-36 h-11 px-6 py-2 font-aladin text-lightblue text-xl"
              style={{ willChange: "transform, box-shadow" }}
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            <button
              type="button"
              onClick={() => {
                formRef.current.reset();
                setFormData({ from_name: "", reply_to: "", message: "" });
                setErrors({});
                toast.dismiss();
                toast("Form cleared.");
              }}
              className="px-4 py-2 rounded-lg bg-white/6 text-blue border border-white/10 hover:bg-white/8 transition focus:outline-none"
            >
              Clear
            </button>
          </div>
        </form>
        <div className="hidden md:flex flex-col justify-center items-center mt-4">
          <h2 className="font-aladin text-blue sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-lg">
            Contact Me!!
          </h2>
          <Lottie
            animationData={onboardinganimation}
            loop={true}
            className="w-[600px] h-80"
          />
        </div>
      </div>

      {/* small footer */}
      <p className="mt-4 text-xs text-blue/70">
        By sending, you agree to be contacted. No spam — only helpful replies.
      </p>
    </motion.div>
  );
}
