#include <emscripten/emscripten.h>

int main() {
  return 0;
}

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE int add(int a, int b) {
  return a + b;
}
