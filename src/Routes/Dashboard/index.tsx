import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faLeaf } from '@fortawesome/free-solid-svg-icons';
import colors from '../../Utils/colors';
import { Accordion, AccordionDetails, AccordionSummary, Button, InputAdornment, Popover, TextField, Tooltip } from '@mui/material';
import { Speed, ExpandMore, List as ListIcon, Help, Check, Replay, KeyboardArrowDown } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import { Link, useHistory } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  background: "#3a393a"
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(13)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(20)} + 1px)`,
  },
  background: "#3a393a"
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
  

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface State {
    open: boolean,
}

const useStyles = makeStyles({
    root: {
        background: "#3a393a",
        color: "white",
        "&:hover": {
            background: "#f0dc82",
            color: "black"
        },
        "&:hover > span": {
            color: "red"
        }
    },
})

const MiniDrawer: React.FC = () => {

    const history = useHistory()

    const [open, setOpen] = React.useState<State['open']>(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const popoverOpen = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined;

    const logout = (_: React.SyntheticEvent) => {
        history.replace("/")
    }

  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            <Toolbar className = "flex items-center justify-between bg-gray-600">
                <Link className = {`flex items-center ${open && "hidden"}`} to = '/dashboard'>
                    <FontAwesomeIcon icon = {faFlask} color = {colors.ACCENT_GREEN} className = "text-xl md:text-4xl mr-2 md:mr-4" />
                    <div><p className = "text-green-300 font-display text-xl md:text-4xl">Dey's Medical</p></div>
                </Link>
                <div className = {`w-1/2 md:w-1/4 flex items-center justify-end ${open && "hidden"}`}>
                    <Button
                        aria-describedby={id}
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        className = "flex items-center"
                    >
                        <span>{`Welcome Amit`}</span>
                        <KeyboardArrowDown />
                    </Button>
                    <Popover
                        id = {id}
                        open={popoverOpen}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <div className = "hover:bg-yellow-200 cursor-pointer w-40 md:w-52 p-4">Profile</div>
                        <div onClick = {logout} className = "hover:bg-yellow-200 cursor-pointer p-4"><p>LOGOUT</p></div>
                    </Popover>
                </div>
            </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
            <DrawerHeader className = "bg-gray-600">
                <Link className = "flex items-center" to = '/dashboard'>
                    <FontAwesomeIcon icon = {faFlask} color = {colors.ACCENT_GREEN} className = "text-xl md:text-2xl mr-2 md:mr-4" />
                    <div><p className = "text-green-300 font-display text-xl md:text-2xl">Dey's Medical</p></div>
                </Link>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem>
                    <Speed className = "text-green-300 mr-4" />
                    { open && <Typography className = "text-white-100 font-display font-semibold">Dashboard</Typography> }
                </ListItem>
                <Accordion classes = {{ root: classes.root }}>
                    <AccordionSummary
                        expandIcon={open ? <ExpandMore className = "text-white-100 hover:text-black" /> : null}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className = "flex items-center">
                            <ListIcon className = "text-green-300 mr-4 hover:text-black" />
                            { open && <Typography className = "text-white-100 font-display hover:text-black">Store</Typography>}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>item1</div>
                    </AccordionDetails>
                </Accordion>
                <Accordion classes = {{ root: classes.root }}>
                    <AccordionSummary
                        expandIcon={open ? <ExpandMore className = "text-white-100 hover:text-black" /> : null}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className = "flex items-center">
                            <ListIcon className = "text-green-300 mr-4 hover:text-black" />
                            { open && <Typography className = "text-white-100 font-display hover:text-black">Production</Typography>}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>item1</div>
                    </AccordionDetails>
                </Accordion>
                <Accordion classes = {{ root: classes.root }}>
                    <AccordionSummary
                        expandIcon={open ? <ExpandMore className = "text-white-100 hover:text-black" /> : null}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className = "flex items-center">
                            <ListIcon className = "text-green-300 mr-4 hover:text-black" />
                            { open && <span className = "text-white-100 font-display hover:text-black">Master</span>}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className = "flex justify-center"><Link to = "/company">Company</Link></div>
                        <div className = "flex justify-center">Branch</div>
                        <div className = "flex justify-center">Vendor</div>
                        <div className = "flex justify-center">Warehouse</div>
                        <div className = "flex justify-center">Store</div>
                        <div className = "flex justify-center">Product</div>
                        <div className = "flex justify-center">Unit</div>
                        <div className = "flex justify-center">Taxes</div>
                    </AccordionDetails>
                </Accordion>

                <div className = "flex justify-center bg-gray-400">
                    <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
                        {!open ? <ChevronRightIcon className = "text-gray-600" /> : <ChevronLeftIcon className = "text-gray-600" />}
                    </IconButton>
                </div>
            </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }} className = "py-3 px-2 md:px-4">
            <DrawerHeader />
            <div className = "bg-blue-100 p-2 rounded"><p className = "font-semibold font-display">Home</p></div>
            <div className = "w-full mt-4 md:mt-8 flex items-center justify-center">
                <div className = "w-10/12 md:w-4/5">
                    <form>
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className = "md:w-2/12 md:mb-0 mb-2 md:flex md:justify-end md:pr-8"><p>Text Field</p></div>
                            <input type="text" placeholder = "Username" className = "w-8/12 md:w-6/12 focus:outline-none border border-solid border-gray-400 rounded p-2" />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:mt-8 mt-4">
                            <div className = "md:w-2/12 md:mb-0 mb-2 md:flex md:justify-end md:pr-8"><p>Full Length</p></div>
                            <input type="text" placeholder = "Text Field" className = "w-full md:w-10/12 focus:outline-none border border-solid border-gray-400 rounded p-2" />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:mt-8 mt-4">
                            <div className = "md:w-2/12 md:mb-0 mb-2 md:flex md:justify-end md:pr-8"><p>Password Field</p></div>
                            <input type="password" placeholder = "Password" className = "w-8/12 md:w-6/12 focus:outline-none border border-solid border-gray-400 rounded p-2" />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:mt-8 mt-4">
                            <div className = "md:w-2/12 md:mb-0 mb-2 md:flex md:justify-end md:pr-8"><p>Readonly Field</p></div>
                            <input
                                type="text"
                                placeholder = "This field is readonly"
                                className = {`w-8/12 md:w-6/12 focus:outline-none border border-solid border-gray-400 rounded p-2 bg-gray-200 cursor-not-allowed`}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:mt-8 mt-4">
                            <div className = "md:w-2/12 md:mb-0 mb-2 md:flex md:justify-end md:pr-8"><p>Relative Sizing</p></div>
                            <input type="text" placeholder = ".input-sm" className = "w-4/12 md:w-3/12 focus:outline-none border border-solid border-gray-400 rounded p-2" />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:mt-8 mt-4">
                            <div className = "md:w-2/12 md:mb-0 mb-2 md:flex md:justify-end md:pr-8"><p>Grid Sizing</p></div>
                            <input type="text" placeholder = ".col-xs-1" className = "w-2/12 md:w-1/12 focus:outline-none border border-solid border-gray-400 rounded p-2" />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:mt-8 mt-4">
                            <div className = "md:w-2/12 md:mb-0 mb-2 md:flex md:justify-end md:pr-8"><p>Input with icon</p></div>
                            <div className="flex md:flex-row flex-col md:items-center">
                                <TextField
                                    id="input-with-icon-textfield"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <FontAwesomeIcon icon = {faLeaf} color = {"skyblue"} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                />
                                <div className = "mt-6 md:mt-0 md:ml-12">
                                    <TextField
                                        id="input-with-icon-textfield"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    <FontAwesomeIcon icon = {faLeaf} color = {"green"} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:mt-8 mt-4">
                            <div className = "md:w-2/12 md:mb-0 mb-2 md:flex md:justify-end md:pr-8"><p>Tooltip and help button</p></div>
                            <input type="text" placeholder = "Tooltip on hover" className = "w-8/12 md:w-3/12 focus:outline-none border border-solid border-gray-400 rounded p-2" />
                            <div className = "md:block hidden ml-2">
                                <Tooltip title="Help">
                                    <IconButton>
                                        <Help className = "text-blue-500" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:mt-8 mt-4">
                            <div className = "md:w-2/12 md:mb-0 mb-2 md:flex md:justify-end md:pr-8"><p>Tag Input</p></div>
                            <input type="text" placeholder = "Tag Input" className = "w-8/12 md:w-3/12 focus:outline-none border border-solid border-gray-400 rounded p-2" />
                        </div>
                    </form>
                </div>
            </div>
            <div className = "bg-gray-100 p-2 rounded mt-8 md:mt-12 flex items-center justify-center py-6 md:flex-row flex-col text-white-100 md:justify-evenly">
                <button className = "bg-blue-300 flex items-center h-12 rounded w-full mb-4 md:mb-0 justify-center md:w-1/5">
                    <Check />
                    <p>Submit</p>
                </button>
                <button className = "bg-gray-300 flex items-center h-12 rounded w-full md:mb-0 justify-center md:w-1/5">
                    <Replay />
                    <p>Reset</p>
                </button>
            </div>
        </Box>
    </Box>
  );
}

export default MiniDrawer