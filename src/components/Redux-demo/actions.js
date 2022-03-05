export const BUY_CAKE = "BUY_CAKE";

export function buyCake(number = 1) {
  return {
    type: BUY_CAKE,
    payload: number,
  };
}
