from email import message
from pickle import TRUE
from flask import Flask, render_template, url_for, redirect, request, Blueprint, app, session, flash


main = Blueprint('main', __name__)

@main.route("/", methods = ['GET','POST'])
def index():
    if request.method == 'POST':
        username=request.form['username']
        password=request.form['password']
        if username == 'admin' and password== 'admin@123':
            session['user'] = True
            return redirect(url_for('main.upgrade'))
        else:
            return render_template('public_pages/index.html', message= str("your login credential are invalid"))
    else:
        session['user'] = False
        return render_template('public_pages/index.html')

@main.route("/upgrade", methods = ['GET', 'POST'])
def upgrade():
    if session.get("user") == True:
        return render_template('public_pages/upgrade.html')
    else:
        return redirect(url_for('main.index'))

@main.route("/review", methods = ['GET', 'POST'])
def review():
    if session.get("user") == True:
        return render_template('public_pages/review.html')
    else:
        return redirect(url_for('main.index'))

@main.route("/payment", methods = ['GET', 'POST'])
def payment():
    if session.get("user") == True:
        return render_template('public_pages/payment.html')
    else:
        return redirect(url_for('main.index'))
