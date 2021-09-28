import uvicorn as uvicorn

from server.src.survey_server.api import app, authenticate_with_file

if __name__ == '__main__':
    authenticate_with_file()
    uvicorn.run(app=app,
                host='0.0.0.0',
                port=8080)