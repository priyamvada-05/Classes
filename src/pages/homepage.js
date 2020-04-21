import React from 'react';
import HomePageComponent from '../homepageComponent_bkp/homepageComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import SigninSignupComponent from '../sign-in-sign-up-component/sign-in-sign-up.component';
//import HomeNewPageComponent from '../homeNewPageComponent/homeNewPageComponent';
import AuthProtection from '../auth-protection-component/authProtection';
import { connect} from 'react-redux';
import UserDetailComponent from '../userDetailComponent/userDetailComponent';
import AdminPageComponent from '../adminpageComponent/adminpageComponent';

class HomePage extends React.Component{

	constructor(props){
		super(props);
	}


	componentDidMount(){


	}

	componentWillUnmount(){
		
	}

	render(){
		return(
			<div>
					<div className='new'>
					<Switch >
						<AuthProtection 
							exact={true} 
							path='/' 
							component={HomePageComponent}>
						</AuthProtection>

						<AuthProtection 
							exact={true} 
							path='/admin/UserDetail' 
							component={UserDetailComponent}>
						</AuthProtection>

						<AuthProtection 
							exact={true} 
							path='/admin' 
							component={AdminPageComponent}>
						</AuthProtection>


						<Route 
							exact={true} 
							path='/sign-in' 
							render={ ()=>{
								return(
								this.props.currentUserFromRedux?
									<Redirect to='/' /> :
									<SigninSignupComponent />)
							}}
						></Route>

					</Switch>
					</div>

			</div>
			)

	}

}

const mapDispatchToProps=(dispatch)=>{

}

const mapStateToProps= (rootReducer)=>{
	return({
		currentUserFromRedux:rootReducer.sampleData.selectedUserDetail
	})
}

export default connect(mapStateToProps)(HomePage)