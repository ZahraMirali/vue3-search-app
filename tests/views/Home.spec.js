import { mount } from '@vue/test-utils'
import Home from '../../src/views/Home.vue'
import categories from '../../src/data/categories.json'

describe('Home', () => {
  it('renders the categories correctly', () => {
    const wrapper = mount(Home)
    const categoryCards = wrapper.findAllComponents({ name: 'CategoryCard' })
    expect(categoryCards.length).toBe(categories.length)

    categoryCards.forEach((card, index) => {
      expect(card.text()).toContain(categories[index].label)
      expect(card.text()).toContain(categories[index].description)
    })
  })
})
