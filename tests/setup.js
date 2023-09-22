import { config } from '@vue/test-utils'

jest.mock('vue-router', () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn(() => ({
    push: () => {}
  }))
}))

config.global.stubs = ['router-link', 'router-view']
