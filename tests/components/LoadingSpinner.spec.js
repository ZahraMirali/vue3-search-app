import { mount } from '@vue/test-utils'
import LoadingSpinner from '../../src/components/LoadingSpinner.vue'

describe('LoadingSpinner', () => {
  it('renders the loading spinner', () => {
    const wrapper = mount(LoadingSpinner)

    expect(wrapper.find('.loading-spinner').exists()).toBe(true)
    expect(wrapper.find('.spinner').exists()).toBe(true)
  })
})
