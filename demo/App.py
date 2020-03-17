from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def index() :
    return "Hello Flask"

@app.route("/profile/<username>")
def get_profile(username) :
    return "profile: " + username

@app.route("/filename/", methods=['GET', 'POST', 'OPTIONS'])
def get_filename() :
    content = request.json
    print(content["filename"])
    return "dsadada"

if __name__ == '__main__' :
    app.run(host='127.0.0.1', port=8000, debug=True)