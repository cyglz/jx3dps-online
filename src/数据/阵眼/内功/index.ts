import { 属性类型 } from '@/@types/属性'
import { 阵眼数据类型 } from '../interface'
import 通用阵眼数据 from '../通用'

const 内功阵眼数据: 阵眼数据类型[] = [
  {
    阵眼名称: '冰心阵',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 50 },
      { 属性: 属性类型.内功会心百分比, 值: 0.03 },
      { 属性: 属性类型.郭氏内功会心效果等级, 值: 51 },
      { 属性: 属性类型.郭氏内功基础攻击, 值: 50, 触发型增益: true },
    ],
  },
  {
    阵眼名称: '花间阵',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.郭氏内功破防等级, 值: 300 },
    ],
  },
  {
    阵眼名称: '莫问阵',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 102 },
      { 属性: 属性类型.郭氏无双, 值: 20 },
      { 属性: 属性类型.内功会心百分比, 值: 0.03 },
      { 属性: 属性类型.内功会心百分比, 值: 0.05, 触发型增益: true },
    ],
  },
  {
    阵眼名称: '莫问阵(阵眼)',
    所属心法: '莫问',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 102 },
      { 属性: 属性类型.郭氏无双, 值: 20 },
      { 属性: 属性类型.内功会心百分比, 值: 0.03 },
      { 属性: 属性类型.内功会心百分比, 值: 0.05, 触发型增益: true },
      { 属性: 属性类型.郭氏内功会心效果等级, 值: 205 },
    ],
  },
  {
    阵眼名称: '易筋阵',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.郭氏无双, 值: 20 },
      { 属性: 属性类型.郭氏内功破防等级, 值: 102 },
      { 属性: 属性类型.郭氏内功基础攻击, 值: 21 * 5, 触发型增益: true }, // 阵眼施展“守缺式”，则小队成员内功基础攻击力提高2%，最多叠加5层
    ],
  },
  {
    阵眼名称: '气纯阵',
    增益集合: [
      { 属性: 属性类型.内功会心百分比, 值: 0.03 },
      { 属性: 属性类型.郭氏无双, 值: 20 },
      { 属性: 属性类型.郭氏内功会心效果等级, 值: 154 },
      { 属性: 属性类型.内功会心百分比, 值: 0.01 * 5, 触发型增益: true }, // 阵眼施展续气招式，则小队内功会心几率提高1%，最多叠加五层。
    ],
  },
  {
    阵眼名称: '毒经阵',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.内功会心百分比, 值: 0.03 },
      { 属性: 属性类型.郭氏内功会心效果等级, 值: 102 },
      { 属性: 属性类型.郭氏内功破防等级, 值: 102, 触发型增益: true }, // 阵眼施展“蝎心”，则小队成员内功破防提高10%，持续5秒。
    ],
  },
  {
    阵眼名称: '毒经阵(阵眼)',
    所属心法: '毒经',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.内功会心百分比, 值: 0.03 },
      { 属性: 属性类型.郭氏内功会心效果等级, 值: 102 },
      { 属性: 属性类型.郭氏内功破防等级, 值: 102, 触发型增益: true }, // 阵眼施展“蝎心”，则小队成员内功破防提高10%，持续5秒。
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51, 触发型增益: true }, // 小队成员内功招式会心则使阵眼毒性内功基础攻击力提高5%，持续5秒
    ],
  },
  {
    阵眼名称: '天罗阵',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.郭氏全无视防御, 值: 52 },
      { 属性: 属性类型.郭氏全会心效果等级, 值: 150 },
      { 属性: 属性类型.全会心百分比, 值: 0.05, 触发型增益: true }, // 第五层阵眼-1覆盖率按:100%算
    ],
  },
  {
    阵眼名称: '焚影阵',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.内功会心百分比, 值: 0.03 },
      { 属性: 属性类型.内功会心百分比, 值: 0.1, 触发型增益: true }, // 阵眼施展“驱夜断愁”则团队成员内功会心几率提高10%，持续5秒。
    ],
  },
  {
    阵眼名称: '焚影阵(阵眼)',
    所属心法: '焚影圣诀',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.内功会心百分比, 值: 0.03 },
      { 属性: 属性类型.内功会心百分比, 值: 0.1, 触发型增益: true }, // 阵眼施展“驱夜断愁”则团队成员内功会心几率提高10%，持续5秒。
      { 属性: 属性类型.郭氏内功会心效果等级, 值: 200, 触发型增益: true }, // 造成会心伤害则使阵眼内功会心效果提高20%，持续5秒。
    ],
  },
  {
    阵眼名称: '衍天阵',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.郭氏无双, 值: 20 },
      { 属性: 属性类型.郭氏内功会心效果等级, 值: 102 },
      // 本赛季 鬼列 不起卦
      // { 属性: 属性类型.通用增伤, 值: (154 / 2) * 0.2, 触发型增益: true }, // 覆盖率按 20%算 阵眼施展“起卦”则有50%几率使小队成员招式伤害和治疗效果提高15%，有50%几率使小队成员受到的伤害降低25%，持续4秒。
    ],
  },
  {
    阵眼名称: '衍天阵(阵眼)',
    所属心法: '太玄经',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.郭氏无双, 值: 20 },
      { 属性: 属性类型.郭氏内功会心效果等级, 值: 102 },
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51, 触发型增益: true }, // 取平均数按5%算 小队成员内功会心则使阵眼混元性内功基础攻击随机提高1~10%，持续5秒。
      // 本赛季 鬼列 不起卦
      // { 属性: 属性类型.通用增伤, 值: (154 / 2) * 0.2, 触发型增益: true }, // 覆盖率按 20%算 阵眼施展“起卦”则有50%几率使小队成员招式伤害和治疗效果提高15%，有50%几率使小队成员受到的伤害降低25%，持续4秒。
    ],
  },
  {
    阵眼名称: '无方阵',
    增益集合: [
      { 属性: 属性类型.郭氏内功基础攻击, 值: 51 },
      { 属性: 属性类型.通用增伤, 值: 31 / 1024 },
      { 属性: 属性类型.全会心百分比, 值: 0.03 },
      // 五阵暂时不计算 阵眼产生“中和”效果，使得小队成员下一次伤害招式将附带一段毒性内功伤害，该伤害取决于阵眼的内功攻击、破防等级、会心几率和会心效果。
    ],
  },
  ...通用阵眼数据,
]

export default 内功阵眼数据
