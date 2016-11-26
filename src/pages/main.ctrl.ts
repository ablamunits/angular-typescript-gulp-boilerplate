import {ListItem} from './../list-item/list-item.i';

export class MainPageController {
	$state: any;
	listItems: ListItem[];

	constructor($state) {
		this.$state = $state;

		this.listItems = [{
			title: 'First title',
			content: 'First Content'
		}, {
			title: 'Second title',
			content: 'Second Content'
		}];
	}

	doSomething() {
		console.log('Do something from this page controller!');
	}
}
