import { 获取心法数据 } from '@/心法模块'
import { 数据类型 } from '../interface'
import 团队增益数据 from '../团队增益'
import 阵眼数据 from '../阵眼'
import 小药小吃数据 from '../小药小吃'
import 五彩石数据 from '../五彩石'
import { 获取当前心法对应镶嵌孔数据 } from '../镶嵌孔/工具'
import { 获取附魔数据 } from '../附魔'

let 缓存数据: any = null

const 获取当前数据 = (心法?): 数据类型 => {
  if (缓存数据) {
    return 缓存数据
  }

  const 心法数据 = 获取心法数据(心法)
  const 功法 = 心法数据?.功法

  const 结果数据 = {
    ...心法数据,
    团队增益: 团队增益数据?.[功法],
    阵眼: 阵眼数据?.[功法],
    小药小吃: 小药小吃数据?.[功法],
    镶嵌孔: 获取当前心法对应镶嵌孔数据(功法, 心法数据?.主属性),
    五彩石: 五彩石数据?.[功法],
    附魔: 获取附魔数据?.[功法],
  }

  缓存数据 = 结果数据

  return 结果数据
}

export default 获取当前数据
