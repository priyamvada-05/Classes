import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect} from 'react-redux';
import { startGettingAllUsersFromDatabase, startUploadVideoLink} from '../redux/data/sampleDataAction';
import TextField from '@material-ui/core/TextField';

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

function AdminPageComponent(props) {
	const classes = useStyles();
	const [videoLink, setName]= React.useState('')
	const [description, setEmail]= React.useState('')

	const handleChange=(event)=>{
		if(event.target.name== 'videoLink'){
			setName(event.target.value)
		}

		if(event.target.name== 'description'){
			setEmail(event.target.value)
		}
	}

	const handleClick1 = () => { 

		props.getAllUserDetail();
		props.history.push('/admin/UserDetail')
	}

	

  return (
    <div className="homepage">
    	<Grid className='container' container spacing={1}>
	        <Grid item lg={3} spacing={1}>
	          <Paper className='paper'>
	          	<h1>Upload Video link</h1>
	          	<TextField className='text' name='videoLink' onChange={handleChange} label='enter Video link'/>
			     <TextField className='text' name='description' onChange={handleChange} label='enter description'/>
                          
	          	      <Button
				        variant="contained"
				        color="default"
				        className={classes.button}
				        startIcon={<CloudUploadIcon />}
				        onClick={()=> props.uploadVideoLink({videoLink, description})}
				      >
				        Upload
				      </Button>
	          </Paper>
	        </Grid>
	       	<Grid item lg={3} spacing={1}>
	          <Paper className='paper'>
	          	<h1>Get Users</h1>
	          	<input type='file' />
	          	      <Button
				        variant="contained"
				        color="default"
				        className={classes.button}
				        startIcon={<CloudUploadIcon />}
				        onClick={handleClick1}
				      >
				        Get Detail
				      </Button>
	          </Paper>
	        </Grid>


	        

      </Grid>
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
		getAllUserDetail: ()=> dispatch(startGettingAllUsersFromDatabase()),
		uploadVideoLink: (obj)=> dispatch(startUploadVideoLink(obj))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageComponent)
