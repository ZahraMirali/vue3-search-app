import { mount } from '@vue/test-utils'
import SearchBar from '../../src/components/SearchBar.vue'
import { useRouter, useRoute } from 'vue-router'

jest.mock('vue-router')

const route = {
  params: { type: 'people' },
  query: { keywords: '' }
}

test('updates selectedCategory on CustomSelect input', async () => {
  useRoute.mockImplementationOnce(() => route)

  const push = jest.fn()
  useRouter.mockImplementationOnce(() => ({ push }))

  const wrapper = mount(SearchBar)
  const customSelect = wrapper.findComponent({ name: 'CustomSelect' })
  await customSelect.vm.$emit('input', 'companies')
  expect(wrapper.vm.selectedCategory).toBe('companies')
  expect(push).toHaveBeenCalledTimes(1)
  expect(push).toHaveBeenCalledWith('/companies')
})

test('updates searchTerm and navigates to the correct route on form submit', async () => {
  useRoute.mockImplementationOnce(() => route)

  const push = jest.fn()
  useRouter.mockImplementationOnce(() => ({ push }))

  const wrapper = mount(SearchBar)
  const input = wrapper.find('.search-input')
  input.setValue('search')
  await wrapper.find('form').trigger('submit.prevent')

  expect(wrapper.vm.searchTerm).toBe('search')
  expect(push).toHaveBeenCalledTimes(1)
  expect(push).toHaveBeenCalledWith('/people?keywords=search')
})
