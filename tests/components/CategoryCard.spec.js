import { mount } from '@vue/test-utils'
import CategoryCard from '../../src/components/CategoryCard.vue'

describe('CategoryCard', () => {
  it('renders the name and description props', () => {
    const name = 'Category 1'
    const description = 'This is a category description'

    const wrapper = mount(CategoryCard, {
      props: {
        name,
        description
      }
    })

    expect(wrapper.find('[data-test="category-name"]').text()).toBe('Category 1')
    expect(wrapper.find('[data-test="category-description"]').text()).toBe(
      'This is a category description'
    )
  })

  it('renders the slot content', () => {
    const slotContent = '<div data-test="custom-icon">Custom Icon</div>'

    const wrapper = mount(CategoryCard, {
      slots: {
        icon: slotContent
      }
    })

    expect(wrapper.find('[data-test="custom-icon"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="custom-icon"]').text()).toBe('Custom Icon')
  })
})
