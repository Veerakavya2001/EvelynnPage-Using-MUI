import "../commoncomponent/service.css"
import {  Box } from "@mui/system";
import { Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function Servicesection(){
    return(
        <Box >
<Box className="service-section-heading">Great Product Analytics</Box>
<p className="discription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
<Box className="items-list">
<Box className="listitems">
  <DoneIcon className="doneicon"/>
  <span className="discription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</span>
</Box>
<Box className="listitems">
  <DoneIcon className="doneicon" />
  <span className="discription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</span>
</Box>
<Box className="listitems">
  <DoneIcon  className="doneicon"/>
  <span className="discription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</span>
</Box>
</Box>

<Button className="navigatebutton" endIcon={<NavigateNextIcon/>}>Click to view More</Button>
</Box>
    )
} 
