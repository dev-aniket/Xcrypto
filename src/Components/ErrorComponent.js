import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <Alert 
    status="error" 
    positon = {"fixed"} 
    bottom = {"4"}
    left = {"50%"}
    transform={"translateX(-50%)"}
    w={"container.lg"}
    >
      <AlertIcon />
      {message}
    </Alert>
  )
}

export default ErrorComponent
