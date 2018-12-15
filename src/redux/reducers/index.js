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
	let item;
	let checked;
	let category;
	let template;
	let id;
	switch(action.type) {
		case 'SAVE_CATEGORIZEDLISTITEM':
			item     = action.payload.item;
			checked  = action.payload.checked;
			category = action.payload.itemCategory;
			template = action.payload.template;
			id       = categorizedListItems.length;
			return [...categorizedListItems, {item: item, checked: checked, category: category, template: template, id: id}];
		case 'SAVE_CATEGORIZEDLISTPROGRESS':
			const newCategorizedListItems           = [...categorizedListItems];
			const categorizedListRef                = action.payload.categorizedListRef;
			const categorizedListRefLength          = categorizedListRef.length;
    		const categorizedListItemsLength        = categorizedListItems.length;
			//console.log(categorizedListRef);
    		//console.log(categorizedListRef[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].checked);

			/*consider optimizing this algorithm.
			Loop through the categorized list
			Loop through the categorized list child nodes (indidvidual list items)
			get each list items id and current checked state
			if the list items id matches the list items id in storage update the checked state
			finally update state and local storage
			*/
			for(let i = 0; i < categorizedListRefLength; i++) {
			    //console.log(categorizedListRef[i].childNodes[1].childNodes.length);
			    const categorizedListRefChildNodeLength = categorizedListRef[i].childNodes[1].childNodes.length;

			    for(let j = 0; j < categorizedListRefChildNodeLength; j++) {
				    const id = parseInt(categorizedListRef[i].childNodes[1].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[1].value);
				    const checked = categorizedListRef[i].childNodes[1].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[1].checked;

			        for(let k = 0; k < categorizedListItemsLength; k++) {
				        if(newCategorizedListItems[k].id === id) {
				        	newCategorizedListItems[k].checked = checked;
				        }
			        }
			    }
		    }
			return newCategorizedListItems;
		case 'DELETE_CATEGORIZEDLIST':
			template = action.payload.template;
			return categorizedListItems.filter(item => item.template !== template);
		default:
			return categorizedListItems;
	}

};

export default combineReducers({
	toDoListItems: toDoListItems,
	template: template,
	categorizedListItems: categorizedListItems
});