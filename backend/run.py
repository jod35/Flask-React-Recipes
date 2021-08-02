from main import create_app
from config import DevConfig

if __name__ == '__main__':
    app=create_app(DevConfig)
    app.run()