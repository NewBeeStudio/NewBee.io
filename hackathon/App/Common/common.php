<?php
	/*
     * public functions to be written here
	 */
	function p($data){
		dump($data, 1, '<pre>', 0);
	}

	function SendMail($address,$title,$message){
		vendor('PHPMailer.class#phpmailer');
		$mail=new PHPMailer();
		$mail->IsSMTP();
		$mail->CharSet='UTF-8';
		$mail->AddAddress($address);
		$mail->Body=$message;
		$mail->From=C('MAIL_ADDRESS');
		$mail->FromName='创客工作坊';
		$mail->Subject=$title;
		$mail->Host=C('MAIL_SMTP');
		$mail->SMTPAuth=true;
		$mail->Username=C('MAIL_LOGINNAME');
		$mail->Password=C('MAIL_PASSWORD');
		return($mail->Send());
	}

	function getRandStr($length){  
		$str = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
		$randString = ''; 
		$len = strlen($str)-1; 
		for($i = 0;$i < $length;$i ++){ 
			$num = mt_rand(0, $len); 
			$randString .= $str[$num]; 
		} 
		return $randString;
	}
?>