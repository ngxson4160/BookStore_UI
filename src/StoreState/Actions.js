import * as actions from './Constrains';

export const addAuthorId = payload => ({
    type: actions.ADD_AUTHOR_ID,
    payload
})

export const deleteAuthorId = payload => ({
    type: actions.DELETE_AUTHOR_ID,
    payload,
})

export const addRating = payload => ({
    type: actions.ADD_RATING,
    payload,
})

export const addPrice = payload => ({
    type: actions.ADD_PRICE,
    payload,
})