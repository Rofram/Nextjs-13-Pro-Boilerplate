import { Button } from '@/shared/components/Button';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='container mx-auto p-2'>
      <h1 className={`${inter} text-center text-3xl font-medium`}>Next.Js 13 Pro Boilerplate</h1>
      <Button />
    </main>
  )
}
