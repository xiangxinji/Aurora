import Mock from 'mockjs';
import { builder } from '../utils';

const prefix = 'system';

const touchSettings = [
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
        label: '下拉选择',
        icon: '',
        handleKey: 'select',
      },
      {
        label: '栅格布局',
        icon: '',
        handleKey: 'grid-block',
      },
    ],
  },
];

Mock.mock(`/${prefix}/touch`, 'get', builder(touchSettings, '请求成功'));
