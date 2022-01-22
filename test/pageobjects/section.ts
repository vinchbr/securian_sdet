import {ChainablePromiseElement} from "webdriverio";

export default class Section {
    private scope: ChainablePromiseElement<Promise<WebdriverIO.Element>>;

    constructor(scope: ChainablePromiseElement<Promise<WebdriverIO.Element>>) {
        this.scope = scope;
    }

    public $(args: string) {
        return this.scope.$(args);
    }

    public $$(args: string) {
        return this.scope.$$(args);
    }
}