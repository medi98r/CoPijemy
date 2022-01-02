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
		<form action="rejestracja.php" method="post">
		<?php

	session_start();

	if (isset($_POST['email']))
	{
		//Udana walidacja? Zakładamy, że tak!
		$wszystko_OK=true;
		
		//Sprawdzenie poprawności Nickmane
		$nick = $_POST['nick'];
		
		//Sprawdzenie długości nicka
		if (strlen($nick)<3||(strlen($nick)>20))
		{
			$wszystko_OK=false;
			$_SESSION['e_nick']="Nick musi posiadać od 3 do 20 znaków!";
		}
		
		if(ctype_alnum($nick)==false)
		{
			$wszystko_OK=false;
			$_SESSION['e_nick']="Nick może się zawierać tylko z liter i cyfr!(bez polskich snaków)";
		}
		
		//Sprawdzenie poprawności adresu email
		$email = $_POST['email'];
		$emailB= filter_var($email, FILTER_SANITIZE_EMAIL);
		
		if((filter_var($emailB,FILTER_SANITIZE_EMAIL)==false)||($emailB!=$email))
		{
			$wszystko_OK=false;
			$_SESSION['e_mail']="Podaj poprawny adres E-mail";
		}
		
		//Sprawdzenie poprawności hasła
		$haslo1=$_POST['haslo1'];
		$haslo2=$_POST['haslo2'];
		
		if((strlen($haslo1)<6)||(strlen($haslo1)>20))
		{
			$wszystko_OK=false;
			$_SESSION['e_haslo']="Hasło musi posiadać od 8 do 20 znaków!";
		}
		
		if($haslo1!=$haslo2)
		{
			$wszystko_OK=false;
			$_SESSION['e_haslo']="Podane hasła są od siebie różne!";
		}
		
		$haslo_hash=password_hash($haslo1, PASSWORD_DEFAULT);
		
		//Czy zaakceptowano regulamin
		if(!isset($_POST['regulamin']))
		{
			$wszystko_OK=false;
			$_SESSION['e_regulamin']="Potwierdź akceptację regulaminu!";
		}
		
		
		require_once "connect.php";
		mysqli_report(MYSQLI_REPORT_STRICT);
		
		try
		{
			$polaczenie = new mysqli($host, $db_user, $db_password , $db_name);
			if ($polaczenie->connect_errno!=0)
			{
				throw new Exception(mysqli_connect_errno());
			}
			else
			{
				//Czy email już istnieje?
				$rezultat=$polaczenie->query("SELECT id FROM uzytkownicy WHERE email='$email'");
				
				if (!$rezultat) throw new Exception($polaczenie->error);
				
				$ile_takich_maili= $rezultat->num_rows;
				if($ile_takich_maili>0)
				{
					$wszystko_OK=false;
					$_SESSION['e_mail']="Istnieje już konto przypisane do tego adresu email!";
				}
				//Czy nick jest zajęty?
				$rezultat=$polaczenie->query("SELECT id FROM uzytkownicy WHERE user='$nick'");
				
				if (!$rezultat) throw new Exception($polaczenie->error);
				
				$ile_takich_nickow= $rezultat->num_rows;
				if($ile_takich_nickow>0)
				{
					$wszystko_OK=false;
					$_SESSION['e_nick']="Istnieje już taki nick! Wybierz inny!";
				}
				
				if($wszystko_OK==true)
				{
					//Wszystko poszło po dobrej myśli
					if ($polaczenie->query("INSERT INTO uzytkownicy VALUES (NULL,'$nick','$haslo_hash','$email', 12)"))
					{
						$_SESSION['udanarejestracja']=true;
						header('Location:account.php');
						
					}
					else
					{
						throw new Exception($polaczenie->error);
					}
				}
				
				$polaczenie->close();
			}
			
		}
		catch(Exception $e)
		{
			echo'<span style ="color:red;">Błąd serwera! Przepraszamy za niedogodności i prosimy o rejestrację w innym terminie!</span>';
			
		}
		
		
		
		//Wszystko sprawdzone, dodajemy konto do bazy
		
		
		
		
	}
?>

<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>CoPijemy? - załóż darmowe konto</title>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
	
	<style>
	.error
	{
		color:red;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	</style>
	
	
</head>

<body>
	
	<form method="post">
	
	Nickmane: <br /> <input type="text" name="nick" /><br />
	
	<?php
		
		if (isset($_SESSION['e_nick']))
		{
			echo '<div class="error">'.$_SESSION['e_nick'].'</div>';
			unset($_SESSION['e_nick']);
		}
	
	?>
	
	E-mail: <br /> <input type="text" name="email" /><br />
	
	<?php
		
		if (isset($_SESSION['e_mail']))
		{
			echo '<div class="error">'.$_SESSION['e_mail'].'</div>';
			unset($_SESSION['e_mail']);
		}
	
	?>
	
	Twoje hasło: <br /> <input type="password" name="haslo1" /><br />
	
	<?php
		
		if (isset($_SESSION['e_haslo']))
		{
			echo '<div class="error">'.$_SESSION['e_haslo'].'</div>';
			unset($_SESSION['e_haslo']);
		}
	
	?>
	
	Powtórz hasło: <br /> <input type="password" name="haslo2" /><br />
	
	<label>
	<input type="checkbox" name="regulamin" /> Akceptuje regulamin
	</label>
	
	<?php
		
		if (isset($_SESSION['e_regulamin']))
		{
			echo '<div class="error">'.$_SESSION['e_regulamin'].'</div>';
			unset($_SESSION['e_regulamin']);
		}
	
	?>
	<br />
	
	<input type="submit" value="Zarejestruj się" />
	
	</form>
	
</body>
</html>
		<input type="submit" value="Zaloguj się"/>
		</form>
	  <a href="rejestracja.php"</a>
		<br/><br/>
	  </div>
    </div>
  </div>
</body>
</html>


