"use client"
import React from 'react';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import Modal from './Modal';
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';


const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
      };
    
      const closeModal = () => {
        setSelectedImage(null);
      };


      const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 900
      }

      const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 900
      }

      useEffect(() => {
        // Function to automatically slide the images horizontally
        const slideImagesAutomatically = () => {
        const slider = document.getElementById('slider');
        const sliderBottomOffset = slider.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
           
      if (sliderBottomOffset <= windowHeight) {
        slideRight();
      }else{
        slideLeft();
      }
   
          // slideLeft();
        };
    
        // Interval for automatic sliding (adjust the time as needed)
        window.addEventListener('scroll', slideImagesAutomatically);

    
        // Cleanup: clear the interval when the component unmounts
        return () =>  window.removeEventListener('scroll', slideImagesAutomatically);;
      }, []);
      
    
      return (
        <div className=' mt-16'>
         <h1 className='flex justify-center items-center scale-y-150  text-[30px] text-sblack md:text-[35px] lg:text-[47px]  sm:leading-[40px] font-700 leading-[30px]'>GALLERY</h1>
        <div  className='relative flex items-center text-white hover:text-black'>
        <MdChevronLeft size={40} onClick={slideLeft} className='hidden md:flex cursor-pointer'/>
          <div id='slider' className='w-full h-full overflow-x-scroll no-scrollbar whitespace-nowrap scroll=smooth mt-8'>
                <div  className="flex flex-wrap  items-center gap-3 w-[1050px] md:w-[2175px]">
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
                      src="/gallery/one.jpg"
                      onClick={() => handleImageClick('/gallery/one.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px] rounded-md text-sblack"
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
          <MdChevronRight size={40} onClick={slideRight} className='hidden md:flex cursor-pointer'/>
        </div>

        </div>
        
      );
    };
 
export default Gallery;