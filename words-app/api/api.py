from flask import Flask, request, jsonify, abort
from algo.detect_overlap import detect_overlap

app = Flask(__name__)


@app.route('/api/overlapping', methods=['POST'])
def index():
    
    # See how to bullet proof check everything

    data = request.get_json()
    print(data)
    if not data:
        abort(400, 'word field is empty')
    
    word = data['word']
    second_word = data['second_word']

    overlap_len, overlap_str = detect_overlap(word, second_word)

    return jsonify({"word": overlap_str, "len": overlap_len})