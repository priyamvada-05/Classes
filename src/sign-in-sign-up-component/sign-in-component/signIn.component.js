import React from 'react';
import FormInput from '../form-input-component/formInput.component'
import CustomButton from '../custom-button-component/customButton.component';
import './signIn.component.scss';
//import { signInWithGoogle} from '../../firebase-config/firebaseConfig';
//import { auth} from '../../firebase-config/firebaseConfig';
import { connect} from 'react-redux';
import { startGettingSelectedUserDataFromDatabase} from '../../redux/data/sampleDataAction';

class SignIn extends React.Component{

	constructor(props){
		super(props)
		this.state={
			email:'',
			password:'',
			loading:false
		}
	}

	handleChange=(event)=>{
		const {name, value}=event.target;
		this.setState({ [name]: value})
	}

	submitChange=async(event)=>{
		event.preventDefault();
		const { email, password}= this.state;
		this.setState({loading: true})
		
		this.props.startGettingSelectedUserDataFromDatabase({ email, password})
		

	}

	render(){

	return(
		<div className='sign-in'>
			<h2 className='title'> I already have an account</h2>
			<span> <strong>Sign in with your email and password</strong></span>
		<form onSubmit={this.submitChange}>
			<FormInput type='email' lable='email' value={this.state.email}  name='email' onChange={this.handleChange}  />
			<FormInput type='password' lable='password' value={this.state.password}  name='password' onChange={this.handleChange}  />
			<div className='buttons'>
			<CustomButton loading={this.state.loading} type='submit' name='submit'> Sign in </CustomButton>
			<CustomButton type='button' name='submit' isGoogle={true} > Sign in as Admin </CustomButton>
			</div>
		</form>

		</div>

		)
}
}

const mapDispatchToProps=(dispatch)=>{
	return({
	startGettingSelectedUserDataFromDatabase: (obj)=>dispatch(startGettingSelectedUserDataFromDatabase(obj))
})
}

const mapStateToProps=(rootReducer)=>{

}

export default connect(null, mapDispatchToProps)(SignIn)