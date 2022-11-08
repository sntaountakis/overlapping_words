from flask import Flask

def create_app(config_class=None):
    app = Flask(__name__)
    
    return app