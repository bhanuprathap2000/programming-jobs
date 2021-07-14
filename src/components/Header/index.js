import React from 'react';

import { Box, Grid, Typography, Button } from '@material-ui/core';

export default ({ openNewJobModal }) => {
	return (
		<Box py={10} bgcolor="secondary.main" color="white">
			<Grid container justify="space-between">
				<Grid item xs={10}>
					<Box pl={10}>
						<Typography variant="h4">Programming Jobs</Typography>
					</Box>
				</Grid>
				<Grid item xs={2}>
					<Button
						onClick={openNewJobModal}
						variant="contained"
						color="primary"
						disableElevation>
						Post a Job
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};
