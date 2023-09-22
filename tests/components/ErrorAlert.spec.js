import { mount } from '@vue/test-utils'
import ErrorAlert from '../../src/components/ErrorAlert.vue'

test('renders the error message and NotExistIcon', () => {
  const errorMessage = 'This is an error message'

  const wrapper = mount(ErrorAlert, {
    props: {
      message: errorMessage
    }
  })

  expect(wrapper.text()).toContain(errorMessage)
  expect(wrapper.findComponent({ name: 'NotExistIcon' }).exists()).toBe(true)
})
