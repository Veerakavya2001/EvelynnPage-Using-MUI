import { Container, Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
//icons
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
//mobile images
import mobile1 from "../../assests/mobile-1.svg";
import mobile2 from "../../assests/mobile-2.svg";
import mobile3 from "../../assests/mobile-3.svg";
import mobile4 from "../../assests/mobile-4.svg";
//import app features img
import commonfeat from "../../assests/appfeatures/anydevice.png";
import designicon from "../../assests/appfeatures/designicon.png";
import retina from "../../assests/appfeatures/retina.png";
import w3c from "../../assests/appfeatures/validcode.png";
import responsive from "../../assests/appfeatures/responsive.png";
import compatibility from "../../assests/appfeatures/browser.png";
import "./Container.css";
import Servicesection from "../../commoncomponent/service"

export default function MainContainer() {
  const features = [
    {
      image: commonfeat,
      title: "Use on Any Device",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
      image: designicon,
      title: "Material Design Icon",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
      image: retina,
      title: "Retina Ready",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
      image: w3c,
      title: "W3c Valid Code",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
      image: responsive,
      title: "Fully Responsive",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
      image: compatibility,
      title: "Browser Compatibility",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
  ];
  return (
    <Container className="main-content" id="Home">
      <section className="music-section" >
        <Box className="bg-color">
          <img src={mobile1} alt="mobile" />
        </Box>
        <Box className="music-section-right-side">
          <Box className="music-section-title">Evalynn Music</Box>
          <Box className="music-section-rating">Best Music App 2020</Box>
          <p className="discription">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <Button variant="outlined" className="watch-vedio-button"  >
            Click to Watch a Vedio
          </Button>
          <Box className="btns">
            <Button
              variant="contained"
              startIcon={<AndroidIcon />}
              className="storebutton"
            >
              Play Store
            </Button>
            <Button
              variant="contained"
              startIcon={<AppleIcon />}
              className="storebutton appstorebtn"
            >
              App Store
            </Button>
          </Box>
        </Box>
      </section>
      <section className="features-section" id="works">
        <Box className="feaction-section-leftside">
          <Box className="section-heading">
            <Typography variant="h4">App Features</Typography>
            <p className="discription">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </Box>
          <Box className="features">
            {features.map((feature) => (
              <Box className="app-feat">
                <img
                  className="feat-width"
                  src={feature.image}
                  alt={feature.title}
                />
                <Box className="feat-title">{feature.title}</Box>
                <Box className="discription">{feature.description}</Box>
              </Box>
            ))}
          </Box>
          <Box></Box>
        </Box>
        <Box className="mobile2-bg">
          <img src={mobile2} alt="mobile2" />
        </Box>
      </section>
      <section className="service-section" id="services">
        <Box>
          <img src={mobile3} alt="mobile-3" />
        </Box>
        <Box className="service-section-right-side">
          <Servicesection></Servicesection>
        </Box>
      </section>
      <section className="products-section">
        <Box className="products-section-right-side">
          <Box className="products-right-top-section">
            <Box className="heading">App Features</Box>
            <p className="discription">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et
            </p>
            <Box className="product-section-btns">
              <Button className="community-btn product-btns">Community</Button>
              <Button className="features-btns product-btns">Self Service</Button>
              <Button className="teamwork-btn product-btns">Team Work</Button>
            </Box>
          </Box>
          <Box>
            <Servicesection></Servicesection>
          </Box>
        </Box>
        <Box>
          <img src={mobile4} alt="mobile-4" />
        </Box>
      </section>
    </Container>
  );
}
