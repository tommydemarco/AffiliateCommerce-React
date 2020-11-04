import { createSelector } from 'reselect'

const selectDirectory = (state) => {
    return state.directory
}

export const selectDirectoryItems = createSelector(
    [selectDirectory],
    (directory) => directory.items
)



