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

@app.route("/filename/", methods=['GET', 'POST'])
def get_filename() :
    response = jsonify({'state':'ee'})
    content = request.json
    #print(content['filename'])
    #if request.method == 'POST' :
        #response= jsonify({'state':'ff'})
        #return response
    return response


if __name__ == '__main__' :
    app.run(host='127.0.0.1', port=8000, debug=True)