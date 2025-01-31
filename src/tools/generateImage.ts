import { z } from 'zod'
import type { ToolFn } from '../../types'
import fetch from 'node-fetch'
import { openai } from '../ai'

const generateImageDefinition = {
  name: 'generate_image',
  parameters: z.object({
    prompt: z.string().describe('The prompt to use to generate the image'),
  }),
  description: 'generate an image and returns the url of the image',
}

type Args = z.infer<typeof generateImageDefinition.parameters>

const generateImage: ToolFn<Args> = async ({ toolArgs }) => {
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: toolArgs.prompt,
    n: 1,
    size: '1024x1024',
  })
  const imageUrl = response.data[0].url!

  return imageUrl
}

export { generateImage, generateImageDefinition }
