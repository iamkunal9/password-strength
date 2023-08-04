import Image from 'next/image'
import { Inter } from 'next/font/google'
import PasswordStrengthCalculator from '@/components/PasswordStrengthCalculator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='grid justify-center'>
    <PasswordStrengthCalculator/>
    </div>
  )
}
