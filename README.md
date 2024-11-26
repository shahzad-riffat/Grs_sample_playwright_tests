# How to Run tests:

This project uses Playwright for end-to-end testing. Follow these instructions to install dependencies and run the tests.
# Prerequisites

    Node.js: Make sure you have Node.js installed (preferably the latest LTS version). You can download it from Node.js official website.
    Dependencies: This project uses npm to manage dependencies.

# Installation

Clone this repository and install the dependencies.

# Clone the repository
    git clone https://github.com/Shahzad-Shaheen/Grs_sample_playwright_tests.git

# Navigate into the project directory
    cd Grs_sample_playwright_tests

# Install dependencies
    npm install

# Running Tests

After installing the dependencies, you can run the tests with the following commands.

    Run All Tests:

    npx playwright test

# Run Tests in a Specific File:

    npx playwright test tests/contactUsForm.spec.ts

# Run Tests in Headed Mode (useful for debugging):

    npx playwright test --headed

# Generate a Report: Playwright generates a test report automatically, which you can view by running:

    npx playwright show-report

# Running Tests in CI/CD

This repository includes a GitHub Actions workflow to automatically run tests on every push or pull request. The workflow file is located at .github/workflows/playwright.yml. 
