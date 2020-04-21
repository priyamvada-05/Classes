export const startUploadingUserDataFromDatabase= (object)=>{
	return({
		type: 'START_UPLOADING_USER_DATA_FROM_DATABASE',
		payload: object
	})
}

export const successfullUploadingUserDataFromDatabase= (object)=>{
	return({
		type: 'SUCCESSFULL_UPLOADING_USER_DATA_FROM_DATABASE',
		payload: object
	})
}

export const errorUploadingUserDataFromDatabase= (object)=>{
	return({
		type: 'ERROR_UPLOADING_USER_DATA_FROM_DATABASE',
		payload: object
	})
}

export const startGettingSelectedUserDataFromDatabase= (object)=>{
	return({
		type: 'START_GETTING_SELECTED_USER_DATA_FROM_DATABASE',
		payload: object
	})
}

export const successfullGettingSelectedUserDataFromDatabase= (object)=>{
	return({
		type: 'SUCCESSFULL_GETTING_SELECTED_USER_DATA_FROM_DATABASE',
		payload: object
	})
}

export const errorGettingSelectedUserDataFromDatabase= (object)=>{
	return({
		type: 'ERROR_GETTING_SELECTED_USER_DATA_FROM_DATABASE',
		payload: object
	})
}

export const startGettingSelectedUserMessageFromDatabase= (object)=>{
	return({
		type: 'START_GETTING_SELECTED_USER_MESSAGE_FROM_DATABASE',
		payload: object
	})
}

export const successfullGettingSelectedUserMessageFromDatabase= (object)=>{
	return({
		type: 'SUCCESSFULL_GETTING_SELECTED_USER_MESSAGE_FROM_DATABASE',
		payload: object
	})
}

export const errorGettingSelectedUserMessageFromDatabase= (object)=>{
	return({
		type: 'ERROR_GETTING_SELECTED_USER_MESSAGE_FROM_DATABASE',
		payload: object
	})
}

export const logout=()=>{
	return({
		type: 'LOGOUT',
	})
}

export const startGettingAllUsersFromDatabase= ()=>{
	return({
		type: 'START_GETTING_ALL_USERS_FROM_DATABASE'
	})
}

export const successfullGettingAllUsersFromDatabase= (object)=>{
	return({
		type: 'SUCCESSFULL_GETTING_ALL_USERS_FROM_DATABASE',
		payload: object
	})
}

export const errorGettingAllUsersFromDatabase= (object)=>{
	return({
		type: 'ERROR_GETTING_ALL_USERS_FROM_DATABASE',
		payload: object
	})
}

export const startSuscribe= (object)=>{
	return({
		type: 'START_SUSCRIBE',
		payload: object
	})
}

export const successfullSuscribe= (object)=>{
	return({
		type: 'SUCCESSFULL_SUSCRIBE',
		payload: object
	})
}

export const errorSuscribe= (object)=>{
	return({
		type: 'ERROR_SUSCRIBE',
		payload: object
	})
}

export const startUploadVideoLink= (object)=>{
	return({
		type: 'START_UPLOAD_VIDEO_LINK',
		payload: object
	})
}

export const successfullUploadVideoLink= (object)=>{
	return({
		type: 'SUCCESSFULL_UPLOAD_VIDEO_LINK',
		payload: object
	})
}

export const errorUploadVideoLink= (object)=>{
	return({
		type: 'ERROR_UPLOAD_VIDEO_LINK',
		payload: object
	})
}