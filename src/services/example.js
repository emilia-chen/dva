import request from '../utils/request';

export function query() {
  console.log(1313)
  return request('/api/users');
}
