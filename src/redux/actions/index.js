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

export const saveCategorizedListItem = (item, itemCategory, template) => {
	return {
		type: 'SAVE_CATEGORIZEDLISTITEM',
		payload: {
			item: item,
			checked: false,
			itemCategory: itemCategory,
			template: template
		}
	};
};

export const deleteCategorizedList = (template) => {
	return {
		type: 'DELETE_CATEGORIZEDLIST',
		payload: {
			template: template
		}
	};
};

export const saveCategorizedListProgress = (categorizedListRef) => {
	return {
		type: 'SAVE_CATEGORIZEDLISTPROGRESS',
		payload: {
			categorizedListRef: categorizedListRef
		}
	};
}