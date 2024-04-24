import React from 'react'
import { getDictionary } from './dictionaries/dictionaries'
import PhotoList from '@/components/PhotoList';

const  Home = async({params:{lang}}) => {
  const dictionary =await getDictionary(lang);

  const response = await fetch(`${process.env.BASE_URL}/photos`);

  const photos = await response.json()
  return (
    <>
    <PhotoList photos={photos}/>

    </>
  )
}

export default Home
