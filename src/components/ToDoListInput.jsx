import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import AlertDialog from './AlertDialog';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { saveToDoListItem } from '../redux/actions';


const styles = theme => ({
	formControl: {
		margin: theme.spacing.unit,
		width: '90%'
	},
	button: {
		margin: theme.spacing.unit,
	},
	container: {
		textAlign: 'center'
	}
});

class ToDoListInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			alertLogic: false,
		};
	}

	openAlert() {
		this.setState({alertLogic: true});
	}

	closeAlert() {
		this.setState({alertLogic: false});
	}

	render() {
		const { classes }               = this.props;
		const toDoItem                  = this.props.toDoItem;
		const handleToDoItemTextChange  = this.props.handleToDoItemTextChange;
		const clearToDoInputText        = this.props.clearToDoInputText;
		const saveToDoListItem          = this.props.saveToDoListItem;

		return (
			<div>
				<AlertDialog
					closeAlert={() => this.closeAlert()}
					alertLogic={this.state.alertLogic}
					alertTitle='Please enter a list item.'
					alertContentText='To save a item to your list please enter it in the input field provided.'
				/>
				<div className={classes.container}>
					<FormControl className={classes.formControl} variant="outlined">
						<InputLabel
							ref={ref => {
								this.labelRef = ReactDOM.findDOMNode(ref);
							}}
							htmlFor="toDoItem"
						>
							Input a list item
						</InputLabel>
						<OutlinedInput
							id="toDoItem"
							type="text"
							placeholder="list item"
							value={toDoItem}
							onChange={(e) => handleToDoItemTextChange(e.target.value)}
							onKeyPress={(e) => {
								if(e.key === 'Enter') {
									if(toDoItem === '') {
										this.openAlert();
      									return;
									}
									saveToDoListItem(toDoItem.trim());
									clearToDoInputText();
								}
							}}
							labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
						/>
					</FormControl>
				</div>
				<div className={classes.container}>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						onClick={() => {
							if(toDoItem === '') {
								this.openAlert();
      							return;
							}
							saveToDoListItem(toDoItem.trim());
							clearToDoInputText();
						}}
					>
						Add Item
					</Button>
					<Button
						className={classes.button}
						variant="contained"
						color="default"
						onClick={() => clearToDoInputText()}
					>
						Cancel
					</Button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	saveToDoListItem: saveToDoListItem
};

export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps),
)(ToDoListInput);

ToDoListInput.propTypes = {
  toDoItem: PropTypes.string.isRequired,
  handleToDoItemTextChange: PropTypes.func.isRequired,
  clearToDoInputText: PropTypes.func.isRequired,
  saveToDoListItem: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}