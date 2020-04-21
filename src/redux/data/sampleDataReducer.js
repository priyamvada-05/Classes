const INITIAL_STATE={
	loadingUserDeatil: false,
	userDetail: null,
	errorUserDetail: null,
	loadingSelectedUserDeatil: false,
	selectedUserDetail: null,
	errorSelectedUserDetail: null,
	uploadingUserDeatil: false,
	uploadedDetail: null,
	errorUpload:null,
	allUserDeatil:[],
	loadingAllUserDetail:false,
	errorAllUserDetail:null,
	actionStartSuscribe:false,
	actionStatusSuscribe:null,
	actionErrorSscribe:null,
	actionStartUploadVideoLink:false,
	actionStatusUploadVideoLink:null,
	actionErrorUploadVideoLink:null
}

const sampleDataReducer = (state=INITIAL_STATE, action)=>{

	switch(action.type){

		case 'START_UPLOADING_USER_DATA_FROM_DATABASE' : 
			return({
				...state,
				uploadingUserDeatil: true
			})

		case 'SUCCESSFULL_UPLOADING_USER_DATA_FROM_DATABASE' : 
			return({
				...state,
				uploadingUserDeatil: false,
				uploadedDetail: action.payload
			})

		case 'ERROR_UPLOADING_USER_DATA_FROM_DATABASE' : 
			return({
				...state,
				uploadingUserDeatil: false,
				errorUpload: action.payload
			})

		case 'START_GETTING_USER_DATA_FROM_DATABASE' : 
			return({
				...state,
				loadingUserDeatil: true
			})

		case 'SUCCESSFULL_GETTING_USER_DATA_FROM_DATABASE' : 
			return({
				...state,
				loadingUserDeatil: false,
				userDetail: action.payload
			})

		case 'ERROR_GETTING_USER_DATA_FROM_DATABASE' : 
			return({
				...state,
				loadingUserDeatil: false,
				errorUserDetail: action.payload
			})

		case 'START_GETTING_SELECTED_USER_DATA_FROM_DATABASE' : 
			return({
				...state,
				loadingSelectedUserDeatil: true,
				selectedUserDetail: null,
				errorSelectedUserDetail: null
			})

		case 'SUCCESSFULL_GETTING_SELECTED_USER_DATA_FROM_DATABASE' : 
			return({
				...state,
				loadingSelectedUserDeatil: false,
				selectedUserDetail: action.payload
			})

		case 'ERROR_GETTING_SELECTED_USER_DATA_FROM_DATABASE' : 
			return({
				...state,
				loadingSelectedUserDeatil: false,
				errorSelectedUserDetail: action.payload
			})

		case 'START_GETTING_ALL_USERS_FROM_DATABASE' : 
			return({
				...state,
				loadingAllUserDetail: true
			})

		case 'SUCCESSFULL_GETTING_ALL_USERS_FROM_DATABASE' : 
			return({
				...state,
				loadingAllUserDetail: false,
				allUserDeatil: action.payload
			})

		case 'ERROR_GETTING_ALL_USERS_FROM_DATABASE' : 
			return({
				...state,
				loadingAllUserDetail: false,
				errorAllUserDetail: action.payload
			})

		case 'START_SUSCRIBE' : 
			return({
				...state,
				actionStartSuscribe: true
			})

		case 'SUCCESSFULL_SUSCRIBE' : 
			return({
				...state,
				actionStartSuscribe: false,
				actionStatusSuscribe: action.payload
			})

		case 'ERROR_SUSCRIBE' : 
			return({
				...state,
				actionStartSuscribe: false,
				actionErrorSscribe: action.payload
			})

		case 'START_UPLOAD_VIDEO_LINK' : 
			return({
				...state,
				actionStartUploadVideoLink: true
			})

		case 'SUCCESSFULL_UPLOAD_VIDEO_LINK' : 
			return({
				...state,
				actionStartUploadVideoLink: false,
				actionStatusUploadVideoLink: action.payload
			})

		case 'ERROR_UPLOAD_VIDEO_LINK' : 
			return({
				...state,
				actionStartUploadVideoLink: false,
				actionErrorUploadVideoLink: action.payload
			})

		case 'LOGOUT' : 
			return({
				...state,
				loadingSelectedUserDeatil: false,
				selectedUserDetail: null,
				errorSelectedUserDetail: null,
			})

		

		default :
			return(state)
	}
}

export default sampleDataReducer