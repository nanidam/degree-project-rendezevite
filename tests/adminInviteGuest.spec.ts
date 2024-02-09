import { test, expect } from "@playwright/test";
import { user, playwrightEvents } from "./constants/constants";

test.only("Admin invite and delete guest", async ({ page }) => {
    await page.goto("./");
    await page.click(".login-btn");

    await page.fill("#email", user.email)
    await page.fill("#password", user.password)

    await page.click(".login-register-btn");
    await page.waitForURL(`/events/overview`);

    await page.waitForSelector(`[data-testid='${playwrightEvents.editEvent.eventName}']`)

    const editEventUrl = `/admin/overview/${playwrightEvents.editEvent.eventName}`;
    await page.click(`[href="${editEventUrl}"]`);

    await page.waitForURL(`/admin/overview/${playwrightEvents.editEvent.eventName}`);

    await page.locator('.event-password-input');
    await page.locator(`input[name="guestName"]`).fill("Person A");
    await page.locator(`input[name="guestEmail"]`).fill(playwrightEvents.editEvent.testEmail);
    await page.click(".invite-guest-btn");

    await page.waitForTimeout(1500)

    await page.locator(`input[name="guestName"]`).fill(playwrightEvents.editEvent.testEmail);
    await page.locator(`input[name="guestEmail"]`).fill(playwrightEvents.editEvent.testEmail);
    await page.click(".invite-guest-btn");

    const errorMsg = await page.locator(".error-message").innerText();
    expect(errorMsg).toBe("Email already exists")

    await page.waitForTimeout(1500)
    await page.locator(`input[name="guestName"]`).fill("Person B");
    await page.locator(`input[name="guestEmail"]`).fill(playwrightEvents.editEvent.testEmail + "a");
    await page.click(".invite-guest-btn");

    await page.waitForTimeout(1500)

    const errorMsgCount = await page.locator('.error-message').count();
    expect(errorMsgCount).toBe(0)

    await page.click(`[data-testid="${playwrightEvents.editEvent.testEmail}"]`)
    await page.click(".edit-guest-btn")
    await page.click(".guestlist-delete-btn")
    await page.click(".confirm-delete-btn")

    await page.click(`[data-testid="${playwrightEvents.editEvent.testEmail + "a"}"]`)
    await page.click(".edit-guest-btn")
    await page.click(".guestlist-delete-btn")
    await page.click(".confirm-delete-btn")

    await page.waitForTimeout(100)
    const accordionElements = await page.$$('.szh-accordion');
    expect(accordionElements.length).toBe(1)
})