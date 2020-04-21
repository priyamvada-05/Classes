import React from 'react';
import { Route,Redirect} from 'react-router-dom';
import { connect} from 'react-redux';

const AuthProtection=({component:Component, currentUserFromRedux, ...restProps})=>{


	return(
		<Route {...restProps} render={(props)=> {
				return(
					currentUserFromRedux ? 
					<Component {...props}/> :
					<Redirect to='/sign-in' />
				    )}
				}
				/>
		)
}

const mapStateToProps=(rootReducer)=>{
	return({
		currentUserFromRedux:rootReducer.sampleData.selectedUserDetail
	})
}

export default connect(mapStateToProps)(AuthProtection)