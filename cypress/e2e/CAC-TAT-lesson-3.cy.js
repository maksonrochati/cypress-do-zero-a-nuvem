
describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
        
    it('Verifica o título da aplicação', () => {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    });
    
    it('Preenche os campos obrigatórios e envia o formulário', () => {
        const longText = Cypress._.repeat('jesus ', 3) // Função loodash para repetir por 10 vezes
        cy.get('#firstName').type('Makson')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('test@test.com')
        cy.get('#open-text-area').type(longText, {delay: 30})
        cy.get('.button').click()

        cy.get('.success').should('be.visible')
    });

    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        const longText = Cypress._.repeat('jesus ', 10)
        cy.get('#firstName').type('Makson')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('-test.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('.button').click()

        cy.get('.error').should('be.visible')
    });

    it('Se o valor digitado no campo telefone não for numérico deve permanecer em branco', () => {
        cy.get('#firstName').type('Makson')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('-test.com') 
        cy.get('#phone').type('abc') 

        cy.get('#phone').should('have.value', '') 
    });

    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        const longText = Cypress._.repeat('jesus ', 10)
        cy.get('#firstName').type('Makson')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('-test.com') 
        cy.get('#phone-checkbox').check() 
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('.button').click()

        cy.get('.error').should('be.visible')
    });

    it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName')
          .type('Makson')
          .should('have.value', 'Makson')
          .clear()
          .should('have.value', '')

        cy.get('#lastName')
          .type('Rocha')
          .should('have.value', 'Rocha')
          .clear()
          .should('have.value', '')

        cy.get('#email')
          .type('test@test.com')
          .should('have.value', 'test@test.com')
          .clear()
          .should('have.value', '') 

        cy.get('#phone')
          .type('1234567890')
          .should('have.value', '1234567890')
          .clear()
          .should('have.value', '')
    });

    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    });

    it('Envia o formuário com sucesso usando um comando customizado', () => {
        const data = {
            firstName: 'Makson',
            lastName: 'Rocha',
            email:'test@test.com',
            text: 'Test'
        }
        
        cy.fillMandatoryFieldsAndSubmit(data)

        cy.get('.success').should('be.visible')
    });
});