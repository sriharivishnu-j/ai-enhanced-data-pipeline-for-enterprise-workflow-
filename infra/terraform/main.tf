provider "aws" {
  region = "us-west-2"
}
resource "aws_lambda_function" "ai_handler" {
  filename         = "lambda_handler.zip"
  function_name    = "ai_handler"
  role             = aws_iam_role.lambda_exec.arn
  handler          = "lambda_handler.lambda_handler"
  runtime          = "python3.8"
  source_code_hash = filebase64sha256("lambda_handler.zip")
}
resource "aws_api_gateway_rest_api" "api" {
  name = "workflow-api"
}