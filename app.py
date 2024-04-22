from flask import Flask, render_template, request, redirect
import smtplib, ssl

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'GET':
        return render_template("index.html")
    
    elif request.method == 'POST':
        name = request.form["name"]
        email = request.form["email"]
        enquiry = request.form["enquiry"]

        host = "mail.apsystems.africa"
        server = smtplib.SMTP(host)
        FROM = "no-reply@apsystems.africa"
        TO = "cgama@apsystems.africa"
        MSG = f"Subject: New Enquiry from {name}\n\nEmail: {email}\n\nEnquiry: {enquiry}"
        server.sendmail(FROM, TO, MSG)

        server.quit()

        return render_template("confirmation.html", name=name)

@app.route('/Utopia-on-the-Rock-1')
def property_1():
    return render_template("prop-1.html")

@app.route('/Utopia-on-the-Rock-2')
def property_2():
    return render_template("prop-2.html")

@app.route('/Utopia-At-LeMirell')
def property_3():
    return render_template("prop-3.html")

if __name__ == "__main__":
    app.run(debug=True)