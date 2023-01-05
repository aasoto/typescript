
export function genericFunction<T>(argument: T):T {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => {
  return argument;
}