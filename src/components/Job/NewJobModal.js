import React, { useState } from 'react';
import {
	Box,
	Grid,
	Select,
	MenuItem,
	FilledInput,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
	Button,
	IconButton,
	CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Close as CloseIcon } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
	skillChip: {
		margin: theme.spacing(0.5),
		padding: theme.spacing(0.75),
		fontSize: '14.5px',
		borderRadius: '5px',
		fontWeight: 600,
		border: `1px solid ${theme.palette.secondary.main}`,
		color: theme.palette.secondary.main,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
			color: '#fff',
		},
	},
	included: {
		backgroundColor: theme.palette.secondary.main,
		color: '#fff',
	},
}));

export default ({ postJob, newJobModal, closeJobModal }) => {
	const skills = [
		'Javascript',
		'React',
		'Node',
		'Vue',
		'Firebase',
		'MongoDB',
		'SQL',
	];

	const [loading, setLoading] = useState(false);

	const classes = useStyles();

	const initState = {
		title: '',
		type: 'Full Time',
		location: 'Remote',
		companyName: '',
		companyUrl: '',
		description: '',
		skills: [],
		link: '',
	};

	const [jobDetails, setJobDetails] = useState(initState);

	const handleChange = (e) => {
		e.persist();
		setJobDetails((oldState) => ({
			...oldState,
			[e.target.name]: e.target.value,
		}));
	};

	const addRemoveSkill = (skill) => {
		return jobDetails.skills.includes(skill)
			? setJobDetails((oldState) => ({
					...oldState,
					skills: oldState.skills.filter(
						(exsistingSkill) => exsistingSkill !== skill
					),
			  }))
			: setJobDetails((oldState) => ({
					...oldState,
					skills: oldState.skills.concat(skill),
			  }));
	};
	const handleSubmit = async () => {
		for (const field in jobDetails) {
			if (typeof jobDetails[field] === 'string' && !jobDetails[field]) return;
		}
		if (!jobDetails.skills.length) return;
		setLoading(true);
		postJob(jobDetails);
		resetModal();
	};

	const resetModal = () => {
		setJobDetails(initState);
		setLoading(false);
		closeJobModal();
	};

	return (
		<Dialog fullWidth open={newJobModal}>
			<DialogTitle>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					Post Job
					<IconButton onClick={resetModal}>
						<CloseIcon />
					</IconButton>
				</Box>
			</DialogTitle>
			<DialogContent>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<FilledInput
							onChange={handleChange}
							name="title"
							value={jobDetails.title}
							autoComplete="off"
							placeholder="Job Title*"
							disableUnderline
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<Select
							fullWidth
							name="type"
							value={jobDetails.type}
							onChange={handleChange}
							variant="filled"
							disableUnderline>
							<MenuItem value="Full Time">Full Time</MenuItem>
							<MenuItem value="Part Time">Part Time</MenuItem>
							<MenuItem value="Contract">Contract</MenuItem>
						</Select>
					</Grid>
					<Grid item xs={6}>
						<FilledInput
							onChange={handleChange}
							autoComplete="off"
							name="companyName"
							value={jobDetails.companyName}
							placeholder="Comapany Name*"
							disableUnderline
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<FilledInput
							onChange={handleChange}
							autoComplete="off"
							name="companyUrl"
							value={jobDetails.companyUrl}
							placeholder="Company Url*"
							disableUnderline
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<Select
							fullWidth
							name="location"
							value={jobDetails.location}
							onChange={handleChange}
							variant="filled"
							disableUnderline>
							<MenuItem value="Remote">Remote</MenuItem>
							<MenuItem value="In-Office">In-Office</MenuItem>
						</Select>
					</Grid>
					<Grid item xs={6}>
						<FilledInput
							onChange={handleChange}
							name="link"
							value={jobDetails.link}
							autoComplete="off"
							placeholder="Job Link*"
							disableUnderline
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<FilledInput
							onChange={handleChange}
							autoComplete="off"
							name="description"
							value={jobDetails.description}
							placeholder="Job Description*"
							disableUnderline
							fullWidth
							multiline
							rows={4}
						/>
					</Grid>
				</Grid>

				<Box mt={2}>
					<Typography>Skills*</Typography>
					<Box display="flex">
						{skills.map((skill) => {
							return (
								<Box
									onClick={() => {
										addRemoveSkill(skill);
									}}
									key={skill}
									className={`${classes.skillChip} ${
										jobDetails.skills.includes(skill) && classes.included
									}`}>
									{skill}
								</Box>
							);
						})}
					</Box>
				</Box>
			</DialogContent>
			<DialogActions>
				<Box
					color="red"
					width="100%"
					display="flex"
					justifyContent="space-between"
					alignItems="center">
					<Typography variant="caption">Required Fields*</Typography>
					<Button
						variant="contained"
						onClick={handleSubmit}
						disableElevation
						color="primary"
						disabled={loading}>
						{loading ? (
							<CircularProgress color="secondary" size={22} />
						) : (
							'Post Job'
						)}
					</Button>
				</Box>
			</DialogActions>
		</Dialog>
	);
};
