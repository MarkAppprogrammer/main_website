from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/aboutus")
def aboutus():
    return render_template('aboutus.html')

@app.route("/team")
def aboutus():
    return render_template('team.html')

app.run(host = "0.0.0.0")

#run ./ngrok http 5000 after this loads

