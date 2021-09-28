import uvicorn as uvicorn

from api import authenticate_with_file, app

if __name__ == '__main__':
    authenticate_with_file()
    uvicorn.run(app=app,
                host='0.0.0.0',
                port=8080)
