import { all, call} from 'redux-saga/effects';
import { startUploadingDataForTable, startGettingSelectedUserFromDatabase, startgettingAllUserDataForTable, startSuscribeForTable, startUploadVideoLinkForTable} from './data/sampleDataSaga';

export default function* rootSaga(){
	yield all([call(startUploadingDataForTable), call(startGettingSelectedUserFromDatabase), call(startgettingAllUserDataForTable), call(startSuscribeForTable), call(startUploadVideoLinkForTable)])
}