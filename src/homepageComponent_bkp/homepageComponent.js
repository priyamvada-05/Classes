import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './homepageComponent.scss';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect} from 'react-redux'
import { logout} from '../redux/data/sampleDataAction'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
  	width: '30vw',
  	height: '30vh',
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(5),
  },
}));

function HomePageComponent(props) {
	const classes = useStyles();

	if(props.userDetail[0]['isAdmin']){
		props.history.push('/admin')
	}

	const handleClick=()=>{

		props.logout()
	}

  return (
    <div className="homepage">
    	<Grid className='container' container spacing={1}>
	        <Grid item lg={8} spacing={1}>
	        {props.userDetail[0].suscribe?
	          (<video width="1000" height="500" controls controlsList="nodownload">
	          				  <source src="https://priyamvada.s3-eu-west-1.amazonaws.com/VID-20180309-WA0040.mp4" type="video/mp4" />
	          				  Your browser does not support the video tag.
	          	        
	          		</video>)
	          :<h1>Not Subscribe</h1>
	}
	          	<button onClick={handleClick}>Logout</button>
	         
	        </Grid>


	        

      </Grid>
    </div>
  );
}

const mapDispatchToProps =(dispatch)=>{
	return({
		logout:()=> dispatch(logout())
	})
}

const mapStateToProps = (rootReducer)=>{
	return{
	userDetail: rootReducer.sampleData.selectedUserDetail
}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageComponent)
