import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputSearch from '@/components/UI/InputSearch.vue'

describe('InputSearch', () => {
  it('shows counter and highlights when over maxLength', async () => {
    const wrapper = mount(InputSearch, {
      props: { placeholder: 'Search', maxLength: 5 },
    })

    const input = wrapper.get('input')
    await input.setValue('123456')

    // counter visible
    expect(wrapper.text()).toContain('из 5 символов')
    // over limit has error class applied to counter (p) and input border
    const counterP = wrapper.get('p')
    expect(counterP.classes()).toContain('text-error')
    expect(input.classes()).toContain('border-error')
  })

  it('renders clear button and clears value when clicked', async () => {
    const wrapper = mount(InputSearch, {
      props: { placeholder: 'Find' },
    })
    const input = wrapper.get('input')
    await input.setValue('hello')

    const clearBtn = wrapper.get('button[type="button"]')
    await clearBtn.trigger('click')
    expect((input.element as HTMLInputElement).value).toBe('')
  })
})


