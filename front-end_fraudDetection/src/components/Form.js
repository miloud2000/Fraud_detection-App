import React from "react";
import axios from "axios";
import './Form.css';
import ride from '../images/ride2.png';
export default function FileUpload() {
  const [uploadFile, setUploadFile] = React.useState();

  const [response, setResponse] = React.useState(0); 

  const [files, setFiles] = React.useState("");
  const data = {
    "samples": [
      {
        "col_0": 0,
        "col_1": 0,
        "col_2": 0,
        "col_3": 0,
        "col_4": 0,
        "col_5": 0,
        "col_6": 0,
        "col_7": 0,
        "col_8": 0,
        "col_9": 0,
        "col_10": 0,
        "col_11": 0,
        "col_12": 0,
        "col_13": 0,
        "col_14": 0,
        "col_15": 0,
        "col_16": 0,
        "col_17": 0,
        "col_18": 0,
        "col_19": 0,
        "col_20": 0,
        "col_21": 0,
        "col_22": 0,
        "col_23": 0,
        "col_24": 0,
        "col_25": 0,
        "col_26": 0,
        "col_27": 0,
        "col_28": 0,
        "col_29": 0,
        "col_30": 0,
        "col_31": 0,
        "col_32": 0,
        "col_33": 0,
        "col_34": 0,
        "col_35": 0,
        "col_36": 1,
        "col_37": 0,
        "col_38": 0,
        "col_39": 0,
        "col_40": 0,
        "col_41": 0,
        "col_42": 0,
        "col_43": 0,
        "col_44": 0,
        "col_45": 0,
        "col_46": 0,
        "col_47": 0,
        "col_48": 0,
        "col_49": 0,
        "col_50": 0,
        "col_51": 0,
        "col_52": 0,
        "col_53": 0,
        "col_54": 0,
        "col_55": 0,
        "col_56": 0,
        "col_57": 0,
        "col_58": 0,
        "col_59": 0,
        "col_60": 0,
        "col_61": 0,
        "col_62": 0,
        "col_63": 0,
        "col_64": 0,
        "col_65": 3,
        "col_66": 3,
        "col_67": 3,
        "col_68": 3,
        "col_69": 0,
        "col_70": 0,
        "col_71": 0,
        "col_72": 0,
        "col_73": 0,
        "col_74": 0,
        "col_75": 2,
        "col_76": 3,
        "col_77": 3,
        "col_78": 0,
        "col_79": 0,
        "col_80": 0,
        "col_81": 0,
        "col_82": 0,
        "col_83": 0,
        "col_84": 0,
        "col_85": 0,
        "col_86": 0,
        "col_87": 0,
        "col_88": 0,
        "col_89": 0,
        "col_90": 0,
        "col_91": 0,
        "col_92": 0,
        "col_93": 0,
        "col_94": 0,
        "col_95": 0,
        "col_96": 0,
        "col_97": 0,
        "col_98": 0,
        "col_99": 0,
        "col_100": 0,
        "col_101": 0,
        "col_102": 0,
        "col_103": 0,
        "col_104": 0,
        "col_105": 0,
        "col_106": 0,
        "col_107": 0,
        "col_108": 2,
        "col_109": 0,
        "col_110": 1,
        "col_111": 1222
      }
    ]
  }
  console.log(files);

  
  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("uploadFile", uploadFile);
    const data1= JSON.parse(files)
    axios
      .post("http://localhost:8000/predict", data1 )
      .then((response) => {
        // successfully uploaded response
        console.log(response);
        setResponse(response.data.predictions[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };    
  }   


  return (
    <div className="div3">

    <div className="card">
    {response> 0.5 ? <img className="photo" src={ride} alt="this is car image" /> : <> transaction frauduleuse</>}
    <div className="container">
  <div className="div1">
  <form onSubmit={submitForm}>
    {/* <input type="file" onChange={(e) => setUploadFile(e.target.files)} /> */}
    <input type="file" onChange={handleChange} />
  <br />

  <p>{`Prediction : ${response}`} </p>
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
