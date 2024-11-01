let drpPersonel = '[data-testid="A54043"] > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let listPersonel = '.dx-list .dx-scrollview-content > div'
let drpBirim = '[data-testid="A54049"] > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let listBirim = '.dx-dropdownlist-popup-wrapper .dx-scrollview-content > div'
let dateBaslangic = '[data-testid="A54055"] > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let btnBugun = '.dx-button-today > .dx-button-content'
let btnTamam = "[aria-label='Tamam'] > .dx-button-content"

export class DisTicaretPersonelAtama {
    create(personel, birim, expectedMessage) {
        cy.clickToAddBtnInToolbar()
        cy.get(drpPersonel).click()
        cy.clickIfTextInListMatchesCssSelector(listPersonel, personel)
        cy.get(drpBirim).click()
        cy.clickIfTextInListMatchesCssSelector(listBirim, birim)
        cy.get(dateBaslangic).click()
        cy.get(btnBugun).click()
        cy.get(btnTamam).click()
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

}