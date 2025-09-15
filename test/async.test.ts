import { expect, test, describe, jest } from '@jest/globals';
import { fetchData, getAvatars } from '../src/async';

test('[비동기] 콜백 기반', (done) => {
  fetchData((data) => {
    expect(data).toEqual('ok');
    done();
  });
});

test('[비동기] async/await', async () => {
  const avatars = await getAvatars();
  expect(avatars).toBeTruthy();
})