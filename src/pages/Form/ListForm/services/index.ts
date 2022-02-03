import request from 'umi-request';
import type { listFormDataType, uploadListFormResPonse } from '../data/index';

export async function uploadListForm(params: listFormDataType): Promise<uploadListFormResPonse> {
  return request('/api/form/uploadListForm', { method: 'POST', data: params });
}
