import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IStudentCardProps from '../../shared/IStudentCardProps';
import './StudentCard.css';

const useStyles = makeStyles({
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

function StudentCard(props: IStudentCardProps) {
    const classes = useStyles();

    return (
        <div>
            <Card className="MediaCardContainer">
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        ID: {props.studentId}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.firstName} {props.lastName}
                    </Typography>
                    <Typography className={classes.pos} component="h2">
                        {props.timeCreated}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Email: {props.emailAddress}<br />
                        Phone Number: {props.phoneNumber}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default StudentCard;