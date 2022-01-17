import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Header = () => {
    return (
        <>
        <form  className="search">
           <div>
            <TextField id="outlined-search" label="Googly Here" type="search" style = {{width: 550 }} />
            </div> 
        </form>
        </>
    );
}
 
export default Header