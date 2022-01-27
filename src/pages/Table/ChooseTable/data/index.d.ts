export type ChooseTableDataType = {
  key: number;
  name: string;
  progress: number;
  containers: number;
  callNumber: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};

export type ChooseTableDataParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
};

export type ChooseTableInnerDataType = {
  id: number;
  name: string;
  description: string;
  url: string;
};
