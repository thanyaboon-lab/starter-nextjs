import prisma from "@/lib/prisma";
import { Post } from "@/prisma/blog/post";
import Link from "next/link";

async function getStaticProps() : Promise<Post[]> {
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
          author: {
            select: { name: true },
          },
        },
      });
      console.log('🚀 ~ feed:', feed)
      return feed;
}

export default async function page() {
  const feed = await getStaticProps()

  return (
    <div className="page">
        <h1>Public Feed</h1>
        <main>
          {feed.map((post) => (
            <div key={post.id} className="post">
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </div>
          ))}
        </main>
      </div>
  )
}
