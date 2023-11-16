import ReduxProvider from "./ReduxProvide";
import DatePickerProvider from "./DatePickerProvider";
import GlobleContextProvider from "./GlobleContextProvider";

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