import * as Line from '@line/bot-sdk'

export const last = (params: { siteUrl: string }): Line.FlexContainer => {
  return {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "THANK YOU",
          "color": "#06C755",
          "align": "start",
          "weight": "bold"
        }
      ]
    },
    "hero": {
      "type": "image",
      "url": "https://www.city.fukuyama.hiroshima.jp/uploaded/image/11535.jpg",
      "size": "5xl",
      "margin": "none"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "ご利用ありがとうございました",
          "wrap": true
        },
        {
          "type": "text",
          "text": "また使ってね！"
        },
        {
          "type": "separator",
          "margin": "md"
        },
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "お店の詳細へ",
            "uri": params.siteUrl,
          },
          "style": "primary"
        }
      ]
    }
  }
}