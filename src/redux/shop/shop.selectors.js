import { createSelector } from 'reselect'

const MAP_CATEGORY_TO_ID = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    men: 5
}

const shopSelector = state => state.shop

export const collectionSelector = createSelector(
    [shopSelector], 
    (shop) => shop.collection
)

export const categorySelector = categorySelectorUrl => {
    return (
        createSelector(
            [collectionSelector],
            collections => {
                return (
                    collections.find(collection => collection.id === MAP_CATEGORY_TO_ID[categorySelectorUrl])
                )
            }
        )
    )
}