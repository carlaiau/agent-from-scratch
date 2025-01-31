import 'dotenv/config'
import { runAgent } from './src/agent'
import { z } from 'zod'
import { toolDefinitions } from './src/tools'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

const weatherTool = {
  name: 'get_weather',
  description: `use this to get the weather. Does not need a city or location`,
  parameters: z.object({
    reasoning: z.string().describe('why did you pick this tool?'),
  }),
}

const response = await runAgent({ userMessage, tools: toolDefinitions })
