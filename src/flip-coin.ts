type Coin = 'HEAD' | 'TAIL';

const flipCoin = (): Coin => {
  const value = Math.random();
  return value < 0.5 ? 'HEAD' : 'TAIL';
}

export default flipCoin;