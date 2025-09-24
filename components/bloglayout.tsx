import { PropsWithChildren } from "react"
import { BlogModel } from "@/utils/blogTypes"
import Navigation from "@/components/navigation"

export type PostViewProps = PropsWithChildren<{
  blogPost: BlogModel
}>

export default function BlogLayout({blogPost, children}: PostViewProps) {
  return (
    <div className="max-w-[720px] ml-80 mt-20">
      <article className="
        text-xl leading-8
        [&_p]:my-4
        [&_h1]:text-6xl [&_h1]:font-bold [&_h1]:my-8
        [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:my-8
        [&_h3]:text-4xl [&_h3]:font-bold [&_h3]:my-8
        [&_pre]:bg-aero [&_pre]:text-white [&_pre]:rounded-3xl [&_pre]:p-8
        [&_a]:underline [&_a]:italic
        [&_ul_li]:list-disc
        [&_ol_li]:list-decimal
        [&_li]:ml-8 [&_li_p]:m-0
      ">
        <header>
          <Navigation navItems={[ { href: "/blog", title: "< Back" }, ]}/>
          <time dateTime={blogPost.postedAt.toISOString()}>
            <span>
              {blogPost.postedAt.toLocaleDateString("en-US", {
                day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
              })}
            </span>
          </time>
          <h1>{blogPost.title}</h1>
        </header>
        <div>{children}</div>
      </article>
    </div>
  )
}
