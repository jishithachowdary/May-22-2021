import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React from 'react';

const postHeading = title => {
  return (
    <Typography variant="h4" color="primary">
      {title}
    </Typography>
  );
};

function PostListViewItem({ title, postSubheading }) {
  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemText
            primary={postHeading(title)}
            secondary={postSubheading}
          />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default PostListViewItem;
