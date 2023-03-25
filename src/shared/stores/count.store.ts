import { create } from "zustand";

export type CountState = {
  count: number;
}

export type CountActions = {
  increment: () => void;
  decrement: () => void;
}

export type CountStore = {
  state: CountState;
  actions: CountActions;
}

export const useCountStore = create<CountStore>((set) => ({
  state: {
    count: 0,
  },
  actions: {
    increment: () => set(({ state }) => ({ state: { count: state.count + 1 } })),
    decrement: () => set(({ state }) => ({ state: { count: state.count - 1 } }))
  }
}))