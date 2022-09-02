import React from "react";
import axios from "axios";
import './Form.css';
import ride from '../images/ride2.png';
export default function FileUpload() {
  const [uploadFile, setUploadFile] = React.useState();
  
  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("uploadFile", uploadFile);

    axios
      .post("http://localhost:8000/predict?proba_threshold=0.5&return_proba=true", dataArray, {
        headers: { 
          "Content-Type": "multipart/form-data; boundary=AaB03x" +
          "--AaB03x" +
          "Content-Disposition: file" +
          "Content-Type: png" +
          "Content-Transfer-Encoding: binary" +
          "...data... " +
          "--AaB03x--",
          "Accept": "application/json",
          "type": "application/json",
          'User-Agent':'PostmanRuntime/7.29.2'

        }
      })
      .then((response) => {
        // successfully uploaded response
      })
      .catch((error) => {
        // error response
      });
  };

  return (
    <div className="div3">

    <div className="card">
    <img className="photo" src={ride} alt="this is car image" />
    <div className="container">
  <div className="div1">
  <form onSubmit={submitForm}>
    <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
  <br />
  <div className="div2">
    <input type="submit" value="Submit"></input>
  </div>
  </form>
  <br />
  <br />
</div>
</div>
</div>
<br/>

</div>

    
  );
}