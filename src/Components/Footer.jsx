import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="p-5 bg-black">

      <div className="border-t border-white/10 pt-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <p
              className="uppercase text-white/40 text-xs"
              style={{
                letterSpacing: "3px",
                fontFamily: "Titan"
              }}
            >
              REVA Interiors
            </p>

            <p
              className="text-white/60 text-sm mt-4 max-w-xs leading-6"
              style={{ letterSpacing: "1px" }}
            >
              Creating considered spaces through thoughtful
              design and intentional detail.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">

            <div className="flex flex-col gap-3">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">
                Explore
              </p>

              <a href="#about" className="text-white/60 hover:text-white transition">
                About
              </a>

              <a href="#projects" className="text-white/60 hover:text-white transition">
                Projects
              </a>

              <a href="#process" className="text-white/60 hover:text-white transition">
                Process
              </a>

              <a href="#contact" className="text-white/60 hover:text-white transition">
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">
                Connect
              </p>

              <a
                href="#"
                className="text-white/60 hover:text-white transition flex items-center gap-2"
              >
                Instagram
                <ArrowUpRight size={14} />
              </a>

              <a
                href="#"
                className="text-white/60 hover:text-white transition flex items-center gap-2"
              >
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

              <a
                href="mailto:hello@reva.com"
                className="text-white/60 hover:text-white transition flex items-center gap-2"
              >
                Email
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between gap-3 mt-10 pt-5 border-t border-white/10">

          <p className="text-white/30 text-xs">
            © 2026 REVA Interiors. All rights reserved.
          </p>

          <p className="text-white/30 text-xs">
            Lagos, Nigeria
          </p>

        </div>

      </div>

    </footer>
  )
}