import { Feed } from '../features/Feed'
import { PostsResponse } from '../features/post.interfaces'

async function getPosts(): Promise<PostsResponse> {
  const res = await fetch('http://localhost:3000/api/posts/', {
    method: 'POST',
  })
  return res.json()
}

export default async function Home() {
  const postList = await getPosts()
  return (
    <div>
      <main>
        <div>hello2</div>
        {/* <Filters /> */}
        <Feed posts={postList.posts} />
      </main>
      <footer>hello</footer>
    </div>
  )
}
