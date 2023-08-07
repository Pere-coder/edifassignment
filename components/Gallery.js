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

    
        // Cleanup: clear the interval when the compgal/2nt unmounts
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
                      src="/gallery/gal/1.jpg"
                      onClick={() => handleImageClick('/gallery/gal/1.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/2.jpg"
                      onClick={() => handleImageClick('/gallery/gal/2.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/3.jpg"
                      onClick={() => handleImageClick('/gallery/gal/3.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/4.jpg"
                      onClick={() => handleImageClick('/gallery/gal/4.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/5.jpg"
                      onClick={() => handleImageClick('/gallery/gal/5.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/6.jpg"
                      onClick={() => handleImageClick('/gallery/gal/6.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/7.jpg"
                      onClick={() => handleImageClick('/gallery/gal/7.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/8.jpg"
                      onClick={() => handleImageClick('/gallery/gal/8.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/9.jpg"
                      onClick={() => handleImageClick('/gallery/gal/9.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/10.jpg"
                      onClick={() => handleImageClick('/gallery/gal/10.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/11.jpg"
                      onClick={() => handleImageClick('/gallery/gal/11.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/12.jpg"
                      onClick={() => handleImageClick('/gallery/gal/12.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/13.jpg"
                      onClick={() => handleImageClick('/gallery/gal/13.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/14.jpg"
                      onClick={() => handleImageClick('/gallery/gal/14.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/15.jpg"
                      onClick={() => handleImageClick('/gallery/gal/15.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/16.jpg"
                      onClick={() => handleImageClick('/gallery/gal/16.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/17.jpg"
                      onClick={() => handleImageClick('/gallery/gal/17.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/18.jpg"
                      onClick={() => handleImageClick('/gallery/gal/18.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/19.jpg"
                      onClick={() => handleImageClick('/gallery/gal/19.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/20.jpg"
                      onClick={() => handleImageClick('/gallery/gal/20.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/21.jpg"
                      onClick={() => handleImageClick('/gallery/gal/21.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/22.jpg"
                      onClick={() => handleImageClick('/gallery/gal/22.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/23.jpg"
                      onClick={() => handleImageClick('/gallery/gal/23.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/24.jpg"
                      onClick={() => handleImageClick('/gallery/gal/24.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/25.jpg"
                      onClick={() => handleImageClick('/gallery/gal/25.jpg')}
                      alt="Image 1"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/gal/26.jpg"
                      onClick={() => handleImageClick('/gallery/gal/26.jpg')}
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