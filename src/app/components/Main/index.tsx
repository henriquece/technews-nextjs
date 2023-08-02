'use client'

import type { FC } from 'react'
import { useState } from 'react'
import styles from './styles.module.css'
import { Button } from '../commons/Button'
import { TextField } from '../commons/TextField'
import { Story, TopStories } from '@/services/hackerNews'
import { NewsCard } from '../NewsCard'
import { loadStories, pageSize } from '@/utils/loadStories'

interface MainProps {
  topStoriesIds: TopStories
  initialStories: Story[]
}

export const Main: FC<MainProps> = ({ topStoriesIds, initialStories }) => {
  const [stories, setStories] = useState(initialStories)
  const [isLoadingMoreStories, setIsLoadingMoreStories] = useState(false)
  const [pageValue, setPageValue] = useState(0)
  const [filterValue, setFilterValue] = useState('')

  const loadMoreStories = async () => {
    setIsLoadingMoreStories(true)

    const newStories = [...stories]
    newStories.push(...(await loadStories(topStoriesIds, pageValue + pageSize)))

    setStories(newStories)
    setPageValue((prevState) => (prevState += pageSize))
    setIsLoadingMoreStories(false)
  }

  const storiesWithVisibility = stories.map((story) => ({
    ...story,
    isVisible: story.title.toLowerCase().includes(filterValue.toLowerCase())
  }))

  return (
    <main className={styles.main}>
      <div className={styles['filter-textfield-wrapper']}>
        <TextField
          placeholder="Filter articles"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <div className={styles['news-cards']}>
        {storiesWithVisibility.map((story) => (
          <NewsCard key={story.id} story={story} />
        ))}
      </div>
      <Button
        label="Load more"
        loading={isLoadingMoreStories}
        onClick={loadMoreStories}
      />
    </main>
  )
}
