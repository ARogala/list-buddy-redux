//action creators

export const saveToDoListItem = (item) => {
	return {
		type: 'SAVE_TODOLISTITEM',
		payload: {
			item: item,
			checked: false
		}

	};
};

export const saveToDoListProgress = (toDoListRef) => {
	return {
		type: 'SAVE_TODOLISTPROGRESS',
		payload: {
			toDoListRef: toDoListRef
		}
	};
};

export const deleteToDoList = () => {
	return {
		type: 'DELETE_TODOLIST',
	};
};


export const updateTemplate = (template) => {
	return {
		type: 'UPDATE_TEMPLATE',
		payload: {
			template: template
		}
	};
};