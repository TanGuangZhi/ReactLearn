import { Liquid, WordCloud } from '@ant-design/charts'
import { EllipsisOutlined } from '@ant-design/icons'
import { ProCard, StatisticCard } from '@ant-design/pro-components'
import { Layout } from 'antd'
import RcResizeObserver from 'rc-resize-observer'
import { default as React, useEffect, useState } from 'react'

interface Props {
  name: string
}

const DemoWordCloud = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    imageMask:
      'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
    },
  } as any

  return <WordCloud {...config} />
}

const DemoLiquid = () => {
  const config = {
    percent: 0.25,
    shape: function (x, y, width, height) {
      const r = width / 4
      const dx = x - width / 2
      const dy = y - height / 2
      return [
        ['M', dx, dy + r * 2],
        ['A', r, r, 0, 0, 1, x, dy + r],
        ['A', r, r, 0, 0, 1, dx + width, dy + r * 2],
        ['L', x, dy + height],
        ['L', dx, dy + r * 2],
        ['Z'],
      ]
    },
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  } as any
  return <Liquid {...config} />
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props
  const [responsive, setResponsive] = useState(false)
  return (
    <Layout>
      <ProCard title="放几张图表" ghost gutter="8">
        <ProCard colSpan={12} layout="center" hoverable bordered>
          <DemoWordCloud />
        </ProCard>
        <ProCard colSpan={12} layout="center" hoverable bordered>
          <StatisticCard
            title="大盘趋势"
            tip="大盘说明"
            style={{ maxWidth: 480 }}
            extra={<EllipsisOutlined />}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                alt="柱状图"
                width="100%"
              />
            }
          />
        </ProCard>
      </ProCard>
      <ProCard title="卡片组展开" ghost gutter={8} collapsible>
        <RcResizeObserver
          key="resize-observer"
          onResize={(offset) => {
            setResponsive(offset.width < 596)
          }}
        >
          <ProCard
            title="复杂切分"
            extra="2019年9月28日"
            bordered
            headerBordered
            collapsible
            split={responsive ? 'horizontal' : 'vertical'}
          >
            <ProCard split="horizontal">
              <ProCard split="horizontal">
                <ProCard split={responsive ? 'horizontal' : 'vertical'}>
                  <ProCard title="昨日全部流量">123</ProCard>
                  <ProCard title="本月累计流量">234</ProCard>
                  <ProCard title="今年累计流量">345</ProCard>
                </ProCard>
                <ProCard split="vertical">
                  <ProCard title="运行中试验">12/56</ProCard>
                  <ProCard title="历史试验总数">134 个</ProCard>
                </ProCard>
              </ProCard>
              <ProCard title="流量趋势">
                <div>图表</div>
                <div>图表</div>
                <div>图表</div>
                <div>图表</div>
                <div>图表</div>
              </ProCard>
            </ProCard>
            <ProCard title="流量占用情况">右侧内容</ProCard>
          </ProCard>
        </RcResizeObserver>
        <ProCard
          tabs={{
            type: 'card',
          }}
        >
          <ProCard.TabPane key="tab1" tab="产品一">
            内容一
          </ProCard.TabPane>
          <ProCard.TabPane key="tab2" tab="产品二">
            内容二
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
    </Layout>
  )
}

export default Guide
