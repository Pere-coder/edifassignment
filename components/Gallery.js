"use client"
import React from 'react';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import Modal from './Modal';
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';


const gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
      };
    
      const closeModal = () => {
        setSelectedImage(null);
      };


      const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 3000
      }

      const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 3000
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

    
        // Cleanup: clear the interval when the compimages/2nt unmounts
        return () =>  window.removeEventListener('scroll', slideImagesAutomatically);;
      }, []);
      
    
      return (
        <div className=' mt-16'>
         <h1 className='flex justify-center items-center scale-y-150  text-[30px] text-sblack md:text-[35px] lg:text-[47px]  sm:leading-[40px] font-700 leading-[30px]'>GALLERY</h1>
        <div  className='relative flex items-center text-white hover:text-black'>
        <MdChevronLeft size={40} onClick={slideLeft} className='hidden md:flex cursor-pointer'/>
          <div id='slider' className='w-full h-full overflow-x-scroll no-scrollbar whitespace-nowrap scroll=smooth mt-8'>
                <div  className="flex flex-wrap  items-center gap-3 w-[2749px] md:w-[4060px]">
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/badminton.jpg"
                      onClick={() => handleImageClick('/gallery/images/1.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/bg.jpg"
                      onClick={() => handleImageClick('/gallery/images/2.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/3.jpg"
                      onClick={() => handleImageClick('/gallery/images/3.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/4.jpg"
                      onClick={() => handleImageClick('/gallery/images/4.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/5.jpg"
                      onClick={() => handleImageClick('/gallery/images/5.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/6.jpg"
                      onClick={() => handleImageClick('/gallery/images/6.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/7.jpg"
                      onClick={() => handleImageClick('/gallery/images/7.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/8.jpg"
                      onClick={() => handleImageClick('/gallery/images/8.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/9.jpg"
                      onClick={() => handleImageClick('/gallery/images/9.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/10.jpg"
                      onClick={() => handleImageClick('/gallery/images/10.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/11.jpg"
                      onClick={() => handleImageClick('/gallery/images/11.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/12.jpg"
                      onClick={() => handleImageClick('/gallery/images/12.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/13.jpg"
                      onClick={() => handleImageClick('/gallery/images/13.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/14.jpg"
                      onClick={() => handleImageClick('/gallery/images/14.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/15.jpg"
                      onClick={() => handleImageClick('/gallery/images/15.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/16.jpg"
                      onClick={() => handleImageClick('/gallery/images/16.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/17.jpg"
                      onClick={() => handleImageClick('/gallery/images/17.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/18.jpg"
                      onClick={() => handleImageClick('/gallery/images/18.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/19.jpg"
                      onClick={() => handleImageClick('/gallery/images/19.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/20.jpg"
                      onClick={() => handleImageClick('/gallery/images/20.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/21.jpg"
                      onClick={() => handleImageClick('/gallery/images/21.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/22.jpg"
                      onClick={() => handleImageClick('/gallery/images/22.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/23.jpg"
                      onClick={() => handleImageClick('/gallery/images/23.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/24.jpg"
                      onClick={() => handleImageClick('/gallery/images/24.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/25.jpg"
                      onClick={() => handleImageClick('/gallery/images/25.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/26.jpg"
                      onClick={() => handleImageClick('/gallery/images/26.jpg')}
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
 
export default gallery;