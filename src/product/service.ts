import repository from './repository'

export const getProduct = (productId: number) => {
    const product = repository.findById(productId) // 조회되면 해당 객체 반환, 아니면 null
    return product
}