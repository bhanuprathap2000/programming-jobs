import React from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { differenceInMinutes } from 'date-fns';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		border: '1px solid #e8e8e8',
		cursor: 'pointer',
		transition: '0.3s',

		'&:hover': {
			boxShadow: '0 5px 25px rgba(0,0,0,0.1)',
			borderLeft: '6px solid #4D64E4',
		},
	},
	companyName: {
		fontSize: '13.5px',
		backgroundColor: theme.palette.primary.main,
		padding: theme.spacing(0.75),
		borderRadius: '5px',
		display: 'inline-block',
		fontWeight: 600,
	},
	skillChip: {
		margin: theme.spacing(0.5),
		padding: theme.spacing(0.75),
		fontSize: '14.5px',
		borderRadius: '5px',
		fontWeight: 600,
		backgroundColor: theme.palette.secondary.main,
		color: '#fff',
	},
}));

export default ({
	title,
	type,
	location,
	companyName,
	skills,
	postedOn,
	open,
}) => {
	const classes = useStyles();
	return (
		<Box p={2} className={classes.wrapper}>
			<Grid container alignItems="center">
				<Grid item xs>
					<Typography variant="subtitle1">{title}</Typography>
					<Typography variant="subtitle1" className={classes.companyName}>
						{companyName}
					</Typography>
				</Grid>

				<Grid item container xs>
					{skills.map((skill) => {
						return (
							<Grid key={skill} item className={classes.skillChip}>
								{skill}
							</Grid>
						);
					})}
				</Grid>
				<Grid item container direction="column" xs alignItems="flex-end">
					<Grid item>
						<Typography variant="caption">
							{differenceInMinutes(new Date(), postedOn)} min ago |{type} |
							{location}
						</Typography>
					</Grid>

					<Grid item>
						<Button onClick={open} variant="outlined">
							Check
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};
