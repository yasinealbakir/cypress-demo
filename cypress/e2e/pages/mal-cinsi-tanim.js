import { Common } from "./common"
const common = new Common()
export class MalCinsiTanim {
    create(malCinsTanim) {
        cy.get('.dx-icon-insertrowbelow').if('visible').click()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').type(malCinsTanim)
        cy.xpath("//span[.='Kaydet']").if('visible').click()
        cy.get('.dx-toast-message').should('contain', 'Başarı ile kaydedildi.')
    }

    update(searchText, newVal) {

        common.searchInDatagrid(searchText)
        cy.xpath("//dx-button[@class='dx-widget dx-button dx-button-mode-text dx-button-default dx-button-has-icon']").should('be.visible').click()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').clear().type(newVal)
        cy.xpath("//span[.='Kaydet']").if('visible').click()
        cy.get('.dx-toast-message').should('contain', 'Başarı ile güncellendi.')

    }

    delete(searchText) {

        common.searchInDatagrid(searchText)
        cy.get('.dx-button-danger').should('be.visible').click()
        cy.get("[aria-label='Evet']").should('be.visible').click()
        cy.get('.dx-toast-message').should('contain', 'Başarı ile silindi.')
    }

}