export class MalCinsiTanim {
    create(malCinsTanim) {
        cy.get('.dx-icon-insertrowbelow').if('visible').click()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').type(malCinsTanim)
        cy.xpath("//span[.='Kaydet']").if('visible').click()
        cy.get('.dx-toast-message').should('contain', 'Başarı ile kaydedildi.')
    }

    update(searchText, newVal) {
        cy.get("[aria-label='Tabloda ara']").should('be.visible').clear().type(searchText)
        cy.get('.dx-datagrid-summary-item').should('have.text', 'Toplam: 1')
        cy.xpath("//dx-button[@class='dx-widget dx-button dx-button-mode-text dx-button-default dx-button-has-icon']").should('be.visible').click()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').clear().type(newVal)
        cy.xpath("//span[.='Kaydet']").if('visible').click()
        cy.get('.dx-toast-message').should('contain', 'Başarı ile güncellendi.')

    }

    delete() {
        cy.get('.dx-datagrid-summary-item').should('have.text', 'Toplam: 1')
        cy.get('.dx-button-danger').should('be.visible').click()
        cy.get("[aria-label='Evet']").should('be.visible').click()
        cy.get('.dx-toast-message').should('contain', 'Başarı ile silindi.')
    }

}