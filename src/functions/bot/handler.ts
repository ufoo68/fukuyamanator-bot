import * as Lambda from 'aws-lambda'
import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/lib/types'
import { middyfy } from '@libs/lambda'
import { formatJSONResponse } from '@libs/api-gateway'
import { question } from './question-flex-message'
import { answer } from './answer-flex-message'

const channelAccessToken = process.env.ACCESS_TOKEN!
const channelSecret = process.env.CHANNEL_SECRET!

const config: Line.ClientConfig = {
  channelAccessToken,
  channelSecret,
}
const client = new Line.Client(config)

const eventHandler = async (event: Types.PostbackEvent | Types.MessageEvent): Promise<any> => {
  if (event.type === 'message' && event.message.type === 'text') {
    if (event.message.text === 'おすすめ') {
      return client.replyMessage(event.replyToken, [
      {
        type: "sticker",
        packageId: "446",
        stickerId: "1988"
      },
      {
        type: 'flex',
        altText: 'reply flex yes or no',
        contents: question({ questionId: 1, order: 1 }),
      }])
    }
  } else if (event.type === 'postback') {
    return client.replyMessage(event.replyToken, {
      type: 'flex',
      altText: 'reply flex yes or no',
      contents: answer(), 
    })
  }
}

const handler: Lambda.APIGatewayProxyHandler = async (proxyEevent: Lambda.APIGatewayEvent, _context) => {
  const body = proxyEevent.body as unknown as Line.WebhookRequestBody
  await Promise
    .all(body.events.map(async event => eventHandler(event as Types.MessageEvent)))
    .catch(err => {
      console.error(err.Message)
      formatJSONResponse({})
    })
  return formatJSONResponse({})
}

export const main = middyfy(handler)