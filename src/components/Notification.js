import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Grid, IconButton, ListItemIcon, Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem, Badge } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

export default function Notification(props) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <IconButton {...bindTrigger(popupState)}>
            <Badge badgeContent={props.badgeNumber} color={props.badgeColor}>
              {props.icon}
            </Badge>
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Box>
              <Paper>
                <Grid container>
                  <Grid item>
                    <Typography
                      color={props.color}
                      style={{
                        backgroundColor: `${props.color}`,
                        color: 'white',
                        paddingRight: '110px',
                        paddingLeft: '10px'
                      }}
                      variant="h6"
                      align="middle"
                    >
                      {props.title}
                    </Typography>

                    <List>
                      <ListItem divider>
                        <ListItemIcon>
                          <DescriptionIcon fontSize="small" />
                        </ListItemIcon>

                        <ListItemText
                          primary="Notification 1"
                          secondary="sub text"
                        />
                      </ListItem>

                      <ListItem divider>
                        <ListItemIcon>
                          <DescriptionIcon fontSize="small" />
                        </ListItemIcon>

                        <ListItemText
                          primary="Notification 2"
                          secondary="sub text"
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemIcon>
                          <DescriptionIcon fontSize="small" />
                        </ListItemIcon>

                        <ListItemText
                          primary="Notification 3"
                          secondary="sub text"
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
