import { useRouter } from 'next/router';
import Link from 'next/link'


export default function Post({post}) {
  const router = useRouter()

  return (
    <>
      <Link href={`/`}
      >
        <a>Goto All Posts</a>
      </Link>
      <h1>Post # {post.id}</h1>
      <span>{`Content of Post ${post.body}`}</span>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(context)
	const response = await fetch(`https://simple-blog-api.crew.red/posts/${context.query.id}`)
	const post = await response.json()

	return { props: { post} }
}
