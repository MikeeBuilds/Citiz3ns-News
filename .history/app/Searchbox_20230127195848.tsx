function SearchBox() {
  return (
    <form className="max-w-6xl mx-auto justify-between items-center px-5">
     <input type="text" className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:flex-1" />
     
     <button type='submit'>
        Search
     </button>

    </form>
  )
}

export default SearchBox
