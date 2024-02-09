import { test, expect } from "@playwright/test";
import { mockEvent, templates, user } from "./constants/constants";

test("Create and delete Event", async ({ page }) => {
    await page.goto("./");
    await page.click(".login-btn");

    await page.fill("#email", user.email)
    await page.fill("#password", user.password)

    await page.click(".login-register-btn");

    await page.waitForSelector(".create-event-btn")

    await page.click(".create-event-btn");

    // Verify error message: No event name
    (await page.waitForSelector(".submit-event-btn")).click();
    await page.waitForSelector(".error-message")
    let errorMsg = await page.locator(".error-message").innerText();
    expect(errorMsg).toBe("Please give your event a name");

    // Verify error message: No date
    await page.fill(".create-event-input", mockEvent.name)
    await page.click(".submit-event-btn");
    errorMsg = await page.locator(".error-message").innerText();
    expect(errorMsg).toBe("Please choose a date");

    // Verify error message: invalid date
    await page.fill('input[name="event-date"]', '2022-01-01');
    await page.click(".submit-event-btn");
    errorMsg = await page.locator(".error-message").innerText();
    expect(errorMsg).toBe("Invalid date");

    // Verify error message: No password
    await page.fill('input[name="event-date"]', '2030-01-01');
    await page.click(".submit-event-btn");
    errorMsg = await page.locator(".error-message").innerText();
    expect(errorMsg).toBe("Please enter a password");

    // Choose template
    await page.fill('input[name="event-password"]', mockEvent.name);
    await page.click(".submit-event-btn");

    await page.waitForURL('**/template*');
    const templateUrl = await page.url();
    expect(templateUrl).toContain('/template');
    expect(templateUrl).toContain(mockEvent.name);

    const selectedOption = await page.evaluate(() => {
        const selectElement = document.querySelector('.template-options') as HTMLSelectElement;
        if (!selectElement || !selectElement.value) return null
        return selectElement.value;
    });
    expect(selectedOption).toBe(templates.geo);

    await page.selectOption('.template-options', { value: 'templateFlowerDesign' });

    await page.click(".submit-event-btn");

    // Choose Header and text
    await page.waitForURL('**/invitations*');
    const invitationUrl = await page.url();
    expect(invitationUrl).toContain('/invitations');

    await page.click(".submit-event-btn");

    errorMsg = await page.locator(".create-inv-error").innerText();
    expect(errorMsg).toBe("Please give your invitation a header");

    await page.fill("#create-inv-header", "Test Header")
    await page.click(".submit-event-btn");

    errorMsg = await page.locator(".create-inv-error").innerText();
    expect(errorMsg).toBe("Please add some text");

    await page.fill("#create-inv-text", "Test event body text")
    await page.click(".submit-event-btn");

    await page.waitForURL('**/create-RSVP*');
    const eventFoodUrl = await page.url();
    expect(eventFoodUrl).toContain('/create-RSVP');

    const test = await page.locator(".choose-template-header").innerText();
    expect(test).toBe("Create RSVP")


    await page.click(".submit-inv-btn");

    // Verify event created in admin page
    await page.goto(`/admin/overview/${mockEvent.name}`);
    await page.waitForURL(`/admin/overview/${mockEvent.name}`);

    const adminOverviewUrl = await page.url();
    expect(adminOverviewUrl).toContain(`/admin/overview/${mockEvent.name}`);

    const eventTitle = await page.locator(".admin-header").innerText();
    const formattedEventName = mockEvent.name.charAt(0).toUpperCase() + mockEvent.name.slice(1);
    expect(eventTitle).toBe(formattedEventName);

    // Verify event created in admin page
    await page.goto("./events/overview");
    await page.waitForURL('**/events/overview*');
    const eventsOverviewUrl = await page.url();
    expect(eventsOverviewUrl).toContain('/events/overview');

    await page.waitForSelector(`[data-testid='${mockEvent.name}']`)
    const eventsInnerTextArray = await page.evaluate(() => {
        const events = Array.from(document.querySelectorAll('ul.events li.event')) as HTMLElement[];
        return events.map(event => event.innerText);
    });

    const eventIsInList = eventsInnerTextArray.includes(mockEvent.name);
    expect(eventIsInList).toBeTruthy()


    await page.click(`[data-testid='${mockEvent.name}']`);
    await page.waitForSelector(`[aria-label='Confirm delete']`)

    await page.click(`[aria-label='Confirm delete']`)

    await page.waitForTimeout(700)
    const updatedEventsInnerTextArray = await page.evaluate(() => {
        const events = Array.from(document.querySelectorAll('ul.events li.event')) as HTMLElement[];
        return events.map(event => event.innerText);
    });
    const eventIsNotInList = updatedEventsInnerTextArray.includes(mockEvent.name);

    expect(eventIsNotInList).toBeFalsy();
});
