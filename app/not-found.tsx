import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full py-2 md:py-4 lg:py-8'>
      <Image src="/404.svg" alt="404" width={500} height={500} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
      <p className='text-gray-500'>Could not find requested resource</p>
      <Link href="/" className='px-4 py-2 rounded-md bg-primary text-primary-foreground'>Return Home</Link>
    </div>
  )
}