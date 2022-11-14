import pytest, json
from api import create_app

@pytest.mark.parametrize(('word', 'second_word', 'output'), (
    ('', 'foo', {'error': 'Field cannot be empty'}),
    ('foo', '', {'error': 'Field cannot be empty'}),
    ('', '', {'error': 'Field cannot be empty'}),
    ('device', 'ice', {'word': 'ice', 'len': 3}),
    ('client', 'ice', {'word': 'ie', 'len': 2})
))

def test_overlap(client, word, second_word, output):
    response = client.post('/api/overlap', json={'word': word, 'second_word': second_word})
    assert output == response.json