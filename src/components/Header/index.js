import React, { useContext } from 'react';

import { Box, Grid, Typography, Button } from '@material-ui/core';
import { UserContext } from '../../Providers/UserProvider';
import { signInWithGoogle, signOut } from '../../firebase/config';
import googleicon from '../../assets/googleicon.png';
export default ({ openNewJobModal }) => {
	const user = useContext(UserContext);
	return (
		<Box py={10} bgcolor="secondary.main" color="white">
			<Grid container justify="space-between" spacing={2}>
				<Grid item md={6} xs={12}>
					<Typography align="center" variant="h4" component="span">
						<Box my={1} display="flex" justifyContent="center" pl={1}>
							Programming Jobs
						</Box>
					</Typography>
				</Grid>
				{user ? (
					<Grid item md={6} container>
						<Grid item md={3} xs={12}>
							<Box my={1} display="flex" justifyContent="center">
								<Button
									onClick={openNewJobModal}
									variant="contained"
									color="primary"
									disableElevation>
									Post a Job
								</Button>
							</Box>
						</Grid>
						<Grid item md={3} xs={12}>
							<Box my={1} display="flex" justifyContent="center">
								<Button
									onClick={signOut}
									variant="contained"
									color="primary"
									disableElevation>
									Logout
								</Button>
							</Box>
						</Grid>
					</Grid>
				) : (
					<Grid item md={6} xs={12}>
						<Box my={1} display="flex" justifyContent="center">
							<Button
								onClick={signInWithGoogle}
								type="submit"
								variant="contained"
								color="primary"
								disableElevation>
								Login With Google
								<Box pl={2}>
									<img
										width="14px"
										height="14px"
										src={googleicon}
										alt="Google"
									/>
								</Box>
							</Button>
						</Box>
					</Grid>
				)}
			</Grid>
		</Box>
	);
};
