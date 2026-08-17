import React, { useState } from "react";
import Swal from "sweetalert2";

export const Blog = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    project: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step === 1 && !form.project) {
      Swal.fire({
        icon: "warning",
        title: "Choose a project",
        text: "Please select the type of project you're interested in.",
      });
      return;
    }

    if (step === 2 && (!form.date || !form.time)) {
      Swal.fire({
        icon: "warning",
        title: "Choose a date and time",
        text: "Please select your preferred consultation date and time.",
      });
      return;
    }

    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    if (!form.name || !form.email || !form.phone) {
      Swal.fire({
        icon: "warning",
        title: "Almost there",
        text: "Please fill in all required fields.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Consultation Requested",
      text: "Thank you for choosing REVA. We'll be in touch shortly.",
      confirmButtonText: "Done",
    });

    setForm({
      project: "",
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setStep(1);
  };

  const projects = [
    "Residential Interior",
    "Commercial Space",
    "Renovation",
    "Hospitality",
    "Other",
  ];

  return (
    <div className="p-5">

      {/* Heading */}
      <div className="mb-10">
        <p
          className="uppercase text-white/40 text-sm"
          style={{
            letterSpacing: "3px",
            fontFamily: "Titan",
          }}
        >
          Book a Consultation
        </p>

        <h3
          className="md:text-5xl text-4xl max-w-2xl mt-3 text-white/90"
          style={{
            fontFamily: "sans-serif",
            letterSpacing: "1.8px",
          }}
        >
          Let's create a space that feels like you.
        </h3>
      </div>

      {/* Steps */}
      <div className="flex items-center gap-3 mb-10 text-xs uppercase">

        <span
          className={
            step >= 1
              ? "text-amber-400"
              : "text-white/30"
          }
        >
          01 Project
        </span>

        <span className="text-white/20">—</span>

        <span
          className={
            step >= 2
              ? "text-amber-400"
              : "text-white/30"
          }
        >
          02 Schedule
        </span>

        <span className="text-white/20">—</span>

        <span
          className={
            step >= 3
              ? "text-amber-400"
              : "text-white/30"
          }
        >
          03 Details
        </span>

      </div>

      {/* Form */}
      <div className=" border border-white/10 rounded-2xl p-6 md:p-10">

        {/* STEP 1 */}
        {step === 1 && (
          <div>

            <p className="text-white/50 text-sm mb-6">
              What type of project are you considering?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {projects.map((project) => (
                <button
                  key={project}
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      project,
                    })
                  }
                  className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                    form.project === project
                      ? "border-amber-400 bg-amber-400/10 text-white"
                      : "border-white/10 text-white/60 hover:border-white/30"
                  }`}
                >
                  {project}
                </button>
              ))}

            </div>

            <button
              onClick={nextStep}
              className="mt-8 px-7 py-4 rounded-full bg-amber-400 text-black text-sm font-semibold hover:bg-amber-300 transition"
            >
              Continue →
            </button>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>

            <p className="text-white/50 text-sm mb-6">
              When would you like to speak with us?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-xs uppercase text-white/40 mb-2">
                  Preferred Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={updateForm}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-white/40 mb-2">
                  Preferred Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={updateForm}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
                />
              </div>

            </div>

            <div className="flex gap-3 mt-8">

              <button
                onClick={previousStep}
                className="px-6 py-4 rounded-full border border-white/10 text-white/60 hover:text-white transition"
              >
                ← Back
              </button>

              <button
                onClick={nextStep}
                className="px-7 py-4 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
              >
                Continue →
              </button>

            </div>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>

            <p className="text-white/50 text-sm mb-6">
              Tell us a little about yourself.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                placeholder="Full name *"
                value={form.name}
                onChange={updateForm}
                className="input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address *"
                value={form.email}
                onChange={updateForm}
                className="input"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number *"
                value={form.phone}
                onChange={updateForm}
                className="input"
              />

              <input
                type="text"
                value={form.project}
                disabled
                className="input opacity-50"
              />

            </div>

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={updateForm}
              rows="5"
              className="w-full mt-5 p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none resize-none"
            />

            <div className="flex gap-3 mt-8">

              <button
                onClick={previousStep}
                className="px-6 py-4 rounded-full border border-white/10 text-white/60 hover:text-white transition"
              >
                ← Back
              </button>

              <button
                onClick={submitForm}
                className="px-7 py-4 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
              >
                Request Consultation →
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};