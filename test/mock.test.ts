import { describe, test, expect, jest } from '@jest/globals'
import { FindByIdType, getProduct } from '../src/mock'

// const mockFindById = jest.fn() as jest.MockedFunction<FindByIdType>
// const mockProductRepository = {
//     findById: mockFindById,
// }

// describe('[Product] 상세 조회', () => {
//     test('존재하는 상품 조회', () => {
//         // ❗️TODO:: mock 함수 반환값 설정 1번
//         mockFindById.mockReturnValue({ id: 1, name: '아이폰', price: 800 })
//         const product = getProduct(mockProductRepository, 1)
//         expect(product).toEqual({ id: 1, name: '아이폰', price: 800 })
//     })

//     test('존재하지 않는 상품 조회', () => {
//         // ❗️TODO:: mock 함수 반환값 설정 2번
//         mockFindById.mockReturnValue(null)
//         const product = getProduct(mockProductRepository, 11)
//         expect(product).toBeNull()
//     })
// })

const mockFindById = jest.fn() as jest.MockedFunction<FindByIdType>
// ❗️TODO:: mockImplementation으로 동작 정의하기
mockFindById.mockImplementation((id: number) =>{
  return id === 1 ? { id: 1, name: '아이폰', price: 800 } : null
})
const mockProductRepository = {
    findById: mockFindById,
}

describe('[Product] 상세 조회', () => {
    test('존재하는 상품 조회', () => {
        const product = getProduct(mockProductRepository, 1)
        expect(product).toEqual({ id: 1, name: '아이폰', price: 800 })
    })

    test('존재하지 않는 상품 조회', () => {
        const product = getProduct(mockProductRepository, 11)
        expect(product).toBeNull()
    })
})