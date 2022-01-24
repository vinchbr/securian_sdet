import { ChainablePromiseElement } from 'webdriverio';

import Page from './helpers/page';

class ResultPage extends Page {

    public get resultMessage(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#result-message');
    }

    public get retirementAmountResults(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#retirement-amount-results');
    }

    public get processingModal(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#calcSpinnerOnly-text');
    }

    public get currentSavingsResults(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#current-savings-results');
    }

    public get emailResults(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button[data-target="#calc-email-modal"]');
    }

    public get editResults(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button[onclick="navigateToRetirementForm();"]');
    }

    public get seeFullResults(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button[onclick="showFullResults();"]');
    }

    public get detailedResultsTable(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#detailed-results-table');
    }

}

export default new ResultPage();
