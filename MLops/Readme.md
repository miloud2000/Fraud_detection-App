 
## MLflow 
MLflow is an open-source platform that enables smooth organization of a machine learning project. It handles the machine learning lifecycle such that if we use MLflow for deploying an ML project built on an unsupported framework, it provides an open interface to integrate that framework with the existing system easily. 
MLflow is said to be ‘library-agnostic’ which means, as all the functionalities of MLflow can be accessed using REST API and CLI, any ML library and any programming language can be used while handling a project using MLflow.
### 1. Install MLflow  
Installation of MLflow is very simple.
 `pip install mlflow`
## Major components of MLflow
### 1. MLflow Tracking
It allows an ML practitioner to capture the metadata required for the ML project regardless of the working environment in which the
project is being trained and deployed. It is based on a concept called      ‘runs’ where each run has the following parts
of information:
- Code version
- Start and end time of that run
- Source that marks the starting point of the run
- Parameters (basically key-value pairs)
- Metric to trace the run
- Artifacts (output files recorded for late visualization of previous runs)
Wherever we run our program, the Tracking API by default records the corresponding data into a local directory ./mlruns. The Tracking UI can then be run using the command:

`mlflow ui`    

 Example of logging parameters (key-value pairs, each of which must be a string) 


`mlflow.log_param("parameter1", 8.26) `


Example of logging a metric, say accuracy of the model (it is update-able throughout the run)


`mlflow.log_metric("acc", 0.9)`


Example of logging an artifact i.e. an output file, say abc.txt


mlflow.log_artifact("abc.txt")


Wherever we run our program, the Tracking API by default records the corresponding data into a local directory ./mlruns. The Tracking UI can then be run using the command:


`mlflow ui`


It can then be viewed at https://localhost:5000 

