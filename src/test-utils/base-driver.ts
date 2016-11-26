export default class BaseDriver {
	element: HTMLElement;
	scope: any;
	$timeout: any;

	constructor(elem: JQuery, scope) {
		this.scope = scope;
		if (elem.length > 0) {
			this.element = elem[0];
			inject($timeout => this.$timeout = $timeout);
		}
	}

	find(selector: string): Element {
		return this.element.querySelector(selector);
	}

	getTextContent(selector: string): string {
		return this.find(selector).textContent;
	}
}
