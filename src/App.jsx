import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ToDoList from './components/ToDoList';
import ToDoListInput from './components/ToDoListInput';
import ListTypeForm from './components/ListTypeForm';

import CategorizedListItemForm from './components/CategorizedListItemForm';

import list from './list.svg';
import GitHub from './img/github.svg';
import LinkedIn from './img/linkedin.svg';

//materialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { compose } from 'recompose';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    margin: '10px'
  },
  logo: {
  	height: '75px',
  	width: '75px'
  }
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoItem: '',
		};
	}

	handleToDoItemTextChange(toDoItem) {
		this.setState({toDoItem: toDoItem});
	}

	clearToDoInputText() {
		this.setState({toDoItem: ''});
	}

  render() {
  	const { classes } = this.props;
  	const template = this.props.template;
    return (
		<Grid container className={classes.root}>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<CssBaseline />
					<header className={classes.header}>
						<div>
							<img src={list} alt="logo" className={classes.logo} />
							<h1>List Buddy</h1>
						</div>
					</header>
					<section>
						{(template === 'To Do') ? (
							<div>
								<ListTypeForm />
								<ToDoListInput
									toDoItem={this.state.toDoItem}
		                    		handleToDoItemTextChange={(toDoItem)=>this.handleToDoItemTextChange(toDoItem)}
		                    		clearToDoInputText={()=>this.clearToDoInputText()}
								/>
								<ToDoList />
							</div>
						):(
							<div>
								<ListTypeForm />
								<CategorizedListItemForm />
							</div>
						)}
					</section>
					<footer className={classes.footer}>
						<div>
							<a href="https://github.com/ARogala"><img src={GitHub} alt="github"/></a>
							<a href="https://www.linkedin.com/in/andrew-rogala"><img src={LinkedIn} alt="linkedIn"/></a>
						</div>
					</footer>
				</Paper>
			</Grid>
		</Grid>
    );
  }
}

const mapStateToProps = (state) => {
	return{
		template: state.template
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps,null)
)(App);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  template: PropTypes.string.isRequired
}




