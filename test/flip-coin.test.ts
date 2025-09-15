import { expect, test, describe, jest } from '@jest/globals';
import flipCoin from '../src/flip-coin';

const randomSpy = jest.spyOn(Math, 'random');

test('[동전 던지기]', () => {
  randomSpy.mockReturnValue(0.3);
  const result1 = flipCoin();
  expect(result1).toBe('HEAD');

  randomSpy.mockReturnValue(0.7);
  const result2 = flipCoin();
  expect(result2).toBe('TAIL');

  randomSpy.mockRestore() // 원래의 Math.random으로 복구 (설정했던 mockReturnValue가 사라짐)
  const result3 = flipCoin(); // 이제는 0~1 사이의 랜덤 값이 나옴
  console.log(result1, result2, result3);
})