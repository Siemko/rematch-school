import { createSelector} from 'reselect'

export const getUsers = state => state.user.list

export const getUsersAgeSum = createSelector(getUsers, list => list.reduce((pv, cv) => {
    return pv += Number(cv.age)
}, 0))
