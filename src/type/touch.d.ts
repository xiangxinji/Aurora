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
