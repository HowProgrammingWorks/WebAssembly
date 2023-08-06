declare namespace context {
  @external("imports", "callback")
  export function callback(res: i32): void;
}

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function addCallback(a: i32, b: i32): void {
  const res: i32 = a + b;
  context.callback(a + b);
}
