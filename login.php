<?php

	require_once"connect.php";
	
	$connection = @new mysqli($host, $db_user, $db_password, $db_name);

	if($connection->connect_errno!=0)
	{
		echo "Error: ".$connection->connect_errno;
	}
	else
	{
		$login=$_POST['login'];
		$haslo=$_POST['haslo'];
		
		$sql = "SELECT * FROM uzytkownicy WHERE user='$login' AND pass='$haslo'";
		
		if($rezultat=$connection->query($sql))
		{
			$count_user = $rezultat->num_rows;
			if($count_user>0)
			{
				$row = $rezultat->fetch_assoc();
				$user = $row['user'];
				
				$rezultat->free_result();
				
				echo $user;
			}
			else
			{
				echo "taki użytkownik nie istnieje";
			}
		}
		
		$connection->close();
	}

	
?>