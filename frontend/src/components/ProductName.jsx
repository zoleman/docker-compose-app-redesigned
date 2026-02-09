import React from 'react'

function ProductName({ name }) {
    return (
        <>
            <a href='#' className='border-2 rounded-lg flex items-center justify-center p-3 hover:bg-green-200 hover:border-green-600'>
                    {name}
            </a>
        </>
    )
}

export default ProductName