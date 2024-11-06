import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialPosts: Prisma.PostCreateInput[] = [
  {
    title: 'First Post',
    slug: 'first-post',
    content: 'This is the first blog post.',
    published: true,
    author: {
      connectOrCreate:{
        where: { email: 'example@example.com' },
        create: { email: 'example@example.com',hashedPassword:'password123' },
      }
    },
  },
  {
    title: 'Second Post',
    slug: 'second-post',
    content: 'This is the second blog post.',
    published: true,
    author: {
      connectOrCreate:{
        where: { email: 'example@example.com' },
        create: { email: 'example@example.com',hashedPassword:'password123' },
      }
    },
  },
  {
    title: 'Third Post',
    slug: 'third-post',
    content: 'This is the third blog post.',
    published: true,
    author: {
      connectOrCreate:{
        where: { email: 'example@example.com' },
        create: { email: 'example@example.com',hashedPassword:'password123' },
      }
    },
  },
]

async function main() {
  console.log('Start seeding')
  for(const post of initialPosts){
    const newPost = await prisma.post.create({data:post})
    console.log(`Created post with id: ${newPost.id}`)
  }
  console.log('Seeding finished')
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })