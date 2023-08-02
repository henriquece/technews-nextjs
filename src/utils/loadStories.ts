import { getStoryUrl, type TopStories } from '@/services/hackerNews'

export const pageSize = 8

export const loadStories = async (
  topStoriesIds: TopStories,
  pageValue: number
) => {
  const fetchedStories = await Promise.all(
    topStoriesIds
      .slice(pageValue, pageValue + pageSize)
      .map((story) => fetch(getStoryUrl(story)))
  )

  const stories = await Promise.all(fetchedStories.map((story) => story.json()))

  return stories.map((story) => ({
    id: story.id,
    title: story.title,
    url: story.url,
    time: story.time
  }))
}
