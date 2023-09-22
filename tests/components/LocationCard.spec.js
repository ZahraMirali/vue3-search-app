import { mount } from '@vue/test-utils'
import LocationCard from '../../src/components/LocationCard.vue'

test('renders the location card with correct information and router-link', () => {
  const result = {
    county: 'County Name',
    city: 'City Name',
    street: 'Street Name',
    zipCode: '12345',
    buildingNumber: '42',
    slug: 'location-slug'
  }
  const type = 'locations'

  const wrapper = mount(LocationCard, {
    props: {
      result,
      type
    }
  })

  const routerLink = wrapper.findComponent({ name: 'RouterLink' })
  expect(routerLink.exists()).toBe(true)
  expect(routerLink.props().to).toBe(`/${type}/${result.slug}`)

  expect(wrapper.find('.title').text()).toBe(result.county)
  expect(wrapper.text()).toContain(result.city)
  expect(wrapper.text()).toContain(result.street)
  expect(wrapper.text()).toContain(result.zipCode)
  expect(wrapper.text()).toContain(result.buildingNumber)
})
