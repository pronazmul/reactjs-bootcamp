import React, { useState } from 'react'
import { coastguard } from './../dummyData/coastguard'

const filterNumbers = (selectedZone, search, showEntities, coastguard) => {
  document.title = 'Telephone Directory'
  const regex = new RegExp(search, 'i')

  let byZone = selectedZone.length
    ? coastguard.filter((i) => selectedZone.includes(i.address))
    : coastguard

  let bySearch = Boolean(search)
    ? byZone.filter(
        (i) =>
          i.name.match(regex) || i.number.match(regex) || i.address.match(regex)
      )
    : byZone

  let entities = showEntities ? bySearch.slice(0, showEntities) : bySearch

  return entities.length ? entities : coastguard
}

const ShopScreen = () => {
  // Filter zones
  const zones = [...new Set(coastguard.map((item) => item.address))]

  // Selected Products
  const [selectedZone, setSelectedZone] = useState([])
  const [showEntities, setShowEntities] = useState(50)

  const [search, setSearch] = useState('')

  const filteredNumbers = filterNumbers(
    selectedZone,
    search,
    showEntities,
    coastguard
  )

  // Zone Handler
  const handleZone = (e) => {
    const zone = e.target.value
    if (!selectedZone.includes(zone)) {
      setSelectedZone([...selectedZone, zone])
    } else {
      setSelectedZone(selectedZone.filter((i) => i !== zone))
    }
  }

  return (
    <div className='bg-black h-full'>
      <img className='fixed opacity-50' src='cg/ship.jpg'></img>
      {/* Header */}
      <div className='backdrop-filter backdrop-blur-sm container shadow py-6 px-4 rounded-lg z-20'>
        <img className='absolute opacity-80 w-32' src='cg/monogram.png'></img>
        <img
          className='absolute opacity-80 right-10 w-36 mt-6 rounded-lg'
          src='cg/jack.gif'
        ></img>
        <h1 className='text-6xl text-center text-white font-black font-mono uppercase'>
          Bangladesh Coast Guard
        </h1>
        <span className='text-center block text-4xl font-semibold text-indigo-800 my-3'>
          Telephone Directory
        </span>
      </div>

      {/* Content Section */}
      <div className='container grid grid-cols-4 gap-2 lg:gap-4 py-4 items-start'>
        {/* Sidebar */}
        <div className='col-span-1 px-4 py-4 shadow rounded overflow-hidden md:block hidden z-10 backdrop-filter backdrop-blur-sm'>
          <div className=' divide-y divide-gray-200 space-y-4 text-xs lg:text-sm '>
            {/* Select-Zone */}
            <div className='space-y-1 text-white'>
              <h3 className='uppercase text-sm lg:text-base font-bold'>
                Find By Zone
              </h3>
              <div className=' space-y-1 pt-2'>
                {zones &&
                  zones.map((zone, index) => (
                    <div key={index} className='flex items-center'>
                      <input
                        type='checkbox'
                        id={index + 'zone'}
                        value={zone}
                        className=' text-indigo-700 focus:ring-0 rounded cursor-pointer bg-transparent border-indigo-600'
                        onChange={handleZone}
                      />
                      <label
                        for={index + 'zone'}
                        className='ml-3 cursor-pointer capitalize'
                      >
                        {zone}
                      </label>
                      <div className=' text-white text-sm ml-auto'>
                        (
                        {
                          coastguard.filter((item) => item.address === zone)
                            .length
                        }
                        )
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className='col-span-4 md:col-span-3 z-10 backdrop-filter backdrop-blur-sm'>
          <div className='shadow rounded px-4 pt-6 pb-8'>
            {/* Section Header */}
            <div className='flex items-baseline justify-between border-b pb-1 border-gray-100 text-white'>
              <div>
                <input
                  type='text'
                  name='search'
                  className='w-full border-gray-300 focus:border-indigo-600 bg-transparent focus:ring-0 py-1 rounded shadow-sm placeholder-gray-100'
                  placeholder='Search'
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className='flex items-center space-x-3'>
                <p className='text-base font-semibold'>Show :</p>
                <select
                  className=' rounded text-base py-1 border-gray-300 shadow-sm focus:border-indigo-600 ring:border-indigo-600 bg-transparent'
                  name='showEntities'
                  onChange={(e) => setShowEntities(Number(e.target.value))}
                  value={showEntities}
                >
                  <option className='bg-indigo-300' value='50'>
                    50
                  </option>
                  <option className='bg-indigo-300' value='100'>
                    100
                  </option>
                  <option className='bg-indigo-300' value='300'>
                    300
                  </option>
                  <option className='bg-indigo-300' value='500'>
                    500
                  </option>
                </select>
              </div>
            </div>
            <div className='contract list w-full'>
              <div className='flex flex-col'>
                <div className='overflow-x-auto'>
                  <div className='py-4 align-middle inline-block min-w-full'>
                    <div className='overflow-hidden border-b border-gray-200 rounded'>
                      <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='font-black text-white'>
                          <tr>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left uppercase tracking-wider'
                            >
                              Assign
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left uppercase tracking-wider'
                            >
                              Phone
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left uppercase tracking-wider'
                            >
                              Ship/Estd
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left uppercase tracking-wider'
                            >
                              Zone
                            </th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-700 text-sm font-semibold text-gray-100'>
                          {filteredNumbers.map((data) => (
                            <tr key={data.number}>
                              <td className='px-6 py-3 whitespace-nowrap'>
                                <div className=''>{data.name}</div>
                              </td>
                              <td className='px-6 py-3 whitespace-nowrap'>
                                <div className=''>{data.number}</div>
                              </td>
                              <td className='px-6 py-3 whitespace-nowrap'>
                                <div className=''>N/A</div>
                              </td>
                              <td className='px-6 py-3 whitespace-nowrap'>
                                <div className=''>{data.address}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='z-20 text-gray-300 text-xs flex py-3 backdrop-filter backdrop-blur-sm justify-between px-12'>
        <div></div>
        <div>Copyright 2021 Bangladesh CoastGuard</div>
        <div>Developed By Nazmul Huda</div>
      </div>
    </div>
  )
}

export default ShopScreen
