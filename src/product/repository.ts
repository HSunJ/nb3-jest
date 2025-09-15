import { PRODUCTS } from "../data"

// 실제 데이터베이스 접근이라 가정
const repository = {
    findById: (productId: number) => PRODUCTS.find((product) => product.id === productId) || null,
    // ...
}

export default repository