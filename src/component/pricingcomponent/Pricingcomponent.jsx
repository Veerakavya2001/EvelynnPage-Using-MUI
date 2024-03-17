
import { Container } from "@mui/system";
import { Box, Button, Divider } from "@mui/material";
//icons
import DoneIcon from "@mui/icons-material/Done";
import EuroRoundedIcon from "@mui/icons-material/EuroRounded";
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import DomainIcon from '@mui/icons-material/Domain';

import "./pricingcomponent.css";

export default function PricingPage() {
  const cardData = [
    { title: "Free", price: "0" },
    { title: "Starter", price: "19" },
    { title: "Bussiness", price: "39" },
    { title: "Ultimate", price: "59" },
  ];

  const getImageIcon = (title) => {
    switch (title) {
      case "Free": {
        return <EuroRoundedIcon className="card-top-sec-icons"/>;
      }
      case "Starter": {
        return <StairsOutlinedIcon className="card-top-sec-icons" />;
      }
      case "Bussiness":{
        return <BusinessIcon className="card-top-sec-icons"/>;
      }
      case "Ultimate":{
        return <DomainIcon className="card-top-sec-icons"/>;
      }
      default :{
        return <EuroRoundedIcon className="card-top-sec-icons"/>
      }
      
    }
  };
  return (
    <Container id="pricing" >
      <Box className="serivice-seaction-heading" >
        <Box className="serivice-seaction-title">Our Services</Box>
        <p className="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </Box> 
      <Box className="pricing-position-chng">
      <Box className="pricing-sec-bg" >
       <Box className=" pricing-section">
        {cardData.map((item) => (
          <Box className="pricing-card">
            <Box className="pricing-top-section">
              <Box className="pricing-sec-icons">{getImageIcon(item.title)}</Box>
              <Box>
                <Box className="title">{item.title}</Box>$
                <span className="price">{item.price}</span>/mo
              </Box>
            </Box>
            <Divider  className="divider" variant="middle" />
            <Box className="flex-items">
              <Box className="list-items">
                <DoneIcon className="doneicon" />
                <Box className="description">Full Access</Box>
              </Box>
              <Box className="list-items">
                <DoneIcon className="doneicon" />
                <Box className="description">Source Files</Box>
              </Box>
              <Box className="list-items">
                <DoneIcon className="doneicon" />
                <Box className="description">Code Upload</Box>
              </Box>
              <Box className="list-items">
                <DoneIcon className="doneicon" />
                <Box className="description">Enhanced Security</Box>
              </Box>
              <Box className="list-items">
                <DoneIcon className="doneicon" />
                <Box className="description">Free Installment</Box>
              </Box>
            </Box>
            <Button className="pricingbtn" variant="contained">
              Buy Now
            </Button>
          </Box>
        ))}
        </Box> 
      </Box>
      </Box>
     
      
      
    </Container>
  );
}
