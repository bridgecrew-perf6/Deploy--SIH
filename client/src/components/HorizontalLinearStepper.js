import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./HorizontalLinearStepper.css"
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import cityData from "./city.json"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { fontSize, style } from '@mui/system';
import taj from "../assets/images/taj-mahal.png";

const steps = ['Select Monuments', 'Enter Details', 'Payment Page' ];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData,setFormData] = React.useState({});
  const [cityState,setCityState] = React.useState(Object.keys(cityData).reduce((prev,curr) => {
    return {
      ...prev, [curr]:false
    }
  }, {}));
  const [monuments,setMonuments] = React.useState({});
  const TICKET_PRICE = 20;
  const handleNext = () => {
    console.log(formData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleCityClicked = (city) => {
    city = city.city;
    const newState = !cityState[city];
    if(newState) {
      setFormData({...formData,["city"]:city});
      setMonuments(cityData[city].reduce((prev,curr)=>{
        return {
          ...prev, [curr]:false
        }
      },{}));
    } else clearMonument();
    Object.keys(cityState).forEach((city) => cityState[city] = false);
    cityState[city] = newState;
    setCityState({...cityState});
  }

  const clearMonument = () => {
    setFormData({...formData,["monument"]:""});
  } 

  const handleMonumentClicked = (monument) => {
    monument = monument.monument;
    const newState = !monuments[monument];
    if(newState) {
      formData["visitDate"] = "";
      formData["visitTime"] = "";
      setFormData({...formData,["monument"]:monument});
    } else {
      clearMonument();
    }
    Object.keys(monuments).forEach((monument) => monuments[monument] = false);
    monuments[monument] = newState;
    setMonuments({...monuments});
  }

  const handleVisitTime = (e) => {
    setFormData({...formData,["visitTime"]:e.target.value});
  }

  const renderStep1 = () => {
    return <div   className="step1" 
    
    
    >
    <div className="city" >
    <Card  className = "city-card " sx={{ minWidth: 170, background: "transparent", border: "1px solid #cd131b", transform: "translate(0%,-5%)" }}>
      <CardContent className='card-data' style ={{maxHeight: 450, overflow: 'auto', backgroundColor: "none"  , color:"#4B4453"}}>
      {/* "#9fd5f0b5"  */}
        <Typography variant="h5" style={{marginBottom:"2vh"}}>City</Typography>
        {
          Object.keys(cityData).map((city,index) => {
              return (
                <div key={index} className="eachCity">
                  <input type="checkbox" key={index+1} value="{city}" onChange={() => handleCityClicked({city})}
                    checked={cityState[city]}
                  />
                  <label key={index+2}>{city}</label>
                  <br></br>
                </div>
              )
          })
        }
      </CardContent>
    </Card>
      
    </div>

    <div className="monuments">
    <Card className="city-card" sx={{ minWidth: 200  , overflow:'auto', background: "transparent", border: "1px solid #cd131b", transform: "translate(0%,-5%)"}}>
      <CardContent className='card-data' style =  {{maxHeight: 450, overflow: 'auto', backgroundColor: "none" , color:"#4B4453"}}>
      <Typography variant="h5" style={{marginBottom:"2vh"}}>Monuments</Typography>
        {
          Object.keys(monuments).map((monument,index) => {
            return (
                <div key={index} className="eachMonument">
                <input type="checkbox" key={index+1} value="{monument}" onChange={() => handleMonumentClicked({monument})}
                  checked={monuments[monument]}
                />
                <label key={index+2}>{monument}</label>
                <br></br>
              </div>
            )
          }) 
        }
        </CardContent>
        </Card>
    </div>
    
    <div className="dateAndTime">
    <Card className="city-card" sx={{ minWidth: 200, background: "transparent", border: "1px solid #cd131b", transform: "translate(0%,-5%)" }}>
      <CardContent className='card-data' style ={{maxHeight: 450, overflow: 'auto', backgroundColor: "none" , color:"#4B4453"}}>
      <Typography variant="h5" style={{marginBottom:"2vh"}}>Pick Time</Typography>
      {
        formData["monument"] ? 
        <Stack spacing={3} className="dateTime">
          <div className="venue">
            {formData["monument"]}
          </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Visit Date"
              inputFormat="MM/dd/yyyy"
              value={formData["visitDate"]}
              onChange={(value) => setFormData({...formData,["visitDate"]:value})
            }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br></br>
          <InputLabel name="visitTime">Visit Time</InputLabel>
          <Select
            labelId="visitTime"
            className="visitTime"
            value={formData["visitTime"]}
            label="Visit Time"
            onChange={handleVisitTime}
          >
            <MenuItem value="10AM-12AM">10AM-12AM</MenuItem>
            <MenuItem value="12AM-2PM">12AM-2PM</MenuItem>
            <MenuItem value="2AM-4PM">12AM-2PM</MenuItem>
            <MenuItem value="4AM-6PM">12AM-2PM</MenuItem>
            <MenuItem value="6AM-8PM">12AM-2PM</MenuItem>
          </Select>
      </Stack> : <div></div>
      }
      </CardContent>
      </Card>
    </div>
    </div>
  }

  const handleUserName = (e) => {
    setFormData({...formData,["userName"]:e.target.value});
  }

  const handleUserEmail = (e) => {
    setFormData({...formData,["userEmail"]:e.target.value});
  }

  const handleUserID = (e) => {
    setFormData({...formData,["idDetail"]:e.target.value});
  }
  const handleChangeID = (e) => {
    setFormData({...formData,["selectedID"]:e.target.value});
  }

  const addAdult = () => {
    const prevList = formData["adultList"] ? formData["adultList"] : [""];
    if(formData["adultList"])
      prevList.push("");
    console.log(prevList);
    setFormData({...formData,["adultList"]: prevList});
  }

  const handleAdult = (e,index) => {
    const prevList = formData["adultList"];
    prevList[index] = e.target.value;
    setFormData({...formData,["adultList"]: prevList});
  }

  const handleDeleteAdults = (index) => {
    var prevList = formData["adultList"].filter((val,ind) => ind != index);
    console.log(prevList);
    setFormData({...formData,["adultList"]: prevList});
  }

  const renderStep2 = () => {
    return <div className="step2">
      
      <div className= "details">
      <Card sx={{ maxWidth: 400 }}>
      <CardContent style ={{maxHeight: 450, overflow: 'auto', backgroundColor: "white" , color:"#4B4453"}}>
      <Typography variant="h5" style={{marginBottom:"2vh"}}>Details</Typography>
        <TextField className="userName" label="Name" variant="outlined" onChange={handleUserName} style={{margin:"2vh"}}/>
        <TextField className="userEmail" label="email" variant="outlined" onChange={handleUserEmail} style={{margin:"2vh"}}/>
        <div>
          <Select
            labelId="uniqueID"
            className="uniqueID"
            value={formData.selectedID || ''}
            label="ID"
            onChange={handleChangeID}
            style={{margin:"2vh"}}
          >
            <MenuItem value="Adhaar">Adhaar</MenuItem>
            <MenuItem value="Pan">Pan</MenuItem>
            <MenuItem value="Driving License">Driving License</MenuItem>
          </Select>
          {
            formData.selectedID ? 
              (<TextField className="userIDData" label="ID Details" variant="outlined" style={{margin:"2vh"}} onChange={
                handleUserID
              }/>) : (<></>)
          }
        </div>
        <div className="adultDetails">
          <Button variant="contained" style={{margin:"2vh"}} onClick={addAdult}>Add Adults</Button>
          {
            formData["adultList"]?.map((adult,index) => {
                return (
                <div className='eachAdult' key={index-1}>
                  <TextField className="userIDData" key={index} label="Name" variant="outlined" style={{margin:"1vh"}} 
                  onChange={(e) => handleAdult(e,index)}/> 
                  <IconButton aria-label="delete" onClick={() => handleDeleteAdults(index)}>
                    <DeleteIcon />
                  </IconButton>
              </div>
                )
            })
          }
          
        </div>
        </CardContent>
        </Card>
      </div>

      <div className= "summary">
      <Card sx={{ minWidth: 150 }}>
      <CardContent style ={{maxHeight: 450, overflow: 'auto', backgroundColor: "white" , color:"#4B4453"}} >
          <Typography variant="h5"><ul>SUMMARY</ul></Typography>
          <div className="summaryDetails">
              <div className="summaryRow">
                    <Typography variant="h6">Name: </Typography>
                    <Typography variant="subtitle1" style={{marginLeft:"2vh", marginTop:"0.2vh"}}>{formData.userName}</Typography>
                </div>
                <div className="summaryRow">
                    <Typography variant="h6">Email: </Typography>
                    <Typography variant="subtitle1" style={{marginLeft:"2vh", marginTop:"0.2vh"}}>{formData.userEmail}</Typography>
                </div>
                {
                  formData.selectedID ? 
                <div className="summaryRow">
                    <Typography variant="h6">{formData.selectedID}: </Typography>
                    <Typography variant="subtitle1" style={{marginLeft:"2vh", marginTop:"0.2vh"}}>{formData.idDetail}</Typography>
                </div> : <></>
                }
                
                  {/* // formData.adultList?.length > 0 ? */}
                  <div className="summaryRow">
                      <Typography variant="h6">Ticket Price: </Typography>
                      <Typography variant="subtitle1" style={{marginLeft:"2vh", marginTop:"0.2vh"}}>Rs {(1+(formData.adultList ? formData.adultList.length:0)) * TICKET_PRICE}</Typography>
                  </div>
              
          </div>
          </CardContent>
          </Card>
      </div>
    </div>
  }

  function handlePayment() {
    setFormData({...formData,["payment"]: true});
  }

  const getData = () => {
      let adults = formData.adultList ? formData.adultList.length : 0
      adults += 1;
      const url = "https://api.qrserver.com/v1/create-qr-code/?data="
      + "Name: " + formData["userName"] 
      + " TicketPrice: Rs " + (adults * TICKET_PRICE).toString()
      + " adults: " + adults.toString()
      + " Place: " + formData.monument
      + " date: " + formData.visitDate
      + " time: " + formData.visitTime
      + "&amp;size=200x200";

      return url;
  }

  function generateTicket() {
      return (
        <div>
          <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <Typography variant='h5'> Ticket generated successfully...</Typography>
            <Typography variant="h6" style={{margin: "2vh"}}>Name: {formData.userName}</Typography>
            <Typography variant="h6" style={{margin: "2vh"}}>Email ID: {formData.userEmail}</Typography>
            <Typography variant="h6" style={{margin: "2vh"}}>Ticket Price: Rs {formData.adultList ? (formData.adultList.length + 1)*TICKET_PRICE : 1}</Typography>
            <img style={{margin: "2vh"}} src={getData()} alt="" title="" />
          </CardContent>
          </Card>
        </div>
      )
  }

  const renderStep3 = () => {
    return (
      <div className="ticket">
          {
            !formData.payment ?
            <Button className="paymentButton" variant="outlined" onClick={handlePayment}>Pay Rs {formData.adultList ? (formData.adultList.length + 1) * TICKET_PRICE : TICKET_PRICE}</Button> 
            :
            generateTicket()
          }
      </div>
    )
  }

  return (
    <Box sx={{ width: '90%' }} className="container">
      {/* Handle step header */}
      <Stepper  className = "stepper" activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {/* all steps finished show ticket page */}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        // Create form here
        <React.Fragment> 
          
          <form onSubmit={handleSubmit} >
              {
                activeStep === 0 ? (
                  renderStep1()
                ) : activeStep === 1 ? (renderStep2()) : (renderStep3())
            }
          </form>
        
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
