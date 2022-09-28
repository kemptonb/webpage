import React, { useEffect } from 'react'

const Small = () => {
    // When Component (App) unmounts (or leave from screen)
  useEffect(() => {
    return () => {
      console.log("Called when compoment unmounts")
    }
  }, [])

  return (
    <div>Small</div>
  )
}

export default Small