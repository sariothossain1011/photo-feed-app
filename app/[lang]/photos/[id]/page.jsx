import PhotoDetails from '@/components/PhotoDetails'
import { getPhotoById } from '@/lib/Image-data'
import React from 'react'

const page =async ({params:{id,lang}}) => {


  return (
    <>
     <PhotoDetails id={id} lang={lang}/>
    </>
  )
}

export default page
