import { ChainablePromiseElement } from 'webdriverio';
import Section from "./section";

export default class CalculatorValuesSection extends Section {

    public get additionalIncome(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#additional-income');
    }

    public get additionalIncomeTooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#additional-income-tooltip');
    }

    public get retirementDuration(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#retirement-duration');
    }

    public get retirementDurationTooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#retirement-duration-tooltip');
    }

    public get includeInflation(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#include-inflation');
    }

    public get excludeInflation(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#exclude-inflation');
    }

    public get includeInflationTooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#include-inflation-tooltip');
    }

    public get retirementAnnualIncome(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#retirement-annual-income');
    }

    public get retirementAnnualIncomeTooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#retirement-annual-income-tooltip');
    }

    public get preRetirementROITooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#pre-retirement-roi-tooltip');
    }

    public get postRetirementROI(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#post-retirement-roi');
    }

    public get postRetirementROITooltip(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('#post-retirement-roi-tooltip');
    }

    public get saveChanges(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('input[onclick="savePersonalizedValues();"]');
    }

    public get cancel(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.$('input[onclick="clearDefaultValuesForm();"]');
    }

}
