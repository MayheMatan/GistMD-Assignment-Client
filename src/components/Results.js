import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop: 20,
      textAlign: "center",
      margin: "0 auto"
    },
    media: {
      height: 340,
    },
  });
  

const Results = props => {
    const classes = useStyles();
    const [patient, setPatient] = useState({})
    
    useEffect(() => {
        async function fetchPatient() {
            const retrivedPatient = await axios.get(`http://localhost:5000/patient/${props.match.params.id}`);
            setPatient(retrivedPatient)
        }
        fetchPatient()
    }, [props.match.params.id])

    return patient.data ? (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={patient.data.gender === "male" ? "https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos2001/yupiramos200130717.jpg" : "https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos2001/yupiramos200131472.jpg"}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thank you for using GistMD
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>Gender: </strong> {patient.data.gender}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>Age: </strong> {patient.data.age}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>Operation: </strong> {patient.data.operation}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>Language: </strong> {patient.data.language}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    ) : (
        null
    )
}

export default Results