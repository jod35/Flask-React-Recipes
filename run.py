from main import create_app
from config import DevConfig,ProdConfig

if __name__ == '__main__':
    app=create_app(ProdConfig)
