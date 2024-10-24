import { Common } from "./common"
const common = new Common()
export class MalCinsiTanim {
    create(malCinsTanim, exceptedMessage) {
        common.clickToAddBtnInToolbar()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').type(malCinsTanim)
        common.clickToSaveBtnInPopup()
        common.verifyToastMessage(exceptedMessage)
    }

    update(searchText, newVal, exceptedMessage) {

        common.searchInDatagrid(searchText)
        common.clickToUpdateBtnInDatagrid()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').clear().type(newVal)
        common.clickToSaveBtnInPopup()
        common.verifyToastMessage(exceptedMessage)

    }

    delete(searchText, exceptedMessage) {
        common.searchInDatagrid(searchText)
        cy.get('.dx-button-danger').should('be.visible').click()
        cy.get("[aria-label='Evet']").should('be.visible').click()
        common.verifyToastMessage(exceptedMessage)
    }

}