export class EvrakTipiTanim {

    create(ad, kod, belge, personel, expectedMessage) {
        cy.clickToAddBtnInToolbar()

        cy.xpath("//dx-text-box[@class='dx-validator dx-visibility-change-handler dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-texteditor-empty dx-widget dx-texteditor-with-floating-label']").clear().type(ad)

        cy.get('.dx-texteditor-masked').clear().type(kod)
        cy.xpath("//dx-select-box[.='Belge']").click()

        cy.clickIfTextInListMatches("//div[@class='dx-scrollable dx-scrollview dx-visibility-change-handler dx-scrollable-vertical dx-scrollable-simulated dx-list dx-widget dx-collection']//div[@class='dx-scrollable-container']/div/div/div", belge)

        cy.xpath("//dx-select-box[.='Atanabilen Personel Tipi']").click()

        cy.clickIfTextInListMatches("//div[@class='dx-overlay-content dx-popup-normal dx-resizable']//div[@class='dx-scrollview-content']/div", personel)

        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    update(searchText, newVal, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToUpdateBtnInDatagrid()
        cy.get("[data-testid='A54529'] .dx-texteditor-input").clear().type(newVal)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    delete(searchText, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToDeleteBtnInDatagrid()
        cy.verifyToastMessage(expectedMessage)

    }

    export(fileName, fileExtension) {
        cy.export(fileName, fileExtension)

    }

}