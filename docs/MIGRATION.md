# Migration: Portal-Struktur

Alle bisherigen Root-Links bleiben aktiv. Die alten Dateien leiten auf die neuen Module unter `/portal/modules/<slug>/` weiter.

| Alt (Root) | Neu (Portal) |
| --- | --- |
| `/1weltkrieg.html` | `/portal/modules/1weltkrieg/` |
| `/3dkoerperwerkstatt3.html` | `/portal/modules/3dkoerperwerkstatt3/` |
| `/3dmaerchengenerator.html` | `/portal/modules/3dmaerchengenerator/` |
| `/Argument.html` | `/portal/modules/argument/` |
| `/ArgumenteWaage.html` | `/portal/modules/argumentewaage/` |
| `/FremdwortGenerator.html` | `/portal/modules/fremdwortgenerator/` |
| `/Lernstudio3plan.html` | `/portal/modules/lernstudio3plan/` |
| `/Speedrunde.html` | `/portal/modules/speedrunde/` |
| `/ZeitformenQuiz.html` | `/portal/modules/zeitformenquiz/` |
| `/memorypassiv.html` | `/portal/modules/memorypassiv/` |
| `/montessori-wortarten2.html` | `/portal/modules/montessori-wortarten2/` |
| `/dreiecke.html` | `/portal/modules/dreiecke/` |
| `/durchgeschuettelt.html` | `/portal/modules/durchgeschuettelt/` |
| `/koerperbauen.html` | `/portal/modules/koerperbauen/` |
| `/koerperbauen3d.html` | `/portal/modules/koerperbauen3d/` |
| `/orbit.html` | `/portal/modules/orbit/` |
| `/rsinvasion.html` | `/portal/modules/rsinvasion/` |
| `/schallschutz.html` | `/portal/modules/schallschutz/` |
| `/suchmaschinen.html` | `/portal/modules/suchmaschinen/` |
| `/KI.html` | `/portal/modules/ki/` |
| `/KleinesEinmaleinsAdaptiv.html` | `/portal/modules/kleines-einmaleins-adaptiv/` |
| `/EnglishTensesFormulas.html` | `/portal/modules/english-tenses-formulas/` |
| `/FileExplorerSpeicherorte.html` | `/portal/modules/file-explorer-speicherorte/` |

Hinweis: Die Root-Dateien sind jetzt Wrapper mit sofortigem Redirect, damit bestehende URLs in GitHub Pages weiterhin funktionieren.
