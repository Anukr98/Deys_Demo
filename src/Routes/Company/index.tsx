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
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import colors from '../../Utils/colors';
import { Accordion, AccordionDetails, AccordionSummary, Button, Popover } from '@mui/material';
import { Speed, ExpandMore, List as ListIcon, Home, KeyboardArrowDown } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import { Link, useHistory } from 'react-router-dom';
import { VpnKey } from '@mui/icons-material'

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
    checked: boolean
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

    const [open, setOpen] = React.useState<State['open']>(false);
    const [editable, setEditable] = React.useState<State['checked']>(false)
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles()
    const history = useHistory()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logout = (_: React.SyntheticEvent) => {
        history.replace("/")
    }

    const popoverOpen = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined;

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
                <Link className = "flex items-center " to = '/dashboard'>
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
                        <div className = "flex justify-center mb-2"><Link to = "/company">Company</Link></div>
                        <div className = "flex justify-center mb-2">Branch</div>
                        <div className = "flex justify-center mb-2">Vendor</div>
                        <div className = "flex justify-center mb-2">Warehouse</div>
                        <div className = "flex justify-center mb-2">Store</div>
                        <div className = "flex justify-center mb-2">Product</div>
                        <div className = "flex justify-center mb-2">Unit</div>
                        <div className = "flex justify-center mb-2">Taxes</div>
                    </AccordionDetails>
                </Accordion>

                <div className = "flex justify-center bg-gray-400">
                    <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
                        {!open ? <ChevronRightIcon className = "text-gray-600" /> : <ChevronLeftIcon className = "text-gray-600" />}
                    </IconButton>
                </div>
            </List>
            {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon />
            </IconButton> */}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }} className = "py-3 px-2 md:px-4">
            <DrawerHeader />
            <div className = "bg-blue-100 p-2 rounded flex items-center flex-wrap">
                <Home className = "text-gray-600" fontSize = {"small"} />
                <Link to = '/dashboard'><p className = "font-semibold font-display text-xs md:text-base text-blue-600">Home</p></Link>
                <ChevronRightIcon />
                <p className = "font-semibold font-display text-xs md:text-base text-blue-600">Masters</p>
                <ChevronRightIcon />
                <p className = "font-semibold font-display text-lg md:text-xl">Company Profile</p>
            </div>
            <div className = "w-full mt-4 md:mt-8 flex flex-col">
                <div className="flex lg:items-center flex-col lg:flex-row lg:justify-between w-full">
                    <div className = "flex items-center">
                        <input type="checkbox" className = "mr-2" onChange = {e => setEditable(e.target.checked)} checked = {editable} />
                        <p className = "font-display text-sm md:text-lg">Enable this- To update company profile</p>
                    </div>
                    <div className = "mt-4 lg:mt-0">
                        <button className = "flex items-center justify-center bg-blue-300 w-full h-12 lg:px-8 rounded text-white-100">
                            <VpnKey />
                            <span className = "ml-2">Update Company Profile</span>
                        </button>
                    </div>
                </div>
                <div className = "mt-6 md:mt-10">
                    <div className = "flex flex-col lg:flex-row lg:items-center">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">Company Name</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full lg:w-1/2 border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Dey's Medical" readOnly = {!editable} />
                            <div className = "w-full lg:w-1/2 mt-2 lg:mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-end">
                                <div className = "w-full lg:w-2/12 lg:justify-end flex lg:pr-2"><p>Tag</p></div>
                                <input type="text" className = {`w-full lg:w-9/12 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 lg:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Tag" readOnly = {!editable} />
                            </div>
                        </div>
                    </div>
                    <div className = "flex flex-col lg:flex-row lg:items-center mt-8 lg:mt-12">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">Office Address</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Office Address" readOnly = {!editable} />
                        </div>
                    </div>
                    <div className = "flex flex-col lg:flex-row lg:items-center mt-8 lg:mt-12">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">Office Contact No.</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Office Contact no." readOnly = {!editable} />
                        </div>
                    </div>
                    <div className = "flex flex-col lg:flex-row lg:items-center mt-8 lg:mt-12">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">Registered Office Address</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Registered Office address" readOnly = {!editable} />
                        </div>
                    </div>
                    <div className = "flex flex-col lg:flex-row lg:items-center mt-8 lg:mt-12">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">Registered office Contact No.</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Registered Office Contact no." readOnly = {!editable} />
                        </div>
                    </div>

                    <div className = "flex flex-col lg:flex-row lg:items-center mt-8 lg:mt-12">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">Email</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full lg:w-1/3 border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Email" readOnly = {!editable} />
                            <div className = "w-full lg:w-1/2 mt-2 lg:mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-end">
                                <div className = "w-full lg:w-2/12 lg:justify-end flex lg:pr-2"><p>Website</p></div>
                                <input type="text" className = {`w-full lg:w-8/12 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 lg:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Website" readOnly = {!editable} />
                            </div>
                        </div>
                    </div>
                    <div className = "flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-8">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">PAN No.</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full lg:w-1/3 border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "PAN" readOnly = {!editable} />
                            <div className = "w-full lg:w-1/2 mt-2 lg:mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-end">
                                <div className = "w-full lg:w-2/12 lg:justify-end flex lg:pr-2"><p>GST</p></div>
                                <input type="text" className = {`w-full lg:w-8/12 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 lg:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "GST" readOnly = {!editable} />
                            </div>
                        </div>
                    </div>
                    <div className = "flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-8">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">CIN No.</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full lg:w-1/3 border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "CIN" readOnly = {!editable} />
                            <div className = "w-full lg:w-1/2 mt-2 lg:mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-end">
                                <div className = "w-full lg:w-2/12 lg:justify-end flex lg:pr-2"><p>WBSST</p></div>
                                <input type="text" className = {`w-full lg:w-8/12 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 lg:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "WBSST" readOnly = {!editable} />
                            </div>
                        </div>
                    </div>
                    <div className = "flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-8">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">VAT No.</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full lg:w-1/3 border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "VAT" readOnly = {!editable} />
                            <div className = "w-full lg:w-1/2 mt-2 lg:mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-end">
                                <div className = "w-full lg:w-2/12 lg:justify-end flex lg:pr-2"><p>CST</p></div>
                                <input type="text" className = {`w-full lg:w-8/12 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 lg:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "CST" readOnly = {!editable} />
                            </div>
                        </div>
                    </div>
                    <div className = "flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-8">
                        <div className = "w-full lg:w-1/4 lg:justify-end flex lg:pr-2">Status</div>
                        <div className = "flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">
                            <input type="text" className = {`mt-2 lg:mt-0 w-full lg:w-1/3 border border-solid border-gray-400 p-2 rounded focus:outline-none ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Status" readOnly = {!editable} />
                            <div className = "w-full lg:w-1/2 mt-2 lg:mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-end">
                                <div className = "w-full lg:w-2/12 lg:justify-end flex lg:pr-2"><p>Lock Status</p></div>
                                <input type="text" className = {`w-full lg:w-8/12 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 lg:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Lock Status" readOnly = {!editable} />
                            </div>
                        </div>
                    </div>
                    {/* <div className = "flex flex-col md:flex-row">
                        <div className = "w-full md:w-3/4 flex flex-col md:flex-row md:items-center">
                            <div className = "w-full md:w-1/6 flex md:justify-end md:pr-4"><p>Company Name</p></div>
                            <input type="text" className = {`w-full md:w-4/6 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 md:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Dey's Medical" readOnly = {!editable} />
                        </div>
                        <div className = "md:w-1/4 flex justify-end mt-2 md:mt-0">
                            <div className = "w-full md:w-3/4 flex flex-col md:flex-row md:items-center">
                                <div className = "w-full md:w-1/6 flex md:justify-end md:pr-4"><p>Tag</p></div>
                                <input type="text" className = {`w-full md:w-4/6 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 md:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Tag"  readOnly = {!editable}/>
                            </div>
                        </div>
                    </div>
                    <div className = "flex flex-col md:flex-row mt-8 md:mt-12">
                        <div className = "w-full md:w-3/4 flex flex-col md:flex-row md:items-center">
                            <div className = "w-full md:w-1/6 flex md:justify-end md:pr-4"><p>Office Address</p></div>
                            <input type="text" className = {`w-full md:w-4/6 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 md:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Office Address" readOnly = {!editable} />
                        </div>
                    </div>
                    <div className = "flex flex-col md:flex-row mt-8 md:mt-12">
                        <div className = "w-full md:w-3/4 flex flex-col md:flex-row md:items-center">
                            <div className = "w-full md:w-1/6 flex md:justify-end md:pr-4"><p>Office Contact No.</p></div>
                            <input type="text" className = {`w-full md:w-4/6 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 md:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Office Contact no." readOnly = {!editable} />
                        </div>
                    </div>
                    <div className = "flex flex-col md:flex-row mt-8 md:mt-12">
                        <div className = "w-full md:w-3/4 flex flex-col md:flex-row md:items-center">
                            <div className = "w-full md:w-1/6 flex md:justify-end md:pr-4"><p>Registered Office Address</p></div>
                            <input type="text" className = {`w-full md:w-4/6 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 md:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Registered office address" readOnly = {!editable} />
                        </div>
                    </div>
                    <div className = "flex flex-col md:flex-row mt-8 md:mt-12">
                        <div className = "w-full md:w-3/4 flex flex-col md:flex-row md:items-center">
                            <div className = "w-full md:w-1/6 flex"><p>Registered Office Contact No.</p></div>
                            <input type="text" className = {`w-full md:w-4/6 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 md:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Registered office address" readOnly = {!editable} />
                        </div>
                    </div>
                    <div className = "flex flex-col md:flex-row mt-8 md:mt-12">
                        <div className = "w-full md:w-3/4 flex flex-col md:flex-row md:items-center">
                            <div className = "w-full md:w-1/6 flex md:justify-end md:pr-4"><p>Company Name</p></div>
                            <input type="text" className = {`w-full md:w-4/6 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 md:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Dey's Medical" readOnly = {!editable} />
                        </div>
                        <div className = "md:w-1/4 flex justify-end mt-2 md:mt-0">
                            <div className = "w-full md:w-3/4 flex flex-col md:flex-row md:items-center">
                                <div className = "w-full md:w-1/6 flex md:justify-end md:pr-4"><p>Tag</p></div>
                                <input type="text" className = {`w-full md:w-4/6 border border-solid border-gray-400 p-2 rounded focus:outline-none mt-2 md:mt-0 ${!editable && "bg-gray-200 cursor-not-allowed"}`} placeholder = "Tag"  readOnly = {!editable}/>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Box>
    </Box>
  );
}

export default MiniDrawer