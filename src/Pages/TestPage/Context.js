import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
    question11: null,
    last_donation_date: null,
    donation_type: null
};

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FORM_DATA':
            return { ...state, [action.field]: action.value };
        default:
            return state;
    }
}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateFormData = (field, value) => {
        dispatch({ type: 'UPDATE_FORM_DATA', field, value });
    };

    return (
        <AppContext.Provider value={{ state, updateFormData }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);