import request from 'umi-request';
import type { uploadEditorFormResPonse } from '../data/index';

export async function uploadEditorForm(
  params: React.SetStateAction<string>,
): Promise<uploadEditorFormResPonse> {
  return request('/api/form/uploadEditorForm', { method: 'POST', data: params });
}
