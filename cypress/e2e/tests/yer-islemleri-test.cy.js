import { slowCypressDown } from "cypress-slow-down";
import { YerIslemleri } from "../pages/yer-islemleri";
import { Menu } from "../pages/menu";
import { Yer } from "../entity/Yer";
const yerIslemleri = new YerIslemleri()
const menu = new Menu()

slowCypressDown(100)
describe('Yer İşlemleri Ekranı', { testIsolation: false }, () => {
    const yer = new Yer('cypress-test', 'Türkiye', '9999000', '9999000', 'Avrupa Yakası', 'Türkiye Cumhuriyeti');

    beforeEach(() => {
        cy.step('Oturum açılıyor...')
        cy.fixture('loginData').as('credentials');
        cy.get('@credentials').then((data) => {
            cy.login(data.username, data.password);
        });
        
    })

    it('Menü Ağacından Ekranı Ziyaret Et', () => {
        cy.visit(Cypress.env('preprod'));
        const menuHierarchy = ['Genel', 'Yer', 'Yer İşlemleri'];
        menu.clickMenuItem(menuHierarchy, 'yer-tanim/yer-tanim');
    });

    it('Yer Tanımlama Testi', () => {      
        yerIslemleri.create(yer, 'Başarı ile kaydedildi.')

    });

    it('Yer Tanım Güncelleme Testi', () => {
        yerIslemleri.update(yer.yerAdi, 'cypress-updated', 'Başarı ile güncellendi.')

    });

    it('Yer Tanım Silme Testi', () => {
        yerIslemleri.delete('cypress-updated', 'Başarı ile kaydedildi.')
    });

});