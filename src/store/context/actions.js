import api from '../../data/context-api';
import { dispatchAndThrow } from '../util';

export const RECEIVE_CONTEXT = 'RECEIVE_CONTEXT';
export const ERROR_RECEIVE_CONTEXT = 'ERROR_RECEIVE_CONTEXT';
export const REMOVE_CONTEXT = 'REMOVE_CONTEXT';
export const ERROR_REMOVING_CONTEXT = 'ERROR_REMOVING_CONTEXT';
export const ADD_CONTEXT_FIELD = 'ADD_CONTEXT_FIELD';
export const ERROR_ADD_CONTEXT_FIELD = 'ERROR_ADD_CONTEXT_FIELD';

const receiveContext = value => ({ type: RECEIVE_CONTEXT, value });
const addContextField = context => ({ type: ADD_CONTEXT_FIELD, context });
const createRemoveContext = context => ({ type: REMOVE_CONTEXT, context });

export function fetchContext() {
    return dispatch =>
        api
            .fetchAll()
            .then(json => dispatch(receiveContext(json)))
            .catch(dispatchAndThrow(dispatch, ERROR_RECEIVE_CONTEXT));
}

export function removeContextField(context) {
    return dispatch =>
        api
            .remove(context)
            .then(() => dispatch(createRemoveContext(context)))
            .catch(dispatchAndThrow(dispatch, ERROR_REMOVING_CONTEXT));
}

export function createContextField(context) {
    return dispatch => {
        return api
            .create(context)
            .then(() => dispatch(addContextField(context)))
            .catch(dispatchAndThrow(dispatch, ERROR_ADD_CONTEXT_FIELD));
    };
}
