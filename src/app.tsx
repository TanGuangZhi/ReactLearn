// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '' }
}

const settings = {
  fixSiderbar: true,
  layout: 'mix',
}
export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    title: 'ReactLearn',
    header: 'f',
    menu: {
      locale: false,
    },

    rightContentRender: () => <div>111</div>,
    // footerRender: () => <div>222</div>,
    ...settings,
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      size: 'small',
      title: '七妮妮',
    },
  }
}
