import type { UseQueryOptions } from '@sveltestack/svelte-query/dist/types';
import dataProvider from './dataProvider';
import type { ListResponse } from './dataProvider';

type AnyResource = Record<string, any>;

export const makeResourceQuery = <ResType extends AnyResource = AnyResource>(
  resource: string,
  queryParams?: any
): UseQueryOptions<ListResponse<ResType>> => ({
  queryKey: [resource, queryParams],
  queryFn: () => dataProvider.getList<ResType>(resource, queryParams),
})

export const makeSingleResourceQuery = <ResType extends AnyResource = AnyResource>(
  resource: string,
  id: string | null | undefined,
  queryParams?: any
): UseQueryOptions<ResType> => ({
  queryKey: [resource, id],
  queryFn: () => {
    return dataProvider
      .getOne(resource, id, queryParams)
      .then((data) => {
        return data as unknown as ResType
      })},
  enabled: !!id,
  ...queryParams
});

export const makeSimilarQuery = <ResType extends AnyResource = AnyResource>(
  id: string | null | undefined,
  queryParams?: any
): UseQueryOptions<ResType> => ({
  queryKey: ['similar', id],
  queryFn: () => {
    if (!id) return;
    return dataProvider
      .getOne('recipes', `${id}/similar` as string, queryParams || {})
      .then((data) => {
        return data as unknown as ResType
      })},
  enabled: !!id,
  ...queryParams
});