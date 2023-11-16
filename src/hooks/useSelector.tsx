import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../store/Index'


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector