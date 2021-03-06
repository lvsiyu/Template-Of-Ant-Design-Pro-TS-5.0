import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const valueEnumMark = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

const BasisTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const basisData = [];
  for (let i = 0; i < 30; i += 1) {
    basisData.push({
      id: i,
      name: '基础名称',
      description:
        i % 2 === 1
          ? '我是简短一点的描述'
          : '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
      date: '2020-10-15',
      time: '20:53:24',
      progress: Math.ceil(Math.random() * 100) + 1,
      status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
    });
  }
  res.send({
    code: 200,
    data: basisData,
    msg: 'success',
  });
};

const BasisTableInnerData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push({
      id: i,
      name: '我是名称我是名称我是名称我是名称我是名称我是名称我是名称我是名称我是名称我是名称我是名称',
      description:
        '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    });
  }
  res.send({
    code: 200,
    data,
    msg: 'success',
  });
};

const ChooseTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const tableListDataSource = [];
  const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];
  for (let i = 0; i < 30; i += 1) {
    tableListDataSource.push({
      key: i,
      name: '选择名称',
      containers: Math.floor(Math.random() * 20),
      callNumber: Math.floor(Math.random() * 2000),
      progress: Math.ceil(Math.random() * 100) + 1,
      creator: creators[Math.floor(Math.random() * creators.length)],
      status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      createdAt: Date.now() - Math.floor(Math.random() * 100000),
      memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
    });
  }
  res.send({
    code: 200,
    data: tableListDataSource,
    msg: 'success',
  });
};

const EditTableData = [
  {
    id: 624748504,
    title: '活动名称一',
    labels: [{ key: 'tag1', label: 'tag1' }],
    state: 'open',
    created_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: '活动名称二',
    labels: [{ key: 'tag1', label: 'tag1' }],
    state: 'closed',
    created_at: '2020-05-26T08:19:22Z',
  },
];

const GetEditTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: EditTableData,
    msg: 'success',
  });
};

const CreateEditTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { title, state, labels } = req.body;
  const createData = {
    id: new Date().getTime(),
    title,
    labels,
    state,
    created_at: new Date().toJSON(),
  };

  EditTableData.push(createData);
  res.send({
    code: 200,
    data: EditTableData,
    msg: 'success',
  });
};

const UploadEditTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { title, state, labels, index } = req.body;
  const uploadData = {
    id: new Date().getTime(),
    title,
    labels,
    state,
    created_at: new Date().toJSON(),
  };
  EditTableData[index] = uploadData;
  res.send({
    code: 200,
    data: EditTableData,
    msg: 'success',
  });
};

const DeleteEditTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { id } = req.body;
  for (let i = 0; i < EditTableData.length; i += 1) {
    if (EditTableData[i].id === id) {
      EditTableData.splice(i, 1);
      break;
    }
  }

  res.send({
    code: 200,
    data: EditTableData,
    msg: 'success',
  });
};

const TabTableData = async (req: Request, res: Response) => {
  await waitTime(1000);

  const valueEnum = ['success', 'error', 'processing', 'default'];

  const ipListDataSource = [];

  for (let i = 0; i < 15; i += 1) {
    ipListDataSource.push({
      ip: `106.14.98.1${i}4`,
      cpu: 10,
      mem: 20,
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
      disk: 30,
    });
  }

  res.send({
    code: 200,
    data: ipListDataSource,
    msg: 'success',
  });
};

const ProTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const valueEnum = ['success', 'error', 'processing', 'default'];

  const porTableList = [];

  for (let i = 0; i < 15; i += 1) {
    porTableList.push({
      key: i,
      startTime: new Date().toJSON(),
      endTime: new Date().toJSON(),
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
      progress: Math.ceil(Math.random() * 100) + 1,
    });
  }

  res.send({
    code: 200,
    data: porTableList,
    msg: 'success',
  });
};

const GetCardTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { current, pageSize } = req.query;
  const pageNumber = typeof pageSize === 'string' ? parseInt(pageSize) : 10;

  let cardTableData = [];

  for (let i = 0; i < pageNumber; i += 1) {
    cardTableData.push({
      id: i,
      name: `第${current}页第${i + 1}条数据`,
      description:
        i % 2 === 1
          ? '我是简短一点的描述'
          : '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
      date: '2020-10-15',
      time: '20:53:24',
      progress: Math.ceil(Math.random() * 100) + 1,
      status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
    });
  }

  res.send({
    code: 200,
    data: cardTableData,
    total: 100,
    msg: 'success',
  });
};

export default {
  'GET /api/table/BasisTableData': BasisTableData,
  'GET /api/table/BasisTableInnerData': BasisTableInnerData,
  'GET /api/table/ChooseTableData': ChooseTableData,
  'GET /api/table/EditTableData': GetEditTableData,
  'POST /api/table/EditTableData': CreateEditTableData,
  'PUT /api/table/EditTableData': UploadEditTableData,
  'DELETE /api/table/EditTableData': DeleteEditTableData,
  'GET /api/table/TabTableData': TabTableData,
  'GET /api/table/ProTableData': ProTableData,
  'GET /api/table/GetCardTableData': GetCardTableData,
};
