from email import message
from flask import Flask, render_template, url_for, redirect, request, Blueprint, app,flash


main = Blueprint('main', __name__)

@main.route("/", methods = ['GET', 'POST'])
def index():
    return render_template('public_pages/index.html')

@main.route("/upgrade", methods = ['GET', 'POST'])
def upgrade():
    return render_template('public_pages/upgrade.html')

@main.route("/review", methods = ['GET', 'POST'])
def review():
    return render_template('public_pages/review.html')

@main.route("/payment", methods = ['GET', 'POST'])
def payment():
    return render_template('public_pages/payment.html')
