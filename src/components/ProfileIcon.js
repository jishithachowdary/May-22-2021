import { Hidden, IconButton, ListItem, makeStyles } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import React from 'react';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  listItem: {
    '&:hover': {
      backgroundColor: '#f2f2f2',
      cursor: 'pointer'
    }
  }
}));

export default function ProfileIcon(props) {
  const classes = useStyles();

  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {popupState => (
          <div>
            <IconButton size="small" {...bindTrigger(popupState)}>
              <ListItem>
                <Hidden smDown>
                  <span style={{ paddingRight: '20px' }}>{props.name}</span>
                </Hidden>
                <Avatar alt="jishitha chowdary nemani" src="" />
              </ListItem>
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
                    <Grid>
                      <List style={{ padding: '20px' }}>
                        <ListItem divider className={classes.listItem}>
                          <ListItemText primary="Profile" />
                        </ListItem>

                        {/*<ListItem divider className={classes.listItem}>
                                                    <ListItemText primary="Settings" />
                                                </ListItem> */}

                        <ListItem divider className={classes.listItem}>
                          <ListItemText primary="Log out" />
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
    </div>
  );
}
