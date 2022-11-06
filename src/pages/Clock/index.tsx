import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

function LineBarChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    const radarValue = [3.5, 1, 3, 4, 1, 1, 3, 3]
    const chartInstance = echarts.init(chartRef.current as any)
    const option = {
      backgroundColor: '#031d33',
      tooltip: {},
      // title: {
      //   text: _.mean(radarValue),
      //   left: 'center',
      //   top: 'middle',
      //   textStyle: {
      //     color: '#fff',
      //     fontSize: 36,
      //     fontWeight: 'bold',
      //   },
      // },

      radar: {
        radius: '50%', //大小
        nameGap: 1, // 图中工艺等字距离图的距离
        center: ['50%', '50%'], // 图的位置
        name: {
          textStyle: {
            color: 'rgba(101, 213, 255, 1)',
            fontSize: 16,
          },
          formatter: function (name) {
            return name
          },
        },
        startAngle: 90,
        indicator: [
          {
            name: '积极',
            max: '5',
            axisLabel: {
              show: true,
              inside: true,

              textStyle: {
                color: '#fff', // 坐标轴刻度文字的样式
              },
            },
            axisTick: {
              show: true,
              inside: true,
            },
            axisLine: {
              lineStyle: {
                color: ['rgba(255,255,255,.8)'],
              },
            },
          },
          { name: '两性', max: '5' },
          { name: '社交', max: '5' },
          { name: '消极', max: '5' },
          { name: '逆境', max: '5' },
          { name: '欺骗', max: '5' },
          { name: '工作', max: '5' },
          { name: '脑力', max: '5' },
        ],
        axisLine: {
          lineStyle: {
            color: 'rgba(153, 209, 246, 0.2)',
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: 'rgba(255,0,0,0)', // 图表背景的颜色
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: 'rgba(153, 209, 246, 0.2)', // 设置网格的颜色
          },
        },
      },

      series: [
        {
          name: '报警类型分析',
          type: 'radar',
          symbol: 'angle',
          itemStyle: {
            normal: {
              areaStyle: { type: 'default' },
            },
          },
          data: [
            {
              symbol: 'circle',
              symbolSize: 5,
              value: radarValue,
              areaStyle: { color: 'rgba(64, 205, 241, 0.2)' },
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  color: 'RGBA(0, 34, 66, 1)',
                  borderColor: 'rgba(146, 225, 255, 1)',
                },
              },
              lineStyle: {
                color: 'rgba(146, 225, 255, 1)',
                width: 1,
              },
            },
          ],
        },
      ],
    }
    chartInstance.setOption(option)
  }, [])

  return (
    <main style={{ textAlign: 'center' }}>
      <h2>情绪三八模型雷达图</h2>
      <p>2022-11-06 周日</p>
      <div ref={chartRef} style={{ height: '600px' }}></div>
    </main>
  )
}

export default LineBarChart
