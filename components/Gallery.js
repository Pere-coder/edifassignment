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
        var scrollStep = 10; // Number of pixels to scroll at each step
        var scrollAmount = 308; // Total amount to scroll

        var scrollLeft = slider.scrollLeft;
        var currentScroll = 0;

        function scrollStepLeft() {
          if (currentScroll < scrollAmount) {
            slider.scrollLeft = scrollLeft - scrollStep;
            currentScroll += scrollStep;
            setTimeout(scrollStepLeft, 5); // Adjust the delay here (in milliseconds)
          } else {
            slider.scrollLeft = scrollLeft - scrollAmount;
          }
        }
      
        scrollStepLeft();
      }

      const slideRight = () => {
        var slider = document.getElementById('slider');
        var scrollStep = 10; // Number of pixels to scroll at each step
        var scrollAmount = 308; // Total amount to scroll
      
        var scrollLeft = slider.scrollLeft;
        var currentScroll = 0;
      
        function scrollStepRight() {
          if (currentScroll < scrollAmount) {
            slider.scrollLeft = scrollLeft + scrollStep;
            currentScroll += scrollStep;
            setTimeout(scrollStepRight, 5); // Adjust the delay here (in milliseconds)
          } else {
            slider.scrollLeft = scrollLeft + scrollAmount;
          }
        }
      
        scrollStepRight();
      }


      
      
      // useEffect(() => {
      //   // Function to automatically slide the images horizontally
      //   const slideImagesAutomatically = () => {
      //     const slider = document.getElementById('slider');
      //     const sliderBottomOffset = slider.getBoundingClientRect().bottom;
      //     const windowHeight = window.innerHeight;
    
      //     if (sliderBottomOffset <= windowHeight) {
      //       slideRight();
      //     } else {
      //       slideLeft();
      //     }
      //   };
    
      //   // Interval for automatic sliding (adjust the time as needed)
      //   const slideInterval = setInterval(slideImagesAutomatically, 3000); // Adjust the time (in milliseconds) as needed
    
      //   // Cleanup: clear the interval when the component unmounts
      //   return () => clearInterval(slideInterval);
      // }, []);
      
    
      return (
        <div className=' mt-16'>
         <h1 className='flex justify-center items-center scale-y-150  text-[30px] text-sblack md:text-[35px] lg:text-[47px]  sm:leading-[40px] font-700 leading-[30px]'>GALLERY</h1>
        <div  className='relative flex items-center text-white hover:text-black'>
        <MdChevronLeft size={40} onClick={slideLeft} className='hidden md:flex cursor-pointer'/>
          <div id='slider' className='w-full h-full overflow-x-scroll no-scrollbar whitespace-nowrap scroll=smooth mt-8'>
                <div  className="flex flex-wrap justify-center mx-auto  items-center gap-3 w-[2749px] md:w-[4060px]">
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/1.JPG"
                      onClick={() => handleImageClick('/gallery/images/1.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/2.JPG"
                      onClick={() => handleImageClick('/gallery/images/2.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/3.JPG"
                      onClick={() => handleImageClick('/gallery/images/3.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/4.JPG"
                      onClick={() => handleImageClick('/gallery/images/4.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/5.JPG"
                      onClick={() => handleImageClick('/gallery/images/5.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/6.JPG"
                      onClick={() => handleImageClick('/gallery/images/6.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/7.JPG"
                      onClick={() => handleImageClick('/gallery/images/7.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/8.JPG"
                      onClick={() => handleImageClick('/gallery/images/8.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/9.JPG"
                      onClick={() => handleImageClick('/gallery/images/9.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/10.JPG"
                      onClick={() => handleImageClick('/gallery/images/10.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/11.JPG"
                      onClick={() => handleImageClick('/gallery/images/11.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/12.JPG"
                      onClick={() => handleImageClick('/gallery/images/12.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/13.JPG"
                      onClick={() => handleImageClick('/gallery/images/13.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/14.JPG"
                      onClick={() => handleImageClick('/gallery/images/14.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/15.JPG"
                      onClick={() => handleImageClick('/gallery/images/15.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/16.JPG"
                      onClick={() => handleImageClick('/gallery/images/16.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/17.JPG"
                      onClick={() => handleImageClick('/gallery/images/17.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/18.JPG"
                      onClick={() => handleImageClick('/gallery/images/18.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/19.JPG"
                      onClick={() => handleImageClick('/gallery/images/19.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/20.JPG"
                      onClick={() => handleImageClick('/gallery/images/20.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/21.JPG"
                      onClick={() => handleImageClick('/gallery/images/21.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/22.JPG"
                      onClick={() => handleImageClick('/gallery/images/22.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/23.JPG"
                      onClick={() => handleImageClick('/gallery/images/23.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/24.JPG"
                      onClick={() => handleImageClick('/gallery/images/24.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/25.JPG"
                      onClick={() => handleImageClick('/gallery/images/25.JPG')}
                      alt="fitness image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <Image
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-[200px] md:w-[300px]  text-sblack"
                      src="/gallery/images/26.JPG"
                      onClick={() => handleImageClick('/gallery/images/26.JPG')}
                      alt="fitness image"
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