export const selected_sub = (selected) => {
    return {
        type: 'SELECTED_SUB',
        payload: selected
    }
}

export const edit_tel = (state) => {
    return {
        type: 'EDIT_TEL',
        payload: state
    }
}

export const edit_pag = (state) => {
    return {
        type: 'EDIT_PAG',
        payload: state
    }
}

export const modal_state = (state) => {
    return {
        type: 'MODAL_STATE',
        payload: state
    }
}