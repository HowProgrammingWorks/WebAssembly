declare namespace example {
  @external("example", "addCallback")
  export function addCallback(res: i32): void;

  @external("example", "subCallback")
  export function subCallback(res: i32): void;
}

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function addAsync(a: i32, b: i32): void {
  const res: i32 = a + b;
  example.addCallback(res);
}

export function subAsync(a: i32, b: i32): void {
  const res: i32 = a - b;
  example.subCallback(res);
}
