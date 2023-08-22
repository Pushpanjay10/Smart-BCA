import React, { useCallback, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';

import './userSearchBox.css';

function UserSearchBox() {
	const [searchBoxText, setSearchBoxText] = useState('');

	const handleSearch = useCallback(() => {
		window.open('user/' + searchBoxText, '_self', false);
	}, [searchBoxText]);

	return (
		<div className="searchBox">
			<input
				value={searchBoxText}
				onChange={(e) => setSearchBoxText(e.target.value)}
				onKeyDown={(e) => {
					if (e.keyCode === 13 || e.which === 13) {
						handleSearch();
					}
				}}
				type="text"
				placeholder="Search Registration No."
			/>
			<SearchIcon sx={{ py: 0.5, pr: 1, cursor: 'pointer' }} onClick={handleSearch} />
		</div>
	);
}

export default UserSearchBox;