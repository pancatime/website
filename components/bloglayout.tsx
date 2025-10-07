import { PropsWithChildren } from "react"
import { BlogModel } from "@/utils/blogTypes"

export type PostViewProps = PropsWithChildren<{
  blogPost: BlogModel
}>

export default function BlogLayout({blogPost, children}: PostViewProps) {
  return (
    <div className="mt-80">
      <article>
        <header className="flex">
          <h1 className="text-5xl font-bold my-8">{blogPost.title}</h1>
          <time dateTime={blogPost.postedAt.toISOString()}>
            <span className="-rotate-20 block w-fit absolute -translate-x-10 translate-y-16 text-sm">
              {blogPost.postedAt.toLocaleDateString("en-US", {
                day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
              })}
            </span>
          </time>
        </header>
        <div>{children}</div>
      </article>
    </div>
  )
}
