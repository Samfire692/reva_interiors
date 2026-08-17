import React from 'react'
import { Quote } from 'lucide-react'

export const Testimonial = () => {

  const reviews = [
    {
      name: "Amaka Johnson",
      role: "Homeowner",
      location: "Lagos, Nigeria",
      text: "REVA transformed our space into something that feels completely personal. Every detail was considered, and the final result exceeded what we imagined."
    },
    {
      name: "Daniel Adeyemi",
      role: "Business Owner",
      location: "Ogun, Nigeria",
      text: "From the first consultation to the final installation, the entire process felt seamless. They understood exactly what we wanted."
    },
    {
      name: "Tolu Williams",
      role: "Private Client",
      location: "Lagos, Nigeria",
      text: "The attention to detail was exceptional. REVA didn't just design a beautiful space, they created somewhere that genuinely feels like home."
    }
  ]

  return (
    <div className="p-5">

      {/* Heading */}
      <div>
        <p
          className="uppercase text-white/40 text-sm"
          style={{
            letterSpacing: "3px",
            fontFamily: "Titan"
          }}
        >
          Reviews
        </p>

        <h3
          className="md:text-5xl text-4xl max-w-2xl py-5 text-white/90"
          style={{
            fontFamily: "sans-serif",
            letterSpacing: "1.8px"
          }}
        >
          Spaces that speak for themselves.
        </h3>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-3 border border-white/10">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-7 min-h-80 border-b md:border-b-0 md:border-r last:border-r-0 border-white/10 flex flex-col justify-between hover:bg-white/2 transition-all duration-500"
          >

            <div>
              <Quote
                size={28}
                strokeWidth={1.5}
                className="text-amber-400 mb-8"
              />

              <p
                className="text-white/70 text-lg leading-relaxed"
                style={{
                  fontFamily: "sans-serif",
                  letterSpacing: "1px"
                }}
              >
                "{review.text}"
              </p>
            </div>

            <div className="mt-10">

              <p
                className="text-white text-sm font-semibold"
                style={{
                  letterSpacing: "1.5px"
                }}
              >
                {review.name}
              </p>

              <p
                className="text-white/40 text-xs mt-2 uppercase"
                style={{
                  letterSpacing: "2px"
                }}
              >
                {review.role} · {review.location}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}