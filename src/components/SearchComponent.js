import { InputBase, Button, makeStyles, Popover } from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  buttonIcon: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  searchInput: {
    opacity: '0.6',
    padding: '0px 0px 0px 8px',
    '&:hover': {
      backgroundColor: '#e0dede'
    }
  }
}));

export default function SearchComponent() {
  const classes = useStyles();

  const [mobileOpen, setMoileOpen] = useState(false);

  const handleSearchIcon = () => {
    setMoileOpen(!mobileOpen);
  };

  return (
    <React.Fragment>
      <Hidden xsDown>
        <InputBase
          className={classes.searchInput}
          placeholder="Search for"
          endAdornment={
            <Button
              size="small"
              className={classes.buttonIcon}
              variant="contained"
            >
              <SearchIcon />
            </Button>
          }
        />
      </Hidden>
      <Hidden smUp>
        <IconButton>
          <SearchIcon fontSize="medium" onClick={handleSearchIcon} />
        </IconButton>
        <Popover
          open={mobileOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 70, left: 0 }}
          onClose={handleSearchIcon}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        >
          {' '}
          <InputBase
            className={classes.searchInput}
            placeholder="Search for"
            endAdornment={
              <Button
                size="small"
                className={classes.buttonIcon}
                variant="contained"
              >
                <SearchIcon />
              </Button>
            }
          />
        </Popover>
      </Hidden>
    </React.Fragment>
  );
}
