import { mount } from '@vue/test-utils'
import PeopleCard from '../../src/components/PeopleCard.vue'

describe('PeopleCard', () => {
  it('renders the people card with correct information and router-link', () => {
    const result = {
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Software Engineer',
      bio: 'A brief bio about John Doe',
      sexType: 'male',
      slug: 'john-doe'
    }
    const type = 'people'

    const wrapper = mount(PeopleCard, {
      props: {
        result,
        type
      }
    })

    const routerLink = wrapper.findComponent({ name: 'RouterLink' })
    expect(routerLink.exists()).toBe(true)
    expect(routerLink.props().to).toBe(`/${type}/${result.slug}`)

    expect(wrapper.find('.title').text()).toBe(`${result.firstName} ${result.lastName}`)
    expect(wrapper.find('.subtitle-primary').text()).toBe(result.jobTitle)
    expect(wrapper.find('.subtitle-secondary').text()).toBe(result.bio)
  })
})
