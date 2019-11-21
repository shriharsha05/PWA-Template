"""
Flask-PWA Template
Developer : Shriharsha M [shriharsha05@computer.org]
"""

from flask import Flask, render_template, url_for, redirect, request, session, flash
from gevent.pywsgi import WSGIServer
from flask_compress import Compress
#from flask_sslify import SSLify


#flask config
app = Flask(__name__)
app.secret_key = 'SECRET_KEY'
#sslify = SSLify(app)
Compress(app)


@app.route('/', methods=['POST', 'GET'])
def index():
  return render_template('index.html')


@app.errorhandler(404)
def not_found(e):
  return render_template("404.html"), 404


@app.route('/sw.js', methods=['GET'])
def sw():
    return app.send_static_file('sw.js')


@app.route('/manifest.json')
def manifest():
    return app.send_static_file('manifest.json')


if __name__ == "__main__":
    # Development
    # app.run(host='0.0.0.0', port=8080, threaded=True, debug=True)

    #Production
    http_server = WSGIServer(('', 8080), app)
    http_server.serve_forever()
