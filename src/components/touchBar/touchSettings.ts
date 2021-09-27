export type SettingItem = {
  label: string,
  icon: string
  handleKey: string
}
export type GroupItem = {
  group: string
  title: string
  children: Array<SettingItem>
}
export type TouchSettings = Array<GroupItem>

export default [
  {
    group: 'base',
    title: '基础组件',
    children: [
      {
        label: '输入框',
        icon: '',
        handleKey: 'text-input',
      },
      {
        label: '多行输入框',
        icon: '',
        handleKey: 'textarea',
      },
      {
        label: 'html片段',
        icon: '',
        handleKey: 'html-code',
      },
      {
        label: '开关',
        icon: '',
        handleKey: 'switch',
      },
      {
        label: '栅格布局',
        icon: '',
        handleKey: 'grid-block',
      },
    ],
  },
  {
    group: 'custom',
    title: '自定义组件',
    children: [],
  },
] as TouchSettings;
