import { mount } from '@vue/test-utils'
import CategoryCard from '../../src/components/CategoryCard.vue'

test('renders the name and description props', () => {
  const name = 'Test Card'
  const description = 'This is a test card description'

  const wrapper = mount(CategoryCard, {
    props: {
      name,
      description
    }
  })

  expect(wrapper.find('h4').text()).toBe(name)
  expect(wrapper.find('p').text()).toBe(description)
})

test('renders the slot content', () => {
  const slotContent = '<div class="custom-icon">Custom Icon</div>'

  const wrapper = mount(CategoryCard, {
    slots: {
      icon: slotContent
    }
  })

  expect(wrapper.find('.custom-icon').exists()).toBe(true)
  expect(wrapper.find('.custom-icon').text()).toBe('Custom Icon')
})
