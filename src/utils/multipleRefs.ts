import { useRef } from "react";

const MAX_ITERATIONS_COUNT = 50;

function iterator() {
  return this;
}

export default function useMultipleRefs<T>(initialValue?: T) {
  let count = 0;

  return {
    next() {
      if (++count > MAX_ITERATIONS_COUNT) {
        throw new Error(
          "useMultipleRefs: reached more than 50 refs. This hook can be used exclusively with the array destructuring syntax."
        );
      }

      return {
        done: false,
        value: useRef<T | undefined>(initialValue),
      };
    },
    [Symbol.iterator]: iterator,
  };
}
