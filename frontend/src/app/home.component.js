import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Avatar} from "@mui/material";
import {Card} from "@mui/material";
import {Grid} from "@mui/material";

function HomeComponent(props) {

    if (props.isLoading) {
        return <p className="loading">Loading...</p>
    }
    return (
        <Grid container spacing={2}>
            {props.players?.map((player, index) => (
                <Grid item xs={4}>
                    <Card sx={{maxWidth: 500}}>
                        <CardContent key={index}>
                            <div >
                                <Avatar className="avatar-player"
                                    sx={{width: 100, height: 100}}
                                    src={player.picture}>
                                </Avatar>
                            </div>
                            <Typography class="name-player" gutterBottom variant="h5" component="div">
                                <b>{player.firstname} {player.lastname}</b>
                            </Typography>
                            <Typography class="rank-player" gutterBottom variant="h6" component="div">
                                <b>Rank: {player.data.rank}</b>
                            </Typography>
                            <h4>STATS</h4>
                            <Typography className="data-player" variant="body2" color="text.secondary">
                                <p>Points: {player.data.points}</p>
                                <p>Height: {player.data.height}</p>
                                <p>Weight: {player.data.weght}</p>
                                <p>Age: {player.data.age}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}

        </Grid>
    )
}

export default HomeComponent;