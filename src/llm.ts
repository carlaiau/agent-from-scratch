import { zodFunction } from 'openai/helpers/zod.mjs'
import type { AIMessage } from '../types'
import { openai } from './ai'
import type { ChatCompletionMessage } from 'openai/resources/index.mjs'
export const runLLM = async ({
  messages,
  tools,
}: {
  messages: AIMessage[]
  tools: any[]
}): Promise<ChatCompletionMessage> => {
  const formattedTools = tools.map(zodFunction)
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.1,
    messages,
    tools: formattedTools,
    tool_choice: 'auto',
    parallel_tool_calls: false,
  })

  return response.choices[0].message
}
