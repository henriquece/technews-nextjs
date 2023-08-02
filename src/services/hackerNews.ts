import { hackerNewsApiUrl } from '@/config/urls'

export type TopStories = string[]

export const getTopStoriesUrl = `${hackerNewsApiUrl}/topstories.json`

export interface Story {
  id: string
  title: string
  url: string
  time: number
}

export const getStoryUrl = (id: string) => `${hackerNewsApiUrl}/item/${id}.json`
