import React from 'react'

function Overview() {

        

  return (
    <main>
            <div className='serach-box'>
                <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
                        s />
            </div>

            <div className='location-box'>
                    <div className='locations'>New York City</div>
            </div>

            <div className='weather-app'>
                    <div className='temp'>15c</div>
                    <div className='weather'>Sunny</div>
            </div>
    </main>
  )
}

export default Overview
