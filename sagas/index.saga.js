import { yellow } from "@mui/material/colors";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_LISTBRANCH_SUCCESS, GET_LISTBRANCH_FAILED,
  GET_DATA_BRANCH_AT_POSITION_SUCCESS, GET_DATA_BRANCH_AT_POSITION_FAILED,
  GET_LISTBRANCH, GET_DATA_BRANCH_AT_POSITION, BOOK_SERVICES, GET_TIMELINE,
  GET_TIMELINE_SUCCESS, START_BOOK_SERVICES, BOOK_SERVICES_SUCCESS,
  BOOK_SERVICES_FAILED
} from "../actions/index.action"
import commonConstant from "../constants/common.constant";

const fetchListbranch = () => {
  const config = {
    headers: {
      tenant: commonConstant.tenant
    }
  }
  return axios.get(commonConstant.url+'api/pos/public/api-client/combo/branch', config);
}

const getListBranch = function* () {
  try {
    const data = yield call(fetchListbranch)
    // console.log("data fetch list branch ", data.data.data)
    yield put({
      type: GET_LISTBRANCH_SUCCESS,
      data: data.data.data
    })
  } catch (err) {
    console.log("Get list branch failed")
    yield put({
      type: GET_LISTBRANCH_FAILED
    })
  }
}

////////////////////////////
const fetchDataBranchAtPosition = (position) => {
  console.log("position", position)
  const params = { branch_code: position }
  return axios.get(commonConstant.url+"api/pos/public/api-client/combo/service", { params: params })
}

const getDataBranchAtPosition = function* (action) {
  try {
    const data = yield call(fetchDataBranchAtPosition, action.data)
    // console.log("data branch at position ", data.data.data.list)
    yield put({
      type: GET_DATA_BRANCH_AT_POSITION_SUCCESS,
      data: data.data.data.list
    })
    
  } catch (err) {
    console.log("Get data branch at position failed")
    yield put({
      type: GET_DATA_BRANCH_AT_POSITION_FAILED
    })
  }
}

///////////////////////////////////
const fetchTimeLine = (branch) => {
  const config = {
    params: {
      branch_code: branch.data
    },
    headers: {
      tenant: commonConstant.tenant
    }
  }

  return axios.get(commonConstant.url+"api/pos/public/api-client/combo/time-line", config)
}

const getTimeLine = function* (branch) {
  try {
    console.log("branch timeline", branch)
    const data = yield call(fetchTimeLine, branch)
    // console.log("Fetch timeline ", data.data)
    yield put({
      type: GET_TIMELINE_SUCCESS,
      data: data.data
    })

  } catch (err) {
    console.log("Book services failed")
  }
}

///////////////////////////////////
const requestBookServices = (data) => {
  console.log("body from screen", data.data)
  const body = data.data;
  return axios.post(commonConstant.url+"api/pos/public/api-client/booking", body);
}

const bookServices = function* (dataBody) {
  try {
    yield put({
      type: START_BOOK_SERVICES
    })
    const data = yield call(requestBookServices, dataBody)
    console.log("result after request book services ")
    yield put({
      type: BOOK_SERVICES_SUCCESS,
      data: true
    })

  } catch (err) {
    console.log("Book services failed")
    yield put({
      type: BOOK_SERVICES_FAILED
    })
  }
}
export const indexWatcher = function* () {
  yield takeLatest(GET_LISTBRANCH, getListBranch);
  yield takeLatest(GET_DATA_BRANCH_AT_POSITION, getDataBranchAtPosition)
  yield takeLatest(GET_TIMELINE, getTimeLine);
  yield takeLatest(BOOK_SERVICES, bookServices);
};
