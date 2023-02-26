import * as Line from '@line/bot-sdk'

// FIXME
export const answer = (): Line.FlexContainer => {
  return {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "image",
          "url": "https://imgfp.hotp.jp/IMGH/92/50/P039539250/P039539250_480.jpg",
          "size": "full",
          "aspectMode": "fit",
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
          "text": "串揚げさっくる　このさきや",
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
          "text": "さくっと立飲み★ 串揚げ1本100円(税抜)～",
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
                  "text": "〇",
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
                  "text": "〇",
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
                  "text": "X",
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
                "data": "hello"
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
                "data": "hello"
              },
              "style": "primary"
            }
          ]
        }
      ]
    }
  }
}