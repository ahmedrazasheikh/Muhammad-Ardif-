import {useSelector} from 'react-redux';
import {selectIsLoggedIn, selectUser, selectIsRefreshing} from '../redux/auth/authSelectors';

export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        user: useSelector(selectUser),
        isRefreshing: useSelector(selectIsRefreshing)
    }
}