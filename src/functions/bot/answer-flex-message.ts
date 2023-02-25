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
                }
              ]
            }
          ],
          "spacing": "none",
          "margin": "xl"
        }
      ]
    }
  }}