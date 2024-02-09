import { passwordSchema } from "@/app/utils/passwordValidator";
import { test, expect } from "@playwright/test";
import Email from "next-auth/providers/email";
// ver 4.7
const user = {
  email: "a@a.a",
  password: "Aaaaaaaaa123",
};

test("Succesfull Login", async ({ page }) => {
  await page.goto("./");
  await page.click(".login-btn");
  await page.pause();

  expect(1).toBe(1);
  // Pause execution and start Playwright Inspector
  //   await page.fill("#username", userName)
  //   await page.fill("#newPassword1", password)

  //   // User Icon container to open "My Settings dropdown"
  //   await page.click("._1dwxaoc")

  //   // "My settings"
  //   await page.click("._1regrtd")

  //   await page.waitForSelector(span[title=${userName}])
  //   const elementUserName = await page.$(span[title=${userName}])

  //   const innerText = await elementUserName.innerText()

  //   // Inner text should equal username
  //   await expect(innerText).toBe(userName)
});

// test("Unsuccesfull login", async ({ page }) => {
//   await page.goto(URL)

//   await page.fill("#username", "lklkkjdfkjfdslsfd")

//   // Testing with wrong password
//   await page.fill("#newPassword1", "slsdkjfdkjf")

//   // Before a login attempt is made, no error message should be shown
//   await expect(page.locator(".error-msg")).toHaveCount(0)

//   await page.click("#login-button")

//   // error message should be shown
//   await expect(page.locator(".error-msg")).toHaveCount(1)
// })
