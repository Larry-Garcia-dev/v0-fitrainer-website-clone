"use client"

import Image from "next/image"

// Wavy underline SVG component
const WavyUnderline = () => (
  <svg viewBox="0 0 100 15" className="h-4 w-20 text-primary">
    <path
      d="M0 7.5 Q 12.5 0, 25 7.5 T 50 7.5 T 75 7.5 T 100 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

const posts = [
  {
    title: "How To Get The Most Out Of Gym Membership",
    excerpt: "The purpose of lorem ipsum is to create a natural looking block",
    date: "July 28, 2025",
    comments: "No comments",
    image: "/images/blog-gym.jpg",
  },
  {
    title: "Happy Moments When You Achieve Your Aim",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    date: "July 21, 2025",
    comments: "No comments",
    image: "/images/blog-achieve.jpg",
  },
  {
    title: "Think Outside The Box - Change The Game",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    date: "July 21, 2025",
    comments: "No comments",
    image: "/images/blog-think.jpg",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Latest Articles
            </span>
            <span className="h-px w-6 bg-primary" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold italic leading-tight text-[#1a1a1a] sm:text-4xl lg:text-[2.75rem]">
            Achieve Your Goals. Unlock Your Full Potential.
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
        </div>

        {/* Blog grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-center font-sans text-lg font-bold leading-tight text-[#1a1a1a] transition-colors group-hover:text-primary">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>

                {/* Meta - divider */}
                <div className="my-4 h-px bg-gray-200" />

                {/* Meta */}
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>|</span>
                  <span>{post.comments}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
