import mockjs from 'mockjs';
const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  // 使用 mockjs 等三方库
  '/api/yeahMyKanBan/columnData': mockjs.mock({
    list: [
      {
        title: '文件夹',
        _id: '@id',
        'children|10-15': [
          {
            title: '@last',
            _id: '@id',
          },
        ],
      },
    ],
  }),
};
