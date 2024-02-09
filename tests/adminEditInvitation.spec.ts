import { test, expect } from "@playwright/test";
import { user, playwrightEvents } from "./constants/constants";

const encodedEventName = encodeURIComponent(playwrightEvents.editEvent.eventName)

test("Admin invite and delete guest", async ({ page }) => {
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

    await page.click(".edit-event-btn");
    await page.waitForURL(`/admin/edit-event/${playwrightEvents.editEvent.eventName}`);
    const eventInfoUrl = await page.url();
    expect(eventInfoUrl).toContain(`/admin/edit-event/${encodedEventName}`);

    await page.click(".submit-event-btn");
    await page.waitForURL(`/admin/edit-event/${playwrightEvents.editEvent.eventName}/template`);
    const templateUrl = await page.url();
    expect(templateUrl).toContain(`/admin/edit-event/${encodedEventName}/template`);

    await page.click(".submit-event-btn");
    await page.waitForURL(`/admin/edit-event/${playwrightEvents.editEvent.eventName}/invitations`);
    const invitationsUrl = await page.url();
    expect(invitationsUrl).toContain(`/admin/edit-event/${encodedEventName}/invitations`);

    await page.click(".submit-event-btn");
    await page.waitForURL(`/admin/edit-event/${playwrightEvents.editEvent.eventName}/edit-RSVP`);
    const rsvpUrl = await page.url();
    expect(rsvpUrl).toContain(`/admin/edit-event/${encodedEventName}/edit-RSVP`);

    await page.click(".submit-inv-btn");
    await page.waitForURL(`/admin/edit-event/${playwrightEvents.editEvent.eventName}/edit-RSVP`);
    const adminUrl = await page.url();
    expect(adminUrl).toContain(encodedEventName);
})