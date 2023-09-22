import { mount } from '@vue/test-utils'
import HomePage from '../../src/views/HomePage.vue'
import categories from '../../src/data/categories.json'

describe('HomePage', () => {
  it('renders the categories correctly', () => {
    const wrapper = mount(HomePage)
    const categoryCards = wrapper.findAllComponents({ name: 'CategoryCard' })
    expect(categoryCards.length).toBe(categories.length)

    categoryCards.forEach((card, index) => {
      expect(card.text()).toContain(categories[index].label)
      expect(card.text()).toContain(categories[index].description)
    })
  })
})
