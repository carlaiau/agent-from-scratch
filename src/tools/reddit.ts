import { z } from 'zod'
import type { ToolFn } from '../../types'
import fetch from 'node-fetch'

const redditDefinition = {
  name: 'reddit',
  parameters: z.object({}),
  description: 'get latest posts from Reddit',
}

type Args = z.infer<typeof redditDefinition.parameters>

const reddit: ToolFn<Args> = async ({ toolArgs }) => {
  const res = await fetch('https://www.reddit.com/r/nba/new/.json')
  const json = await res.json()

  const relevantInfo = json.data.children.map((child: any) => ({
    title: child.data.title,
    link: child.data.url,
    subreddit: child.data.subreddit_name_prefixed,
    author: child.data.author,
    upvotes: child.data.ups,
  }))

  return JSON.stringify(relevantInfo, null, 2)
}

export { reddit, redditDefinition }
