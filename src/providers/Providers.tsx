import ReduxProvider from "./ReduxProvide";
import DatePickerProvider from "./DatePickerProvider";
import GlobleContextProvider from "./GlobleContextProvider";
import React from 'react'

const Providers = ({ children }: { children?: React.ReactNode }) => {
    return (
        <DatePickerProvider>
            <GlobleContextProvider>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </GlobleContextProvider>
        </DatePickerProvider>
    );
};

export default Providers;