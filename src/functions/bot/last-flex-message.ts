import * as Line from '@line/bot-sdk'

export const last = (params: { siteUrl: string }): Line.FlexContainer => {
  return {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": []
    },
    "hero": {
      "type": "image",
      "url": "https://yuya2001.cocolog-nifty.com/photos/uncategorized/2013/09/22/7022.jpg",
      "size": "3xl",
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