import { generateImage, generateImageDefinition } from './generateImage'
import { dadJoke, dadJokeDefinition } from './dadJoke'
import { reddit, redditDefinition } from './reddit'

const toolDefinitions = [
  generateImageDefinition,
  dadJokeDefinition,
  redditDefinition,
]

export { toolDefinitions }
