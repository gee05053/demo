from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def index() :
    return "Hello Flask"

@app.route("/profile/<username>")
def get_profile(username) :
    return "profile: " + username

if __name__ == '__main__' :
    app.run(host='127.0.0.1', port= 8000, debug=True)