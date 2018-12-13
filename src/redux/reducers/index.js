import { combineReducers } from 'redux';

const initialState = {
	toDoListItems: []
}

const toDoListItems =  (toDoListItems = initialState.toDoListItems, action) => {
	switch(action.type) {
		case 'SAVE_TODOLISTITEM':
			return [...toDoListItems, {toDoItem: action.payload.item, checked: action.payload.checked}];
		case 'SAVE_TODOLISTPROGRESS':
			const newToDoListItems = [...toDoListItems];
			const length = action.payload.toDoListRef.length;
			const toDoListRef = action.payload.toDoListRef;
			//console.log(toDoListRef);
    		//console.log(toDoListRef[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1]);
			for(let i = 0; i < length; i++) {
      			newToDoListItems[i].checked = toDoListRef[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].checked;
    		}
			return newToDoListItems;
		case 'DELETE_TODOLIST':
			return [];
		default:
			return toDoListItems;
	}
};




export default combineReducers({
	toDoListItems: toDoListItems,
});