import React from 'react'

function Bgchanger() {

    function changeBackground(){
        
    }

  return (
    <div>
        <div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <button onClick={changeBackground}
                type="button"
                class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                Red
            </button>
            <button
                type="button"
                class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
                Green
            </button>
            <button
                type="button"
                class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
                Blue
            </button>
            <button
                type="button"
                class="rounded-md bg-olive-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Olive
            </button>
            <button
                type="button"
                class="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Gray
            </button>
            <button
                type="button"
                class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Yellow
            </button>
            <button
                type="button"
                class="rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Pink
            </button>
            <button
                type="button"
                class="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Purple
            </button>
            <button
                type="button"
                class="rounded-md bg-lavender-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Lavender
            </button>
            <button
                type="button"
                class="rounded-md bg-white-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                White
            </button>
            <button
                type="button"
                class="rounded-md bg-black-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Black
            </button>
        </div>

    </div>
  )
}

export default Bgchanger