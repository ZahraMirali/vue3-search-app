import { mount } from '@vue/test-utils'
import LocationCard from '../../src/components/LocationCard.vue'

describe('LocationCard', () => {
  it('renders the location card with correct information and router-link', () => {
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

    const locationCounty = wrapper.find('[data-test="location-county"]')
    const locationAddress = wrapper.find('[data-test="location-address"]')
    const locationZipCode = wrapper.find('[data-test="location-zip-code"]')
    const routerLink = wrapper.findComponent({ name: 'RouterLink' })

    expect(routerLink.exists()).toBe(true)
    expect(routerLink.props().to).toBe(`/${type}/${result.slug}`)
    expect(locationCounty.text()).toBe(result.county)
    expect(locationAddress.text()).toContain(result.city)
    expect(locationAddress.text()).toContain(result.street)
    expect(locationAddress.text()).toContain(result.buildingNumber)
    expect(locationZipCode.text()).toContain(result.zipCode)
  })
})
