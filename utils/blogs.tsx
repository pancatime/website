import { BlogModel, BlogPost } from "@/utils/blogTypes"
import glob from "fast-glob"

export default class Blogs {
  static async findAll(): Promise<BlogPost[]> {
    const filenames = await glob("*/page.mdx", { cwd: "./app/blog", })
    const posts = await Promise.all(filenames.map(this.importBlog))
    return posts.sort((a, z) => +z.postedAt - +a.postedAt)
  }

  private static async importBlog(filename: string): Promise<BlogPost> {
    const slug = filename.replace(/(\/page)?\.mdx$/, "")
    return import(`../app/blog/${filename}`)
      .then((blogModule) => blogModule.post as BlogModel)
      .then((blogModel) => ({ slug, ...blogModel, }))
  }
}
