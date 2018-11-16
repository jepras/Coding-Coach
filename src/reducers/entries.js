/* eslint-disable default-case */
const entries = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return [
                ...state,
                {
                    date: action.date,
                    id: action.id,
                    user: action.user,
                    text: action.text,
                    image: action.image
                }
            ]
        case 'UPDATE_ENTRY':
            return [
                ...state
                // to be completed
            ]
        case 'DELETE_ENTRY':
            return [
                ...state
                // to be completed
            ]
        default:
            return state
    }
}

export default entries