import React from 'react';
import emailjs from "emailjs-com";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function EmailContent() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_y9qqlzi', 'template_hd79vrd', e.target, 'user_d35XBXtuS72cq1Zmyop83')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    
    return (
        <div>

        <div className="container">
            <form onSubmit={sendEmail} width="50px">
                    <div className="row pt-6 mx-auto">
                        <div>
                            <TextField required id="outlined-required" label="Name" variant="outlined" type="text" className="form-control"  name="name" />
                        </div>
                        <div>
                            <TextField required id="outlined-required" label="Your Email Address" variant="outlined" type="email" className="form-control" name="email" />     
                        </div>
                        <div>
                            <TextField required id="outlined-required" label="Subject" variant="outlined" type="text" className="form-control"  name="subject" />     
                        </div >
                        <div className="col-8 form-group pt-2 mx-auto">
                            <TextField id="standard-multiline-flexible" label="Message" multiline rowsMax={5} value={value} onChange={handleChange} name="message"/>           
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>

            </div>
    )

    
}
