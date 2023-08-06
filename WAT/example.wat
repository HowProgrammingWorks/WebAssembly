(module
  (import "imports" "callback" (func $callback (param i32)))
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
  (func $add_callback (param $lhs i32) (param $rhs i32)
    local.get $lhs
    local.get $rhs
    i32.add
    call $callback)
  (export "addCallback" (func $add_callback))
)
