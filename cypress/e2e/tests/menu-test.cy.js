import { Menu } from "../pages/menu";
import { Header } from "../pages/header";
import { slowCypressDown } from "cypress-slow-down";
const menu = new Menu()
const header = new Header()

slowCypressDown(100)
describe('Menü Testleri', { testIsolation: false }, () => {
    beforeEach(() => {
        cy.step('Oturum açılıyor...')
        cy.fixture('loginData').as('credentials');
        cy.get('@credentials').then((data) => {
            cy.login(data.username, data.password);
        });
    })

    it('Ekran Ziyaret Et', () => {
        cy.visit(Cypress.env('preprod'));
        menu.searchInMenu('evrak', 'Evrak Tanım')
    });

    it('Menü Ağacından Ekran Ziyaret Et', () => {
        cy.visit(Cypress.env('preprod'));
        const menuHierarchy = ['Ticari Belgelendirme', 'Ticari İşlemler', 'Tanımlar', 'Bilirkişi Dönem Tanım'];
        menu.clickMenuItem(menuHierarchy, '/ticari-islemler/bilirkisi-donem-tanim-list');
    });

    it('Oturum Kapatma Testi', () => {
        header.signOut()
    });

});