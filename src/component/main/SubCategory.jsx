import React from 'react'
import { Link } from 'react-router-dom'

function SubCategory() {
    return (
        <section className='wrapper py-2'>
            <div className='text-gray-600 font-semibold py-5 px-3'>
                <Link to='/'>Ana səhifə /</Link>
                <span> Meyvə, tərəvəz, quru meyvə /</span>
                <span> Tərəvəz</span>
            </div>
            <div>
                
            </div>
        </section>
    )
}

export default SubCategory