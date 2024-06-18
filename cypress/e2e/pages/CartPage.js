import {commonMethods} from "../../commonMethods/CommonMethods";

export class CartPage {
    assertProductText() {
    commonMethods.assertByIndex('[rel="nofollow"]','8')
    }
}

export const cartPage = new CartPage();