import { apiClient } from './httpClient';
import _ from 'lodash';

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
type Data = Json;
type ObjData = Record<string, Data>;
type CreateParams<DataType = ObjData> = { data: DataType };

export interface ListResponse<DataType = Data> {
  items: DataType[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export interface Response<DataType = Data> {
  data: DataType;
}

const queryParams = (params: {[Key: string]: string}) => {
  let query: string[] = [];
  _.forIn(params, (value, key) => {
    if (value) query.push(`${key}=${value}`);
  })
  return query.join('&');
}

const getList = <DataType = Data>(
  resource: string,
  params: any
): Promise<DataType[] | ListResponse<DataType>> => {
  const query = queryParams(params);
  const queryString = query === '' ? '' : `?${query}`;
  const url = `/${resource}${queryString}`;
  return apiClient.get(url).then(({ data }) => {
    return data as DataType[];
  });
};

const getOne = <DataType = Data>(
  resource: string,
  id: string | null | undefined,
  params: any,
): Promise<DataType | Response<DataType>> => {
  if (!id) return;
  const query = queryParams(params);
  const queryString = query === '' ? '' : `?${query}`;
  const url = `/${resource}/${id}${queryString}`;
  return apiClient.get(url).then(({ data }) => {
    return data as DataType;
  });
};

const create = <DataType = ObjData>(
  resource: string,
  params: CreateParams<DataType>
): Promise<Response<DataType>> => {
  return apiClient.post(`/${resource}`, params.data).then(({ data }) => {
    return data;
  });
};

const dataProvider = {
  getList,
  getOne,
  create,
}
export default dataProvider;
