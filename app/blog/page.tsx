import Navigation from "@/components/navigation"
import Blogs from "@/utils/blogs"
import Link from "next/link";

export default async function Blog() {
  const blogs = await Blogs.findAll()

  const formatter = new Intl.DateTimeFormat('en-UK', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  
  return (
    <div className="grid content-center h-full">
      <main className="flex">
        <div className="border-l-2 border-r-2 p-4 box-border w-xl h-64">
          <ul>
            {blogs.map((blog, i) => (
              <li key={i}>
                <Link href={"blog/" + blog.slug}>
                  <p className="text-2xl font-bold hover:text-black hover:bg-orange-400">
                    {formatter.format(blog.postedAt) + " - " + blog.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <header>
          <h1 className="[writing-mode:vertical-rl] [text-orientation:upright] font-bold">BLOGS</h1>
        </header>
      </main>
    </div>
  );
}
