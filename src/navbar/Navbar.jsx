import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LaptopIcon from '@mui/icons-material/Laptop';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
  const [ARopen, setAROpen] = React.useState(false);
  const [studopen, setStuopen] = React.useState(false);
  const [Uttopen, setUttopen] = React.useState(false);
  const [NRopen, setNRopen] = React.useState(false);
  const [TTopen, setTTopen] = React.useState(false);
  const [SSRopen, setSSRopen] = React.useState(false);
  const ARhandleClick = () => {
    setAROpen(!ARopen);
  };
  const StudhandleClick = () => {
    setStuopen(!studopen);
  };
  const UtthandleClick = () => {
    setUttopen(!Uttopen);
  };
  const NRhandleclick = () => {
    setNRopen(!NRopen);
  };
  const TThandleclick = () => {
    setTTopen(!TTopen);
  };
  const SSRhandleclick = () => {
    setSSRopen(!SSRopen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          sa9384
          <AccountCircleIcon sx={{ marginLeft: '10px' }} />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: `0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2) `,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          variant="h6"
          color="white"
          align="center"
          style={{
            backgroundColor: '#1976d2',
            minHeight: '64px',
            paddingTop: '18px',
          }}
        >
          Academia-Academic
        </Typography>
        <Divider />
        <List>
          {['Circular', 'Welcome', 'Student Profile'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon sx={{ margin: '0px', minWidth: '30px' }}>
                <LaptopIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {/* mapped ones */}
          {/* try dropdown */}
          <ListItemButton onClick={ARhandleClick}>
            <ListItemIcon sx={{ margin: '0px', minWidth: '30px' }}>
              <LaptopIcon />
            </ListItemIcon>
            <ListItemText primary="Academic Reports" />
            {ARopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={ARopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Academic Planner" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Academic Planner 2021" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* end */}
          {/* student */}
          <ListItemButton onClick={StudhandleClick}>
            <ListItemIcon sx={{ margin: '0px', minWidth: '30px' }}>
              <LaptopIcon />
            </ListItemIcon>
            <ListItemText primary="Student Reports" />
            {studopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={studopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Master" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Planner" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* end of student */}
          {/* UTT */}
          <ListItemButton onClick={UtthandleClick}>
            <ListItemIcon sx={{ margin: '0px', minWidth: '30px' }}>
              <LaptopIcon />
            </ListItemIcon>
            <ListItemText primary="Unified Time Table" />
            {Uttopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={Uttopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Master" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Planner" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* end of utt */}
          {/* course ffedback */}
          <ListItem button key={'New Regulation'}>
            <ListItemIcon sx={{ margin: '0px', minWidth: '30px' }}>
              <LaptopIcon />
            </ListItemIcon>
            <ListItemText primary={'New Regulation'} />
          </ListItem>
          {/* end of course ffedback */}
          {/* new regulation */}
          <ListItemButton onClick={NRhandleclick}>
            <ListItemIcon sx={{ margin: '0px', minWidth: '30px' }}>
              <LaptopIcon />
            </ListItemIcon>
            <ListItemText primary="Student Reports" />
            {NRopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={NRopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Master" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Planner" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* end of new reg */}
          {/* my tt and att */}
          <ListItemButton onClick={TThandleclick}>
            <ListItemIcon sx={{ margin: '0px', minWidth: '30px' }}>
              <LaptopIcon />
            </ListItemIcon>
            <ListItemText primary="My Time Table & Attendance" />
            {TTopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={TTopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Master" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Planner" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* end of my tt and att */}
          {/* SSR */}
          <ListItemButton onClick={SSRhandleclick}>
            <ListItemIcon sx={{ margin: '0px', minWidth: '30px' }}>
              <LaptopIcon />
            </ListItemIcon>
            <ListItemText primary="Student Service Requests" />
            {SSRopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={SSRopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Master" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Student Planner" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* end of ssr */}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
