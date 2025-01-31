import { z } from 'zod'
import type { ToolFn } from '../../types'
import fetch from 'node-fetch'

const dadJokeDefinition = {
  name: 'dad_joke',
  parameters: z.object({}),
  description: 'get a dad joke',
}

type Args = z.infer<typeof dadJokeDefinition.parameters>

const dadJoke: ToolFn<Args> = async ({ toolArgs }) => {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
  const json = await res.json()
  return json.joke
}

export { dadJoke, dadJokeDefinition }
