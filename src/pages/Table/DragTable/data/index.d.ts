export type DragTableDataType = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  progress: number;
  status: string;
};

export type DragTableDataParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
};

export type DragTableInnerDataType = {
  id: number;
  name: string;
  description: string;
  url: string;
};
