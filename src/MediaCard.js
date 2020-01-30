import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

class MediaCard extends Component {
    handleClick = () => {
        alert('hey');
    };
    render() {
        return (
            <Card style={{ maxWidth: 345 }}>
                <CardActionArea>
                    {/* <CardMedia
                        style={{ height: 140 }}
                        image="https://source.unsplash.com/random"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.date}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Dr. {this.props.doctor}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        onClick={this.handleClick}
                    >
                        Prescription
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default MediaCard;
