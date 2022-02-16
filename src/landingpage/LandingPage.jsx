import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Acad from '../assets/academia-new.jpg';

const useStyles = makeStyles({
  date: {
    padding: '0px',
    backgroundColor: 'blue',
    color: 'yellow',
    width: '105px',
    fontSize: '14px',
    margin: '5px 0px',
  },
  DO: {
    padding: '0px',
    backgroundColor: 'blue',
    color: 'yellow',
    width: '90px',
    fontSize: '14px',
    margin: '5px 0px',
  },
  span1: {
    color: 'red',
  },
  span2: {
    color: 'white',
    backgroundColor: 'lightblue',
  },
  mid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '30px auto',
  },
});
const LandingPage = () => {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.date}>Date: 17-Feb-22</div>
      <div className={classes.DO}>Day Order:1 </div>
      <Typography
        variant="subtitle1"
        color="primary"
        sx={{ margin: '10px auto' }}
      >
        <span className={classes.span1}>Early symptoms of Covid-19 -</span> Sore
        throat, dry cough, fever, cold, loss of smell, loss of taste etc. If any
        of the above symptoms are noticed contact emergency helpline.
      </Typography>
      <Typography
        variant="subtitle1"
        color="primary"
        sx={{ margin: '10px auto' }}
      >
        Emergency Contact :-{' '}
        <span style={{ color: 'white', backgroundColor: 'lightblue' }}>
          044 - 2 7 4 5 2 7 2 7
        </span>
      </Typography>
      <Typography
        variant="subtitle1"
        color="primary"
        sx={{ margin: '10px auto' }}
      >
        Mobile: :-
        <span style={{ color: 'white', backgroundColor: 'lightblue' }}>
          9 7 8 9 8 8 8 4 5 3 / 9 9 4 0 0 9 6 0 1 2
        </span>
      </Typography>
      <div className={classes.mid}>
        <img src={Acad} alt="hat" />
        <Typography variant="h6" color="initial" sx={{ margin: '10px auto' }}>
          SRM Academia is the Official Student/Parent Portal of SRM's Faculty of
          Engineering and Technology which aims at providing a better experience
          to the students to access the academic web services. The portal is a
          gateway to your academic information such as attendance, internal
          marks, timetable, etc.
        </Typography>
      </div>
    </section>
  );
};

export default LandingPage;
