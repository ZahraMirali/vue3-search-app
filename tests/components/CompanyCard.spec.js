import { mount } from '@vue/test-utils'
import CompanyCard from '../../src/components/CompanyCard.vue'

test('renders the company card with correct information and router-link', () => {
  const result = {
    name: 'Example Company',
    catchPhrase: 'Catchy phrase',
    buzzPhrase: 'Buzzing phrase',
    slug: 'example-company'
  }
  const type = 'companies'

  const wrapper = mount(CompanyCard, {
    props: {
      result,
      type
    }
  })

  const routerLink = wrapper.findComponent({ name: 'router-link' })
  expect(routerLink.exists()).toBe(true)
  expect(routerLink.props().to).toBe(`/${type}/${result.slug}`)

  expect(wrapper.find('.title').text()).toBe(result.name)
  expect(wrapper.text()).toContain(result.catchPhrase)
  expect(wrapper.text()).toContain(result.buzzPhrase)
})
