import { test, expect } from "@playwright/test";
import { user, playwrightEvents } from "./constants/constants";

test("Admin change password", async ({ page }) => {
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

    let inputPassword = await page.locator('.event-password-input');
    const isTypePassword = await inputPassword!.evaluate((node: HTMLInputElement) => node.type === 'password');
    const isReadonly = await inputPassword!.evaluate((node: HTMLInputElement) => node.readOnly);

    expect(isTypePassword).toBeTruthy()
    expect(isReadonly).toBeTruthy()

    await page.click(".password-btn");
    await page.waitForTimeout(100)

    inputPassword = await page.locator('.event-password-input');
    const isNotTypePassword = await inputPassword!.evaluate((node: HTMLInputElement) => node.type === 'password');
    const isNotReadonly = await inputPassword!.evaluate((node: HTMLInputElement) => node.readOnly);

    expect(isNotTypePassword).toBeFalsy()
    expect(isNotReadonly).toBeFalsy()

    let currentPassword = await page.locator('.event-password-input').getAttribute("value");
    expect(currentPassword).toBe(playwrightEvents.editEvent.password)
    await page.fill(".event-password-input", playwrightEvents.editEvent.newPassword)
    await page.click(".save-password-btn");

    await page.waitForTimeout(200)
    currentPassword = await page.locator('.event-password-input').getAttribute("value");
    expect(currentPassword).toBe(playwrightEvents.editEvent.newPassword)

    await page.waitForTimeout(1000)
    await page.click(".password-btn");
    await page.waitForTimeout(1000)

    await page.fill(".event-password-input", playwrightEvents.editEvent.password)
    await page.click(".save-password-btn");
})