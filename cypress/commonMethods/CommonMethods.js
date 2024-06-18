export class CommonMethods {
    visitUrl(URL) {
        cy.visit(URL);
    }

    assertTextByText(WebElement, TEXT) {
        cy.get(WebElement).contains(TEXT);
    }

    clickOnAElement(WebElement) {
        cy.get(WebElement).should('be.visible').click();
    }

    clickOnAElementByIndex(WebElement, Index) {
        cy.get(WebElement, {timeout: 10000}).eq(Index).click();
    }

    typeText(WebElement, Text) {
        cy.get(WebElement).type(Text);
    }

    assertByIndex(WebElement,Index) {
        cy.get(WebElement).eq(Index).should('be.visible');
    }

}

export const commonMethods = new CommonMethods();