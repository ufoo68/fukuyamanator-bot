import * as Line from '@line/bot-sdk'

export const question = (params: { questionSum: number; quetionThumbnail: string; questionText: string; questionId: number }): Line.FlexContainer => {
  const { questionSum, questionText, quetionThumbnail, questionId } = params;

  return {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: `${questionSum + 1}つ目の質問`,
          color: '#aaaaaa',
          size: 'sm'
        },
        {
          type: 'text',
          text: questionText,
          weight: 'bold',
          margin: 'xs'
        }
      ]
    },
    hero: {
      type: 'image',
      url: quetionThumbnail,
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'button',
          action: {
            type: 'postback',
            label: 'はい',
            data: JSON.stringify({ questionId, answer: true }),
            displayText: 'はい',
          },
          style: 'primary',
          offsetEnd: 'none',
          offsetBottom: 'none'
        },
        {
          type: 'separator',
          margin: 'lg'
        },
        {
          type: 'button',
          action: {
            type: 'postback',
            label: 'いいえ',
            data: JSON.stringify({ questionId, answer: false }),
            displayText: 'いいえ',
          },
          style: 'secondary'
        }
      ]
    }
  }
}
