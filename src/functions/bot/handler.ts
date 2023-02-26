import * as Lambda from 'aws-lambda'
import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/lib/types'
import { middyfy } from '@libs/lambda'
import { formatJSONResponse } from '@libs/api-gateway'
import { question } from './question-flex-message'
import { answer } from './answer-flex-message'
import { last } from './last-flex-message'
import axios from 'axios'

const apiEndpoint = 'https://q1gjo6limh.execute-api.ap-northeast-1.amazonaws.com/dev/question'

const channelAccessToken = process.env.ACCESS_TOKEN!
const channelSecret = process.env.CHANNEL_SECRET!

const config: Line.ClientConfig = {
  channelAccessToken,
  channelSecret,
}
const client = new Line.Client(config)

const eventHandler = async (event: Types.PostbackEvent | Types.MessageEvent): Promise<any> => {
  if (event.type === 'message' && event.message.type === 'text') {
    if (event.message.text === 'おすすめをおしえて') {
      const { data } = await axios.post(apiEndpoint, { userId: event.source.userId, event: 'start' })
      return client.replyMessage(event.replyToken, [
        {
          type: 'flex',
          altText: '質問',
          contents: question(data),
        }])
    }
  } else if (event.type === 'postback') {
    const reply = JSON.parse(event.postback.data)
    const { data } = await axios.post(apiEndpoint, { userId: event.source.userId, ...reply })
    console.log(data)
    console.log(reply)
    if (data.type === 'question') {
      return client.replyMessage(event.replyToken, [
        {
          type: 'flex',
          altText: '質問',
          contents: question(data),
        }
      ])
    } else if (data.type === 'guess') {
      return client.replyMessage(event.replyToken, [
        {
          type: "text",
          text: "あなたへのおすすめはこれ！"
        },
        {
          type: "sticker",
          packageId: "446",
          stickerId: "1996"
        },
        {
          type: 'flex',
          altText: 'おすすめ',
          contents: answer(data),
        }])
    } else if (data.type === 'complete') {
      return client.replyMessage(event.replyToken, [
        {
          type: 'flex',
          altText: 'お店詳細',
          contents: last(data),
        }
      ])
    }
  }
}

const handler: Lambda.APIGatewayProxyHandler = async (proxyEevent: Lambda.APIGatewayEvent, _context) => {
  const body = proxyEevent.body as unknown as Line.WebhookRequestBody
  await Promise
    .all(body.events.map(async event => eventHandler(event as Types.MessageEvent)))
    .catch(err => {
      console.error(err)
    })
  return formatJSONResponse({})
}

export const main = middyfy(handler)