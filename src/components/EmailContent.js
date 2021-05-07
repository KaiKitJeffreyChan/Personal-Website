import React from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function EmailContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y9qqlzi",
        "template_hd79vrd",
        e.target,
        "user_d35XBXtuS72cq1Zmyop83"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-6 mx-auto">
            <div>
              <Name>
                <TextField
                  required
                  id="outlined-multiline-static"
                  fullwidth
                  label="Name"
                  variant="outlined"
                  type="text"
                  className="form-control"
                  name="name"
                />
              </Name>
            </div>
            <div>
              <Email>
                <TextField
                  required
                  id="outlined-multiline-static"
                  fullwidth
                  label="Your Email Address"
                  variant="outlined"
                  type="email"
                  className="form-control"
                  name="email"
                />
              </Email>
            </div>
            <div>
              <Subject>
                <TextField
                  required
                  id="outlined-multiline-static"
                  fullwidth
                  label="Subject"
                  variant="outlined"
                  type="text"
                  className="form-control"
                  name="subject"
                />
              </Subject>
            </div>
            <div>
              <Message>
                <TextField
                  id="outlined-multiline-static"
                  fullwidth
                  label="Message"
                  multiline
                  rows={9}
                  variant="outlined"
                  className="form-control"
                  name="message"
                />
              </Message>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <Buttonshift>
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </Buttonshift>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const Name = styled.div`
  left: 90%;
  width: 180%;
  box-sizing: border-box;
  justify-content: flex-start;
`;
const Email = styled.div`
  padding-top: 12%;
  left: 90%;
  width: 180%;
  box-sizing: border-box;
  justify-content: flex-start;
`;

const Subject = styled.div`
  padding-top: 12%;
  left: 90%;
  width: 180%;
  box-sizing: border-box;
  justify-content: flex-start;
`;
const Message = styled.div`
  padding-top: 12%;
  width: 173%;
`;
const SendMessage = styled.div`
  padding-top: 12%;
  left: 90%;
  width: 180%;
  box-sizing: border-box;
  justify-content: flex-start;
`;

const Buttonshift = styled.div`
  padding-top: 85%;

  width: 180%;
  box-sizing: border-box;
  justify-content: flex-start;
`;
