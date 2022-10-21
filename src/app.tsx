// 运行时配置

import { GithubOutlined } from '@ant-design/icons'

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '' }
}

const settings = {
  layout: 'mix',
}
export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    title: 'ReactLearn',
    menu: {
      locale: false,
    },

    rightContentRender: () => (
      <section>
        <GithubOutlined
          style={{ fontSize: 22 }}
          onClick={() =>
            window.open('https://github.com/tanguangzhi/reactlearn')
          }
        />
      </section>
    ),
    // footerRender: () => <div>222</div>,

    ...settings,
  }
}
