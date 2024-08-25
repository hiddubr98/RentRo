// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

// const Dashboard = () => {
//   return (
//       <div style={styles.dashboard}>
//         <h1 style={styles.header}>Dashboard</h1>
//         <div style={styles.dashboardContainer}>
//           <div style={styles.leftPanel}>
//             <div style={styles.panel}>
//               <h2>This Week's Income:</h2>
//               <h3>$1250</h3>
//               <ul>
//                 <li>item #1 sold: 50</li>
//                 <li>item #2 sold: 10</li>
//                 <li>item #3 sold: 5</li>
//                 <li>item #5 sold: 7</li>
//                 <li>total items sold: 72</li>
//               </ul>
//             </div>
//             <div style={styles.panel}>
//               <h2>Recent Orders</h2>
//               <ul>
//                 <li>Mr. Daniels | Order #: 1293078 | Status: Completed</li>
//                 <li>Mr. Tommy | Order #: 1293079 | Status: Completed</li>
//                 <li>Mr. Vangal | Order #: 1293080 | Status: Inactive</li>
//                 <li>Mr. Donny | Order #: 1293081 | Status: In Progress</li>
//                 <li>Mr. Mark | Order #: 1293082 | Status: Denied</li>
//               </ul>
//             </div>
//           </div>
//           <div style={styles.rightPanel}>
//             <div style={styles.panel}>
//               <h2>Monthly Overview</h2>
//               <div style={styles.chartPlaceholder}>[Chart]</div>
//             </div>
//             <div style={styles.panel}>
//               <h2>Recent Comments</h2>
//               <div>Mark J Hamilton: Lorem ipsum dolor sit amet...</div>
//               <div>Thomas Gold: Lorem ipsum dolor sit amet...</div>
//             </div>
//             <div style={styles.panel}>
//               <h2>Contacts</h2>
//               <ul>
//                 <li>Name of contact | name@email.com | +1256812312890</li>
//                 <li>Name of contact | name@email.com | +1256812312890</li>
//                 <li>Name of contact | name@email.com | +1256812312890</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };


// const styles = {
//   container: {
//     display: 'flex',
//     fontFamily: 'Arial, sans-serif',
//     height: '100vh',
//     backgroundColor: '#f4f4f4',
//   },
//   sidebar: {
//     width: '250px',
//     backgroundColor: '#2c3e50',
//     color: '#ecf0f1',
//     padding: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   profilePicContainer: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   profilePic: {
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//   },
//   username: {
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   nav: {
//     listStyle: 'none',
//     padding: 0,
//     flexGrow: 1,
//   },
//   navItem: {
//     display: 'block',
//     color: '#ecf0f1',
//     padding: '10px 0',
//     textDecoration: 'none',
//     borderBottom: '1px solid #34495e',
//   },
//   navItemActive: {
//     display: 'block',
//     color: '#2c3e50',
//     backgroundColor: '#ecf0f1',
//     padding: '10px 0',
//     textDecoration: 'none',
//     borderBottom: '1px solid #34495e',
//   },
//   content: {
//     flex: 1,
//     padding: '20px',
//   },
//   header: {
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   dashboardContainer: {
//     display: 'flex',
//   },
//   leftPanel: {
//     flex: 1,
//     marginRight: '20px',
//   },
//   rightPanel: {
//     flex: 2,
//   },
//   panel: {
//     backgroundColor: '#ecf0f1',
//     padding: '20px',
//     borderRadius: '5px',
//     marginBottom: '20px',
//   },
//   chartPlaceholder: {
//     height: '200px',
//     backgroundColor: '#bdc3c7',
//     textAlign: 'center',
//     lineHeight: '200px',
//   },
//   profile: {
//     padding: '20px',
//   },
// };

// export default Dashboard;



import React from 'react';
import { Container, Grid, Paper, Typography, Box, Divider, Avatar, Button, TextField, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ChatIcon from '@mui/icons-material/Chat';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '170px',
    // backgroundColor:'#C8C8C8'
  },
  sidebar: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px',
    height: '100vh',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  },
  avatar: {
    width: '60px',
    height: '60px',
    marginRight: '10px',
  },
  navItem: {
    marginBottom: '10px',
    color: '#ecf0f1',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#34495e',
    },
  },
  mainContent: {
    padding: '20px',
  },
  incomeBox: {
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  chartBox: {
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  calendar: {
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  recentOrders: {
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  recentComments: {
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  contacts: {
    padding: '20px',
    borderRadius: '8px',
  },
  searchField: {
    marginBottom: '20px',
  },
  orderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  commentItem: {
    display: 'flex',
    marginBottom: '10px',
  },
  commentAvatar: {
    marginRight: '10px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  contactAvatar: {
    marginRight: '10px',
  },
  chartTitle: {
    marginBottom: '10px',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const data = [
    { name: 'Week 1', item1: 10, item2: 8, item3: 3, item4: 5, item5: 7 },
    { name: 'Week 2', item1: 15, item2: 10, item3: 5, item4: 7, item5: 9 },
    { name: 'Week 3', item1: 18, item2: 12, item3: 7, item4: 10, item5: 11 },
    { name: 'Week 4', item1: 20, item2: 15, item3: 10, item4: 12, item5: 14 },
  ];

  return (
    <Box>
            <Header />
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={3}>



        <Grid item xs={10}>
          <Box className={classes.mainContent}>
     
            <Paper elevation={3} className={classes.incomeBox}>
              <Typography variant="h6">This Week Income:</Typography>
              <Typography variant="h4">$1250</Typography>
              <Box mt={2}>
                <Typography>Item #1 Sold: 50</Typography>
                <Typography>Item #2 Sold: 10</Typography>
                <Typography>Item #3 Sold: 5</Typography>
                <Typography>Item #4 Sold: 7</Typography>
                <Typography>Total Items Sold: 72</Typography>
              </Box>
            </Paper>

            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Paper elevation={3} className={classes.chartBox}>
                  <Typography variant="h6" className={classes.chartTitle}>Sales Overview</Typography>
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="item1" fill="#8884d8" />
                    <Bar dataKey="item2" fill="#82ca9d" />
                    <Bar dataKey="item3" fill="#ffc658" />
                    <Bar dataKey="item4" fill="#ff7300" />
                    <Bar dataKey="item5" fill="#d0ed57" />
                  </BarChart>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={3} className={classes.calendar}>
                  <Typography variant="h6">July 2018</Typography>
                  <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                    <CalendarTodayIcon />
                    <Typography variant="body1">Sun Mon Tue Wed Thu Fri Sat</Typography>
                  </Box>
                  <Box mt={2} display="flex" flexWrap="wrap">
                    
                    <Box p={1}>1</Box>
                    <Box p={1}>2</Box>
                    <Box p={1}>3</Box>
                    <Box p={1}>4</Box>
                    <Box p={1}>5</Box>
                    <Box p={1}>6</Box>
                    <Box p={1}>7</Box>
                    <Box p={1}>8</Box>
                    <Box p={1}>9</Box>
                    <Box p={1}>10</Box>
                    <Box p={1}>11</Box>
                    <Box p={1}>12</Box>
                    <Box p={1}>13</Box>
                    <Box p={1}>14</Box>
                    <Box p={1}>15</Box>
                    <Box p={1}>16</Box>
                    <Box p={1}>17</Box>
                    <Box p={1}>18</Box>
                    <Box p={1}>19</Box>
                    <Box p={1}>20</Box>
                    <Box p={1}>21</Box>
                    <Box p={1}>22</Box>
                    <Box p={1}>23</Box>
                    <Box p={1}>24</Box>
                    <Box p={1}>25</Box>
                    <Box p={1}>26</Box>
                    <Box p={1}>27</Box>
                    <Box p={1}>28</Box>
                    <Box p={1}>29</Box>
                    <Box p={1}>30</Box>
                    <Box p={1}>31</Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

          
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper elevation={3} className={classes.recentOrders}>
                  <Typography variant="h6">Recent Orders</Typography>
                  <TextField
                    className={classes.searchField}
                    variant="outlined"
                    size="small"
                    placeholder="Search order"
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      ),
                    }}
                  />
               
                  <Box className={classes.orderItem}>
                    <Typography>Mr. Daniels</Typography>
                    <Typography>#1239078</Typography>
                    <Typography>11-07-18</Typography>
                    <DoneIcon color="success" />
                  </Box>
                  <Box className={classes.orderItem}>
                    <Typography>Mr. Tommy</Typography>
                    <Typography>#1239079</Typography>
                    <Typography>11-07-18</Typography>
                    <ClearIcon color="error" />
                  </Box>
                  <Box className={classes.orderItem}>
                    <Typography>Mr. Vangal</Typography>
                    <Typography>#1239080</Typography>
                    <Typography>11-07-18</Typography>
                    <HourglassEmptyIcon color="warning" />
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper elevation={3} className={classes.recentComments}>
                  <Typography variant="h6">Recent Comments</Typography>
                  <Box className={classes.commentItem}>
                    <Avatar className={classes.commentAvatar} />
                    <Box>
                      <Typography variant="body2"><strong>Mark J Hamilton</strong> on artikel lorem ipsum dolor sit amet</Typography>
                      <Typography variant="caption">05 July 2018, 17:12</Typography>
                      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Typography>
                      <Button variant="outlined" size="small" color="primary" startIcon={<ChatIcon />}>Reply</Button>
                    </Box>
                  </Box>
                  <Box className={classes.commentItem}>
                    <Avatar className={classes.commentAvatar} />
                    <Box>
                      <Typography variant="body2"><strong>Thomas Gold</strong> on artikel lorem ipsum dolor sit amet</Typography>
                      <Typography variant="caption">05 July 2018, 17:12</Typography>
                      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Typography>
                      <Button variant="outlined" size="small" color="primary" startIcon={<ChatIcon />}>Reply</Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Paper elevation={3} className={classes.contacts}>
              <Typography variant="h6">Contacts</Typography>
              <TextField
                className={classes.searchField}
                variant="outlined"
                size="small"
                placeholder="Search contact"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
              <Box className={classes.contactItem}>
                <Avatar className={classes.contactAvatar} />
                <Box>
                  <Typography>Name of contact</Typography>
                  <Typography variant="body2">name@email.com</Typography>
                  <Typography variant="body2">+123 456 789 10</Typography>
                </Box>
              </Box>
              <Box className={classes.contactItem}>
                <Avatar className={classes.contactAvatar} />
                <Box>
                  <Typography>Name of contact</Typography>
                  <Typography variant="body2">name@email.com</Typography>
                  <Typography variant="body2">+123 456 789 10</Typography>
                </Box>
              </Box>
              <Box className={classes.contactItem}>
                <Avatar className={classes.contactAvatar} />
                <Box>
                  <Typography>Name of contact</Typography>
                  <Typography variant="body2">name@email.com</Typography>
                  <Typography variant="body2">+123 456 789 10</Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default Dashboard;
