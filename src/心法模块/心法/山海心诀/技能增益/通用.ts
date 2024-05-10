import { 属性类型 } from '@/@types/属性'
import { 技能增益列表类型 } from '@/@types/技能'

const 承契基础系数 = 62 / 1024

const 通用增益: 技能增益列表类型[] = [
  {
    增益名称: '非侠',
    增益所在位置: '职业',
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.非侠增伤, 值: 82 / 1024 }],
  },
  {
    增益名称: '承契_1层',
    增益所在位置: '技能',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 承契基础系数 * 1 }],
  },
  {
    增益名称: '承契_2层',
    增益所在位置: '技能',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 承契基础系数 * 2 }],
  },
  {
    增益名称: '承契_3层',
    增益所在位置: '技能',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 承契基础系数 * 3 }],
  },
  {
    增益名称: '承契_4层',
    增益所在位置: '技能',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 承契基础系数 * 4 }],
  },
  {
    增益名称: '承契_5层',
    增益所在位置: '技能',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 承契基础系数 * 5 }],
  },
  {
    增益名称: '承契_6层',
    增益所在位置: '技能',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 承契基础系数 * 6 }],
  },
  {
    增益名称: '承契_7层',
    增益所在位置: '技能',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 承契基础系数 * 7 }],
  },
  {
    增益名称: '诸怀',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [
      { 属性: 属性类型.郭氏外功基础攻击, 值: 102 },
      { 属性: 属性类型.郭氏全无视防御, 值: 204 },
    ],
  },
  {
    增益名称: '卢令',
    增益所在位置: '奇穴',
    是否常驻面板: true,
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.郭氏身法, 值: 102 }],
  },
]

export default 通用增益
