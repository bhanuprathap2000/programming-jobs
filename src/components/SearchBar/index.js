import React, { useState } from 'react';
import {
	Box,
	Select,
	MenuItem,
	Button,
	CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	wrapper: {
		backgroundColor: '#fff',
		display: 'flex',
		boxShadow: '0px 1px 5px rgba(0,0,0,0.1)',
		borderRadius: '5px',

		'& > *': {
			flex: 1,
			height: '45px',
			margin: '8px',
		},
	},
});

export default ({ fectchJobsCustom }) => {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const [jobSearch, setJobSearch] = useState({
		type: 'Full Time',
		location: 'Remote',
	});
	const handleChange = (e) => {
		e.persist();
		setJobSearch((oldState) => ({
			...oldState,
			[e.target.name]: e.target.value,
		}));
	};

	const search = async () => {
		setLoading(true);
		await fectchJobsCustom(jobSearch);
		setLoading(false);
	};

	return (
		<Box p={2} mt={-5} mb={2} className={classes.wrapper}>
			<Select
				name="type"
				value={jobSearch.type}
				onChange={handleChange}
				variant="filled"
				disableUnderline>
				<MenuItem value="Full Time">Full Time</MenuItem>
				<MenuItem value="Part Time">Part Time</MenuItem>
				<MenuItem value="Contract">Contract</MenuItem>
			</Select>
			<Select
				name="location"
				value={jobSearch.location}
				onChange={handleChange}
				variant="filled"
				disableUnderline>
				<MenuItem value="Remote">Remote</MenuItem>
				<MenuItem value="In-Office">In-Office</MenuItem>
			</Select>
			<Button
				onClick={search}
				disabled={loading}
				variant="contained"
				color="primary"
				disableElevation>
				{loading ? <CircularProgress color="secondary" size={22} /> : 'Search'}
			</Button>
		</Box>
	);
};
