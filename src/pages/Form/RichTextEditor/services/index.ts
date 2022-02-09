import request from 'umi-request';
import type { uploadListFormResPonse } from '../data/index';

export async function uploadListForm(
  params: React.SetStateAction<string>,
): Promise<uploadListFormResPonse> {
  return request('/api/form/uploadEditorForm', { method: 'POST', data: params });
}
