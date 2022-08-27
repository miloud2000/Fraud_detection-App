import React from "react";
import axios from "axios";

 function FileUpload() {
  const [uploadFile, setUploadFile] = React.useState();
  
  
  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("uploadFile", uploadFile);

    axios.post("http://localhost:8000/predict", dataArray, {
        headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Postman-Token': '068642bf-b1a5-4be1-a054-d67ef699478b'
			

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
    <div>
      <form onSubmit={submitForm}>
        <br />
        <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
export default FileUpload;