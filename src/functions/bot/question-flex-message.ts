import * as Line from '@line/bot-sdk'

export const question = (params: { order: number, questionId: number }): Line.FlexContainer => {
  const { order, questionId } = params;
  switch (questionId) {
    case 1:
      return {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": `${order}つ目の質問`,
              "color": "#aaaaaa",
              "size": "sm"
            },
            {
              "type": "text",
              "text": "たばこ吸う？",
              "weight": "bold",
              "margin": "xs"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://1.bp.blogspot.com/-rZL35FJaZiU/WAhy33_QsqI/AAAAAAAA_IQ/FQMO7VGuCGcF7SZrU13SImecm8jI7w1KQCLcB/s400/tabako.png"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "はい",
                "data": "TRUE"
              },
              "style": "primary",
              "offsetEnd": "none",
              "offsetBottom": "none"
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "いいえ",
                "data": "FALSE"
              },
              "style": "secondary"
            }
          ]
        }
      }
    case 2:
      return {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": `${order}つ目の質問`,
              "color": "#aaaaaa",
              "size": "sm"
            },
            {
              "type": "text",
              "text": "アルコールは飲む？",
              "weight": "bold",
              "margin": "xs"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://2.bp.blogspot.com/-g0tX6LwKRvU/UgSL9bM2b9I/AAAAAAAAW4g/j8GETOhjCCA/s400/drink_beer.png"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "はい",
                "data": "TRUE"
              },
              "style": "primary",
              "offsetEnd": "none",
              "offsetBottom": "none"
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "いいえ",
                "data": "FALSE"
              },
              "style": "secondary"
            }
          ]
        }
      }
    case 3:
      return {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": `${order}つ目の質問`,
              "color": "#aaaaaa",
              "size": "sm"
            },
            {
              "type": "text",
              "text": "家族連れ？",
              "weight": "bold",
              "margin": "xs"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://1.bp.blogspot.com/-ZsRZh52shXU/WWNBGGNeLjI/AAAAAAABFZg/rRxw5r719Jk_ymwSq7sViPCl0DIcHjXigCLcBGAs/s600/travel_happy_family_set.png",
          "size": "3xl"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "はい",
                "data": "TRUE"
              },
              "style": "primary",
              "offsetEnd": "none",
              "offsetBottom": "none"
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "いいえ",
                "data": "FALSE"
              },
              "style": "secondary"
            }
          ]
        }
      }
    case 4:
      return {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": `${order}つ目の質問`,
              "color": "#aaaaaa",
              "size": "sm"
            },
            {
              "type": "text",
              "text": "ご当地グルメが食べたい？",
              "weight": "bold",
              "margin": "xs"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://www.city.fukuyama.hiroshima.jp/uploaded/image/11535.jpg"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "はい",
                "data": "TRUE"
              },
              "style": "primary",
              "offsetEnd": "none",
              "offsetBottom": "none"
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "いいえ",
                "data": "FALSE"
              },
              "style": "secondary"
            }
          ]
        }
      }
    case 5:
      return {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": `${order}つ目の質問`,
              "color": "#aaaaaa",
              "size": "sm"
            },
            {
              "type": "text",
              "text": "甘いもの好き？",
              "weight": "bold",
              "margin": "xs"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://4.bp.blogspot.com/-N6KOeEevp1k/UaVVFobLFhI/AAAAAAAAT_c/DvFWPJLwni8/s800/icecream2_strawberry.png"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "はい",
                "data": "TRUE"
              },
              "style": "primary",
              "offsetEnd": "none",
              "offsetBottom": "none"
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "いいえ",
                "data": "FALSE"
              },
              "style": "secondary"
            }
          ]
        }
      }
  }
}