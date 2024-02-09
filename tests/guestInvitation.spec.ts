import { test, expect } from "@playwright/test";
import { playwrightEvents, user } from "./constants/constants";

test("Invite Guest", async ({ page }) => {
    await page.goto("./invitation/65c56117bf60a227d0eb0e0b");
    await page.waitForURL(`/invitation/${playwrightEvents.guest.eventId}`);

    await page.fill("#email", "s@s.s")
    await page.fill("#password", "123")

    await page.click(".terms-checkbox")

    await page.waitForTimeout(1500)
    await page.click(".login-register-btn")
    await page.waitForURL(`/invitation/${playwrightEvents.guest.eventId}/welcome`);

    await page.waitForTimeout(1500)
    const welcomeUrl = await page.url()
    expect(welcomeUrl).toContain("welcome")

    const eventName = await page.locator(".flowers-header").innerText();
    expect(eventName).toContain(playwrightEvents.guest.eventName)

    const guest = await page.locator(".flowers-invited-guestname").innerText();
    expect(guest).toContain(playwrightEvents.guest.guestName)

    const additionalGuest = await page.locator(".flowers-additional-guestname").innerText();
    expect(additionalGuest).toContain(playwrightEvents.guest.additionalGuest)

    await page.click(".flowers-next-btn")
    await page.waitForURL(`/invitation/${playwrightEvents.guest.eventId}/${playwrightEvents.guest.eventName}`);
    const inviteUrl = await page.url()
    expect(inviteUrl).toContain(encodeURI(playwrightEvents.guest.eventName))

    const eventHeader = await page.locator(".flowers-info-header").innerText();
    expect(eventHeader).toContain(playwrightEvents.guest.header)

    const eventText = await page.locator(".flowers-info-text").innerText();
    expect(eventText).toContain(playwrightEvents.guest.text)

    await page.click(".flowers-next-arrow")
    await page.waitForURL(`/invitation/${playwrightEvents.guest.eventId}/rsvp`);
    const rsvpUrl = await page.url()
    expect(rsvpUrl).toContain(`/invitation/${playwrightEvents.guest.eventId}/rsvp`)

    let rsvpHeader = await page.locator(".flowers-rsvp-header").innerText();
    expect(rsvpHeader).toBe("Attending?")

    await page.click(".flowers-send-inv-btn")
    await page.waitForTimeout(500)
    rsvpHeader = await page.locator(".flowers-rsvp-header").innerText();
    expect(rsvpHeader).toBe("Responded")

    await page.click(".logout-icon")

    await page.waitForTimeout(1000)

    await page.click(".login-btn");

    await page.fill("#email", user.email)
    await page.fill("#password", user.password)

    await page.click(".login-register-btn");
    await page.waitForTimeout(2000)


    await page.waitForSelector(`[data-testid='${playwrightEvents.guest.eventName}']`)

    const editEventUrl = `/admin/overview/${playwrightEvents.guest.eventName}`;
    await page.click(`[href="${editEventUrl}"]`);

    await page.waitForTimeout(3000)

    await page.click(`[data-testid="${playwrightEvents.guest.email}"]`)
    await page.click(".edit-guest-btn")
    await page.selectOption('.guestlist-select', 'false');
    await page.waitForTimeout(3000)

    await page.click("[aria-label='Save changes for a']");
    await page.waitForTimeout(3000)

});
