import OpenAI from 'openai'
import { dadJoke, dadJokeDefinition } from './tools/dadJoke'
import { generateImage, generateImageDefinition } from './tools/generateImage'
import { reddit, redditDefinition } from './tools/reddit'

export const runTool = async ({
  toolCall,
  userMessage,
}: {
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall
  userMessage: string
}) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || '{}'),
  }
  switch (toolCall.function.name) {
    case dadJokeDefinition.name:
      return dadJoke(input)
    case generateImageDefinition.name:
      return generateImage(input)
    case redditDefinition.name:
      return reddit(input)

    default:
      throw new Error(`Unknown tool : ${toolCall.function.name}`)
  }
}
