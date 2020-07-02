import React from "react"
import * as ReactBootStrap from "react-bootstrap"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const PatientInfo = () => {
    const classes = useStyles();

    return (
        <div
        style={{display:"flex", 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"

        }}
      >
        <ReactBootStrap.Form >
             <h3>Patient Information</h3>
            
  <ReactBootStrap.Form.Group controlId="formBasicPatient" style={{display:"flex", 
        flexDirection: "row",
        
        
        }} >
    <ReactBootStrap.Form.Label  style={{paddingRight:"20px", marginLeft:"20px"}}>Patient ID:</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="patientId" placeholder="Enter Patient ID" />
    
    <ReactBootStrap.Form.Label  style={{paddingRight:"20px", marginLeft:"20px"}}>Patient Name:</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="patientname" placeholder="Enter Patient Name" />
    <ReactBootStrap.Button variant="primary" type="submit" style={{paddingRight:"20px", marginLeft:"20px"}}>
   New Patient
  </ReactBootStrap.Button>
  </ReactBootStrap.Form.Group>


  <Card className={classes.root}>
      <CardContent>
  <ReactBootStrap.Form.Group controlId="formatient"  style={{display:"flex", 
        flexDirection: "row",

        }} >
            
           

    <ReactBootStrap.Form.Label  style={{paddingRight:"10px", marginLeft:"20px"}}>Patient ID:</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Label  >123</ReactBootStrap.Form.Label>

    </ReactBootStrap.Form.Group>



  <ReactBootStrap.Form.Group controlId="formatient"  style={{display:"flex", 
        flexDirection: "row",

        }} >
    <ReactBootStrap.Form.Label  style={{paddingRight:"20px", marginLeft:"20px"}}>History:</ReactBootStrap.Form.Label>

    </ReactBootStrap.Form.Group>

  
  
  <ReactBootStrap.Form.Group controlId="formPatient" controlId="formBasicPatient" style={{display:"flex", 
        flexDirection: "row"
        }} >
            
  <ReactBootStrap.Form.Label  style={{paddingRight:"20px", marginLeft:"40px"}}>Condition : </ReactBootStrap.Form.Label>
  <ReactBootStrap.Dropdown>
  
  <ReactBootStrap.DropdownButton id="dropdown-basic-button" title="Select">
    <ReactBootStrap.Dropdown.Item href="#/action-1">Condition1</ReactBootStrap.Dropdown.Item>
    <ReactBootStrap.Dropdown.Item href="#/action-2">Condition 2</ReactBootStrap.Dropdown.Item>
    <ReactBootStrap.Dropdown.Item href="#/action-3">Condition 3</ReactBootStrap.Dropdown.Item>
    </ReactBootStrap.DropdownButton>
    </ReactBootStrap.Dropdown>
</ReactBootStrap.Form.Group>
<ReactBootStrap.Form.Group controlId="formBasicPatient" style={{display:"flex", 
        flexDirection: "row",    
        }} >
    <ReactBootStrap.Form.Label style={{paddingRight:"50px", marginLeft:"40px"}} >Stage :</ReactBootStrap.Form.Label>
    <ReactBootStrap.Dropdown>

    <ReactBootStrap.DropdownButton id="dropdown-basic-button" title="Select">
    <ReactBootStrap.Dropdown.Item href="#/action-1">Stage</ReactBootStrap.Dropdown.Item>
    <ReactBootStrap.Dropdown.Item href="#/action-2">Stage 2</ReactBootStrap.Dropdown.Item>
    <ReactBootStrap.Dropdown.Item href="#/action-3">Stage 3</ReactBootStrap.Dropdown.Item>
    </ReactBootStrap.DropdownButton>
</ReactBootStrap.Dropdown>
</ReactBootStrap.Form.Group>

    
  
    <ReactBootStrap.Form.Group controlId="formBasicPatient" style={{display:"flex", 
        flexDirection: "row",
        
        
        }} >
    <ReactBootStrap.Form.Label style={{paddingRight:"20px", marginLeft:"40px"}}>Refont:</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="patientId" placeholder="Enter Refont" />
    </ReactBootStrap.Form.Group>
    </CardContent>
    </Card>
    </ReactBootStrap.Form>

</div>
    )
}

export default PatientInfo

