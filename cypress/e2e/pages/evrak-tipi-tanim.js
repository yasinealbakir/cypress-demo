import { Common } from "./common"
const common = new Common()
export class EvrakTipiTanim {

    create(ad, kod, belge, personel) {

        cy.get('.dx-icon-insertrowbelow').if('visible').click()

        cy.xpath("[data-testid='A54529'] .dx-texteditor-input").type(ad)

        cy.get('.dx-texteditor-masked').type(kod)

        cy.xpath("//dx-select-box[.='Belge']").click()

        cy.xpath("//div[@class='dx-scrollable dx-scrollview dx-visibility-change-handler dx-scrollable-vertical dx-scrollable-simulated dx-list dx-widget dx-collection']//div[@class='dx-scrollable-container']/div/div/div").then(($el) => {
            cy.wrap($el).each(($item) => {

                if ($item.text().includes(belge)) {
                    cy.wrap($item).click();
                    return false;
                }
            })
        })

        cy.xpath("//dx-select-box[.='Atanabilen Personel Tipi']").click()
        cy.xpath("//div[@class='dx-overlay-content dx-popup-normal dx-resizable']//div[@class='dx-scrollview-content']/div").then(($el) => {
            cy.wrap($el).each(($item) => {
                if ($item.text().includes(personel)) {
                    cy.wrap($item).click();
                    return false;
                }
            })
        })

        cy.xpath("//span[.='Kaydet']").if('visible').click()

        cy.get('.dx-toast-message').should('contain', 'Başarı ile kaydedildi.')
    }

    update(searchText, newVal) {

        common.searchInDatagrid(searchText)

        cy.xpath("//dx-button[@class='dx-widget dx-button dx-button-mode-text dx-button-default dx-button-has-icon']").should('be.visible').click()

        cy.get("[data-testid='A54529'] .dx-texteditor-input").clear().type(newVal)

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