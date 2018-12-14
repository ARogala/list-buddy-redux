import { combineReducers } from 'redux';

const initialState = {
	toDoListItems: []
}

const toDoListItems =  (toDoListItems = initialState.toDoListItems, action) => {
	let newItems;
	let length;
	switch(action.type) {
		case 'SAVE_TODOLISTITEM':
			//make sure items have same id as key given during render
			//This ensures deleteToDoListItem works properly because
			//deleteToDoListItem filters the items by the key assigned during render
			newItems = toDoListItems.map((item, index) => {
				return {...item, id: index}
			});
			length = toDoListItems.length;
			return [...newItems,{toDoItem: action.payload.item, checked: action.payload.checked, id: length}];
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
		case 'DELETE_TODOLISTITEM':
			//make sure items have same id as key given during render
			//This ensures deleteToDoListItem works properly because
			//deleteToDoListItem filters the items by the key assigned during render
			newItems = toDoListItems.map((item, index) => {
				return {...item, id: index}
			});
			return newItems.filter(item => item.id !== action.payload.id);
		default:
			return toDoListItems;
	}
};




export default combineReducers({
	toDoListItems: toDoListItems,
});