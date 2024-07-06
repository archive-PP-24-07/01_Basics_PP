# 01_hello_world
Testen, ob node.js vorhanden ist: node -v

>ja, v20.14.0

Testen, ob npm vorhanden ist: npm --v

>ja, 10.7.0

Projekt initialisieren: npm init -y

>ok, package.json angelegt worden

Ordner src anlegen

>done.

Im Ordner: "src" die Datei: "01_hello_world.js" anlegen

>done.

Pfad zu "main" in package.json aktualisieren

>done:  "main": "src/01_hello_world.js"

Ausgabe Testen console.log("Hello, world!")

>done: console.log("Hello World!");

# 02_variablen

Im Ordner: "src" die Datei: "02_variablen.js" anlegen

>done.

Pfad zu "main" in package.json aktualisieren

>done:  "main": "src/02_variablen.js"

Ausgabe Testen console.log("ping")

>ok

# 03_prompt

> installiern mit: npm i prompt-sync

> Erstelle: .gitignore

# 04_Codechallenge 01

1. Geben Sie über eine Prompt-Anforderung eine Zahl ein.
2. Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
3. Berechnen Sie die Summe der beiden Zahlen.
4. Geben Sie die Summe der Zahlen in die Konsole aus:
    "Die Summe der Zahlen ist: summe"

> Beachte: prompt gibt string zurück, muss zum addieren auf "Number" gecasted werden

# 05_wahrheitswerte

Wahrheitswerte und Vergleiche

> Grundlagen: true,false,Ausdrücke etc. 

# 06_controlflow

> Grundlagen Selektion: if, else, else if, ternärer operator, switch-case

> persönliche Meinung: Switch-Case ist zutiefst zu Verdammen jedoch bequem und effizient.

# 07_Codechallenge 02

1. Geben über eine Prompt-Anforderung einen Namen ein

2. Geben über eine Prompt-Anforderung ein Alter ein

3. Geben Sie in Abhängigkeit vom angegebenen Alter 
    folgende Getränkeauswahl in die Konsole aus :

- Alter 0-5 // Milch  --> age > 0 AND age < 6
- Alter 6-12 // Saft
- Alter 13-17 // Cola
- 18 + // Wein

-->zB: "Max trinkt Cola."

# 08_funtionen und 09_funktionen

> Kurs verpasst, proforma upload von:
> src/08_funktionen_I.js und src/09_funktionen_II.js

# 09_Sven_funktionen

> persönliche Musterlösung /leider nicht gut testbar!

# 10_Musterlösung

> elegante SRP Lösung mit Inputkontrolle