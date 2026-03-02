"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"

const posts = [
  {
    title: "How to get the most out of gym membership",
    excerpt: "The purpose of lorem ipsum is to create a natural looking block",
    date: "July 28, 2025",
    comments: "No comments",
    image: "/images/blog-1.jpg",
  },
  {
    title: "Happy moments when you achieve your aim",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    date: "July 21, 2025",
    comments: "No comments",
    image: "/images/blog-2.jpg",
  },
  {
    title: "Think outside the box - change the game",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    date: "July 21, 2025",
    comments: "No comments",
    image: "/images/blog-3.jpg",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Latest Articles
            </span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-sans text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Achieve Your Goals. Unlock Your <span className="text-primary">Full Potential.</span>
          </h2>
        </div>

        {/* Blog grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-secondary transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5 text-primary" />
                    {post.comments}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans text-lg font-bold uppercase leading-tight text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:gap-3"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
