import { Box } from "@mui/system";
import MarkunreadIcon from "@mui/icons-material/Markunread";

import "./Footer.css";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box className="footer" id="contact">
      <Container>
        <Box className="footer-sec">
          <Box className="footer-part">
            <Box className="footer-headings">About Us</Box>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              perferendis rem, aut aliquam neque nam? dolor sit amet,
              consectetur adipisicing elit consectetur adipisicing.
            </p>
            <Box>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </Box>
          </Box>
          <Box className="footer-part ">
            <Box className="footer-headings title-headings">Company</Box>
            <Box className="company-part">
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                About Us
              </Button>
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                Services
              </Button>
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                Team
              </Button>
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                Pricing
              </Button>
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                Project
              </Button>
            </Box>
          </Box>
          <Box className="footer-part ">
            <Box className="footer-headings title-headings">Useful Links</Box>
            <Box className="links-part">
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                Terms of Services
              </Button>
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                Privacy Policy
              </Button>
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                Documentation
              </Button>
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                Changelog
              </Button>
              <Button
                startIcon={<KeyboardArrowRightIcon />}
                className="footer-btns"
              >
                Components
              </Button>
            </Box>
          </Box>
          <Box className="footer-part">
            <Box className="footer-headings title-headings">Newsletter</Box>
            <Box>Sign Up for the latest news</Box>
            <Box className="input-feild">
              <MarkunreadIcon />

              <input className="text-feild" type="text" placeholder="Your email" />
            </Box>
            <Button variant="contained" className="subscribe-btn">
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
