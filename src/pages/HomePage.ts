import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly contactUsLink: Locator;
    readonly contactHeader: Locator;
    readonly mainHeading: Locator;
    readonly pricingLink: Locator;
    readonly resourcesLink: Locator;
    readonly contactLink: Locator;
    readonly scheduleDemoLink: Locator;
    readonly rocketshipHeading: Locator;
    readonly homeLink: Locator;
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactHeader = page.getByRole('link', { name: 'Contact ' });
        this.pageTitle = page.locator('h1');
        this.contactUsLink = page.getByLabel('Menu', { exact: true }).getByText('Contact Us');
        this.mainHeading = page.getByRole('heading', { name: 'Solve your SLA problem.' });
        this.pricingLink = page.getByLabel('Menu', { exact: true }).locator('li').filter({ hasText: 'Pricing' });
        this.resourcesLink = page.getByRole('link', { name: 'Resources ' });
        this.contactLink = page.getByRole('link', { name: 'Contact ' });
        this.scheduleDemoLink = page.getByLabel('Menu', { exact: true }).getByRole('link', { name: 'Schedule Demo' });
        this.rocketshipHeading = page.getByRole('heading', { name: 'Rocketship turbocharges MSP' });
        this.homeLink = page.getByRole('link', { name: 'Home' });
    }

    async navigateToHomePage() {
        await this.page.goto('/'); 
        await this.page.setViewportSize({ width: 2200, height: 1000 });
    }

    async goToContactUs() {
        await this.contactHeader.click();
        await this.contactUsLink.click();
    }
}
