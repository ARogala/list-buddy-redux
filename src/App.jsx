import React, { Component } from 'react';

import ToDoList from './components/ToDoList';
import ToDoListInput from './components/ToDoListInput';

import list from './list.svg';
import GitHub from './img/github.svg';
import LinkedIn from './img/linkedin.svg';

//materialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
						<ToDoListInput
							toDoItem={this.state.toDoItem}
                    		handleToDoItemTextChange={(toDoItem)=>this.handleToDoItemTextChange(toDoItem)}
                    		clearToDoInputText={()=>this.clearToDoInputText()}
						/>
						<ToDoList />
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

export default withStyles(styles)(App);
