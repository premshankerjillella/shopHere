import React from 'react'
import './signup.css'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

function Signup() {
    return (
        <div>
            <Container>
                <Grid container justify="center">
                    <div>
                        <Grid>
                            <TextField
                                variant="filled"
                                label="Email"
                                fullWidth
                            />
                        </Grid>
                    </div>
                    <div>
                        <Grid>
                            <TextField
                                label="Password"
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}

export default Signup;