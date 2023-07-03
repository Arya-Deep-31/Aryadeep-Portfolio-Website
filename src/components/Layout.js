import React from 'react'

const Layout = ({children , className = ""}) => {
  return (
    // padding 8 rem  = p-32
    <div className={`w-full h-full inline-block z-0 bg-light p-24 xl:p-16 lg:p-12 md:p-8 sm:p-4  dark:bg-darker dark:text-light  ${className}`}>
        {children}
      
    </div>
  )
}

export default Layout
