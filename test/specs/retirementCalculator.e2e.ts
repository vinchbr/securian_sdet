import RetirementCalculatorPage from "../pageobjects/retirementCalculator.page";
import ResultPage from "../pageobjects/result.page";

describe("Retirement Calculator Spec", () => {
  let defaultCalculatorText;
  beforeEach(async () => {
    await RetirementCalculatorPage.open();
  });

  it("Should allow user to submit the retirement calculator form", async () => {
    await RetirementCalculatorPage.fillAge(40, 68);
    await RetirementCalculatorPage.fillIncomeSavings(
      100000,
      75000,
      500000,
      10,
      1
    );
    await RetirementCalculatorPage.calculate.scrollIntoView();
    await RetirementCalculatorPage.calculate.click();
    await browser.pause(3000);
    defaultCalculatorText = await ResultPage.resultMessage.getText();
    expect(ResultPage.resultMessage).toBeDisplayedInViewport();
    expect(defaultCalculatorText).toBeTruthy();
  });

  it("Should not allow the form to be submitted without required fields", async () => {
    await RetirementCalculatorPage.fillAge(undefined, 68);
    await RetirementCalculatorPage.fillIncomeSavings(
      100000,
      75000,
      500000,
      10,
      1
    );
    await RetirementCalculatorPage.calculate.click();
    expect(RetirementCalculatorPage.calculatorErrorToast).toBeExisting();
  });

  it("Social Security fields should hide/show based on the Social Security benefits toggle", async () => {
    expect(RetirementCalculatorPage.ssIncomeNo).toBeChecked();
    expect(RetirementCalculatorPage.ssOverride).not.toBeExisting();
    await RetirementCalculatorPage.ssIncomeYes.click();
    expect(RetirementCalculatorPage.ssOverride).toBeExisting();
  });

  it("All fields filled submission is successful", async () => {
    await RetirementCalculatorPage.fillAge(40, 68);
    await RetirementCalculatorPage.fillIncomeSavings(
      100000,
      75000,
      500000,
      10,
      1
    );
    await RetirementCalculatorPage.fillSocialSecurityIncome(500, false);
    await RetirementCalculatorPage.calculate.click();
    await browser.pause(2500);
    expect(ResultPage.resultMessage).toBeDisplayedInViewport();
  });

  it("Should allow user to change default calculator values", async () => {
    await RetirementCalculatorPage.fillAge(40, 68);
    await RetirementCalculatorPage.fillIncomeSavings(
      100000,
      75000,
      500000,
      10,
      1
    );
    await RetirementCalculatorPage.adjustDefaultValues.click();
    await RetirementCalculatorPage.calculatorValuesModal.scope.waitForDisplayed();
    await RetirementCalculatorPage.calculatorValuesModal.fillCalculatorValues(
      2000,
      25,
      true,
      4,
      100,
      5,
      7
    );
    await RetirementCalculatorPage.calculate.click();
    await browser.pause(2500);
    expect(defaultCalculatorText).not.toEqual(
      await ResultPage.resultMessage.getText()
    );
  });
});
