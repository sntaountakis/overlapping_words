from flask import Flask, request, jsonify, abort

app = Flask(__name__)

@app.route('/')
@app.route('/index', methods=['POST'])
def index():
    data = request.get_json()
    print(data)
    if not data:
        abort(400, 'word field is empty')

    return jsonify({"word": "ie", "nletters": 2})