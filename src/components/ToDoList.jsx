import React from 'react';
import PropTypes from 'prop-types';

//material UI
import { withStyles } from '@material-ui/core/styles';
import RootRef from '@material-ui/core/RootRef';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import ConfirmDialog from './ConfirmDialog';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { saveToDoListProgress, deleteToDoList } from '../redux/actions';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  deletItemButton: {
  	margin: 'auto 0px auto auto',
  },
  btnContainer: {
  	textAlign: 'center'
  },
  checked: {
	'& + $label': {
		fontWeight: 'normal',
	  	textDecoration: 'line-through'
	},
  },
  label : {
  	fontWeight: 'bold'
  }
});

class ToDoList extends React.Component {
	constructor(props) {
	    super(props);
	    this.toDoList = React.createRef();
	    this.state={
	    	alertLogic: false
	    }
  	}

  	openAlert() {
		this.setState({alertLogic: true});
	}

	closeAlert() {
		this.setState({alertLogic: false});
	}

	confirm() {
		this.props.deleteToDoList();
	}

	render() {
		const { classes }          = this.props;
		const toDoListItems        = this.props.toDoListItems;
		const saveToDoListProgress = this.props.saveToDoListProgress;

		const toDoItems = toDoListItems.map((item, index) => {
			return(
				<ListItem key={index}>
					<FormControlLabel
						classes={{label: classes.label}}
						control={
							<Checkbox
								color="primary"
								defaultChecked={item.checked}
								classes={{checked: classes.checked}}
							/>
						}
						label={item.toDoItem}
					/>
				</ListItem>
			);
		});
		//console.log(toDoItems);
		return (
			<div>
				<ConfirmDialog
					closeAlert={() => this.closeAlert()}
					alertLogic={this.state.alertLogic}
					confirm={() => this.confirm()}
				/>
				<h3>To Do List</h3>
				<FormGroup>
					<RootRef rootRef={this.toDoList}>
						<List>
							{toDoItems}
						</List>
					</RootRef>
				</FormGroup>
				<div className={classes.btnContainer}>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						onClick={() => saveToDoListProgress(this.toDoList.current.childNodes)}
					>
						Save Progress
					</Button>
					<Button
						className={classes.button}
						variant="contained"
						color="secondary"
						onClick={() => {
							this.openAlert();
						}}
					>
						Trash List
					</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return{
		toDoListItems: state.toDoListItems
	};
};

const mapDispatchToProps = {
	saveToDoListProgress: saveToDoListProgress,
	deleteToDoList: deleteToDoList
};


export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(ToDoList);


ToDoList.propTypes = {
  toDoListItems: PropTypes.array.isRequired,
  saveToDoListProgress: PropTypes.func.isRequired,
  deleteToDoList: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}
