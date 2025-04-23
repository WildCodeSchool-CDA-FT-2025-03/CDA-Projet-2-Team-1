import { expect, test } from "@playwright/test";

test("home page loads correctly", async ({ page }) => {
  // Navigate to the home page
  await page.goto("/");

  // Check that the page contains the welcome message
  await expect(page.getByText("Bienvenue sur Care Plan")).toBeVisible();

  // Check that the page title is correct
  await expect(page).toHaveTitle("Care Plan - Gestion Médicale Intelligente");
});
