import { ChainablePromiseElement } from "webdriverio";

import Page from "./helpers/page";
import CalculatorValuesSection from "./calculatorValues.section";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RetirementCalculatorPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get currentAge(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#current-age");
  }

  public get retirementAge(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#retirement-age");
  }

  public get currentIncome(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#current-income");
  }

  public get spouseIncome(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#spouse-income");
  }

  public get currentTotalSavings(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#current-total-savings");
  }

  public get currentTotalSavingsTooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#current-total-savings-tooltip");
  }

  public get currentAnnualSavings(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#current-annual-savings");
  }

  public get currentAnnualSavingsTooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#current-annual-savings-tooltip");
  }

  public get savingsIncreaseRate(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#savings-increase-rate");
  }

  public get savingsIncreaseRateTooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#savings-increase-rate-tooltip");
  }

  public get ssIncomeYes(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('label[for="yes-social-benefits"]');
  }

  public get ssIncomeNo(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#no-social-benefits");
  }

  public get maritalStatusSingle(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('label[for="single"]');
  }

  public get maritalStatusMarried(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('label[for="married"]');
  }

  public get ssOverride(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#social-security-override");
  }

  public get ssOverrideTooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#social-security-override-tooltip");
  }

  public get tooltipBody(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $(".popover-body");
  }

  public get adjustDefaultValues(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('a[data-target="#default-values-modal"]');
  }

  public get calculate(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('button[data-tag-id="submit"]');
  }

  public get clearForm(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('input[onclick="clearRetirementForm();"]');
  }

  public get calculatorValuesModal(): CalculatorValuesSection {
    return new CalculatorValuesSection($("#default-values-modal"));
  }

  public get calculatorErrorToast(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#calculator-input-alert-desc");
  }

  public async fillAge(current: number, retirement: number): Promise<void> {
    await this.currentAge.addValue(current);
    await this.retirementAge.addValue(retirement);
  }

  public async fillIncomeSavings(
    current: number,
    spouse: number,
    totalSavings: number,
    currentSaving: number,
    rateOfIncrease: number
  ): Promise<void> {
    await this.currentIncome.click();
    await this.currentIncome.addValue(current);
    await this.spouseIncome.click();
    await this.spouseIncome.addValue(spouse);
    await this.currentTotalSavings.click();
    await this.currentTotalSavings.addValue(totalSavings);
    await this.currentAnnualSavings.addValue(currentSaving);
    await this.savingsIncreaseRate.addValue(rateOfIncrease);
  }

  public async fillSocialSecurityIncome(
    socialSecurityOverride: number,
    married: boolean
  ): Promise<void> {
    if (socialSecurityOverride) {
      await this.ssIncomeYes.click();
      await browser.pause(500);
      if (married) {
        await this.maritalStatusMarried.click();
      } else {
        await this.maritalStatusSingle.click();
      }
      await this.ssOverride.setValue(socialSecurityOverride);
    }
  }

  public open(): Promise<string> {
    return super.open("/insights-tools/retirement-calculator.html");
  }
}

export default new RetirementCalculatorPage();
