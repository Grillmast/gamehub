import React from 'react';
import { Typography, List, ListItem, ListItemText, } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        marginRight: theme.spacing(10),
        marginLeft: theme.spacing(-50),
    },
}));

const SideBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <Typography variant="h3">Discovery</Typography>
            <List>
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Browse" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Top Games" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="All Games" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="My Games" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Genres" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Platforms" />
                </ListItem>
            </List>
        </div>
    );
};

export default SideBar;