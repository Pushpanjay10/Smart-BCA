import React, { useState, useEffect, useCallback } from 'react';
import { handleUserState } from '../firebase/auth';
import { getAllTableData } from '../firebase//home.js';

import NavBar from '../components/Bar/NavBar/NavBar';
import FootBar from '../components/Bar/Footer/Footer';
import ShowMsg from '../components/ShowMsg/ShowMsg.js';
import Table from '../components/Table/Table.js';
import Toolbar from '@mui/material/Toolbar';

import '../styles/homePage.css';

const array = [
	103
]

let supurUser = array.find(function (element) {
	return element === parseInt(JSON.parse(localStorage.getItem('user_details'))?.registration_no);
});

function HomePage() {
	const [msg, setMsg] = useState({ text: '', type: '' });
	const [isGetLoading, setIsGetLoading] = useState(false);
	const [tableAllData, setTableAllData] = useState([]);

	const handleMsgShown = useCallback((msgText, type) => {
		if (msgText) {
			setMsg({ text: msgText, type: type });
			setTimeout(() => {
				setMsg({ text: '', type: '' });
			}, 2500);
		} else {
			console.log('Please Provide Text Msg');
		}
	}, []);

	useEffect(() => {
		handleUserState(true);
		document.title = 'SmartBCA | Home ';
		getAllTableData(setTableAllData, setIsGetLoading, handleMsgShown);
	}, [handleMsgShown]);

	return (
		<>
			<NavBar />
			<div className="homePageBackground"></div>

			<div className="homePageContain" component="main">
				<Toolbar />
				<div className="homePageTitle">
					<div className="classInfo">
						<div className="programName">
							Program code: <span>Computer Application</span>
						</div>
						<div className="programName">
							Program Name: <span>BCA</span>
						</div>
						<div className="programName">
							Session:- <span>2024-27</span>
						</div>
					</div>
				</div>

				<div className="tableSemesterTitle"> FIRST YEAR 2024 </div>
				<Table
					tableAllData={tableAllData}
					isGetLoading={isGetLoading}
					supurUser={supurUser ? true : false}
					tableTitle={
						supurUser
							? ['Subject', 'Syllabus', 'PPT', 'Notes', 'Edit/Add']
							: ['Subject', 'Syllabus', 'PPT', 'Notes']
					}
				/>
			</div>

			<FootBar />
			{msg && <ShowMsg isError={msg?.text ? true : false} msgText={msg?.text} type={msg?.type} />}
		</>
	);
}

export default HomePage;
