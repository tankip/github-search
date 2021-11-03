import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'

const Loading = () => {
    return (
        <Center data-testid="loading">
            <Spinner />
        </Center>
    )
}

export default Loading
