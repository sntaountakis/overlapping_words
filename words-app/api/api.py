from flask import Flask, request, jsonify, abort, Blueprint
from api import create_app
from api.algo.detect_overlap import detect_overlap

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.errorhandler(400)
def bad_request(error):
    return jsonify(error = error.description), 400

@bp.route('/overlap', methods=['POST'])
def index():
    data = request.get_json()
    
    if not data:
        abort(400, 'Could not fetch data')
    
    word = data['word']
    second_word = data['second_word']

    if not word or not second_word:
        abort(400, 'Field cannot be empty')

    overlap_len, overlap_str = detect_overlap(word, second_word)

    return jsonify({"word": overlap_str, "len": overlap_len})

@bp.route('/hello')
def hello():
    return 'Hello, World!'