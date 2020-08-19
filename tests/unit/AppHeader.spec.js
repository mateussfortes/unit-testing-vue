import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader'

describe('AppHeader', () => {
  test('if user is not logged, do not show the button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
  test('if user is logged, show the button', async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true }) // set data
    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})