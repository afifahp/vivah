import {
  Container,
  Link, 
  Box, 
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardContent, 
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Rating,
  Typography} from '@mui/material'
import profilepic from '../assets/vivy.png'
import '@fontsource/roboto/500.css'
import '../styles/App.css'
import React from 'react'

interface TabPanelProps{
  children?: React.ReactNode;
  index: number;
  value: number;
}

declare module '@mui/material/styles'{
  interface BreakpointOverrides{
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

function CustomTabPanel(props:TabPanelProps) {
  const { children, value, index } = props;

  return(
    <div
      role='tabpanel'
      hidden={value !== index}
      id={'simple-tabpanel-${index}'}
      aria-labelledby={'simple-tab-${index}'}
      >
        {value === index && (
          <Box sx={{p: 3}}>
            <Typography>{children}</Typography>
          </Box>
        )}
    </div>
  )
}

function a11yProps(_index: number){
  return {
    id: 'simple-tab-${index}',
    'aria-controls': 'simple-tabpanel-${index}',
  }
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }
  return (
    <>
      <div>
          <Container fixed>
            <Card sx={{display: 'flex', width: 'md'}}>
              <Box sx={{width: 'sm'}}>
                <CardHeader
                  avatar={
                    <Avatar 
                    alt='Vivy'
                    srcSet={profilepic}
                    sx={{width : 72, height : 72}}/>
                  }

                  title="Afifah Putri Witjaksono"
                  subheader="fifahputriw@gmail.com"
                  />
                <Divider/>
                <CardMedia
                  component='img'
                  alt='viv'
                  sx={{height: 250}}
                  image='/src/assets/vivy.png'
                />
                <CardContent>
                  <Typography variant='h6' component='h5'>
                    A Software Engineer student in Bina Insani University, Bekasi, Indonesia. Love to create 3D Mini Interior, self made desktop organiser wallpaper, 2D Character Design chibi, anime and semi realism style. Currently upgrading 3D Modelling skills.
                  </Typography>
                  <br/>
                  <Link href="https://instagram.com/ievykitt" underline="none" variant='h6'>
                    {'Portofolio'}
                  </Link>
                  <Divider/>
                  <Box sx={{width:'100%', borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons='auto'
                    aria-label='basic tabs example'>
                      <Tab label="Experiences" {...a11yProps(0)}/>
                      <Tab label="Education" {...a11yProps(1)}/>
                      <Tab label="Skills" {...a11yProps(2)}/>
                      <Tab label="Language" {...a11yProps(3)}/>
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                  <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary="TUGU KUNSTKRING PALEIS"
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  PANTRY - COOK
                                </Typography>
                                {" — Producing food and desserts order for customers and stocks, food plating and food garnishing for customers."}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary="DOCCO COFFEE and TEA"
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  PASTRY
                                </Typography>
                                {" — Producing Cake and desserts to deliver to the outlets, handling ingredients stock, Input weekly and monthly stock reports, food cost and new recipes."}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <CardActions>
                          <Button size='small'>Load More</Button>
                        </CardActions>
                      </List>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                  <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary="SMK PARAMITHA 1 JAKARTA"
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  HOTEL AND RESTAURANT MANAGEMENT
                                </Typography>
                                {" — Learned about How to serve guests in Hotel from the Front Office section, Housekeeping, Food and Beverage Service and Products."}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary="UNIVERSITAS BINA INSANI"
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  SOFTWARE ENGINER (RPL)
                                </Typography>
                                {" — Learning Network Configuration, Programming Language, Program Development, Graphic Design, UI/UX Development, 3D Modeling and Mobile Programming."}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      </List>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                      <ListItem alignItems="flex-start"> 
                        <Typography>Public Speaking - English</Typography>
                        <Rating name="publics" value={4} precision={0.5}/>
                      </ListItem>
                      <ListItem alignItems="flex-start"> 
                        <Typography>3D Modeling - Blender</Typography>
                        <Rating name="blds" value={2.5} precision={0.5}/>
                      </ListItem>
                      <ListItem alignItems="flex-start"> 
                        <Typography>Adobe Illustrator</Typography>
                        <Rating name="ai" value={3} precision={0.5}/>
                      </ListItem>
                      <ListItem alignItems="flex-start"> 
                        <Typography>Adobe Potoshop</Typography>
                        <Rating name="ps" value={3} precision={0.5}/>
                      </ListItem>
                      <ListItem alignItems="flex-start"> 
                        <Typography>Chibi Character - Digital 2D</Typography>
                        <Rating name="chibi2D" value={3.5} precision={0.5}/>
                      </ListItem>
                      <ListItem alignItems="flex-start"> 
                        <Typography>Semi-Realism - Digital 2D</Typography>
                        <Rating name="realm" value={3.5} precision={0.5}/>
                      </ListItem>
                    </List>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                      <ListItem alignItems="flex-start"> 
                        <Typography>Indonesian - Native</Typography>
                        <Rating name="idn" value={5} precision={0.5}/>
                      </ListItem>
                      <ListItem alignItems="flex-start"> 
                        <Typography>English - Intermediate</Typography>
                        <Rating name="usk" value={3.5} precision={0.5}/>
                      </ListItem>
                      <ListItem alignItems="flex-start"> 
                        <Typography>French - Beginner</Typography>
                        <Rating name="fr" value={1} precision={0.5}/>
                      </ListItem>
                    </List>
                  </CustomTabPanel>
                </CardContent>
              </Box>
            </Card>
          </Container>
      </div>
    </>
  )
}

export default App
