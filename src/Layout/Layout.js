import React, { Component } from 'react';
//import HeaderI from './Header';
//import Comments from '../components/comments/Comments'
//import Footer from './Footer'
//import { DateTimeInput } from 'semantic-ui-calendar-react';
import './Layout.css';
//import { Container, Grid, Segment, Form, Header, Search, Label, Button, segment } from 'semantic-ui-react'
import faker from 'faker';
import PropTypes from 'prop-types'
import _ from 'lodash'
import Background from './images/Upgrade – 1.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from '@material-ui/core/Container';
import { OutlinedInput } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    float: 'right',
    marginRight: '4%',
    marginTop: '7%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
  nv: {
    float: 'right'
  },
  sv: {
    float: 'right',
    marginRight: '35%'
  },
  back :{
        /*background-image: url('../assets/mercedes-benz-parked-in-a-row-164634.jpg');*/
        backgroundImage: "url(" + Background + ")",
        backgroundSize: 'cover'
  }
});

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 }]



export default function Layout() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div styles={{ backgroundImage:`linear-gradient(-90deg, blue, lightblue)` }}>
    <div className = {classes.nv}>
      {['Support', 'Login'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={{}}>{anchor}</Button>
        </React.Fragment>
      ))}
    </div>
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          Let's find you a perfect car
      </Typography>
      <br/><br/>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pickup Location" variant="outlined" />}
      />
      <br/>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Drop-off Location" variant="outlined" />}
      />
      <br/><br/>
        <TextField
    id="outlined-basic"
    label="Pickup-Time"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    variant = 'outlined'
    className={classes.textField}
    style={{ width: 300 }}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <br/><br/>
    <TextField
    id="outlined-basic"
    label="Drop-off Time"
    type="datetime-local"
    variant = 'outlined'
    defaultValue="2017-05-24T10:30"
    className={classes.textField}
    style={{ width: 300 }}
    InputLabelProps={{
      shrink: true,
    }}
  />
      </CardContent>
      <CardActions className = {classes.sv}>
      <Button variant="contained" color="primary">
        Search
      </Button>
      </CardActions>
    </Card>
    </div>
  );
}
//const resultRenderer = ({ title }) => <Label content={title} />

// resultRenderer.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

// class Layout extends Component {
//   constructor(props) {
//     super(props);
 
//     this.state = {
//       date: '',
//       time: '',
//       dateTime: '',
//       datesRange: '',
//       isLoading: false, 
//       results: [], 
//       value: ''
//     };
//   }

//   handleChange = (event, {name, value}) => {
//     if (this.state.hasOwnProperty(name)) {
//       this.setState({ [name]: value });
//     }
//   }

//   handleResultSelect = (e, { result }) => this.setState({ value: result.title })

//   handleSearchChange = (e, { value }) => {
//     this.setState({ isLoading: true, value })

//     setTimeout(() => {
//       if (this.state.value.length < 1) return this.setState(initialState)

//       const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
//       const isMatch = (result) => re.test(result.title)

//       this.setState({
//         isLoading: false,
//         results: _.filter(source, isMatch),
//       })
//     }, 300)
//   }

//   render() {
//     return(
//       <Card>
//         <Autocomplete
//       id="combo-box-demo"
//       options={top100Films}
//       getOptionLabel={(option) => option.title}
//       style={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
//     />
//       </Card>
//     )
//     // return (
//     //   <Container fluid className= "containerit">
//     //     <HeaderI />
//     //     <segment >
//     //     <div className="segmeentRight">
//     //       {/* <Container className = "containerit" textAlign='center'>   */}
//     //         <Grid columns = {2}>
//     //           <Grid.Row>
//     //             <Grid.Column>
//     //             <Header as='h5'><p className = "labelText">Let's Find Your Ideal Car!</p></Header>
//     //             </Grid.Column>
//     //           </Grid.Row>
//     //           <Grid.Row>
//     //             <Grid.Column className = "seearchSpace">
//     //               <p className = "labelText">Pickup Location</p>
//     //               <Search fluid
//     //                 loading={this.state.isLoading}
//     //                 onResultSelect={this.handleResultSelect}
//     //                 onSearchChange={_.debounce(this.handleSearchChange, 500, {
//     //                 leading: true,
//     //                 })}
//     //                 results={this.state.results}
//     //                 value={this.state.value}
//     //                 resultRenderer={resultRenderer}
//     //                 {...this.props}
//     //               />
//     //             </Grid.Column>
//     //             <Grid.Column className = "seearchSpace">
//     //             <p className = "labelText">Dropoff Location</p>
//     //               <Search
//     //                 className = "searchWidth"
//     //                 loading={this.state.isLoading}
//     //                 onResultSelect={this.handleResultSelect}
//     //                 onSearchChange={_.debounce(this.handleSearchChange, 500, {
//     //                 leading: true,
//     //                 })}
//     //                 results={this.state.results}
//     //                 value={this.state.value}
//     //                 resultRenderer={resultRenderer}
//     //                 {...this.props}
//     //                 fluid
//     //               />
//     //             </Grid.Column>
//     //           </Grid.Row>

//     //           <Grid.Row>  
//     //             <Grid.Column className = "seearchSpace"> 
//     //             <p className = "labelText">Pickup Date</p>            
//     //               <DateTimeInput
                  
//     //                 name="dateTime"
//     //                 placeholder="Date Time"
//     //                 value={this.state.dateTime}
//     //                 iconPosition="left"
//     //                 onChange={this.handleChange}
//     //               />
//     //             </Grid.Column>
//     //             <Grid.Column className = "seearchSpace">
//     //             <p className = "labelText">Dropoff Date</p>
//     //               <DateTimeInput
//     //                 name="dateTime"
//     //                 placeholder="Date Time"
//     //                 value={this.state.dateTime}
//     //                 iconPosition="left"
//     //                 onChange={this.handleChange}
//     //              />
//     //             </Grid.Column>
//     //           </Grid.Row>

//     //         </Grid>



//     //       {/* </Container> */}

          
//     //     </div>
//     //     </segment>
//     //     {/* <main className="">
//     //       <div {...this.props} />
//     //     </main>
//     //     <Comments />
//     //     <Footer /> */}
//     // </Container>
//     // );
//   }
// }
// export default Layout;
