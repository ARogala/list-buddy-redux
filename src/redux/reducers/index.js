import { combineReducers } from 'redux';

const initialState = {
	toDoListItems: [],
	template: 'To Do',
	categorizedListItems: []
}

const toDoListItems =  (toDoListItems = initialState.toDoListItems, action) => {
	let newItems;
	let length;
	switch(action.type) {
		case 'SAVE_TODOLISTITEM':
			return [...toDoListItems, {toDoItem: action.payload.item, checked: action.payload.checked}];
		case 'SAVE_TODOLISTPROGRESS':
			newItems = [...toDoListItems];
			length = action.payload.toDoListRef.length;
			const toDoListRef = action.payload.toDoListRef;
			//console.log(toDoListRef);
    		//console.log(toDoListRef[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1]);
			for(let i = 0; i < length; i++) {
      			newItems[i].checked = toDoListRef[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].checked;
    		}
			return newItems;
		case 'DELETE_TODOLIST':
			return [];
		default:
			return toDoListItems;
	}
};

const template = (template = initialState.template, action) => {
	switch(action.type) {
		case 'UPDATE_TEMPLATE':
			return action.payload.template;
		default:
			return template;
	}
};

const categorizedListItems = (categorizedListItems = initialState.categorizedListItems, action) => {
	switch(action.type) {
		case 'SAVE_CATEGORIZEDLISTITEM':
			const item     = action.payload.item;
			const checked  = action.payload.checked;
			const category = action.payload.itemCategory;
			const template = action.payload.template;
			const id       = categorizedListItems.length;
			return [...categorizedListItems, {item: item, checked: checked, category: category, template: template, id: id}];
		default:
			return categorizedListItems;
	}

};

export default combineReducers({
	toDoListItems: toDoListItems,
	template: template,
	categorizedListItems: categorizedListItems
});