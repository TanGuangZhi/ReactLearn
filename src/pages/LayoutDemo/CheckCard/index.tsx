/** Title: 基本使用 */

import { EllipsisOutlined } from '@ant-design/icons'
import { CheckCard, ProCard } from '@ant-design/pro-components'
import { Divider, Dropdown, Menu, message } from 'antd'

export default () => (
  <>
    <ProCard title="多选卡片" tooltip="这是提示">
      <CheckCard
        avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
        title="示例一"
        description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
        onChange={(checked) => {
          console.log('checked', checked)
        }}
        onClick={() => {
          console.log('clicked')
        }}
        extra={
          <Dropdown
            placement="topCenter"
            overlay={
              <Menu
                onClick={({ domEvent }) => {
                  domEvent.stopPropagation()
                  message.info('menu click')
                }}
                items={[
                  {
                    label: '菜单',
                    key: '1',
                  },
                  {
                    label: '列表',
                    key: '2',
                  },
                  {
                    label: '表单',
                    key: '3',
                  },
                ]}
              />
            }
          >
            <EllipsisOutlined
              style={{ fontSize: 22, color: 'rgba(0,0,0,0.5)' }}
              onClick={(e) => e.stopPropagation()}
            />
          </Dropdown>
        }
      />
      <CheckCard
        avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
        title="示例一"
        description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
        onChange={(checked) => {
          console.log('checked', checked)
        }}
        defaultChecked
        onClick={() => {
          console.log('clicked')
        }}
      />
      <CheckCard
        description="不可选"
        disabled
        onChange={(checked) => {
          console.log('checked', checked)
        }}
        onClick={() => {
          console.log('clicked')
        }}
      />
      <CheckCard
        description="不可选"
        loading
        onChange={(checked) => {
          console.log('checked', checked)
        }}
        onClick={() => {
          console.log('clicked')
        }}
      />
    </ProCard>
    <Divider />
    <ProCard title="单选卡片" tooltip="这是提示">
      <CheckCard.Group
        onChange={(value) => {
          console.log('value', value)
        }}
        defaultValue="A"
      >
        <CheckCard title="Card A" description="选项一" value="A" />
        <CheckCard title="Card B" description="选项二" value="B" />
        <CheckCard
          title="Card C"
          disabled
          description="选项三，这是一个不可选项"
          value="C"
        />
      </CheckCard.Group>
    </ProCard>
  </>
)
