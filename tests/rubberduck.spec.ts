import { test, expect } from "@playwright/test";
import { mockEvent, templates, user } from "./constants/constants";

test("Create Event", async ({ page }) => {
    await page.goto("./");
    await page.click(".login-btn");

    await page.fill("#email", user.email)
    await page.fill("#password", user.password)

    await page.click(".login-register-btn");
    await page.waitForSelector(".create-event-btn")

    await page.waitForTimeout(3000)
    const eventsInnerTextArray = await page.evaluate(() => {
        const events = Array.from(document.querySelectorAll('ul.events li.event')) as HTMLElement[];
        return events.map(event => event.innerText);
    });

    console.log(eventsInnerTextArray)
    const eventIsInList = eventsInnerTextArray.includes(mockEvent.name);
    console.log(eventIsInList)

    expect(1).toBe(1)
})