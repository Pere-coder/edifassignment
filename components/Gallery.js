"use client"
import Image from 'next/image'
import { useState } from 'react';
import Modal from './Modal';


const gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
      };
    
      const closeModal = () => {
        setSelectedImage(null);
      };
    
      return (
        <div className='w-full overflow-x-auto '>
        <div className='mx-0 w-[2000px] '>
        <div className="flex  flex-center gap-1">
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </div>
        </div>
        <div className='mx-0 w-[2000px] mt-5'>
        <div className="flex  flex-center gap-1">
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto md:w-[800px] md:h-[300px] cursor-pointer"
              src="gallery/one.jpg"
              onClick={() => handleImageClick('gallery/one.jpg')}
              alt="Image 1"
            />
          </div>
          {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </div>
        </div>
        </div>
        
      );
    };
 
export default gallery;