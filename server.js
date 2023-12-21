const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Beispiel-Benutzerdaten (in einer echten Anwendung sollten diese in einer Datenbank gespeichert werden)
const users = {
  'benutzer1': { 'password': 'passwort1', 'balance': 1000 },
  'benutzer2': { 'password': 'passwort2', 'balance': 500 }
};

// Beispiel-Währung
const customCurrency = 'CustomCoin';

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username].password === password) {
    res.json({ success: true, message: 'Anmeldung erfolgreich' });
  } else {
    res.status(401).json({ success: false, message: 'Falscher Benutzername oder Passwort' });
  }
});

app.post('/api/logout', (req, res) => {
  // Hier könntest du zusätzliche Logik für die Abmeldung implementieren
  res.json({ success: true, message: 'Abmeldung erfolgreich' });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
