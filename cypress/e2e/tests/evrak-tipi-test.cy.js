import { Menu } from "../pages/menu";
import { EvrakTipiTanim } from "../pages/evrak-tipi-tanim";
import { slowCypressDown } from "cypress-slow-down";
const menu = new Menu()
const evrakTipiTanim = new EvrakTipiTanim()

slowCypressDown(100)
describe('Ticari Belgelendirme Testleri', { testIsolation: false }, () => {
    beforeEach(() => {
        cy.step('Oturum açılıyor...')
        cy.fixture('loginData').as('credentials');
        cy.get('@credentials').then((data) => {
            cy.login(data.username, data.password);
        });
    })

    it.only('Evrak Tipi Tanım Sayfasını Ziyaret Et', () => {
        cy.visit(Cypress.env('preprod'));
        const menuHierarchy = ['Ticari Belgelendirme', 'Ticari İşlemler', 'Tanımlar', 'Evrak Tipi Tanım'];
        menu.clickMenuItem(menuHierarchy, 'ticari-islemler/evrak-tipi-list');
    });

    it('Evrak Tipi Tanımlama Testi', () => {
        evrakTipiTanim.create('test', 100, 'Türk Malı Belgesi', 'Eksper')
    });

    it('Evrak Tipi Güncelleme Testi', () => {
        evrakTipiTanim.update('test', 'test2')

    });

    it('Evrak Tipi Kaydının Silinmesi Testi', () => {
        evrakTipiTanim.delete('test')

    });

});