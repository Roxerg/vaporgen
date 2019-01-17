from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def hello(name=None):
    return render_template('page.html', name=name)

if __name__ == "__main__":
    app.run()