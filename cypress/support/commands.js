Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Maik',
    lastName: 'Rocha',
    email:'test@test.com',
    text: 'Teste123'
}) => { 
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text, {delay: 30})
    cy.get('.button').click()
})