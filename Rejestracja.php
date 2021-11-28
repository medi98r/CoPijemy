<?php
ob_start();
session_start();
?>
 
<?php include('header.php'); ?>
 
<div class="content">
 
<?php
 
if (!isset($_SESSION['login'])) { 
 
    include 'inc/User.sql'; 
    $tabela = 'user'; 
 
if (isset($_POST["wyslane"])) { 
        $login = mysql_real_escape_string(trim($_POST["login"]));
        $haslo = mysql_real_escape_string(trim($_POST["haslo"]));
        $haslo2 = mysql_real_escape_string(trim($_POST["haslo2"]));
        $email= mysql_real_escape_string(trim($_POST["email"]));
 
        
        if (strlen($login) < 3 or strlen($login) > 30 or !eregi("^[a-zA-Z0-9_.]+$", $login)) {
            $blad++;
            echo '<span class="blad">Proszę poprawny wprowadzić login (od 3 do 30 znaków).</span>';
        } else {
            $wynik=mysql_query("SELECT * FROM $tabela WHERE login='$login'") or die(mysql_error());
    if (mysql_num_rows($wynik)>0) { $blad++;
      echo "Wybrany login jest już używany przez innego użytkownika.";
    }
  }
 
        if (strlen($haslo) < 6 or strlen($haslo) > 30 ) {
            $blad++;
            echo '<span class="blad">Proszę poprawnie wpisać hasło (od 6 znaków do 30 znaków).</span>';
        }
        if ($haslo !== $haslo2) {
            $blad++;
            echo '<span class="blad">Podane hasła nie są ze sobą zgodne.</span>';
        }
        if (!eregi("^[0-9a-z_.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$", $email)) {
            $blad++;
            echo '<span class="blad">Proszę wprowadzić poprawnie adres email.</span>';
        }
 
        
        if ($blad == 0) {
 
            $haslo = md5($haslo); 
            $kod = uniqid(rand()); 
 
            $wynik = mysql_query("INSERT INTO $tabela VALUES('','$login','$haslo','$email')");
            if ($wynik) {
                $list = "Witaj $login !
                Kliknij w poniższy link, aby aktywować swoje konto. <a href="http://www.nazwa-twojej-strony.pl/weryfika...#036;kod&quot;;" target="_blank">http://www.nazwa-twojej-strony.pl/weryfika...#036;kod";</a>
                mail(html_entity_decode($email), "Rejestracja użytkownika", $list, "From: <kontakt@twoja-strona.pl>");
                echo '<p>Dziękujemy za rejestrację! W ciągu nabliższych 5 minut dostaniesz wiadomość e-mail z dalszymi wskazówkami rejestracji.</p>';
                mysql_close($polaczenie);
                exit;
            }
        }
        mysql_close($polaczenie);
    }
 

 
} 
 
?>
 
</div>
 
<?php include('footer.php'); ?>
