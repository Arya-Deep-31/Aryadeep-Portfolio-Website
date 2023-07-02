import React from 'react'

const Layout = ({children , className = ""}) => {
  return (
    // padding 8 rem  = p-32
    <div className={`w-full h-full inline-block z-0 bg-light p-5 dark:bg-darker dark:text-light ${className}`}>
        {children}
      
    </div>
  )
}

export default Layout
