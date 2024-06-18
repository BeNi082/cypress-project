import {commonMethods} from "../../commonMethods/CommonMethods";

export class HomePage {
    visitURL() {
        commonMethods.visitUrl(Cypress.env('baseUrl'));
    }

    assertCookiesText() {
        commonMethods.assertTextByText('.p-mid.lh-1', 'Scopul cookie-urilor site-ului Muziker este de a face din vizita ta o experiență plăcută în orice moment. Ești de acord cu utilizarea tuturor cookie-urilor apăsând butonul „Sunt de acord”, sau selectezi în setări doar cele pe care le agreezi.');
    }

    clickOnAcceptCookies() {
        commonMethods.clickOnAElement('.mzkr-btn-success')
    }

    clickOnCloseModal() {
        commonMethods.clickOnAElementByIndex('.exponea-close ', '0')
    }

    TypeProduct() {
        commonMethods.typeText('[aria-label="search input"]', Cypress.env('productText'))
    }

    clickOnTheProduct() {
        commonMethods.clickOnAElementByIndex('[itemprop="image"]','0')
    }
    clickOnAcceptCookies1(){
        commonMethods.clickOnAElementByIndex('.mzkr-btn-primary--outline.w-100.mzkr-mb-2',0)
    }
}

export const homePage = new HomePage();