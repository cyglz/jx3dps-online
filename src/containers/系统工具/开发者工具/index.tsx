import { Modal, Tabs } from 'antd'
import React from 'react'
// import WucaishiDaoru from './WucaishiDaoru'
// import JclSkillDaoru from './JclSkillDaoru'
import EquipmentImport from './装备导入'
import './index.css'

function DeveloperModal({ visible, onClose }) {
  const items = [
    { label: '装备导入', key: '装备导入', children: <EquipmentImport /> },
    // { label: '五彩石导入', key: '五彩石导入', children: <WucaishiDaoru /> },
    // { label: 'JCL技能序列导入', key: 'JCL技能序列导入', children: <JclSkillDaoru /> },
  ]
  return (
    <Modal
      className='tools-modal'
      title={'开发者工具'}
      centered
      width={800}
      open={visible}
      onCancel={() => onClose(false)}
      footer={null}
    >
      <Tabs items={items} />
    </Modal>
  )
}

export default DeveloperModal
