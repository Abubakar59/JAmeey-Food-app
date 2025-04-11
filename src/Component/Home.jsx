import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='bg-[#313131] text-white'>
                Location
                <Select>
                    <option value="">please select Location </option>
                    <option> </option>
                </Select>

                <input placeholder='Search your Snacks' className='bg-blue-400' />
            </div>
        </div>
    )
}

export default Home
