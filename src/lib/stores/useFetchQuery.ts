import { useQuery } from '@sveltestack/svelte-query';
import type { QueryKey, UseQueryOptions, UseQueryStoreResult } from '@sveltestack/svelte-query';

function useRefreshQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TOptionsArgs extends Array<unknown> = unknown[]
>(
  optionsFn: (...args: TOptionsArgs) => UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ...args: TOptionsArgs
): UseQueryStoreResult<TQueryFnData, TError, TData, TQueryKey> & {
  refresh: (...args: TOptionsArgs) => void;
} {
  const query = useQuery(optionsFn(...args));
  return {
    ...query,
    refresh: (...args) => {
      query.setOptions(optionsFn(...args));
    }
  };
}
export default useRefreshQuery;
