import {
    GET_LISTBRANCH_SUCCESS, GET_LISTBRANCH_FAILED, GET_DATA_BRANCH_AT_POSITION_SUCCESS,
    GET_DATA_BRANCH_AT_POSITION_FAILED, GET_TIMELINE_SUCCESS, BOOK_SERVICES_SUCCESS,
    START_BOOK_SERVICES, BOOK_SERVICES_FAILED, CLOSE_NOTICEMODAL
} from "../actions/index.action"
const initState = {
    branches: [{
        title: "",
        value: ""
    }],
    services: [{
        id: "",
        serviceDetails: [{
            id: "",
            code: "",
            name: "",
            price: 0,
            description: ""
        }]
    }],
    listTimeLine: [{
        title: "",
        value: ""
    }],
    bookingSuccess: "",
    isLoading: false,
    isShowNoticeModal: false,
    isShowNoticeFailedModal: false,
}
const indexReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LISTBRANCH_SUCCESS:
            return {
                ...state,
                branches: action.data,
                bookingSuccess: "",
            }
        case GET_LISTBRANCH_FAILED:
            return {
                ...state,
                bookingSuccess: "",
            }
        case GET_DATA_BRANCH_AT_POSITION_SUCCESS:
            return {
                ...state,
                services: action.data,
                bookingSuccess: ""
            }
        case GET_DATA_BRANCH_AT_POSITION_FAILED:
            return {
                ...state,
                bookingSuccess: ""
            }
        case GET_TIMELINE_SUCCESS:
            return {
                ...state,
                listTimeLine: action.data.data,
                bookingSuccess: ""
            }
        case START_BOOK_SERVICES:
            return {
                ...state,
                isLoading: true,
                bookingSuccess: ""
            }
        case BOOK_SERVICES_SUCCESS:
            console.log("BOOK_SERVICES_SUCCESS ", action.data)
            return {
                ...state,
                // bookingSuccess: action.data,
                isLoading: false,
                bookingSuccess: BOOK_SERVICES_SUCCESS,
                isShowNoticeModal: true
            }
        case BOOK_SERVICES_FAILED:
            return {
                ...state,
                isLoading: false,
                bookingSuccess: BOOK_SERVICES_FAILED,
                isShowNoticeFailedModal: true
            }
        case CLOSE_NOTICEMODAL:
            console.log("reducer CLOSE_NOTICEMODAL")
            return{
                ...state,
                isLoading:false,
                isShowNoticeModal: false,
                isShowNoticeFailedModal:false
            }
        
        default:
            console.log("defaul reducer ", state.bookingSuccess)
            return {
                ...state,
                bookingSuccess: ""
            };
    }
}

export default indexReducer;