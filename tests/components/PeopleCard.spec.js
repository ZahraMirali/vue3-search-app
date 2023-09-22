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

    const peopleName = wrapper.find('[data-test="people-name"]')
    const peopleJobTitle = wrapper.find('[data-test="people-job-title"]')
    const peopleBio = wrapper.find('[data-test="people-bio"]')
    const routerLink = wrapper.findComponent({ name: 'RouterLink' })

    expect(routerLink.exists()).toBe(true)
    expect(routerLink.props().to).toBe(`/${type}/${result.slug}`)
    expect(peopleName.text()).toBe(`${result.firstName} ${result.lastName}`)
    expect(peopleJobTitle.text()).toBe(result.jobTitle)
    expect(peopleBio.text()).toBe(result.bio)
  })
})
