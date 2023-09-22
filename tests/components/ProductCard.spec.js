import { mount } from '@vue/test-utils'
import ProductCard from '../../src/components/ProductCard.vue'

test('renders the product card with correct information and router-link', () => {
  const result = {
    name: 'Product Name',
    description: 'Product Description',
    material: 'Product Material',
    price: '$99.99',
    slug: 'product-slug'
  }
  const type = 'products'

  const wrapper = mount(ProductCard, {
    props: {
      result,
      type
    }
  })

  const routerLink = wrapper.findComponent({ name: 'RouterLink' })
  expect(routerLink.exists()).toBe(true)
  expect(routerLink.props().to).toBe(`/${type}/${result.slug}`)

  expect(wrapper.find('.title').text()).toBe(result.name)
  expect(wrapper.text()).toContain(result.description)
  expect(wrapper.text()).toContain(result.material)
  expect(wrapper.text()).toContain(result.price)
})
