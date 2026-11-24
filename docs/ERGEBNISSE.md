# Ergebnisse lokal speichern (`/js/hos-results.js`)

Alle Lern-Apps sollen Fortschritt und Ergebnisse **lokal im Browser** speichern, damit SuS zeigen können, was sie gemacht haben.
Das gemeinsame Modul fügt automatisch den Knopf **„📋 Meine Ergebnisse“** in `.header-actions` ein (sonst schwebend unten rechts).

```html
<script src="/js/hos-results.js"></script>
<script>
  const R = HoSResults.init({ app: 'mein-modul', title: 'Mein Modul' });
  R.answer(true, 'Bereich');                              // eine Aufgabe beantwortet
  R.round({ score: 8, total: 10, label: 'Test', wrong: ['…'] }); // Runde/Test beendet
  R.done('Level 2');                                      // etwas geschafft
  R.save('stand', { i: 3 }); R.load('stand', null);       // Zwischenstand
</script>
```

Speicher-Schlüssel: `hos-results:<app>`. Eigene Lösungen (z. B. Potenzterme, dass/das, Wortarten) bleiben bestehen.
