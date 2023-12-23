import React, {useCallback, useState} from 'react';

export default function useInput(initialState = '') {
    const [value, setValue] = useState(initialState)
    const handler = useCallback((e) => {
        setValue(e.target.value)
    }, [])

    return [value, handler]
}