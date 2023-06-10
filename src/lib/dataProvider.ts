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
  let query = [];
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
  if (query === '' && !resource.includes('reviews')) return;
  const url = `/${resource}?${query}`;
  return apiClient.get(url).then(({ data }) => {
    return data as DataType[];
  });
};

const getOne = <DataType = Data>(
  resource: string,
  id: string,
  params: any
): Promise<DataType | Response<DataType>> => {
  if (!id) return;
  const query = '' // queryParams(resource, params);
  const url = `/${resource}/${id}?${query}`;
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
