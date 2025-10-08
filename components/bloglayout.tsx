import { PropsWithChildren } from "react"
import { BlogModel } from "@/utils/blogTypes"

export type PostViewProps = PropsWithChildren<{
  blogPost: BlogModel
}>

export default function BlogLayout({blogPost, children}: PostViewProps) {
  return (
    <div className="mt-80">
      <article className="
        [&_p]:text-xl
        [&_p]:mt-4
        
        [&_h2]:text-4xl
        [&_h2]:font-bold
        
        [&_h3]:text-4xl
        [&_h3]:font-bold
        
        [&_h4]:text-4xl
        [&_h4]:font-bold

        [&_pre]:border-2
        [&_pre]:mt-4
        [&_pre]:p-4
        [&_pre]:overflow-x-scroll
        [&_pre]:scrollbar
        [&_pre]:scrollbar-thumb-orange-400
      ">
        <header className="flex">
          <h1 className="text-5xl font-bold my-8">{blogPost.title}</h1>
          <time dateTime={blogPost.postedAt.toISOString()}>
            <span className="-rotate-20 block w-fit absolute -translate-x-10 translate-y-16 text-sm font-bold">
              {blogPost.postedAt.toLocaleDateString("en-US", {
                day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
              })}
            </span>
          </time>
        </header>
        <div className="max-w-xl mb-100">
          {children}
          <span className="italic text-xl mt-16 block text-right">
            {"- " + blogPost.author}
          </span>
        </div>
      </article>
    </div>
  )
}
