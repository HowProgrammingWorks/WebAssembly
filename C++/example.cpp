#include <emscripten/emscripten.h>

int main() {
  return 0;
}

extern "C" {
  extern void addCallback(int res);
  extern void subCallback(int res);

  EMSCRIPTEN_KEEPALIVE int add(int a, int b) {
    return a + b;
  }

  EMSCRIPTEN_KEEPALIVE void addAsync(int a, int b) {
    int res = a + b;
    addCallback(res);
  }

  EMSCRIPTEN_KEEPALIVE void subAsync(int a, int b) {
    int res = a - b;
    subCallback(res);
  }
}
