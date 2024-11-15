import { Page, Locator, FrameLocator } from '@playwright/test';

export class ContactUsPage {
    readonly page: Page;
    readonly iframe: FrameLocator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly commentInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;
    readonly successMessage: Locator;
    readonly errorMessageText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.iframe = page.locator('iframe').first().contentFrame(); 
        this.firstNameInput = this.iframe.getByLabel('First'); 
        this.lastNameInput = this.iframe.getByLabel('Last'); 
        this.emailInput = this.iframe.getByLabel('Email *'); 
        this.commentInput = this.iframe.getByLabel('Comment or Message *'); 
        this.submitButton = this.iframe.getByRole('button', { name: 'Submit' }); 
        this.errorMessage = this.iframe.locator('#error-Name'); 
        this.errorMessageText = this.iframe.getByText('Enter a value for this field.')
        this.successMessage = this.iframe.locator('#error-Name'); 
    }

    async fillFirstName(name: string) {
        await this.firstNameInput.fill(name);
    }

    async fillLastName(name: string) {
        await this.lastNameInput.fill(name);
    }


    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillComment(comment: string) {
        await this.commentInput.fill(comment);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async getErrorMessageNameMissing() {
        return await this.errorMessage.first();
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }
}
