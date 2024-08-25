import React, {useState, useEffect} from 'react';
import { Container, Grid, Paper, Typography, Avatar, Box, Button, Tabs, Tab, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from 'axios';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '170px',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
  },
  avatar: {
    width: '120px',
    height: '120px',
    marginRight: '20px',
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  role: {
    color: '#888',
    fontSize: '16px',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
  },
  statItem: {
    textAlign: 'center',
  },
  tabContent: {
    marginTop: '20px',
  },
  personalInfo: {
    padding: '20px',
  },
  skillChips: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
    flexWrap: 'wrap',
  },
  profileBody: {
    display: 'flex',
    padding: '20px',
  },
  leftColumn: {
    flex: 1,
    marginRight: '20px',
    backgroundColor: '#f5f5f5', 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    borderRadius: '8px',
    padding: '20px', 
  },
  rightColumn: {
    flex: 2,
    backgroundColor: '#f5f5f5', 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    borderRadius: '8px', 
    padding: '20px', 
  },
  socialStats: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: '10px',
    color: '#555',
  },
  infoText: {
    color: '#777',
  },
  profileInfoItem: {
    display: 'flex',
    marginBottom: '10px',
  },
  editButton: {
    alignSelf: 'flex-end',
  },
}));

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        setUser(response.data.results[0]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  if (loading) return   <Container className={classes.container}>Loading...</Container>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box>
            <Header />
    <Container className={classes.container}>
      <Paper elevation={3}>
        <Grid container>
          <Grid item xs={12} className={classes.profileHeader}>
            <Avatar
              alt="Andrew Bennet"
              src={user.picture.large}
              className={classes.avatar}
            />
            <Box>
              <Typography variant="h5" className={classes.profileName}>
                NAME -  {user.name.title + ' ' + user.name.first + ' ' + user.name.last}
              </Typography>
              <Typography variant="subtitle1" className={classes.role}>
                Email: {user.email}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.stats}>
            <div className={classes.statItem}>
              <Typography variant="h6">75</Typography>
              <Typography variant="subtitle2">Projects</Typography>
            </div>
            <div className={classes.statItem}>
              <Typography variant="h6">68%</Typography>
              <Typography variant="subtitle2">Success Rate</Typography>
            </div>
            <div className={classes.statItem}>
              <Typography variant="h6">$8620</Typography>
              <Typography variant="subtitle2">Earnings</Typography>
            </div>
          </Grid>
          <Divider />
          <Grid item xs={12} className={classes.profileBody}>
            {/* Left Column for Personal Information */}
            <Box className={classes.leftColumn}>
              <Typography variant="h6">Personal Information</Typography>
              <Button variant="outlined" size="small" className={classes.editButton}>
                Edit
              </Button>
              <Box mt={2}>
                <div className={classes.profileInfoItem}>
                  <Typography className={classes.infoLabel}>Birth Date:</Typography>
                  <Typography className={classes.infoText}>06 June 1989</Typography>
                </div>
                <div className={classes.profileInfoItem}>
                  <Typography className={classes.infoLabel}>Position:</Typography>
                  <Typography className={classes.infoText}>Full Stack Developer</Typography>
                </div>
                <div className={classes.profileInfoItem}>
                  <Typography className={classes.infoLabel}>Education:</Typography>
                  <Typography className={classes.infoText}>Stanford University</Typography>
                </div>
                <div className={classes.profileInfoItem}>
                  <Typography className={classes.infoLabel}>Languages:</Typography>
                  <Typography className={classes.infoText}>English, French, Spanish</Typography>
                </div>
                <div className={classes.profileInfoItem}>
                  <Typography className={classes.infoLabel}>Phone:</Typography>
                  <Typography className={classes.infoText}>{user.phone}</Typography>
                </div>
                <Box className={classes.skillChips}>
                  <Button variant="outlined" size="small">Javascript</Button>
                  <Button variant="outlined" size="small">Python</Button>
                  <Button variant="outlined" size="small">Angular</Button>
                  <Button variant="outlined" size="small">ReactJS</Button>
                  <Button variant="outlined" size="small">Flutter</Button>
                </Box>
                <Grid item xs={12} className={classes.socialStats}>
            <div className={classes.statItem}>
              <Typography variant="h6">25k</Typography>
              <FacebookIcon />
            </div>
            <div className={classes.statItem}>
              <Typography variant="h6">58k</Typography>
              <TwitterIcon />
            </div>
          </Grid>
              </Box>
            </Box>

            {/* Right Column for Tabs */}
            <Box className={classes.rightColumn}>
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Post" />
                <Tab label="Gallery" />
                <Tab label="Settings" />
              </Tabs>
              <Divider />
              <Box className={classes.tabContent}>
                {tabIndex === 0 && (
                  <Box p={2}>
                    <Typography variant="h6">Views</Typography>
                    <Typography variant="subtitle1">24k</Typography>
                    <Typography variant="subtitle2">1500 New subscribers this week</Typography>
                    <Typography variant="h6">Comments</Typography>
                    <Typography variant="subtitle1">24k</Typography>
                    <Typography variant="subtitle2">854 New Like this week</Typography>
                    <Button variant="contained" color="primary">Post</Button>
                  </Box>
                )}
                {tabIndex === 1 && <Box p={2}><Typography>Gallery content here...</Typography></Box>}
                {tabIndex === 2 && <Box p={2}><Typography>Settings content here...</Typography></Box>}
              </Box>
            </Box>
          </Grid>
          <Divider />
        </Grid>
      </Paper>
    </Container>
    </Box>
  );
};

export default Profile;
