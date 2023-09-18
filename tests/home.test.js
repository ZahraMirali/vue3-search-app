import { Selector } from 'testcafe'

fixture`Home Page`.page`http://localhost:5173`

test('Homepage Content Test', async (t) => {
  const title = Selector('h1')
  const description = Selector('p')

  await t
    .expect(title.exists)
    .ok()
    .expect(title.innerText)
    .eql('Welcome to the Search App')
    .expect(description.exists)
    .ok()
    .expect(description.innerText)
    .eql('Please use the search bar to find results.')
})
