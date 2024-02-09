import { test, expect } from "@playwright/test";
import { mockEvent, templates, user } from "./constants/constants";

test.skip("Varify authentication", async ({ page }) => {
  // Redirect to login
  //   await page.goto("./events/create-event");
  //   await page.waitForURL(
  //     `login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fevents%2Fcreate-event`
  //   );
  let loginPage = await page.url();
  //   expect(loginPage).toContain("/login");

  //   await page.goto("./events/create-event/template");
  //   await page.waitForURL(
  //     `login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fevents%2Fcreate-event%2Ftemplate`
  //   );
  //   loginPage = await page.url();
  //   expect(loginPage).toContain("/login");

  //   await page.goto("./events/create-event/s/invitations");
  //   await page.waitForURL(
  //     `login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fevents%2Fcreate-event%2Fs%2Finvitations`
  //   );
  //   loginPage = await page.url();

  //   expect(loginPage).toContain("/login");

  //   await page.goto("./events/create-event/s/create-RSVP");
  //   await page.waitForURL(
  //     `login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fevents%2Fcreate-event%2Fs%2Fcreate-RSVP`
  //   );
  //   loginPage = await page.url();
  //   expect(loginPage).toContain("/login");

  //   await page.goto("./admin/overview/s");
  //   await page.waitForURL(
  //     `login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fadmin%2Foverview%2Fs`
  //   );
  //   loginPage = await page.url();
  //   expect(loginPage).toContain("/login");

  //   await page.goto("./invitation/65c68e9e69401d2143fee07c");
  //   await page.waitForURL(`invitation/65c68e9e69401d2143fee07c`);
  //   loginPage = await page.url();
  //   expect(loginPage).toContain("/invitation/65c68e9e69401d2143fee07c");

  // Redirects to page not found
  //   await page.goto("./random123");
  //   await page.waitForURL(`random123`);
  //   const notFoundSvg = await page.locator(".injected-svg");
  //   expect(notFoundSvg).toBeTruthy();

  // Fail to login on invitation with admin credentials
  //   await page.goto("./invitation/65c68e9e69401d2143fee07c");
  //   await page.waitForTimeout(1000);
  //   await page.fill("#email", user.email);
  //   await page.fill("#password", user.password);
  //   await page.click(".terms-checkbox");
  //   await page.click(".login-register-btn");
  //   const errorMessage = await page.locator(".login-register-errorMsg").innerText();
  //   expect(errorMessage).toBe(
  //     "Either you are not invited to this event or your email or password is incorrect"
  //   );

  //Login on events details page with guest credentials
  await page.goto("./admin/overview/FfeEE%20feeEEee");
  await page.waitForTimeout(1000);
  await page.fill("#email", "a@a.a");
  await page.fill("#password", "123");
  const unauthorizedSvg = await page.locator(`[data-src="/svgs/denied.svg"]`);
  await page.pause();
  expect(unauthorizedSvg).toBeTruthy();
});
