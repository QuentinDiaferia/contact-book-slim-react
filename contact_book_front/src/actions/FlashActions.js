export function addFlashData(message, type) {
    const flashData = {
        message,
        type
    }
    return {
        type: 'ADD_FLASH',
        flashData
    }
}

export function emptyFlashData() {
    return {
        type: 'EMPTY_FLASH'
    }
}

