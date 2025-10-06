import Navigation from "@/components/navigation"
import Blogs from "@/utils/blogs"
import Link from "next/link";

export default async function Blog() {
  const blogs = await Blogs.findAll()

  return (
    <div className="grid content-center h-full">
      <main className="flex">
        <div className="border-l border-r p-4 box-border w-xl h-64">
          <ul>
            {blogs.map((blog, i) => (
              <li key={i}>
                <Link href={"blog/" + blog.slug}>
                  <p className="text-2xl font-bold transition duration-300 hover:text-white">
                    {`${blog.postedAt.getDate()}.${blog.postedAt.getMonth() + 1}.${blog.postedAt.getFullYear()} ${blog.title}`}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <header>
          <h1 className="[writing-mode:vertical-rl] [text-orientation:upright]">BLOGS</h1>
        </header>
      </main>
    </div>
  );
}
