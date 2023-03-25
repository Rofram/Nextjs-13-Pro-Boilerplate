import { Button } from '@/shared/components/Button';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='container mx-auto p-4 flex flex-col items-center gap-7'>
      <h1 className={`${inter.className} text-4xl font-medium`}>Next.Js 13 Pro Boilerplate</h1>
      <Button />
    </main>
  )
}
