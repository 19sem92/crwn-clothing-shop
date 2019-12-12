import { createSelector } from "reselect";

const shopDirectory = state => state.shop;

export const selectShopCollections = createSelector(
  [shopDirectory],
  directory => directory.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  );
