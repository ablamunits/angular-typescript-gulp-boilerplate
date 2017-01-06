import BaseDriver from './../../test-utils/base-driver';
import {ListItem} from './../../list-item/list-item.i';

export class ListItemBlockDriver extends BaseDriver {
	static build(listItem: ListItem): ListItemBlockDriver {
		let elem, scope: any;
		inject(($compile, $rootScope, $timeout) => {
			scope = $rootScope.$new();
			scope.listItem = listItem;
			elem = $compile(`<list-item-block list-item="listItem"></list-item-block>`)(scope);

			scope.$digest();

			document.body.innerHTML = elem;
		});

		return new ListItemBlockDriver(elem, scope);
	}

	getTitle(): string {
		return this.getTextContent('.title');
	}

	getContent(): string {
		return this.getTextContent('.content');
	}
}
