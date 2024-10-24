import { Common } from "./common"
const common = new Common()
export class EvrakTipiTanim {

    create(ad, kod, belge, personel, exceptedMessage) {
        common.clickToAddBtnInToolbar()

        cy.xpath("//dx-text-box[@class='dx-validator dx-visibility-change-handler dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-texteditor-empty dx-widget dx-texteditor-with-floating-label']").clear().type(ad)

        cy.get('.dx-texteditor-masked').clear().type(kod)
        cy.xpath("//dx-select-box[.='Belge']").click()

        common.clickIfTextInListMatches("//div[@class='dx-scrollable dx-scrollview dx-visibility-change-handler dx-scrollable-vertical dx-scrollable-simulated dx-list dx-widget dx-collection']//div[@class='dx-scrollable-container']/div/div/div", belge)

        cy.xpath("//dx-select-box[.='Atanabilen Personel Tipi']").click()

        common.clickIfTextInListMatches("//div[@class='dx-overlay-content dx-popup-normal dx-resizable']//div[@class='dx-scrollview-content']/div", personel)

        common.clickToSaveBtnInPopup()
        common.verifyToastMessage(exceptedMessage)
    }

    update(searchText, newVal) {
        common.searchInDatagrid(searchText)
        common.clickToUpdateBtnInDatagrid()
        cy.get("[data-testid='A54529'] .dx-texteditor-input").clear().type(newVal)
        common.clickToSaveBtnInPopup()
        common.verifyToastMessage(exceptedMessage)
    }

    delete(searchText) {
        common.searchInDatagrid(searchText)
        cy.get('.dx-button-danger').should('be.visible').click()
        cy.get("[aria-label='Evet']").should('be.visible').click()
        common.verifyToastMessage(exceptedMessage)

    }

}