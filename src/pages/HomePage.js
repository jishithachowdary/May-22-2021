import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Statistics from '../components/Statistics';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import { Line, Doughnut } from 'react-chartjs-2';

export default function HomePage() {
  return (
    <React.Fragment>
      <Typography variant="h3">Dashboard</Typography>
      <Grid container alignItems="center" alignContent="center">
        <Grid>
          <Statistics
            color="#4e73df"
            heading="EARNINGS (MONTHLY)"
            subHeading="$40,000"
            icon={<AssignmentIcon fontSize="large" />}
          />
        </Grid>

        <Grid>
          <Statistics
            color="#1cc88a"
            heading="EARNINGS (ANNUAL)"
            subHeading="$215,000"
            icon={<AttachMoneyIcon fontSize="large" />}
          />
        </Grid>

        <Grid>
          <Statistics
            color="#36b9cc"
            heading="TASKS"
            type="progress"
            value={50}
            subHeading="50%"
            icon={<AssignmentTurnedInIcon fontSize="large" />}
          />
        </Grid>

        <Grid>
          <Statistics
            color="#f6c23e"
            heading="PEDING REQUESTS"
            subHeading="18"
            icon={<QuestionAnswerRoundedIcon fontSize="large" />}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" alignContent="center">
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: '10px' }}>
          <div className="card">
            <div className="card-header" style={{ color: '#4e73df' }}>
              <b>Earnings Overview</b>
            </div>
            <Line
              data={{
                labels: ['Jan', 'Mar', 'May', 'Jul', 'Sept', 'Nov'],
                datasets: [
                  {
                    label: 'Earnings Overview',
                    data: [
                      0,
                      10000,
                      5000,
                      15000,
                      10000,
                      20000,
                      15000,
                      25000,
                      20000,
                      30000
                    ],
                    fill: false,
                    backgroundColor: '#4e73df',
                    borderColor: '#4e73df',
                    tension: 0.4
                  }
                ]
              }}
              options={{
                maintainAspectRatio: true,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: '10px' }}>
          <div className="card">
            <div className="card-header" style={{ color: '#4e73df' }}>
              <b>Revenue Sources</b>
            </div>
            <Doughnut
              style={{ width: '100%', height: '100%' }}
              data={{
                labels: ['Social', 'Direct', 'Referral'],
                datasets: [
                  {
                    label: 'Revenue Sources',
                    data: [55, 30, 5],
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                    borderColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                    borderWidth: 1,
                    weight: 0.5
                  }
                ]
              }}
              options={{
                maintainAspectRatio: true,
                aspectRatio: 3,
                cutout: 40
              }}
            />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
