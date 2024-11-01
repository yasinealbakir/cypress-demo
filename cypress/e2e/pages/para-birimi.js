let txtAdi = '[data-testid="A14896"] > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let txtKisaltma = '[data-testid="A14900"] > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let txtSimge = '[data-testid="A14904"] > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let checkGunlukKur = '.dx-checkbox'

export class ParaBirimi {

    create(adi, kisaltma, simge, expectedMessage) {
        cy.clickToAddBtnInToolbar()
        cy.get(txtAdi).clear().type(adi)
        cy.get(txtKisaltma).clear().type(kisaltma)
        cy.get(txtSimge).clear().type(simge)
        cy.get(checkGunlukKur).click()
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

}