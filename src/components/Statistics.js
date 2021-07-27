import { Card, CardHeader, makeStyles, Grid } from '@material-ui/core';
import React from 'react';

export default function Statistics(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      margin: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(
        2
      )}px 0px`,
      width: '350px',
      '& .MuiTypography-h5': {
        fontSize: '20px'
      }
    },
    iconPlacement: {
      padding: theme.spacing(3),
      marginLeft: theme.spacing(3),
      opacity: '0.6'
    },
    textColor: {
      color: `${props.color}`
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <Card
        className={classes.root}
        style={{ borderLeft: `4px solid ${props.color}` }}
      >
        <Grid container>
          {props.type === 'progress' ? (
            <Grid item sm>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  placeItems: 'stretch'
                }}
              >
                <CardHeader
                  className={classes.textColor}
                  title={props.heading}
                  subheader={props.subHeading}
                />
                <span
                  className="progress"
                  style={{ marginTop: '44px', marginLeft: '-68px' }}
                >
                  <div
                    className=" progress-bar w-50"
                    role="progressbar"
                    aria-valuenow={props.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </span>
              </div>
            </Grid>
          ) : (
            <Grid item sm>
              <CardHeader
                className={classes.textColor}
                title={props.heading}
                subheader={props.subHeading}
              />
            </Grid>
          )}
          <Grid item className={classes.iconPlacement}>
            {props.icon}
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
}
