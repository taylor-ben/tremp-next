import { Post } from './post.interfaces'

interface Props {
  posts: Post[]
}

export const Feed = ({ posts }: Props) => {
  return (
    <div>
      Feed
      <div>
        {posts?.map((post) => (
          <pre key={post.postId}>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </div>
    </div>
  )
}
