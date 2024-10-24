export class Common {

    searchInDatagrid(val) {
        cy.get("[aria-label='Tabloda ara']").should('be.visible').clear().type(val)
        cy.get('.dx-datagrid-summary-item').should('have.text', 'Toplam: 1')
    }

    verifyToastMessage(text) {
        cy.get('.dx-toast-message').should('contain', text)
    }

    clickToSaveBtnInPopup() {
        cy.xpath("//span[.='Kaydet']").if('visible').click()
    }

    clickToUpdateBtnInDatagrid() {
        cy.xpath("//dx-button[@class='dx-widget dx-button dx-button-mode-text dx-button-default dx-button-has-icon']").should('be.visible').click()
    }

    clickToAddBtnInToolbar() {
        cy.get('.dx-icon-insertrowbelow').if('visible').click()

    }

    clickIfTextInListMatches(selector, findText) {
        cy.xpath(selector).then(($el) => {
            cy.wrap($el).each(($item) => {

                if ($item.text().includes(findText)) {
                    cy.wrap($item).click();
                    return false;
                }
            })
        })

    }

}