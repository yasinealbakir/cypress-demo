import { Menu } from "../pages/menu";
import { slowCypressDown } from "cypress-slow-down";
const menu = new Menu()

slowCypressDown(100)
describe('Menü Testleri', { testIsolation: false }, () => {
    beforeEach(() => {
        cy.step('Oturum açılıyor...')
        cy.fixture('loginData').as('credentials');
        cy.get('@credentials').then((data) => {
            cy.login(data.username, data.password);
        });
    })

    it.only('Ekran Ziyaret Et', () => {
        cy.visit(Cypress.env('preprod'));
        menu.searchInMenu('evrak', 'Evrak Tanım')
    });

    it('Menü Ağacından Ekran Ziyaret Et', () => {
        cy.visit(Cypress.env('preprod'));
        const menuHierarchy = ['Ticari Belgelendirme', 'Ticari İşlemler', 'Tanımlar', 'Bilirkişi Dönem Tanım'];
        menu.clickMenuItem(menuHierarchy, 'ticari-islemler/evrak-tipi-list');
    });
});