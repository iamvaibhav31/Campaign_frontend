import {  Dispatch } from "../store/Index";

import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<Dispatch>();