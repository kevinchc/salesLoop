
import { ClientApi } from "../api/clientApi";


export const CREATE = '[Todo] CREATE';
export const CREATE_SUCCESS = '[Todo] CREATE_SUCCESS';
export const CREATE_ERROR = '[Todo] CREATE_ERROR';

export const GET = '[Todo] GET_TODOS';
export const GET_SUCCESS = '[Todo] GET_SUCCESS';
export const GET_ERROR = '[Todo] GET_ERROR';


export const START_EDITING ='[Todo] START_EDITING';
export const CANCEL_EDITING = '[Todo] CANCEL_EDITING';

export const UPDATE = '[Todo] UPDATE';
export const UPDATE_SUCCESS = '[Todo] UPDATE_SUCCESS';
export const UPDATE_ERROR = '[Todo] UPDATE_ERROR';

export const COMPLETE = 'COMPLETE';


export const DELETE = '[Todo] DELETE';
export const DELETE_SUCCESS = '[Todo] DELETE_SUCCESS';
export const DELETE_ERROR = '[Todo] DELETE_ERROR';


export function Create(resp){
    return (dispatch, getState) => {
        return ClientApi.createTodo(resp).then(res => {
            dispatch(CreateSuccess(res.data.data))
        })
    }
}

export function CreateSuccess(resp){
    return {
        type:CREATE_SUCCESS,
        resp
    }
}

export function Get(){
    return (dispatch, getState) => {
        return ClientApi.getTodo().then(res => {
            dispatch(GetSuccess(res))
        })
    }
}

export function GetSuccess(resp){
    return {
        type:GET_SUCCESS,
        resp
    }
}

export function StartEditing(_id) {
    return {
        type: START_EDITING,
        _id
    }
}
export function CancelEditing(_id) {
    return {
        type: CANCEL_EDITING,
        _id
    }
}

export function Update(resp) {
    return (dispatch, getState) => {

        dispatch({
            type: UPDATE,
            resp
        })
        ClientApi.updateTodo(resp).then(res => {
            dispatch(UpdateTodoSuccess(res.data.data))
        })
    }
}
export function UpdateTodoSuccess(resp) {
    return {
        type: UPDATE_SUCCESS,
        resp,
        _id: resp._id
    }
}


export function Delete(resp) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE,
            resp
        })
        ClientApi.removeTodo(resp).then(res => {
            if (res.status == 204) {
                dispatch(DeleteSuccess(resp))
            }
        })
    }
}
export function DeleteSuccess(resp) {
    return {
        type: DELETE_SUCCESS,
        resp,
        _id: resp._id
    }
}