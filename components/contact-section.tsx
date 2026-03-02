"use client"

import Image from "next/image"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Gym background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left - info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Get a Quote
              </span>
            </div>

            <h2 className="font-sans text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              GOT A QUESTION? WE WOULD BE <span className="text-primary">HAPPY TO HELP!</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* Contact info */}
            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                  <p className="font-sans text-lg font-semibold text-foreground">(+258) 2569 2582</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="font-sans text-lg font-semibold text-foreground">info@fitrainer.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Address</p>
                  <p className="font-sans text-lg font-semibold text-foreground">123 Fitness Street, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div className="rounded-2xl border border-border/50 bg-secondary/80 p-8 backdrop-blur-sm lg:p-10">
            <h3 className="mb-6 font-sans text-xl font-bold uppercase text-foreground">
              Send us a Message
            </h3>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-lg border border-border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-lg border border-border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="rounded-lg border border-border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="resize-none rounded-lg border border-border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
