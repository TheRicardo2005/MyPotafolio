import React from 'react'
import { useState } from 'react'


const useShowToggle = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

  return {
    toggleNav,
    isNavOpen   
  }
}

export default useShowToggle