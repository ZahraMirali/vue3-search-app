import { mount } from '@vue/test-utils'
import SearchResultsPage from '../../src/views/SearchResultsPage.vue'
import flushPromises from 'flush-promises'
import { fetchSearchResults } from '../../src/services/search'

jest.mock('../../src/services/search')

describe('SearchResultsPage', () => {
  it('displays loading spinner when loading is true', async () => {
    fetchSearchResults.mockReturnValue(new Promise(() => {}))

    const wrapper = mount(SearchResultsPage)
    await flushPromises()

    expect(wrapper.findComponent({ name: 'LoadingSpinner' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'ErrorAlert' }).exists()).toBe(false)
    expect(wrapper.find('[data-test="search-results"]').exists()).toBe(false)
  })

  it('displays error alert when error is not null', async () => {
    fetchSearchResults.mockRejectedValue('Error')

    const wrapper = mount(SearchResultsPage)
    await flushPromises()

    expect(wrapper.findComponent({ name: 'LoadingSpinner' }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'ErrorAlert' }).exists()).toBe(true)
    expect(wrapper.find('[data-test="search-results"]').exists()).toBe(false)
  })

  it('displays search results when loading and error are false', async () => {
    fetchSearchResults.mockResolvedValue({ people: { data: [{}] }, companies: { data: [{}] } })

    const wrapper = mount(SearchResultsPage)
    await flushPromises()

    expect(wrapper.findComponent({ name: 'LoadingSpinner' }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'ErrorAlert' }).exists()).toBe(false)
    expect(wrapper.findAll('[data-test="search-results"]')).toHaveLength(2)
  })
})
