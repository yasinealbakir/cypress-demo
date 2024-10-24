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

Cypress.Commands.add('searchInDatagrid', (val) => {
    cy.get("[aria-label='Tabloda ara']").should('be.visible').clear().type(val)
    cy.get('.dx-datagrid-summary-item').should('have.text', 'Toplam: 1')
})

Cypress.Commands.add('verifyToastMessage', (text) => {
    cy.get('.dx-toast-message').should('contain', text)
})

Cypress.Commands.add('clickToSaveBtnInPopup', () => {
    cy.xpath("//span[.='Kaydet']").if('visible').click()
})

Cypress.Commands.add('clickToUpdateBtnInDatagrid', () => {
    cy.xpath("//dx-button[@class='dx-widget dx-button dx-button-mode-text dx-button-default dx-button-has-icon']").should('be.visible').click()
})

Cypress.Commands.add('clickToAddBtnInToolbar', () => {
    cy.get('.dx-icon-insertrowbelow').if('visible').click()
})

Cypress.Commands.add('clickIfTextInListMatches', (selector, findText) => {
    cy.xpath(selector).then(($el) => {
        cy.wrap($el).each(($item) => {

            if ($item.text().includes(findText)) {
                cy.wrap($item).click();
                return false;
            }
        })
    })
})

Cypress.Commands.add('clickToDeleteBtnInDatagrid', () => {
    cy.get('.dx-button-danger').should('be.visible').click()
    cy.get("[aria-label='Evet']").should('be.visible').click()
})