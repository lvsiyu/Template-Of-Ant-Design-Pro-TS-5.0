type ExcelDatasType = {
  sheetData: any[];
  sheetName?: string;
  sheetFilter?: string[];
  sheetHeader?: string[];
  columnWidths?: number[];
};

export type ExcelDataType = {
  fileName: string;
  datas: ExcelDatasType[];
};
