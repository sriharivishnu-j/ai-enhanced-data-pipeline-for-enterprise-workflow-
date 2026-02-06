import json
import boto3
from model import Model
model = Model()
def lambda_handler(event, context):
    input_data = event.get('data')
    result = model.predict(input_data)
    return {
        'statusCode': 200,
        'body': json.dumps(result)
    }