import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonItem from '@/components/UI/ButtonItem.vue'

describe('ButtonItem', () => {
  it('renders default (filled) styles and slot content', () => {
    const wrapper = mount(ButtonItem, {
      slots: { default: 'Click me' },
    })

    const btn = wrapper.get('button')
    expect(btn.text()).toBe('Click me')
    expect(btn.classes()).toContain('bg-primary')
    expect(btn.classes()).toContain('text-white')
  })

  it('applies outline and disabled styles', async () => {
    const wrapper = mount(ButtonItem, {
      props: { outline: true },
      slots: { default: 'Outline' },
    })

    const btn = wrapper.get('button')
    expect(btn.classes()).toContain('bg-lightPrimary')
    expect(btn.classes()).toContain('text-primary')

    await wrapper.setProps({ disabled: true })
    expect(btn.classes()).toContain('pointer-events-none')
    expect(btn.classes()).toContain('bg-lightWhite')
    expect(btn.classes()).toContain('text-textGray')
  })
})


