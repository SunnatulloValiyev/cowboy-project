import { Button } from '@/components/ui/button'
import React from 'react'
import ProductForm from '../components/Header/product-form'
import Link from 'next/link'

function Login() {
  return (
    <div className='max-container'>
      <div className='flex justify-between'>
        <h1 className='text-4xl'>Admin Panel</h1>
        <Link href="/"><Button variant="destructive">Chiqish</Button></Link>
      </div>
      <div className='mt-5'>
        <ProductForm/>
      </div>
    </div>
  )
}

export default Login