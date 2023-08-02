import { getTopStoriesUrl } from '@/services/hackerNews'
import { loadStories } from '@/utils/loadStories'
import { Main } from './components/Main'

export default async function Index() {
  const fetchedTopStoriesIds = await fetch(getTopStoriesUrl, {
    next: { revalidate: 0 }
  })
  const topStoriesIds = await fetchedTopStoriesIds.json()

  const fetchedStories = await loadStories(topStoriesIds, 0)

  return <Main topStoriesIds={topStoriesIds} initialStories={fetchedStories} />
}
