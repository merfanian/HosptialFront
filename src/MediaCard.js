import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import SimpleDialog from '@material-ui/core/Dialog';
import AlertDialog from './AlertDialog';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

class MediaCard extends Component {
    render() {
        return (
            <div style={{ padding: 10 }}>
                <Card
                    style={{ width: 500, boxShadow: '3px 3px 3px 3px #9E9E9E' }}
                >
                    <CardActionArea>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
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
                        <AlertDialog medicine={['1', '2']}></AlertDialog>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default MediaCard;
