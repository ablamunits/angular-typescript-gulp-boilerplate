import {ListItem} from './../../list-item/list-item.i';
import {ListItemBlockDriver} from './list-item-block.driver';

describe('List Item Block', () => {
	beforeEach(() => {
		angular.mock.module('MainApp');
		angular.mock.module('mockTemplates');
	});

	it('Should display the title and content of a list block', () => {
		const listItem: ListItem = {
			title: 'I am a title',
			content: 'I am some content'
		};

		const listItemBlock = ListItemBlockDriver.build(listItem);

		expect(listItemBlock.getTitle()).toBe(listItem.title);
		expect(listItemBlock.getContent()).toBe(listItem.content);
	});
});
