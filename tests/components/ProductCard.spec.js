import { mount } from '@vue/test-utils'
import ProductCard from '../../src/components/ProductCard.vue'

describe('ProductCard', () => {
  it('renders the product card with correct information and router-link', () => {
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

    const productName = wrapper.find('[data-test="product-name"]')
    const productDescription = wrapper.find('[data-test="product-description"]')
    const productMaterial = wrapper.find('[data-test="product-material"]')
    const productPrice = wrapper.find('[data-test="product-price"]')
    const routerLink = wrapper.findComponent({ name: 'RouterLink' })

    expect(routerLink.exists()).toBe(true)
    expect(routerLink.props().to).toBe(`/${type}/${result.slug}`)
    expect(productName.text()).toBe(result.name)
    expect(productDescription.text()).toContain(result.description)
    expect(productMaterial.text()).toContain(result.material)
    expect(productPrice.text()).toContain(result.price)
  })
})
