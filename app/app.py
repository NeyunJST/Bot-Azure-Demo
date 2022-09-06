from ast import Pass
from flask import Flask, render_template

app = Flask(__name__)

#hacemos el home
@app.route('/')#ruta inicial o raiz 
def index(): #funcion que contiena la ruta del index principal y por tanto el home
    #return "retorna el string o tag de html"
    return render_template('Index.html')

@app.route('/recognize')
def recognize():
    return render_template('recognize.html')

@app.route('/syntesize')
def syntesize():
    return render_template('synthesize.html')
#inicializar el flask
if __name__ == '__main__':
    #parametros para la ejecucion del programa
    #debug: para la depuracion (al activarlo funciona incluso con las actualizaciones, desactivado tienes que cerrar servidor y volver a abrir)
    #port: el puerto en el que se ejecuta (5000 es default)
    app.run(debug=True, port=5000)