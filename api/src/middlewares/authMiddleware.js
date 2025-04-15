const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_key';

// Middleware pour vérifier l'authentification
const checkAuth = (req, res, next) => {
  // Récupérer le token dans les cookies
  const token = req.cookies.auth_token;

  if (!token) {
    // Si pas de token, rediriger vers la page de login
    return res.redirect('/login.html');
  }

  // Vérifier le token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      // Si le token est invalide, rediriger vers la page de login
      return res.redirect('/login.html');
    }

    // Si le token est valide, ajouter les informations de l'utilisateur à la requête
    req.user = decoded.user; 
    next(); // Continuer vers la route suivante
  });
};

module.exports = checkAuth;