
import TextField from '@mui/material/TextField';


const Header = () => {

    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://google-search1.p.rapidapi.com/google-search',
      params: {hl: 'en', q: 'abhishek+bonageri', gl: 'us'},
      headers: {
        'x-rapidapi-host': 'google-search1.p.rapidapi.com',
        'x-rapidapi-key': 'aee0e6b517msh087d45f5420df8ap1222fbjsn32b0a1ff8446'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    
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