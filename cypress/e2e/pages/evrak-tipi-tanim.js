export class EvrakTipiTanim {

    create(ad, kod, belge, personel, exceptedMessage) {
        cy.clickToAddBtnInToolbar()

        cy.xpath("//dx-text-box[@class='dx-validator dx-visibility-change-handler dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-texteditor-empty dx-widget dx-texteditor-with-floating-label']").clear().type(ad)

        cy.get('.dx-texteditor-masked').clear().type(kod)
        cy.xpath("//dx-select-box[.='Belge']").click()

        cy.clickIfTextInListMatches("//div[@class='dx-scrollable dx-scrollview dx-visibility-change-handler dx-scrollable-vertical dx-scrollable-simulated dx-list dx-widget dx-collection']//div[@class='dx-scrollable-container']/div/div/div", belge)

        cy.xpath("//dx-select-box[.='Atanabilen Personel Tipi']").click()

        cy.clickIfTextInListMatches("//div[@class='dx-overlay-content dx-popup-normal dx-resizable']//div[@class='dx-scrollview-content']/div", personel)

        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(exceptedMessage)
    }

    update(searchText, newVal) {
        cy.searchInDatagrid(searchText)
        cy.clickToUpdateBtnInDatagrid()
        cy.get("[data-testid='A54529'] .dx-texteditor-input").clear().type(newVal)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(exceptedMessage)
    }

    delete(searchText) {
        cy.searchInDatagrid(searchText)
        cy.get('.dx-button-danger').should('be.visible').click()
        cy.get("[aria-label='Evet']").should('be.visible').click()
        cy.verifyToastMessage(exceptedMessage)

    }

}