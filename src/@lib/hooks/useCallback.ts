/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/no-unsafe-function-type */
import { DependencyList } from "react";
import { useMemo } from "./useMemo";

export function useCallback<T extends Function>(
  factory: T,
  _deps: DependencyList,
) {
  const memoizedCallback = useMemo(() => factory, _deps);
  return memoizedCallback;
}
