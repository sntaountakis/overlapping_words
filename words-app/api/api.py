from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return jsonify({"test": 34})