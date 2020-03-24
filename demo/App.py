from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)


@app.route("/")
def index() :
    return "Hello Flask"

@app.route("/profile/<username>")
def get_profile(username) :
    return "profile: " + username

@app.route("/file/", methods=['GET', 'POST'])
@cross_origin(origin='*', headers=['Contect-Type'])
def get_filepath() :
    response = jsonify({'state':'ee'})
    if request.method == 'POST' :
        print(request.files['file'])
        f = request.files['file']
        f.save(secure_filename(f.filename))
        response= jsonify({'state':'ff'})
        return response
    return response


if __name__ == '__main__' :
    app.run(host='127.0.0.1', port=8000, debug=True)