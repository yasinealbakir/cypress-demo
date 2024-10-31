let topbarUserSelector = '.kt-header__topbar-user'
let signOutBtn = '.mat-stroked-button'

export class Header {

    signOut() {
        cy.get(topbarUserSelector).click()
        cy.get(signOutBtn).if('visible').click()
        cy.title().should('eq', 'Tek Hesapla Giriş')
    }


}