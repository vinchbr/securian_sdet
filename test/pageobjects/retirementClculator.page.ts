import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';
import CalculatorValuesSection from "./calculatorValues.section";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RetirementCalculatorPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get currentAge(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#current-age');
    }

    public get retirementAge(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#retirement-age');
    }

    public get currentIncome(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#current-income');
    }

    public get spouseIncome(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#spouse-income');
    }

    public get currentTotalSavings(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#current-total-savings');
    }

    public get currentTotalSavingsTooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#current-total-savings-tooltip');
    }

    public get currentAnnualSavings(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#current-annual-savings');
    }

    public get currentAnnualSavingsTooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#current-annual-savings-tooltip');
    }

    public get savingsIncreaseRate(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#savings-increase-rate');
    }


    public get savingsIncreaseRateTooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#savings-increase-rate-tooltip');
    }

    public get ssIncomeYes(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#yes-social-benefits');
    }

    public get ssIncomeNo(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#no-social-benefits');
    }

    public get maritalStatusSingle(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#single');
    }

    public get maritalStatusMarried(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#married');
    }

    public get ssOverride(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#social-security-override');
    }

    public get ssOverrideTooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#social-security-override-tooltip');
    }

    public get tooltipBody(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('.popover-body');
    }

    public get adjustDefaultValues(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('a[data-target="#default-values-modal"]');
    }

    public get calculate(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('input[data-tag-id="submit"]');
    }

    public get clearForm(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('input[onclick="clearRetirementForm();"]');
    }

    public get calculatorValuesModal(): CalculatorValuesSection {
        return new CalculatorValuesSection($('.modal-content'));
    }

    public async fillAge (current: number, retirement: number): Promise<void> {
        await this.currentAge.setValue(current);
        await this.retirementAge.setValue(retirement);
    }

    public async fillIncomeSavings (
        current: number,
        spouse: number,
        totalSavings: number,
        currentSaving: number,
        rateOfIncrease: number
    ): Promise<void> {
        await this.currentIncome.setValue(current);
        await this.spouseIncome.setValue(spouse);
        await this.currentTotalSavings.setValue(totalSavings);
        await this.currentAnnualSavings.setValue(currentSaving);
        await this.savingsIncreaseRate.setValue(rateOfIncrease);
    }

    public async fillSocialSecurityIncome (socialSecurityOverride: number, married: boolean): Promise<void> {
        if(socialSecurityOverride) {
            await this.ssIncomeYes.click();
            await this.maritalStatusMarried.waitForDisplayed();
            if(married) {
                await this.maritalStatusMarried.click();
            } else {
                await this.maritalStatusSingle.click();
            }
            await this.ssOverride.setValue(socialSecurityOverride);
        }
    }

}

export default new RetirementCalculatorPage();
