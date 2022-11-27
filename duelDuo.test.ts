
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('choices display when draw button is clicked', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)

    const choicesDiv = await driver.findElement(By.id('choices'))
    const displayed = await choicesDiv.isDisplayed()

    expect(displayed).toBe(true)
})
test('able to add to your duo', async () => {
    await driver.findElement(By.xpath('/html/body/section[1]/div/div[3]/button')).click()
    await driver.sleep(1000)

  

    const displayBotAdded = await driver.findElement(By.xpath('/html/body/section[2]/section[1]/div/div'))
    const displayed = await displayBotAdded.isDisplayed()

    expect(displayed).toBe(true)
}) 





