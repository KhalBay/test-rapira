import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App', () => {
  it('mounts without real router (smoke test)', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          HeaderItem: true,
          RouterView: true,
        },
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
