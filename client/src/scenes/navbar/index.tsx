
import { Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import AcUnitIcon from '@mui/icons-material/AcUnit';



const Navbar = () => {

  const {palette} = useTheme();  
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>

        {/*LEFT SIDE*/}
        <FlexBetween gap = "0.75rem">
            <AcUnitIcon sx={{fontSize:  "29px" }} />
            <Typography variant="h4" fontSize="16px">
                wow look at that!!!
            </Typography>
        </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;