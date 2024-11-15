import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ContactUsPage } from "../pages/ContactUsPage";

test.describe("Contact Us Form Tests", () => {
  let homePage: HomePage;
  let contactUsPage: ContactUsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    contactUsPage = new ContactUsPage(page);
    await homePage.navigateToHomePage();
  });

  test("Verify the home page loads properly with main title and header options.", async ({
    page,
  }) => {
    // Verify the page title
    await expect(homePage.pageTitle.first()).toBeVisible();

    // Verify that the title contains the expected text
    expect(await homePage.pageTitle.first().textContent()).toContain(
      "Solve your SLA problem."
    );

    // Verify the main headings on the page are displayed properly
    await expect(homePage.homeLink).toBeVisible();
    await expect(homePage.pricingLink).toBeVisible();
    await expect(homePage.resourcesLink).toBeVisible();
    await expect(homePage.contactLink).toBeVisible();
    await expect(homePage.scheduleDemoLink).toBeVisible();
    await expect(homePage.rocketshipHeading).toBeVisible();
  });

  test("Should fail when only Name is submitted", async ({ page }) => {
    await homePage.goToContactUs();
    await contactUsPage.fillFirstName("Test First Name");
    await contactUsPage.submitForm();

    // Verify the error message is displayed when first name is submitted without last name
    const firstErrorMessage = await contactUsPage.errorMessage.first();
    expect(firstErrorMessage).toBeVisible();

    // Enter the last name and submit the form again
    await contactUsPage.fillLastName("Test Last Name");
    expect(firstErrorMessage).toBeHidden();
  });

  test("Should fail when Name and Email are submitted without Comment", async ({
    page,
  }) => {
    // Go to the Contact Us page
    await homePage.goToContactUs();

    // Fill in the first name, last name, and email fields
    await contactUsPage.fillFirstName("Test First Name");
    await contactUsPage.fillLastName("Test Last Name");
    await contactUsPage.fillEmail("test@example.com");
    await contactUsPage.submitForm();

    // Verify the error message is displayed when form is submitted without comment
    await expect(contactUsPage.errorMessageText).toBeVisible();
  });

  test("Should succeed when Name, Email, and Comment are submitted", async ({
    page,
  }) => {
    // Go to the Contact Us page and enter mandatory fields
    await homePage.goToContactUs();
    await contactUsPage.fillFirstName("Test First Name");
    await contactUsPage.fillLastName("Test Last Name");
    await contactUsPage.fillEmail("test@example.com");
    await contactUsPage.fillComment("This is a test comment.");
    await contactUsPage.submitForm();

    // Verify the success message is displayed when form is submitted with all fields
    await expect(
      page.getByRole("heading", { name: "Thank you!" })
    ).toBeVisible();
    await expect(page.getByText("Your details have been")).toBeVisible();
  });
});
