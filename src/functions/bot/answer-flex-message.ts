import * as Line from '@line/bot-sdk'

// FIXME
export const answer = (): Line.FlexContainer => {
  return {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "尾道ラーメン 一丁",
          "weight": "bold",
          "size": "xl",
          "action": {
            "type": "message",
            "label": "action",
            "text": "hello"
          }
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "lg",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "時間",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "10:00 - 23:00",
                  "wrap": true,
                  "color": "#666666",
                  "size": "sm",
                  "flex": 3
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "ジャンル",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "ラーメン",
                  "wrap": true,
                  "color": "#666666",
                  "size": "sm",
                  "flex": 3
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "住所",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "福山市三之丸町４番１６号",
                  "wrap": true,
                  "color": "#666666",
                  "size": "sm",
                  "flex": 3
                }
              ]
            }
          ]
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
                  "align": "center"
                },
                {
                  "type": "text",
                  "text": "〇",
                  "align": "center",
                  "weight": "bold"
                },
                {
                  "type": "image",
                  "url": "https://1.bp.blogspot.com/-ZsRZh52shXU/WWNBGGNeLjI/AAAAAAABFZg/rRxw5r719Jk_ymwSq7sViPCl0DIcHjXigCLcBGAs/s600/travel_happy_family_set.png",
                  "size": "xs",
                  "margin": "xs"
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
                  "align": "center"
                },
                {
                  "type": "text",
                  "text": "〇",
                  "align": "center",
                  "weight": "bold"
                },
                {
                  "type": "image",
                  "url": "https://2.bp.blogspot.com/-g0tX6LwKRvU/UgSL9bM2b9I/AAAAAAAAW4g/j8GETOhjCCA/s400/drink_beer.png",
                  "size": "xs",
                  "margin": "xs"
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
                  "align": "center"
                },
                {
                  "type": "text",
                  "text": "×",
                  "align": "center"
                },
                {
                  "type": "image",
                  "url": "https://1.bp.blogspot.com/-rZL35FJaZiU/WAhy33_QsqI/AAAAAAAA_IQ/FQMO7VGuCGcF7SZrU13SImecm8jI7w1KQCLcB/s400/tabako.png",
                  "size": "xs",
                  "margin": "xs"
                }
              ]
            }
          ],
          "spacing": "none",
          "margin": "xl"
        }
      ]
    }
  }
}