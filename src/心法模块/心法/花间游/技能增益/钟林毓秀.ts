import { 技能增益列表类型 } from '@/@types/技能'
import 通用增益 from './通用增益/通用增益'
import { 属性类型 } from '@/@types/属性'

const 钟林毓秀增益: 技能增益列表类型[] = [
  ...通用增益,
  {
    增益名称: '套装10%_1',
    增益所在位置: '装备',
    增益启用: false,
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.技能系数, 值: 1.15 }],
  },
  {
    增益名称: '套装10%_2',
    增益所在位置: '装备',
    增益启用: false,
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.技能系数, 值: 1.15 }],
  },
]

export default 钟林毓秀增益
