import { 属性类型 } from '@/@types/属性'
import { 技能增益列表类型 } from '@/@types/技能'

const 九字诀山卦通用增益: 技能增益列表类型[] = [
  {
    增益名称: '重山',
    依赖奇穴: '重山',
    增益所在位置: '奇穴',
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.技能系数, 值: 1.286 }],
  },
  {
    增益名称: '重山·一',
    依赖奇穴: '重山',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.技能系数, 值: 1.074 }],
  },
  {
    增益名称: '重山·二',
    依赖奇穴: '重山',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.技能系数, 值: 1.14815 }],
  },
  {
    增益名称: '重山·三',
    依赖奇穴: '重山',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.技能系数, 值: 1.2223 }],
  },
]

export default 九字诀山卦通用增益
