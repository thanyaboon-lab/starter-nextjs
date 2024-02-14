import prisma from "@/lib/prisma";
import { Post } from "@/prisma/blog/post";

async function getServerSideProps(postId: string): Promise<Post | null> {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return post
  } catch (e) {
    return null
  }
}

export default async function Page({params}: { params: { id: string}}) {
  // console.log('🚀 ~ router:', router)
  const post = await getServerSideProps(params.id)
  console.log('🚀 ~ post:', post)
  return (
    <>
    aaaaa
    </>
  )
}