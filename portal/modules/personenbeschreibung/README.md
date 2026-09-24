# Personenbeschreibung

Deutsch, 5. Schulstufe. Eigene Übungen orientiert an Deutschstunde 1 Sprachbuch, S. 26–29 und 208. Keine übernommenen Buchbilder oder Buchtexte.

- Fünf Stationen zum Beobachten, Wortschatz, Aufbau, Formulieren und Überarbeiten.
- Lokaler, deterministischer SVG-Personengenerator; `?person=1234` stellt dieselbe Figur wieder her.
- Keine externen Dienste, Bilderzeugungs-APIs oder Schülerdatenspeicherung.
- Mit/ohne Wortschatzhilfe und Schwarz-Weiß-Ansicht.
- Drucken: 4 Übungsseiten, 2 Schreibseiten, 2 getrennte Lösungsseiten, aktuelle Station oder 3 unterschiedliche Schreibblätter (6 Seiten).
- Etwa 100 Wörter als Schreibziel; dynamische Beispieltexte enthalten 97–101 Wörter.
- Druckbereich wird aus der aktuellen Person aufgebaut. SVG-Muster haben instanzweise eindeutige IDs, damit ausgeblendete Bildschirmfiguren den Ausdruck nicht beeinflussen.

## Prüfung

Im Browser (Edge/Chromium) geprüft: reproduzierbare Person nach Neuladen, neue Zufallsperson, Quizrückmeldungen, alle Zuordnungen, Navigation, Hilfestufen, Druckauswahl, drei Varianten mit unveränderter Bildschirmvorlage, keine JavaScript-Fehler und keine horizontale Überbreite bei 390 px. A4-PDF-Seitenzahlen: 6/4/2/2/6; Druckseiten visuell kontrolliert. Beispieltextlängen für 100 Seeds geprüft.

Zum lokalen Prüfen das Repository mit einem HTTP-Server bereitstellen und `/portal/modules/personenbeschreibung/` öffnen. A4 bei 100 % drucken; Browser-Kopf-/Fußzeilen ausschalten. Das Schreibblatt beidseitig an der langen Kante drucken.
