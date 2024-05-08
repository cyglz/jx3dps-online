import { 属性加成 } from './属性'
import { 镶嵌增伤类型枚举 } from './枚举'

// 装备类型
export enum 装备类型枚举 {
  普通 = '普通',
  副本精简 = '副本精简',
  切糕 = '切糕',
  橙戒 = '橙戒',
  门派套装 = '门派套装',
  试炼精简 = '试炼精简',
  特效武器 = '特效武器',
  小CW = '小CW',
  大CW = '大CW',
  PVX = 'PVX',
}

// 装备特效枚举
export enum 装备特效枚举 {
  外功_水特效武器 = '外功_水特效武器',
  外功_水特效武器_英雄 = '外功_水特效武器_英雄',
  内功_水特效武器 = '内功_水特效武器',
  内功_水特效武器_英雄 = '内功_水特效武器_英雄',
  门派套装_普通 = '门派套装_普通',
  门派套装_英雄 = '门派套装_英雄',
  切糕_普通 = '切糕_普通',
  切糕_英雄 = '切糕_英雄',
  冬至套装 = '冬至套装',
  大橙武特效 = '大橙武特效',
  小橙武特效 = '小橙武特效',
  风特效腰坠 = '风特效腰坠',
  风特效腰坠_英雄 = '风特效腰坠_英雄',
  龙门飞剑武器 = '龙门飞剑武器',
}

/**
 * @name 装备属性信息模型
 */
export interface 装备属性信息模型 {
  /**
   * @name 装备id
   */
  id?: number
  /**
   * @name 装备iid
   */
  uid?: string | number
  /**
   * @name 装备名称
   */
  装备名称: string
  /**
   * @name 装备品级
   */
  装备品级: number
  /**
   * @name 武器伤害_最小值
   */
  武器伤害_最小值?: number
  /**
   * @name 武器伤害_最大值
   */
  武器伤害_最大值?: number
  /**
   * @name 装备类型
   */
  装备类型: 装备类型枚举
  /**
   * @name 最大精炼等级
   */
  最大精炼等级?: number
  /**
   * @name 当前精炼等级
   */
  当前精炼等级?: number
  /**
   * @name 装备增益
   */
  装备增益: 属性加成[]
  /**
   * @name 镶嵌孔数组
   */
  镶嵌孔数组?: 镶嵌孔数组类型[]
  /**
   * @name 装备特效
   */
  装备特效?: 装备特效枚举
  /**
   * @name 所属门派
   * @default 通用
   */
  所属门派?: '通用' | string
}

// 镶嵌孔数据
export interface 镶嵌孔数组类型 {
  /**
   * @name 镶嵌孔名
   */
  镶嵌类型?: 镶嵌增伤类型枚举
  /**
   * @name 镶嵌宝石等级
   */
  镶嵌宝石等级?: number
}
