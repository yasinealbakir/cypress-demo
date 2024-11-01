import { slowCypressDown } from "cypress-slow-down";
import { Menu } from "../pages/menu";
import { ParaBirimi } from "../pages/para-birimi";
const menu = new Menu()
const paraBirimi = new ParaBirimi()

slowCypressDown(100)
describe('Para Birimi Ekranı', { testIsolation: false }, () => {
    beforeEach(() => {
        cy.step('Oturum açılıyor...')
        cy.fixture('loginData').as('credentials');
        cy.get('@credentials').then((data) => {
            cy.login(data.username, data.password);
        });

    })

    it('Menü Ağacından Ekranı Ziyaret Et', () => {
        cy.visit(Cypress.env('preprod'));
        const menuHierarchy = ['Genel', 'Tanımlamalar', 'Para Birimi'];
        menu.clickMenuItem(menuHierarchy, '/para-birimi/para-birimi-list');
    });

    it('Para Birimi Tanımlama Testi', () => {
        paraBirimi.create('cypress para birimi', 'cy', 'cy.io', 'Başarı ile kaydedildi.')
    });

});
