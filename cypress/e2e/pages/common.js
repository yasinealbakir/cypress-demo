export class Common {

    searchInDatagrid(val) {
        cy.get("[aria-label='Tabloda ara']").should('be.visible').clear().type(val)
        cy.get('.dx-datagrid-summary-item').should('have.text', 'Toplam: 1')
    }

}