export class MalCinsiTanim {
    create(malCinsTanim, exceptedMessage) {
        cy.clickToAddBtnInToolbar()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').type(malCinsTanim)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(exceptedMessage)
    }

    update(searchText, newVal, exceptedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToUpdateBtnInDatagrid()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').clear().type(newVal)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(exceptedMessage)

    }

    delete(searchText, exceptedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToDeleteBtnInDatagrid()
        cy.verifyToastMessage(exceptedMessage)
    }

}