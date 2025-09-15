import { describe, beforeEach, afterEach, test, expect } from '@jest/globals'
import Counter from '../src/counter'

// ❗️TODO:: 요구사항을 만족하도록 코드를 작성하세요
/**
 * - `Counter` 인스턴스의 `count` 속성값을 테스트마다 일정한 값으로 설정
 * - Counter의 테스트들을 하나의 그룹으로 묶어 관리
 * - 증가/감소 함수는 독립적으로 테스트 진행
 */
describe('Counter 클래스 테스트', () => {
  let counter: Counter
  beforeAll(() => {
    console.log('--- 테스트 시작 ---')
    counter = new Counter()
  })

  beforeEach(() => {
    counter.set(2);
  })

  afterAll(() => {
    console.log('--- 테스트 종료 ---')
  })

  test('increment test', () => {
    counter.increment()
    counter.increment()
    expect(counter.get()).toBe(4)
  })

  test('decrement test', () => {
    counter.decrement()
    expect(counter.get()).toBe(1)
  })

  test('set test', () => {
    counter.set(5)
    expect(counter.get()).toBe(5)
  })

  test('reset test', () => {
    counter.reset()
    expect(counter.get()).toBe(0)
  })
})
