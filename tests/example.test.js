// fixture(`Index page`).page('http://localhost:8080')

// test('Body > Paragraph contains "Hello World!"', async (testController) => {
//   const paragraphSelector = await new Selector('body > p')
//   await testController.expect(paragraphSelector.innerText).eql('Hello World!')
// })

// test('Typing in an input', async (testController) => {
//   const inputSelector = await new Selector('body > input[type="text"]')

//   await testController
//     .typeText(inputSelector, 'World!')
//     .click(inputSelector, { caretPos: 0 })
//     .keyPress('H e l l o space')
//     .expect(inputSelector.value)
//     .eql('Hello World!')
// })
