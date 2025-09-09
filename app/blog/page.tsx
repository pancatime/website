import Navigation from "@/components/navigation"
import Blogs from "@/utils/blogs"
import BlogItem from "@/components/blogitem"

export default async function Blog() {
  const blogs = await Blogs.findAll()

  return (
    <>
      <header className="col-start-1 col-end-4">
        <Navigation navItems={[
          { href: "/", title: "⌂ Home" },
          { href: "/", title: "Blogs" },
        ]}/>
      </header>
      <main className="col-start-1 sm:col-end-3 col-end-4 p-4">
        <ul className="max-w-[720px] m-auto mt-32">
          {blogs.map((blog, i) => {
            return (
              <li key={i}>
                <BlogItem
                  path={"blog/" + blog.slug}
                  text={blog.title}
                  date={`${blog.postedAt.getDate()}.${blog.postedAt.getMonth() + 1}.${blog.postedAt.getFullYear()}`}
                /> 
              </li>
            )
          })}
        </ul>
      </main>
    </>
  );
}
