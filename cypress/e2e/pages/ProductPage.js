import {commonMethods} from "../../commonMethods/CommonMethods";
import {homePage} from "./HomePage";

const IMGSelector = '.js-image-product-selector-item.image-product-selector-item.img-contain '
const shoesSize = '.js-selector-item-icon.selector-item-icon.not-available'
const cartPageSelector = '.mzkr-btn-success.mzkr-btn--lg.mzkr-mb-2.continue-to-basket-btn.mzkr-w-100.mzkr-w-md-auto'

export class ProductPage {
    visitURL() {
        commonMethods.visitUrl(Cypress.env('baseurl'));
    }

    clickOnAcceptCookies() {
        commonMethods.clickOnAElementByIndex('.mzkr-btn-success.mzkr-btn--lg.text-nowrap.font-weight-bold.w-100', '0');
    }

    clickOnCloseModal() {
        homePage.clickOnCloseModal();
    }

    assertCookies() {
        homePage.assertCookiesText();
    }

    assertProductText() {
        commonMethods.assertTextByText('.mzkr-h1.mzkr-text-dark.font-weight-bold.mzkr-m-0', 'DMT Scarpe POGI’S White Pantofi de ciclism pentru bărbați');
    }

    clickOnBlackColor() {
        commonMethods.clickOnAElementByIndex(IMGSelector, 0);
    }

    assertWhiteColor() {
        commonMethods.assertByIndex(IMGSelector, 1);
    }

    clickOnTheFirstSize() {
        commonMethods.clickOnAElementByIndex(shoesSize, 0);
    }

    clickOnAddToCart() {
        commonMethods.clickOnAElement('.btn-add-to-cart.btn-cart.mzkr-btn-success.mzkr-btn--lg');
    }

    clickOnCartPage() {
        commonMethods.clickOnAElement(cartPageSelector)
    }

    clickOnAcceptCookies1() {
        commonMethods.clickOnAElementByIndex('.mzkr-btn-primary--outline.w-100.mzkr-mb-2',0)
    }

}


export const productPage = new ProductPage();