from flask import Flask

def create_app(test_config=None):
    app = Flask(__name__)
    app.config.from_mapping(
        SECRET_KEY='totally-secret-key'
    )
    if test_config:
        app.config.from_mapping(test_config)
    
    from api import api
    app.register_blueprint(api.bp)
    return app