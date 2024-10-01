import React from 'react'

const ReusableButton = (props) => {
  //  Let's give the button some styling
  //  We can use the style attribute to add inline styles
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
  }

  // Now let's give it some functionality
  // We can use the onClick attribute to add a function to the button
  // We can use the alert function to display a message
  // We can also use the console.log function to display a message in the console
  const handleClick = () => {
    alert('You clicked the button')
    console.log('You clicked the button')
  }

  return (
    <div>
      <button style={buttonStyle} onClick={props.handleClick}>Click Me</button>
    </div>
  )
}

export default ReusableButton