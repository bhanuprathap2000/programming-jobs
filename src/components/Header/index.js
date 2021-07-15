import React from 'react';

import { Box, Grid, Typography, Button } from '@material-ui/core';

export default ({ openNewJobModal }) => {
	return (
		<Box py={10} bgcolor="secondary.main" color="white">
			<Grid container justify="space-between">
				<Grid item md={10} xs={12}>
					<Typography variant="h5">
						{' '}
						<Box display="flex" justifyContent="flex-start" pl={8}>
							Programming Jobs
						</Box>
					</Typography>
				</Grid>
				<Grid item md={2} xs={12}>
					<Box display="flex" justifyContent="center">
						<Button
							onClick={openNewJobModal}
							variant="contained"
							color="primary"
							disableElevation>
							Post a Job
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
