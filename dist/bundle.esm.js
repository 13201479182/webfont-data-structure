// src/heap/index.ts
var Heap = class {
  constructor() {
    console.log("Heap");
  }
};
var heap_default = Heap;

// src/stack/index.ts
var Stack = class {
  constructor() {
    console.log("Stack");
  }
  add(num1, num2) {
    return num1 + num2;
  }
};
var stack_default = Stack;

// src/index.ts
var src_default = {
  Heap: heap_default,
  Stack: stack_default
};
export {
  src_default as default
};
//# sourceMappingURL=bundle.esm.js.map
