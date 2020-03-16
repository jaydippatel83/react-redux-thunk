

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const AgeUpAsnc = (val) => {
    return { type: "AGE_UP", value: val }
};

export const AgeUp = val => {
    return dispatch => {
        dispatch(loading()); 
        setTimeout(() => {
            dispatch(AgeUpAsnc(val));
        }, 5000)
    }
};

export const AgeDownAsnc = (val) => {
    return { type: "AGE_DOWN", value: val }
};

export const AgeDown = val => {
    return dispatch => {
        dispatch(loading()); 
        setTimeout(() => {
            dispatch(AgeDownAsnc(val));
        }, 5000)
    }
};