import type { 主属性类型, 功法类型 } from '@/心法模块/interface'
import { 镶嵌增伤类型枚举 } from '@/@types/枚举'
import 镶嵌孔数据 from './index'

export const 获取当前心法对应镶嵌孔数据 = (功法: 功法类型, 主属性: 主属性类型) => {
  let 数据 = 镶嵌孔数据

  // 过滤内外功攻击
  if (功法 === '内功') {
    数据 = 数据.filter((item) => {
      return item?.镶嵌类型 !== 镶嵌增伤类型枚举.外攻
    })
  } else if (功法 === '外功') {
    数据 = 数据.filter((item) => {
      return item?.镶嵌类型 !== 镶嵌增伤类型枚举.内攻
    })
  }

  // 过滤出主属性
  数据 = 数据.filter((item) => {
    if (['力道', '身法', '根骨', '元气']?.includes(item?.镶嵌类型)) {
      return item?.镶嵌类型 === 主属性
    } else {
      return true
    }
  })

  return 数据
}
