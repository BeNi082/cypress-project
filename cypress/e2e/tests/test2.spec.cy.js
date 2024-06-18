import {productPage} from "../pages/ProductPage";
import {cartPage} from "../pages/CartPage";


describe('', () => {
    it('should ', () => {
        productPage.visitURL();
        productPage.clickOnAcceptCookies1();
        productPage.clickOnCloseModal();
        productPage.assertProductText();
        productPage.clickOnBlackColor();
        productPage.assertWhiteColor();
        productPage.clickOnTheFirstSize();
        productPage.clickOnAddToCart();
        productPage.clickOnCartPage();
        cartPage.assertProductText();
    });
});