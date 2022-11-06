import { Feed } from '../features/Feed'
import { Filters } from '../features/Filters'
import { PostsResponse } from '../features/post.interfaces'

export default async function Home() {
  return (
    <div>
      <main>
        <div>hello2</div>
        <Filters />
        <Feed />
      </main>
      <footer>hello</footer>
    </div>
  )
}
