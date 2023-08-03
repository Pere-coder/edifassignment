import React,{ useEffect } from 'react'
import {clearAllBodyScrollLocks} from 'body-scroll-lock'

function DisableScroll() {
      useEffect(() => {
        clearAllBodyScrollLocks();
      }, []);

      return (
        <></>
      )
}

export default DisableScroll 