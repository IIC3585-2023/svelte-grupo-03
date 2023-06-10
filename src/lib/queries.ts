import type { UseQueryOptions } from '@sveltestack/svelte-query/dist/types';
import dataProvider from './dataProvider';
import type { ListResponse } from './dataProvider';

type AnyResource = Record<string, any>;

export const makeResourceQuery = <ResType extends AnyResource = AnyResource>(
  resource: string,
  params: any = {
    pagination: { page: 1, perPage: 60 }
  },
  queryParams?: UseQueryOptions<ListResponse<ResType>>
): UseQueryOptions<ListResponse<ResType>> => ({
  queryKey: [resource, params],
  queryFn: () =>
    dataProvider.getList<ResType>(resource, {
      ...params,
      filter: { ...(params.filter || {}) } as typeof params.filter
    }),
  ...queryParams
});