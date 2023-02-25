import * as Lambda from 'aws-lambda'
import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/lib/types'
import { middyfy } from '@libs/lambda'
import { formatJSONResponse } from '@libs/api-gateway'
import replyFlexMessage from './reply-flex-message.json'

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
      return client.replyMessage(event.replyToken, {
        type: 'flex',
        altText: 'reply flex yes or no',
        contents: replyFlexMessage as Line.FlexContainer,
      })
    }
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: event.message.text,
    })
  } else if (event.type === 'postback') {
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: event.postback.data,
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