import Navigation from "@/components/navigation"
import Blogs from "@/utils/blogs"
import Link from "next/link";

export default async function Blog() {
  const blogs = await Blogs.findAll()

  return (
    <div className="max-w-[720px] m-auto p-4 box-border">
      <header className="mt-80 ">
        <Navigation navItems={[ { href: "/", title: "< Blog" }, ]}/>
      </header>
      <main className="mt-20">
        <ul>
          {blogs.map((blog, i) => (
            <li key={i}>
              <Link href={"blog/" + blog.slug}>
                <p className="text-2xl font-bold my-4 transition duration-300 hover:text-white">
                  {`${blog.postedAt.getDate()}.${blog.postedAt.getMonth() + 1}.${blog.postedAt.getFullYear()} ${blog.title}`}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
