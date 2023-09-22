import { mount } from '@vue/test-utils'
import CustomSelect from '../../src/components/CustomSelect.vue'

test('renders the component with options', async () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ]

  const wrapper = mount(CustomSelect, {
    props: {
      options
    }
  })

  await wrapper.trigger('click')

  options.forEach((option) => {
    expect(wrapper.text()).toContain(option.label)
  })

  await wrapper.trigger('blur')
})

test('emits the selected option on click', async () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ]

  const wrapper = mount(CustomSelect, {
    props: {
      options
    }
  })

  await wrapper.trigger('click')

  const selectedOption = options[1]
  await wrapper.find(`[data-test="option-${selectedOption.value}"]`).trigger('click')

  expect(wrapper.emitted().input[0]).toEqual([selectedOption.value])

  await wrapper.trigger('blur')
})
