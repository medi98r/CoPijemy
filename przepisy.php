
<!DOCTYPE HTML>
<html lang="pl">
<head>
  <meta charest="utf-8"/>
  <title>CoPijemy?</title>
  <meta name="description" content ="Dzięki nam będziesz wiedział, co dziś pijesz!"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css" type="text/css"/>
  <style>
 @font-face {
	font-family: Roboto-MediumItalic;
	src:url(font/Roboto-MediumItalic.ttf);
  }
  </style>
</head>
<body>
  <div>
    <div id="container">
	
      <div id="header">
        <img src="img/logo.png" alt="Błąd" class="image_1">
      </div>
	  
      <div id="navigation">
       <b><ol>
          <li><a href="index.php">STRONA GŁÓWNA</a></li>
          <li><a href=#>O NAS</a></li>
          <li><a href="przepisy.php">PRZEPISY</a></li>
          <li><a href=#>PREMIUM</a></li>
          <li><a href="account.php">TWOJE KONTO</a></li>
        </ol></b>
      </div>
	  <div id="przepis">
		Podaj nazwę drinka:<input type="text">
		</br>
		<div id="selector">
		lub wybierz spośród wielu kategorii:
		<select id="alkohol">
			<option>-----</option>
			<option>Wódka</option>
			<option>Whisky</option>
			<option>Gin</option>
			<option>Rum</option>
		</select>
		<select id="napoj">
			<option>Cola</option>
			<option>Sok</option>
			<option>Sprite</option>
		</select>
		<select id="trudnosc">
			<option>Łatwy</option>
			<option>Średni</option>
			<option>Trudny</option>
		</select>
		<select id="moc">
			<option>Słaby</option>
			<option>Średni</option>
			<option>Mocny</option>
		</select>
		</div>
			</br>
			<ul>
				<li class="Wódka"><a href="black.php">BlackRussian</a></li>
				<li class="Wódka"><a href="white.php">White Russian</a></li>
				<li class="Whisky"><a href="bomb.php">JaggerBomb</a></li>
				<li class="Gin"><a href="john.php">JohnCollins</a></li>
				<li class="Gin"><a href="bg.php">BlueGin</a></li>
				<li class="Rum"><a href="bg.php">PinkLady</a></li>
				<li class="More"><a href="black.php">LongIslandIceTea</a></li>
				<li class="Wódka"><a href="white.php">Paradise Bay</a></li>
				<li class="Whisky"><a href="bomb.php">Old Fashioned </a></li>
				<li class="Whisky"><a href="john.php">Bloody Whisky </a></li>
				<li class="Whisky"><a href="bg.php">Whisky Sour </a></li>
				<li class="Rum"><a href="bg.php">Cuba Libre</a></li>
				<li class="Whisky"><a href="black.php">Jager Bullet</a></li>
				<li class="Wódka"><a href="white.php">Wściekły pies</a></li>
				<li class="Rum"><a href="bomb.php">Jack Sparrow </a></li>
				<li class="Wódka"><a href="john.php">Niebieskie Kamikadze</a></li>
				<li class="Rum"><a href="bg.php">Limonka i Malibu </a></li>
				<li class="Wódka"><a href="bg.php">Flaga Polski </a></li>
				<li class="Rum"><a href="john.php">Lagoon</a></li>
			</ul>
		</div>
	  </div>
   </div>
   <script src="filters.js"></script>
</body>
</html>