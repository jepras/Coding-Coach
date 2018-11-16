/* eslint-disable default-case */
const logs = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return [
                ...state,
                {
                    visibilityFilter: action.filter
                }
                // to be completed
            ]
        case 'FETCH_FEW':
            return [
                ...state
                // to be completed
            ]
        case 'FETCH_LAST':
            return [
                ...state
                // to be completed
            ]
        default:
            return state
    }
}

export default logs