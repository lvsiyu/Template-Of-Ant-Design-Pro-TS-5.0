import request from 'umi-request';
import type { ChooseTableDataParams } from '../data';

export async function queryChooseTable(params: ChooseTableDataParams) {
  return request('/api/table/ChooseTableData', {
    params,
  });
}
