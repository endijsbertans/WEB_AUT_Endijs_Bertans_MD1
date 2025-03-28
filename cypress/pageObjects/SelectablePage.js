import { BasePage } from "../pageObjects/BasePage";

export class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
    }
    static get gridButton() {
        return cy.get("#demo-tab-grid");
    }
    static get gridButtonOne(){
        return cy.get('#gridContainer').contains('li', 'One');
    }

    static get gridButtonTwo(){
        return cy.get('#gridContainer').contains('li', 'Two');
    }
    static get gridButtonThree(){
        return cy.get('#gridContainer').contains('li', 'Three');
    }

    static get gridButtonFour(){
        return cy.get('#gridContainer').contains('li', 'Four');
    }

    static get gridButtonFive(){
        return cy.get('#gridContainer').contains('li', 'Five');
    }
    static get gridButtonSix(){
        return cy.get('#gridContainer').contains('li', 'Six');
    }
    static get gridButtonSeven(){
        return cy.get('#gridContainer').contains('li', 'Seven');
    }

    static get gridButtonEight(){
        return cy.get('#gridContainer').contains('li', 'Eight');
    }

    static get gridButtonNine(){
        return cy.get('#gridContainer').contains('li', 'Nine');
    }
}