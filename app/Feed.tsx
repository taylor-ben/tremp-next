import { Post, PostsResponse } from './post.interfaces'

interface Props {
  posts?: Post[]
}

async function fetchPosts(): Promise<PostsResponse> {
  const res = await fetch('http://localhost:3000/api/posts/', {
    method: 'POST',
    next: {},
  })
  return res.json()
}

export async function Feed({ posts = [] }: Props) {
  const postList = await fetchPosts()
  return (
    <div>
      Feed
      <div>
        {postList.posts?.map((post) => (
          <pre key={post.postId}>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </div>
    </div>
  )
}
