from api import app
from flask import request, jsonify

@app.route('/')
@app.route('/index')

def index():
    return jsonify({'Hello Friend': 3})