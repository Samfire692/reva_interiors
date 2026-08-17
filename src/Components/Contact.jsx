import React from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

export const Contact = () => {
  return (
    <div className="p-5">

      <div className="border-t border-white/10 pt-16 pb-20">

        <p
          className="uppercase text-white/40 text-sm"
          style={{
            letterSpacing: "3px",
            fontFamily: "Titan"
          }}
        >
          Get in touch
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-12 mt-6">

          <div className="max-w-3xl">
            <h3
              className="text-5xl md:text-7xl text-white/90"
              style={{
                fontFamily: "sans-serif",
                letterSpacing: "1.5px"
              }}
            >
              Have a space in mind?
            </h3>

            <p
              className="text-white/50 max-w-xl mt-6 text-sm leading-7"
              style={{ letterSpacing: "1.5px" }}
            >
              Whether you're creating something new or transforming
              an existing space, we'd love to hear what you have in mind.
            </p>

            <button
              className="mt-8 flex items-center gap-3 px-6 py-4 rounded-full
              bg-amber-400 text-black font-medium
              hover:bg-amber-300 transition-all duration-300"
            >
              Start a conversation
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-6 lg:min-w-64">

            <div className="flex gap-4">
              <MapPin
                size={20}
                strokeWidth={1.5}
                className="text-amber-400"
              />

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">
                  Studio
                </p>

                <p className="text-white/70 text-sm mt-2">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail
                size={20}
                strokeWidth={1.5}
                className="text-amber-400"
              />

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">
                  Email
                </p>

                <p className="text-white/70 text-sm mt-2">
                  hello@reva.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone
                size={20}
                strokeWidth={1.5}
                className="text-amber-400"
              />

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">
                  Phone
                </p>

                <p className="text-white/70 text-sm mt-2">
                  +234 800 000 0000
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}