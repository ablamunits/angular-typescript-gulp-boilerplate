import {ListItem} from './../../list-item/list-item.i';

class ListItemBlockDirectiveController {
	listItem: ListItem;

	constructor() {
		// Empty Constructor
	};

	doSomething() {
		console.log('Do something with this directive!');
	}
}

export function listItemBlockDirectiveFactory(): ng.IDirective {
	return <ng.IDirective> {
		restrict: 'E',
		scope: {
			listItem: '='
		},
		templateUrl: 'directives/list-item-block/list-item-block.tpl.html',
		controller: ListItemBlockDirectiveController,
		controllerAs: 'ctrl',
		bindToController: true
	};
}
