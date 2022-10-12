from ast import Str
import json
import logging
from typing import List, Optional
from unittest import result
from fastapi import APIRouter, Query
from starlette.requests import Request
import mlflow
from app.core.utils import process_predict_payload
from app.schemas import InputPayload, PredictionResult

router = APIRouter()


@router.post("/predict", response_model=PredictionResult, name="predict")

   
async def predict(
        request: Request,
        payload: Optional[InputPayload] ,
        proba_threshold: Optional[float] = Query(.5, gt=0., lt=1.),
        return_proba: Optional[bool] = True
) -> PredictionResult:
    logging.info("/predict endpoint call")
    model = request.app.state.model
    mlflow.set_experiment(experiment_name='fastapi-fraud-detection-last_one')
    X = process_predict_payload(payload)
    logging.info(f"Inference on {X.shape[0]} samples")
    if return_proba:
        predictions = model.predict_proba(X)[:, 1]
    else:
        predictions = model.predict(X, proba_threshold)

    result = PredictionResult(
        predictions=predictions.tolist()
    )
    
    with mlflow.start_run( run_name=''):
     
     mlflow.log_param('return_proba',return_proba)
     mlflow.log_param('proba_threshold',proba_threshold)
     mlflow.log_param('Result',result.predictions[0]) 
    
   
   
    return result
