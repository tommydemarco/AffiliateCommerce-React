import { createSelector } from 'reselect'

const shopSelector = state => state.shop

export const collectionSelector = createSelector(
    [ shopSelector ],
    ( shop ) => shop.collections
)

export const collectionSelectorForPreview = createSelector(
    [ collectionSelector ],
    collections => Object.keys( collections ).map( key => collections[ key ] )
)

export const categorySelector = categorySelectorUrl => {
    return(
        createSelector(
            [ collectionSelector ],

            collections => {
                return collections[ categorySelectorUrl ]
            }
        )
    )
}