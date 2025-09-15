import { describe, test, expect, jest } from '@jest/globals'
import { getProduct } from '../src/product/service'
import repository from '../src/product/repository'

jest.mock('../src/product/repository') // repository 모듈을 통째로 mocking

describe('[Product] 그룹 테스트', () => {
  test('존재하는 상품 조회', () => {
    (repository.findById as jest.Mock).mockReturnValue({ id: 1, name: '아이폰', price: 800 }) // findById 함수의 mock return value 설정
    const product = getProduct(1)
    console.log(product)

    expect(product).toEqual({ id: 1, name: '아이폰', price: 800 })
  })
  test('존재하지 않는 상품 조회', () => {
    (repository.findById as jest.Mock).mockReturnValue(null) // findById 함수의 mock return value 설정
    const product = getProduct(11)
    console.log(product)

    expect(product).toBeNull()
  })
})