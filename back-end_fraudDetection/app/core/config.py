from pathlib import Path

APP_VERSION = "0.1"
APP_NAME = "Imagine:fraud-detection-api"    

DATA_X_TRAIN_PATH = r"data/X_train.csv"
DATA_y_TRAIN_PATH = r"data/y_train.csv"
DATA_X_VAL_PATH = r"data/X_val.csv"
DATA_y_VAL_PATH = r"data/y_val.csv"

DATA_MODEL_PATH = Path(r"app/artifacts/model.pkl")
