import React, { useState } from 'react'
import AddCategory from './AddCategory'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategories} />
            <hr />


            <ol>
                {categories.map((category) => {
                  return <li key={category}>{category}</li>
                })}
            </ol>
        </div>
    )
}

export default GifExpertApp
