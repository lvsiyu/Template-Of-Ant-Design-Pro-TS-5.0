import request from 'umi-request';
import type { CardTableDataParams } from '../data';

export async function queryCardTable(params: CardTableDataParams) {
  return request('/api/table/GetCardTableData', {
    params,
  });
}
