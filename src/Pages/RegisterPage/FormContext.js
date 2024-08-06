import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        birthday: '',
        gender: '',
        height: '',
        weight: '',
        blood_type: '',
        last_donation_date: '',
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};