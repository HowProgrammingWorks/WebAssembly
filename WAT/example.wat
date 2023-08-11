(module
  (import "imports" "addCallback" (func $addCallback (param i32)))
  (import "imports" "subCallback" (func $subCallback (param i32)))
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
  (func $addAsync (param $lhs i32) (param $rhs i32)
    local.get $lhs
    local.get $rhs
    i32.add
    call $addCallback)
  (export "addAsync" (func $addAsync))
  (func $subAsync (param $lhs i32) (param $rhs i32)
    local.get $lhs
    local.get $rhs
    i32.sub
    call $subCallback)
  (export "subAsync" (func $subAsync))
)
