# Advanced CSS

This project was made to hopefully achieve a good grade for the course Advanced CSS @ FH Hagenberg.

In order to maintain quality code, we use a github repo: [GitHub](https://github.com/CiLLiTxBanger/AdvancedCSS_JG19)

Collaborators are: Johannes Eder, Jonas Mautner, Manuel Strobel

Note: This file should be updated before we submit the project.
Test


## Git Tutorial

Die Git Einbettung in PHPStorm zeigt den `git status` der Files in der Projektansicht und `git diff` innerhalb des Files. Weitere wichtige commands sind hier gelistet. Die meisten haben eine ganze Reihe an Options, die es in der Git Doku nachzulesen gilt:

~~~sh
# projekt herunterladen
git clone https://github.com/CiLLiTxBanger/AdvancedCSS_JG19.git

# aktuellen stand von remote 'origin' und branch 'master' herunterladen
git pull origin master

# geänderte / neue files auflisten
git status

# unterschiede anzeigen (q für quit)
git diff

# files zum committen bereit machen
git add *
git add some/path
git add some/file.php
git add . #<-- Benutze ich meistens, ich glaub das added alle Änderungen. Funktioniert eigt. immer.

# bereitgelegte files committen 
git commit -m "My commit message"

# files pushen
git push 
~~~
###Anleitung
1. In PHPStorms ein neues Projekt anlegen.
2. Hier das Terminal öffnen und das Projekt klonen
3. Änderungen machen PiPaPo
4. ```git
   git add . 
5. ```git
   git commit -m "Ganz kurze Beschreibung was geändert wurde"
6. ```git
    git push
Schritt 1 & 2müssen nur beim ersten Mal durchgeführt werden.

Ich würde auch vorschlagen wir benutzen keine branches, sonst wirds noch aufwendiger und soo komplex/aufwändig ist das Projekt ja auch wieder nicht :)
