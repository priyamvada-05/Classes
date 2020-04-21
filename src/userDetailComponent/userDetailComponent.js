import React from 'react';
import './userDetailComponent.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect} from 'react-redux';
import { startSuscribe} from '../redux/data/sampleDataAction';

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

function UserDetailComponent(props) {
	const classes = useStyles();

	const handleClick = ()=>{
		props.suscribe()
	}

  return (
    <div className="homepage">

    	{props.allUserDeatil.map((item)=>
	          <Paper className='paper'>
	          	<h1> {item['username']}</h1>
	          	<h1> {item['email']}</h1>
	          	<h1> {item['phoneNo']}</h1>
	          	      <Button
				        variant="contained"
				        color="default"
				        className={classes.button}
				        startIcon={<CloudUploadIcon />}
				        onClick={()=> {props.suscribe({userID:item['_id']})}}
				      >
				        Action Suscribe
				      </Button>
	          </Paper>
    	)}

    </div>
  );
}

const mapStateToProps = (rootReducer)=>{
	return({
		allUserDeatil: rootReducer.sampleData.allUserDeatil
	})
}

const mapDispatchToProps = (dispatch)=>{
	return({
		suscribe: (obj)=> dispatch(startSuscribe(obj))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailComponent)
