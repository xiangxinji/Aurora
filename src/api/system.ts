import { get } from '@/utils/request';

export function touch() {
  return get('/system/touch');
}
