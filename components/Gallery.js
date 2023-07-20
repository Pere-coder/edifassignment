"use client"
import React from 'react';
import Image from 'next/image'
import { useState } from 'react';
import Modal from './Modal';


const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
      };
    
      const closeModal = () => {
        setSelectedImage(null);
      };
    
      return (
        <div className=' mt-16'>
         <h1 className='flex justify-center items-center scale-y-150  text-[30px] text-sblack md:text-[35px] lg:text-[47px]  sm:leading-[40px] font-700 leading-[30px]'>GALLERY</h1>
        <div className='w-full overflow-x-auto no-scrollbar mt-8'>
        <div className='mx-0 w-[2000px]'>
        <div className="flex justify-center  gap-1">
        
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </div>
        </div>
        </div>

        <div className='w-full overflow-x-auto no-scrollbar mt-2'>
        <div className='mx-0 w-[2000px]'>
        <div className="flex justify-center  gap-1">
        
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/gallery/one.jpg"
              onClick={() => handleImageClick('/gallery/one.jpg')}
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </div>
        </div>
        </div>
        </div>
        
      );
    };
 
export default Gallery;