import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import "./Customers.css";
import Carousel from "@itseasy21/react-elastic-carousel";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import StartIcon from "@mui/icons-material/Start";
import AndroidIcon from "@mui/icons-material/Android";
//imgs
import face1 from "../../assests/faces/face-1.png";
import face2 from "../../assests/faces/face-2.png";
import face3 from "../../assests/faces/face-3.png";
import face4 from "../../assests/faces/face-4.png";
export default function Customers() {

  const customers = [
    {
      image: face1,
      name: "John Doe",
      role: "Product Manager",
      icon: <TwitterIcon />,
    },
    { image: face2, name: "Adam Smith", role: "CEO", icon: <FacebookIcon /> },
    {
      image: face3,
      name: "john white",
      role: "SoftWare Engineer",
      icon: <TwitterIcon />,
    },
    {
      image: face4,
      name: "Jessica Hiche",
      role: "CEO",
      icon: <FacebookIcon />,
    },
    {
      image: face1,
      name: " Hiche",
      role: "abcd",
      icon: <FacebookIcon />,
    },

   { image: face2, name: "Adam Smith", role: "CEO", icon: <FacebookIcon /> },
    {
      image: face3,
      name: "john white",
      role: "SoftWare Engineer",
      icon: <TwitterIcon />,
    },
    {
      image: face4,
      name: "Jessica Hiche",
      role: "CEO",
      icon: <FacebookIcon />,
    },
    {
      image: face1,
      name: " Hiche",
      role: "abcd",
      icon: <FacebookIcon />,
    },
    {
      image: face4,
      name: "Jessica Hiche",
      role: "CEO",
      icon: <FacebookIcon />,
    },
    {
      image: face1,
      name: " Hiche",
      role: "abcd",
      icon: <FacebookIcon />,
    },

   { image: face2, name: "Adam Smith", role: "CEO", icon: <FacebookIcon /> },
];
  return (
    <Container>
      <Box className="customer-sec">
        <Box className="customers-sec-heading">
          <Typography variant="h4">What our Customers Have to Say</Typography>
          <p className="customer-description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </Box>
      
        <Box className="customers">
        <Carousel itemPadding={[50, 50]} itemsToShow={4} className="customer-corrosal">
          {customers.map((item) => ( 
            <Box>
              <Box className="customer-card">
              <Box className= 'customer-imgs'>
                <img className="custom-pics" src={item.image} alt="customer"  />
              </Box>
                <p className="sep-customer-description">
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore"
                </p>
                <Divider variant="middle" className="custom-sec-divider" />
                <Box className="icon">
                  <StartIcon className="start-icon" />
                  <StartIcon className="start-icon" />
                  <StartIcon className="start-icon" />
                  <StartIcon className="start-icon" />
                  <StartIcon className="start-icon" />
                </Box>
                <Box className="user-details">
                  <Box>{item.name}</Box>
                  <Box className="customer-role">
                    <Box className="user-role">{item.role}</Box>
                    <Box className="social-media-icon">{item.icon}</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
          </Carousel>
        </Box>
       
        
        
      </Box>
      <Box className="custom-bottom-part">
        <Box className="bottom-left-part"></Box>
      <Box>
        <Typography variant="h3">Download Now !</Typography>
        <p className="customer-description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore
        </p>
        <Box>
          <Button
            className="playstorebtn"
            variant="contained"
            startIcon={<AndroidIcon />}
          >
            Play Store
          </Button>
          <Button
            className="playstorebtn"
            variant="contained"
            startIcon={<TwitterIcon />}
          >
            App Store
          </Button>
        </Box>
      </Box>
      <Box className="bottom-right-part"></Box>
      </Box>
      
    </Container>
  );
}
