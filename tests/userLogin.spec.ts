import { test, expect } from "@playwright/test";
import { user } from "./constants/constants";

test.skip("Login and error handling", async ({ page }) => {
  await page.goto("./");
  await page.click(".login-btn");

  await page.waitForSelector(".login-register-text")

  // Verify that login page is rendered
  const loginText = await page.locator(".login-register-text").innerText();
  expect(loginText).toBe('To login you need to use your registered email and password.');

  // Verify login page url  
  const loginUrl = await page.url();
  expect(loginUrl).toContain('/login');

  // Verify hamburger menu login button
  await page.click('[aria-label="Home"]');
  await page.waitForSelector('[aria-label="Redirects to login"]')

  const hamburgerLoginIcon = await page.getByLabel('Redirects to login')
  const hrefValueLogin = await hamburgerLoginIcon.getAttribute('href');
  expect(hrefValueLogin).toBe("/api/auth/signin");

  await page.click('[aria-label="Close menu"]');

  // Verify wrong password login
  await page.fill("#email", user.email)
  await page.fill("#password", "WRONG PASSWORD")

  await page.click(".login-register-btn");
  await page.waitForSelector(".login-register-errorMsg")
  let loginError = await page.locator(".login-register-errorMsg").innerText();

  expect(loginError).toBe("Wrong email or password.");

  // Verify wrong email login
  await page.fill("#email", "WRONG@EMAIL.COM")
  await page.fill("#password", user.password)

  await page.click(".login-register-btn");
  await page.waitForSelector(".login-register-errorMsg")
  loginError = await page.locator(".login-register-errorMsg").innerText();

  expect(loginError).toBe("Wrong email or password.");

  // Verify correct login
  await page.fill("#email", user.email)
  await page.fill("#password", user.password)

  await page.click(".login-register-btn");

  await page.waitForSelector(".event-overview-header")
  const eventsHeader = await page.locator(".event-overview-header").innerText();
  expect(eventsHeader).toBe("Events");

  const loggedInUrl = await page.url();
  expect(loggedInUrl).toContain('/events/overview');

  // Verify logout button
  await page.click('[aria-label="Open menu"]');
  await page.waitForSelector(".logout-icon")
  await page.click(".logout-icon");

  await page.waitForSelector(".home-header")
});
