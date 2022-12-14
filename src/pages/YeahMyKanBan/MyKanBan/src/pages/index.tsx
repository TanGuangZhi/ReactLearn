import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import _ from 'lodash'
import React, { useState } from 'react'

export default function index() {
  const [showAddNewCard, setShowAddNewCard] = useState(false)
  const [isEdit, setIsEdit]: any = useState(false)
  const [dataList, setDataList]: any = useState({
    todoList: [
      { title: '开发任务-1', status: '2022-05-22 18:15' },
      { title: '开发任务-3', status: '2022-06-22 18:15' },
      { title: '开发任务-5', status: '2022-07-22 18:15' },
      { title: '测试任务-3', status: '2022-07-23 18:15' },
    ],
    ongoingList: [
      { title: '开发任务-4', status: '2022-05-22 18:15' },
      { title: '开发任务-6', status: '2022-06-22 18:15' },
      { title: '测试任务-2', status: '2022-07-22 18:15' },
    ],
    doneList: [
      { title: '开发任务-2', status: '2022-06-24 18:15' },
      { title: '测试任务-1', status: '2022-07-03 18:15' },
    ],
  })

  console.log(dataList)

  const Header = () => {
    return (
      <section className="bg-slate-700 text-white h-20 flex justify-center items-center  ">
        <div>My KanBan</div>
        <EditOutlined onClick={() => setIsEdit((data) => !data)} />
      </section>
    )
  }

  const KanBanContainer = () => {
    return (
      <section className="flex justify-between">
        {_.map(dataList, (value, key) => (
          <KanBanColumn title={key} columnDataList={value} key={key} />
        ))}
      </section>
    )
  }

  const KanBanColumn = ({ title, columnDataList }: any) => {
    const titleShow = (data) => {
      return data === 'todoList' ? (
        <>
          <span>{data}</span>
          <Button
            size="small"
            className="ml-2"
            onClick={() => setShowAddNewCard(true)}
          >
            add
          </Button>
        </>
      ) : (
        data
      )
    }
    return (
      <section className="border flex-auto p-4">
        <div className="text-center border-b-2 mb-4">{titleShow(title)}</div>
        {columnDataList.map((item: any) => (
          <KanBanCard cardData={item} key={item.title} />
        ))}
        {showAddNewCard && title === 'todoList' && <AddNewCard />}
      </section>
    )
  }

  const KanBanCard = ({ cardData }: any) => {
    const handleDragStart = (evt) => {
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('text/plain', cardData.title)
      //  onDragStart && onDragStart(evt)
    }
    return (
      <section
        className="border rounded mb-4 p-2"
        draggable
        onDragStart={handleDragStart}
      >
        <div className="flex justify-between items-center">
          <span>{cardData.title}</span>
          {isEdit && (
            <DeleteOutlined
              onClick={() => {
                dataList.todoList = dataList.todoList.filter(
                  (item: any) => item.title !== cardData.title,
                )

                setDataList({ ...dataList })
              }}
            />
          )}
        </div>
        <div className="text-right mt-2">{cardData.status}</div>
      </section>
    )
  }

  const AddNewCard = () => {
    return (
      <>
        <Input
          type="text"
          onBlur={(e) => {
            const title = e.target.value
            setDataList((data) => {
              data.todoList.push({ title, status: '2022-07-22 18:15' })
              return data
            })

            setShowAddNewCard(false)
          }}
        />
      </>
    )
  }

  return (
    <main className="shadow-md p-4 rounded" style={{ height: 900 }}>
      <Header />
      <KanBanContainer />
    </main>
  )
}
