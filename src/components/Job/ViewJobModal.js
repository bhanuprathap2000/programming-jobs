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
import { format } from 'date-fns';

const useStyles = makeStyles((theme) => ({
	info: {
		'& > *': {
			margin: '4px',
		},
	},
}));
export default ({ job, closeCheck }) => {
	const classes = useStyles();
	return (
		<Dialog fullWidth open={!!Object.keys(job).length}>
			<DialogTitle>
				<Box
					className={classes.info}
					display="flex"
					justifyContent="space-between"
					alignItems="center">
					{job.title} @ {job.companyName}
					<IconButton>
						<CloseIcon onClick={closeCheck} />
					</IconButton>
				</Box>
			</DialogTitle>

			<DialogContent>
				<Box>
					<Box className={classes.info}>
						<Typography variant="body2">
							{job.postedOn && format(job.postedOn, 'dd/MMM/yyyy HH:MM')}
						</Typography>
					</Box>
					<Box className={classes.info} display="flex">
						<Typography variant="caption">Job Type:</Typography>
						<Typography variant="body2">{job.type}</Typography>
					</Box>
					<Box className={classes.info} display="flex">
						<Typography variant="caption">Job Location:</Typography>
						<Typography variant="body2">{job.location}</Typography>
					</Box>
					<Box className={classes.info} display="flex">
						<Typography variant="caption">Description:</Typography>
						<Typography variant="body2">{job.description}</Typography>
					</Box>
					<Box className={classes.info} display="flex">
						<Typography variant="caption">Company Name:</Typography>
						<Typography variant="body2">{job.companyName}</Typography>
					</Box>
					<Box className={classes.info} display="flex">
						<Typography variant="caption">Company Website:</Typography>
						<Typography variant="body2">{job.companyUrl}</Typography>
					</Box>
					<Box className={classes.info} display="flex">
						<Typography variant="caption">Job Type:</Typography>
						<Typography variant="body2">{job.type}</Typography>
					</Box>
				</Box>
			</DialogContent>

			<DialogActions>
				<Button
					variant="outlined"
					component="a"
					href={job.link}
					target="_blank">
					Apply Here
				</Button>
			</DialogActions>
		</Dialog>
	);
};
