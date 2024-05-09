import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Select } from 'antd'
import { 更新方案数据 } from '@/store/data'
import classnames from 'classnames'
import useCycle from '@/hooks/use-cycle'
import './index.css'

function 循环选择() {
  const dispatch = useAppDispatch()
  const 当前计算循环名称 = useAppSelector((state) => state?.data?.当前计算循环名称)

  const { 全部循环 = [] } = useCycle()

  const 切换循环 = (val) => {
    dispatch(更新方案数据({ 属性: '当前计算循环名称', 数据: val }))
  }

  return (
    <div className='common-item'>
      <h1 className='common-label'>循环</h1>
      <div className='common-content'>
        <Select
          value={当前计算循环名称}
          className='cycle-select'
          onChange={(v) => {
            切换循环(v)
          }}
          optionFilterProp='label'
        >
          {全部循环
            .filter((item) => !item.默认隐藏)
            .map((item) => {
              const cls = classnames(
                'cycle-select-item-tag',
                item.标记 === '紫武' ? 'cycle-select-item-tag-purple' : '',
                item.标记 === '橙武' ? 'cycle-select-item-tag-orange' : ''
              )
              return (
                <Select.Option value={item?.名称} key={item.名称} label={item.名称}>
                  <div className='cycle-select-item'>
                    {item.标题 || item.名称}
                    <span className={cls}>{item.标记}</span>
                  </div>
                </Select.Option>
              )
            })}
        </Select>
      </div>
    </div>
  )
}

export default 循环选择
