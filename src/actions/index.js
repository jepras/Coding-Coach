let nextEntryId = 0

export const addEntry = (text, image) => {
    return {
        type: 'ADD_ENTRY',
        id: nextEntryId++,
        text,
        date: 'today',
        image
    }
}

export const updateEntry = (text, image) => {
    return {
        type: 'UPDATE_ENTRY',
        id: nextEntryId++,
        text,
        image
    }
}

export const deleteEntry = (text, image) => {
    return {
        type: 'DELETE_ENTRY',
        id: nextEntryId++,
        text,
        image
    }
}