import React from 'react'

function Search({setSearch}) {
    return (
        <div className="flex items-center p-4">
            <label
                htmlFor="exampleSearch2"
                className="me-2 text-white text-lg"
            >
                Search:
            </label>
            <input
            onChange={(e)=>setSearch(e.target.value)}
                type="search"
                className="peer block min-h-[auto] text-lg rounded border-2 bg-transparent px-3 py-[0.2rem] leading-[1.0]"
                id="exampleSearch2"
            />
        </div>
    )
}

export default Search