import * as Line from '@line/bot-sdk'

export const answer = (params: { restrantName: string; photoUrl: string; isTobacco: boolean; isFamily: boolean; isAlcohol: boolean; catchphrase: string }): Line.FlexContainer => {
  const { restrantName, photoUrl, isAlcohol, isFamily, isTobacco, catchphrase } = params
  return {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "image",
          "url": photoUrl,
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "20:13",
          "action": {
            "type": "uri",
            "label": "action",
            "uri": "http://linecorp.com/"
          }
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "おすすめ",
              "size": "xs",
              "color": "#ffffff",
              "align": "center",
              "gravity": "center"
            }
          ],
          "backgroundColor": "#EC3D44",
          "paddingAll": "2px",
          "paddingStart": "4px",
          "paddingEnd": "4px",
          "flex": 0,
          "position": "absolute",
          "offsetStart": "18px",
          "offsetTop": "18px",
          "cornerRadius": "100px",
          "width": "80px",
          "height": "25px"
        }
      ],
      "paddingAll": "0px"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": restrantName,
          "weight": "bold",
          "size": "xl",
          "action": {
            "type": "message",
            "label": "action",
            "text": "hello"
          },
          "wrap": true
        },
        {
          "type": "separator",
          "color": "#FFFFFF",
          "margin": "sm"
        },
        {
          "type": "text",
          "text": catchphrase,
          "wrap": true,
          "color": "#06C755",
          "weight": "bold",
          "margin": "md",
          "offsetBottom": "md"
        },
        {
          "type": "separator",
          "color": "#FFFFFF",
          "margin": "sm"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "家族連れ",
                  "align": "center",
                  "size": "sm"
                },
                {
                  "type": "text",
                  "text": isFamily ? '◯' : '✕',
                  "align": "center",
                  "weight": "bold"
                }
              ]
            },
            {
              "type": "separator",
              "color": "#C3C3C3",
              "margin": "none"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "アルコール",
                  "align": "center",
                  "size": "sm"
                },
                {
                  "type": "text",
                  "text": isAlcohol ? '◯' : '✕',
                  "align": "center",
                  "weight": "bold"
                }
              ]
            },
            {
              "type": "separator",
              "color": "#C3C3C3",
              "margin": "none"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "たばこ",
                  "align": "center",
                  "size": "sm"
                },
                {
                  "type": "text",
                  "text": isTobacco ? '◯' : '✕',
                  "align": "center",
                  "weight": "bold"
                }
              ]
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "もう一度",
                "data": JSON.stringify({ isComplete: false, event: 'guess' }),
                displayText: 'もう一度',
              },
              "style": "secondary"
            },
            {
              "type": "separator",
              "margin": "md"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "いきたい！",
                "data": JSON.stringify({ isComplete: true, event: 'guess' }),
                displayText: 'いきたい！',
              },
              "style": "primary"
            }
          ]
        }
      ]
    }
  }
}