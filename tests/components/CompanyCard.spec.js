import { mount } from '@vue/test-utils'
import CompanyCard from '../../src/components/CompanyCard.vue'

describe('CompanyCard', () => {
  it('renders the company card with correct information and router-link', () => {
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

    const companyCatchPhrase = wrapper.find('[data-test="company-catch-phrase"]')
    const companyBuzzPhrase = wrapper.find('[data-test="company-buzz-phrase"]')
    const companyTitle = wrapper.find('[data-test="company-title"]')
    const routerLink = wrapper.findComponent({ name: 'router-link' })

    expect(routerLink.exists()).toBe(true)
    expect(routerLink.props().to).toBe(`/${type}/${result.slug}`)
    expect(companyTitle.text()).toBe(result.name)
    expect(companyCatchPhrase.text()).toBe(result.catchPhrase)
    expect(companyBuzzPhrase.text()).toBe(result.buzzPhrase)
  })
})
