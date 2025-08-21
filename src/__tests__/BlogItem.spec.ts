import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlogItem from '@/components/UI/BlogItem.vue'
import type { PostT } from '@/models/interfaces'

const basePost: PostT = {
  id: 1,
  title: 'Заголовок',
  desc: 'Короткое описание',
  text: 'Полный текст',
  img: '/assets/pict.png',
  createdAt: '01.01.2025',
  readingTime: 3,
  tags: ['Город'],
  comments: [],
}

describe('BlogItem', () => {
  it('pluralizes comments in Russian correctly for 1, 2-4, 5', async () => {
    const makeWrapper = (count: number) => {
      const post: PostT = { ...basePost, comments: Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        author: 'A',
        text: 'T',
        createdAt: 'today',
        img: '/assets/comm.png',
      })) }
      return mount(BlogItem, {
        props: { post },
        global: {
          stubs: {
            'chips-ui': true,
            'comment-ui': true,
            'button-ui': true,
            'input-ui': true,
          },
        },
      })
    }

    expect(makeWrapper(1).text()).toContain('1 комментарий')
    expect(makeWrapper(2).text()).toContain('2 комментария')
    expect(makeWrapper(4).text()).toContain('4 комментария')
    expect(makeWrapper(5).text()).toContain('5 комментариев')
    expect(makeWrapper(11).text()).toContain('11 комментариев')
    expect(makeWrapper(21).text()).toContain('21 комментарий')
  })
})


