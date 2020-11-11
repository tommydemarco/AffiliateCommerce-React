import { createSelector } from 'reselect'

//GENERAL STATE SLICE SELECTOR
const shopSelector = state => state.shop

//IS FETCHING SELECTOR
export const isFetchingSelector = createSelector(
    [ shopSelector ],
    ( shop ) => shop.isFetching
)

//ERROR SELECTOR
export const errorSelector = createSelector(
    [ shopSelector ],
    ( shop ) => shop.errorMessage
)

//COLLECTION SELECTORS 
export const collectionSelector = createSelector(
    [ shopSelector ],
    ( shop ) => shop.collections
)

export const collectionSelectorForPreview = createSelector(
    [ collectionSelector ],
    collections => collections ? Object.keys( collections ).map( key => collections[ key ] ) : []
)

export const categorySelector = categorySelectorUrl => {
    return(
        createSelector(
            [ collectionSelector ],

            collections => {
                return collections ? collections[ categorySelectorUrl ] : null
            }
        )
    )
}