import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

const styles = theme => ({
	paper: {
		marginTop: theme.spacing(10),
		fontSize: '.875rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		background: '#FFF',
		color: 'rgba(0, 0, 0, 0.87)',
		boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
		marginTop: '30px',
		borderRadius: '6px',
		marginBottom: '30px',
		flexDirection: 'column',
		wordWrap: 'break-word',
		position: 'relative'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
		padding: '0.9375rem 20px',
		flex: '1 1 auto',
		position: 'relative',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
});


class SignUp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			userName: '',
			submitted: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitRegister = this.submitRegister.bind(this);

	}

	handleInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	submitRegister(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { firstName, lastName, userName, email, password } = this.state;
		if (email && password) {
			this.props.register({ firstName, lastName, userName, email, password });
		}
	}

	render() {
		// const {classes} = useStyles();
		const { registering, classes } = this.props;
		console.log('SIgnUP:',this.props);
		const { firstName, lastName, userName, email, password, submitted } = this.state;
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">Sign up
					</Typography>
					
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="fname"
									name="firstName"
									variant="outlined"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									value={this.state.firstName}
									onChange={this.handleInputChange}
									placeholder="Enter First Name"
								/>

							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="lname"
									placeholder="Enter Last Name"
									value={this.state.lastName}
									onChange={this.handleInputChange}
								/>

							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={this.state.email}
									onChange={this.handleInputChange}
									placeholder="Enter Email"
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="userName"
									label="Username"
									name="userName"
									autoComplete="username"
									value={this.state.userName}
									onChange={this.handleInputChange}
								/>
							</Grid>


							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									placeholder="Enter Password"
									value={this.state.password}
									onChange={this.handleInputChange}
								/>
							</Grid>


						</Grid>
						<Button
							type="button"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={this.submitRegister}
						>
							Sign Up
						</Button>

						<Grid container justify="flex-end">
							<Grid item>
								<Link to="/login" >
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}

}
function mapState(state) {
	const { registering } = state.register;
	return { registering };
}

const actionCreators = {
	register: userActions.register
}

const enhance = compose(
	connect(
		mapState,
		actionCreators
	),
	withStyles(styles)
);

const EnhancedSignUp = enhance(SignUp);
export { EnhancedSignUp as Registers };

