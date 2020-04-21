import { takeEvery, call, put, takeLatest} from 'redux-saga/effects';
import { successfullUploadingUserDataFromDatabase, errorUploadingUserDataFromDatabase, successfullGettingUserDataFromDatabase, errorGettingUserDataFromDatabase, successfullGettingSelectedUserDataFromDatabase, errorGettingSelectedUserDataFromDatabase, errorSuscribe, successfullSuscribe, successfullGettingAllUsersFromDatabase, errorGettingAllUsersFromDatabase, successfullUploadVideoLink, errorUploadVideoLink} from './sampleDataAction';



export function* startGettingSelectedUserFromDatabase(){
	yield takeEvery('START_GETTING_SELECTED_USER_DATA_FROM_DATABASE', startGettingSelectedUserDetailFromDatabaseAsync)
}

function* startGettingSelectedUserDetailFromDatabaseAsync({payload}){
	try{
		console.log(payload)
		const response= yield fetch('/api/v1/application/data/viewUser', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)

		})

		const data= yield response.json();
		yield put(successfullGettingSelectedUserDataFromDatabase(data))
	}
	catch(error){
		yield put(errorGettingSelectedUserDataFromDatabase(error))
	}

}

export function* startUploadingDataForTable(){
	yield takeEvery('START_UPLOADING_USER_DATA_FROM_DATABASE', startUploadingDataFromDatabaseAsync)
}

function* startUploadingDataFromDatabaseAsync({payload}){
	try{
		console.log(payload)
		const response= yield fetch('/api/v1/application/data/registerUserByDefault', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)

		})

		const data= yield response.json();
		yield put(successfullUploadingUserDataFromDatabase(data))
	}
	catch(error){
		yield put(errorUploadingUserDataFromDatabase(error))
	}

}

export function* startgettingAllUserDataForTable(){
	yield takeEvery('START_GETTING_ALL_USERS_FROM_DATABASE', startGettingAllUserFromDatabaseAsync)
}

function* startGettingAllUserFromDatabaseAsync(){
	try{
		const response= yield fetch('/api/v1/application/data/getAllUserDetail', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify()

		})

		const data= yield response.json();
		yield put(successfullGettingAllUsersFromDatabase(data))
	}
	catch(error){
		yield put(errorGettingAllUsersFromDatabase(error))
	}

}

export function* startSuscribeForTable(){
	yield takeEvery('START_SUSCRIBE', startSuscribeDatabaseAsync)
}

function* startSuscribeDatabaseAsync({payload}){
	try{
		console.log(payload)
		const response= yield fetch('/api/v1/application/data/suscribe', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)

		})

		const data= yield response.json();
		yield put(successfullSuscribe(data))
	}
	catch(error){
		yield put(errorSuscribe(error))
	}

}

export function* startUploadVideoLinkForTable(){
	yield takeEvery('START_UPLOAD_VIDEO_LINK', startUploadVideoLinkDatabaseAsync)
}

function* startUploadVideoLinkDatabaseAsync({payload}){
	try{
		console.log(payload)
		const response= yield fetch('/api/v1/application/data/uploadVideoLink', {
			method: 'POST',
			headers :{
				'Content-Type': 'application/json'
				},
			body: JSON.stringify(payload)

		})

		const data= yield response.json();
		yield put(successfullUploadVideoLink(data))
	}
	catch(error){
		yield put(errorUploadVideoLink(error))
	}

}