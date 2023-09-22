import { mount } from '@vue/test-utils'
import SearchBar from '../../src/components/SearchBar.vue'

// Mock the dependencies
const categories = [
  { label: 'Category 1', value: 'category1' },
  { label: 'Category 2', value: 'category2' }
]

const routerPushMock = jest.fn()

const customSelectStub = {
  template: '<div class="custom-select"></div>',
  props: ['options', 'value']
}

const iconSearchStub = {
  template: '<div class="icon-search"></div>'
}

const routeMock = {
  params: { type: 'all' },
  query: { keywords: 'searchTerm' }
}

const useRouterMock = () => ({
  push: routerPushMock
})

const useRouteMock = () => routeMock

describe('SearchBar.vue', () => {
  it('renders the search bar and handles input', async () => {
    const wrapper = mount(SearchBar, {
      global: {
        provide: {
          categories
        },
        stubs: {
          CustomSelect: customSelectStub,
          IconSearch: iconSearchStub
        },
        mocks: {
          $router: useRouterMock(),
          $route: useRouteMock()
        }
      }
    })

    const customSelect = wrapper.findComponent(customSelectStub)
    await customSelect.vm.$emit('input', 'category1')

    const searchInput = wrapper.find('.search-input')
    await searchInput.setValue('newSearchTerm')

    const searchForm = wrapper.find('form')
    await searchForm.trigger('submit.prevent')

    expect(routerPushMock).toHaveBeenCalledWith('/category1?keywords=newSearchTerm')
  })
})
