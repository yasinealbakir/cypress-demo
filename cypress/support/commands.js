// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit(Cypress.env('preprod'))
        cy.title().should('eq', 'Tek Hesapla Giriş')
        cy.get('a.rigth.btn-user').click()
        cy.get('#Email').clear().type(username)
        cy.get('#password-user').clear().type(password)
        cy.get('#DevLogin').click()
        cy.get('#login-form > fieldset > div.form-group.bottom > div.inner > button').click()
        cy.url().should('contains', 'dashboard')

    })


})