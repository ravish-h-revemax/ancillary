from flask import Flask
from webapplication.config import Config

def create_app(config_Class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    from webapplication.main.routes import main

    app.register_blueprint(main)

    return app