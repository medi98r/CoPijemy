
<!DOCTYPE HTML>
<html lang="pl">
<head>
  <meta charest="utf-8"/>
  <title>CoPijemy?</title>
  <meta name="description" content ="Dzięki nam będziesz wiedział, co dziś pijesz!"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" href="style.css" type="text/css"/>
</head>
<body>
  <div>
    <div id="container">
      <div id="header">
        <img src="img/logo.png" alt="Błąd" class="image_1">
      </div>
      <div id="navigation">
        <ol>
          <li><a href="index.php">Strona główna</a></li>
          <li><a href=#>O nas</a></li>
          <li><a href=#>Przepisy</a></li>
          <li><a href=#>Konto premium</a></li>
          <li><a href=#>Zarządzanie kontem</a></li>
        </ol>
      </div>
	  <div id="loginpanel">
		<br/><br/><br/><br/><br/>
		<form action="login.php" method="post">
		Login/e-mail:<br/><input type="text" name="login"/> <br/>
		Hasło:<br/><input type="password" name="haslo"/> <br/>
		Pin:<br/><input type="password" name="pin"/> <br/>
		<input type="submit" value="Zaloguj się"/>
		</form>
	  <a href="rejestracja.php">Rejestracja - Załóż darmowe konto!</a>
		<br/><br/>
	  </div>
    </div>
  </div>
</body>
</html>
