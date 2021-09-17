import React, { useState, useEffect } from 'react';
import theme from './theme/theme';
import {
	Box,
	CircularProgress,
	Grid,
	IconButton,
	ThemeProvider,
} from '@material-ui/core';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/Job/JobCard';
import NewJobModal from './components/Job/NewJobModal';
import { firebase, firestore } from '../src/firebase/config';
import { Close } from '@material-ui/icons';
import ViewJobModal from './components/Job/ViewJobModal';
import UserProvider from './Providers/UserProvider';

export default () => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [customSearch, setCustomSearch] = useState(false);
	const [newJobModal, setNewJobModal] = useState(false);
	const [viewJob, setViewJob] = useState({});

	const fectchJobs = async () => {
		setCustomSearch(false);
		setLoading(true);
		const snapShot = await firestore
			.collection('jobs')
			.orderBy('postedOn', 'desc')
			.get();

		const jobData = snapShot.docs.map((job) => {
			return {
				id: job.id,
				...job.data(),
				postedOn: job.data().postedOn.toDate(),
			};
		});
		setJobs(jobData);
		setLoading(false);
	};
	const fectchJobsCustom = async (jobSearch) => {
		setCustomSearch(true);
		setLoading(true);
		try {
			const snapShot = await firestore
				.collection('jobs')
				.orderBy('postedOn', 'desc')
				.where('location', '==', jobSearch.location)
				.where('type', '==', jobSearch.type)
				.get();

			const jobData = snapShot.docs.map((job) => {
				return {
					id: job.id,
					...job.data(),
					postedOn: job.data().postedOn.toDate(),
				};
			});
			setJobs(jobData);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const postJob = async (jobDetails) => {
		setLoading(true);
		await firestore.collection('jobs').add({
			...jobDetails,
			postedOn: firebase.firestore.FieldValue.serverTimestamp(),
		});
		fectchJobs();
	};

	useEffect(() => {
		fectchJobs();
	}, []);
	return (
		<div style={{ overflowX: 'hidden' }}>
			<ThemeProvider theme={theme}>
				<UserProvider>
					<Header openNewJobModal={() => setNewJobModal(true)} />
					<NewJobModal
						closeJobModal={() => setNewJobModal(false)}
						newJobModal={newJobModal}
						postJob={postJob}
					/>
					<ViewJobModal job={viewJob} closeCheck={() => setViewJob({})} />
					<Box mb={3}>
						<Grid container justify="center">
							<Grid item xs={10}>
								<SearchBar fectchJobsCustom={fectchJobsCustom} />
								{loading ? (
									<Box display="flex" justifyContent="center">
										<CircularProgress />
									</Box>
								) : (
									<>
										{customSearch && (
											<Box
												onClick={fectchJobs}
												my={2}
												display="flex"
												justifyContent="flex-end">
												<IconButton style={{ borderRadius: 0 }}>
													<Close size={20} />
													Custom Search
												</IconButton>
											</Box>
										)}

										{jobs.map((job) => {
											return (
												<JobCard
													open={() => setViewJob(job)}
													key={job.id}
													{...job}
												/>
											);
										})}
									</>
								)}
							</Grid>
						</Grid>
					</Box>
				</UserProvider>
			</ThemeProvider>
		</div>
	);
};
