import React from 'react'
import { SearchIcon } from '../../common/Icons'
import './Search.css'

const Search = () => {
  return (
	<div className='searchNavbar'>
		<SearchIcon />
		<input placeholder="Search..." type="text" />
	</div>
  )
}

export default Search