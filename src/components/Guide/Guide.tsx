import { Liquid, WordCloud } from '@ant-design/charts'
import { Layout, Row, Typography } from 'antd'
import { default as React, useEffect, useState } from 'react'
import styles from './Guide.less'

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
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          放几张酷炫的图表
        </Typography.Title>
        <section className="h-64">
          <DemoWordCloud />
        </section>
        <section className="h-64">
          <DemoLiquid />
        </section>
      </Row>
    </Layout>
  )
}

export default Guide
