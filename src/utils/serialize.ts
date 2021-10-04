import Store from '@/components/context/store';

export default function serialize(store: Store<any>) {
  return {
    version: '1.0.0',
    data: JSON.parse(JSON.stringify(store.data)),
    platform: 'web',
    formOptions: JSON.parse(JSON.stringify(store.formOptions)),
  };
}
