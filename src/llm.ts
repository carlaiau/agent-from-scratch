import type { AIMessage } from '../types'
import { openai as openai } from './ai'

const runLLM = async ({
  userMessage,
  model = 'gpt-4o-mini',
}: {
  userMessage: string
  model?: string
}) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.1,
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
  })

  return response.choices[0].message.content
}

export { runLLM }
