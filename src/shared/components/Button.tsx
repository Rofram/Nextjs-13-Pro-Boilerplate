'use client';

import { ReactComponent as Plugin } from '@/stories/assets/plugin.svg';
import { useCountStore } from '../stores/count.store';

export const Button = () => {
  const { state: { count }, actions: { increment } } = useCountStore()

  return (
    <button className="flex p-2 items-center gap-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-900" onClick={increment}>
      <Plugin />
      <p>Count: {count}</p>
    </button>
  )
}
