import React, { useRef } from 'react'
import './Navbar.css'

type SortValue = '' | 'name' | 'scoreDesc' | 'scoreAsc'
type FilterValue = '' | 'winner' | 'loser'

const Navbar = (
  { onOpenSetting,
    onSearch,
    sortBy,
    onSortChange,
    filterBy,
    onFilterChange
  }: {
    onOpenSetting: () => void,
    onSearch: (input: string) => void,
    sortBy: SortValue,
    onSortChange: (value: SortValue) => void,
    filterBy: FilterValue,
    onFilterChange: (value: FilterValue) => void
  }) => {
  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <header className='header-container'>
        <div>
          <span>HALA</span>
        </div>
        <input type="text" ref={searchRef} className='search-bar' onChange={(e) => onSearch(e.target.value)} />
        <div className="setting-container">
          <select value={sortBy} onChange={(e) => onSortChange(e.target.value as SortValue)}>
            <option value="">Sort</option>
            <option value="name">Name</option>
            <option value="scoreDesc">Highest to lowest</option>
            <option value="scoreAsc">Lowest to highest</option>
          </select>
          <select value={filterBy} onChange={(e) => onFilterChange(e.target.value as FilterValue)}>
            <option value="">Filter</option>
            <option value="winner">Win</option>
            <option value="loser">Lose</option>
          </select>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" /></svg>          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z" /></svg>          </button>
          <button onClick={onOpenSetting}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings" aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar