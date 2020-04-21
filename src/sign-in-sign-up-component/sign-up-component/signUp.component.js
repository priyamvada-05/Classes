import React from 'react';
//import { auth, createUserProfileDocument} from '../../firebase-config/firebaseConfig';
import FormInput from '../form-input-component/formInput.component';
import CustomButton from '../custom-button-component/customButton.component';
import './signUp.component.scss';
import { connect} from 'react-redux';
import { startUploadingUserDataFromDatabase}from '../../redux/data/sampleDataAction';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class SignUp extends React.Component{

	constructor(props){
		super(props)
		this.state={
			displayName:'',
			email:'',
			password:'',
			confirmPassword:'',
			phoneNo:'',
			error:{
				displayName:null,
				email:null,
				password: null,
				confirmPassword: null
			},
			loading:false,
			register_success:null
		}
	}



	handleChange=(event)=>{
		//event.preventDefault();
		const {name, value}= event.target;
		const errors= this.state.error
		switch (name) {
		    case 'displayName': 
		      errors.displayName = 
		        value.length < 5
		          ? 'Full Name must be 5 characters long!'
		          : '';
		      break;

		    case 'email': 
		      errors.email = 
		        validEmailRegex.test(value)
		          ? ''
		          : 'Email is not valid!';
		      break;

		    case 'password': 
		      errors.password = 
		        value.length < 6
		          ? 'Password must be 6 characters long!'
		          : '';
		      break;

		    case 'confirmPassword': 
		      errors.confirmPassword = 
		        this.state.password !== value
		          ? 'Password must be same!'
		          : '';
		      break;

		    case 'phoneNo': 
		      errors.phoneNo = 
		        value.length===0
		          ? 'Please enter phone no'
		          : '';
		      break;

		    default:
		      break;
		  }

		this.setState({ error:errors, [name] : value })

	}

	handleSubmit=async (event)=>{
		event.preventDefault();
		const { email, password, confirmPassword, displayName, phoneNo}= this.state;
		this.setState({loading: true})
		
		this.props.registerUser({username:displayName, email, password, phoneNo})

		this.setState({
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		})
}

	render(){

		return(
			<div className='sign-up'>
				<h2 className='title'> I don't have an account</h2>
				<span><strong> Sign up with email and password </strong></span>
				<form onSubmit={this.handleSubmit}>

					<FormInput type='text' lable='username' value={this.state.displayName} name='displayName' onChange={this.handleChange} />
										{
						(this.state.error.displayName)?
						<div><span className='error'> {this.state.error.displayName}</span><br /></div>
						: null
					}

					<FormInput type='text' lable='email' value={this.state.email} name='email' onChange={this.handleChange} />
										{
						(this.state.error.email)?
						<div><span className='error'> {this.state.error.email}</span><br /></div>
						: null
					}
					<FormInput type='phoneNo' lable='phone no' value={this.state.phoneNo} name='phoneNo' onChange={this.handleChange} />
										{
						(this.state.error.phoneNo)?
						<div><span className='error'> {this.state.error.phoneNo}</span><br /> <br /></div>
						: null
					}
					<FormInput type='password' lable='password' value={this.state.password} name='password' onChange={this.handleChange} />
										{
						(this.state.error.password)?
						<div><span className='error'> {this.state.error.password}</span><br /></div>
						: null
					}
					<FormInput type='password' lable='confirm password' value={this.state.confirmPassword} name='confirmPassword' onChange={this.handleChange} />
										{
						(this.state.error.confirmPassword)?
						<div><span className='error'> {this.state.error.confirmPassword}</span><br /> <br /></div>
						: null
					}
					<CustomButton loading={this.state.loading} type='submit' name='submit'> Sign up </CustomButton>
										{
						(this.props.register_error)?
						<div><span className='error'>Register error</span><br /> <br /></div>
						: null
					}			
				</form>
			</div>
			)
	}
}

const mapStateToProps=(rootReducer)=>{
	return({
		register_error: rootReducer.sampleData.errorUpload
	})
}

const mapDispatchToProps = (dispatch)=>{
	return({
		registerUser: (obj)=> dispatch(startUploadingUserDataFromDatabase(obj))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
