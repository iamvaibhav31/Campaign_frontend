import { Provider } from "react-redux";
import store from "../store/Index";
import { useEffect } from "react";
import { getProducts } from "../store/actions/productAction";
import { getCampaigns } from "../store/actions/CampaignAction";
import React from "react";




const ReduxProvider = ({ children }: { children?: React.ReactNode }) => {
  useEffect(() => {
    store.dispatch(getProducts());
    store.dispatch(getCampaigns());
  }, []);

  return <Provider store={store}> {children}</Provider>;
};

export default ReduxProvider;
