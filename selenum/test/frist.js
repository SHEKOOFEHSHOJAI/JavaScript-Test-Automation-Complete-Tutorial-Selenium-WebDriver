const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

// describe block
// npx mocha --no-timeouts 'test/*.js'
describe("add todo test", function name(params) {
  it("success add todo", async function () {
    let driver = await new Builder().forBrowser("firefox").build();

    // navigate to aplacation
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // use a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("hiiii", Key.RETURN);

    // assert
    const todoText = await driver
      .findElement(By.xpath("//li{last()}"))
      .getText()
      .then(function (value) {
        return value;
      });
    // chacking text li
    todoText.should.equal("hiii");

    // chacking two value
    assert.strictEqual(todoText, sampletodotext);

    // close the browser
    await driver.quit();
  });
});

// async function example() {
//   let driver = await new Builder().forBrowser("firefox").build();

//   // navigate to aplacation
//   await driver.get("https://lambdatest.github.io/sample-todo-app/");

//   // use a todo
//   await driver.findElement(By.id("sampletodotext")).sendKeys("hiiii", Key.RETURN);

//   // assert
//   const todoText = await driver
//     .findElement(By.xpath("//li{last()}"))
//     .getText()
//     .then(function (value) {
//       return value;
//     });
// // chacking text li
// todoText.should.equal("hiii");

// // chacking two value
//   assert.strictEqual(todoText, sampletodotext);

//   // close the browser
//   await driver.quit();
// }

// example();
