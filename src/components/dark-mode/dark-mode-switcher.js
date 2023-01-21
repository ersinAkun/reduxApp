import React from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const DarkModeSwitcher = () => {

    const darkMode = useSelector( (state) => console.log(state) )


  return (
    <div>
      
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Dark Mode"
        checked= {false}
      />

    </div>
  )
}

export default DarkModeSwitcher