import { ChainablePromiseElement } from "webdriverio";
import Section from "./helpers/section";

class CalculatorValuesSection extends Section {
  public get additionalIncome(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#additional-income");
  }

  public get additionalIncomeTooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#additional-income-tooltip");
  }

  public get retirementDuration(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#retirement-duration");
  }

  public get retirementDurationTooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#retirement-duration-tooltip");
  }

  public get includeInflation(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$('label[for="include-inflation"]');
  }

  public get excludeInflation(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$('label[for="exclude-inflation"]');
  }

  public get includeInflationTooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#include-inflation-tooltip");
  }

  public get expectedInflation(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#expected-inflation-rate");
  }

  public get retirementAnnualIncome(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#retirement-annual-income");
  }

  public get retirementAnnualIncomeTooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#retirement-annual-income-tooltip");
  }

  public get preRetirementROI(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#pre-retirement-roi");
  }

  public get preRetirementROITooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#pre-retirement-roi-tooltip");
  }

  public get postRetirementROI(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#post-retirement-roi");
  }

  public get postRetirementROITooltip(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$("#post-retirement-roi-tooltip");
  }

  public get saveChanges(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this.$('input[onclick="savePersonalizedValues();"]');
  }

  public get cancel(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return this.$('input[onclick="clearDefaultValuesForm();"]');
  }

  public async fillCalculatorValues(
    otherIncome: number,
    yearsDependant: number,
    increaseInflation: boolean,
    expectedInflation: number,
    finalIncomeAvailable: number,
    preRetirementInvestment: number,
    postRetirementInvestment: number
  ) {
    await this.additionalIncome.click();
    await this.additionalIncome.addValue(otherIncome);
    await this.retirementDuration.addValue(yearsDependant);
    if (increaseInflation) {
      await this.includeInflation.click();
      await browser.pause(500);
      await this.expectedInflation.addValue(expectedInflation);
    }
    await this.retirementAnnualIncome.click();
    await this.retirementAnnualIncome.addValue(finalIncomeAvailable);
    await this.preRetirementROI.click();
    await this.preRetirementROI.addValue(preRetirementInvestment);
    await this.postRetirementROI.click();
    await this.postRetirementROI.addValue(postRetirementInvestment);
    await this.saveChanges.click();
    await browser.pause(1000);
  }
}

export default CalculatorValuesSection;
