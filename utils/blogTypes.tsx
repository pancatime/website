export interface BlogModel {
  title: string
  description: string
  author: string
  postedAt: Date
}

export interface BlogPost extends BlogModel {
  slug: string
}
