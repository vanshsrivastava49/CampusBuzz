from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)
db_config = {
    'user': 'root',
    'password': 'Luck0409@',
    'host': 'localhost',
    'database': 'college'
}

# Home route
@app.route('/')
def home():
    # Connect to MySQL
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    
    # Execute a query
    cursor.execute("SELECT * FROM users")
    data = cursor.fetchall()
    
    # Close the connection
    cursor.close()
    conn.close()
    
    # Render the template with data
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
