
<?php



include_once('PHPMailer/class.phpmailer.php');





class SendForms {

    public $id_of_form = ''; // Имя формы
    public $name_of_product = ''; // Название товара
    public $name = ''; // Имя
    public $email = '';  // Почта
    public $phone = ''; // Телефон
    public $text = '';  // Сообщение
    public $to_mail = ''; // Кому отправлтяь письма 
    public $name_of_site = ''; // Название сайта


    public function sendmail() {


         // print_r($_POST);
           
             
           
         if ($this->name != '') {
            $this->name = htmlspecialchars($this->name);
            $this->name = trim($this->name);
         }
         if ($this->email != '') {
            $this->email = htmlspecialchars($this->email);
            $this->email = trim($this->email);
         }
        //  if ($this->phone != '') {
        //     $this->phone = htmlspecialchars($this->phone);
        //     $this->phone = trim($this->phone);
        //  }
        //  if ($this->text != '') {
        //     $this->text = htmlspecialchars($this->text);
        //     $this->text = trim($this->text);
        //  }

         mail($this->to_mail, "Заказ демонстрации", "Мое имя:   ".$this->name." \r\nМоя почта:   ".$this->email,"From: isg-neuro.ru \r\n"."Content-type: text/plain; charset=UTF-8\r\n");
        
    
        





//         if ($this->id_of_form == 'follow') {
//         mail($this->to_mail, "Хочу подписаться", "Мое имя:   ".$this->name." \r\nРассылку присылать на:   ".$this->email,"From: vandeco.ru\r\n"."Content-type: text/plain; charset=UTF-8\r\n");
//         } elseif ($this->id_of_form == 'contact') {
// mail($this->to_mail, "Мой вопрос", "Мое имя:   ".$this->name." \r\nМоя почта:   ".$this->email." \r\nМой телефон:   ".$this->phone." \r\nМой вопрос:   ".$this->text,"From: vandeco.ru \r\n"."Content-type: text/plain; charset=UTF-8\r\n");
//         } elseif ($this->id_of_form == 'subscribe') {

          
//           $email = new PHPMailer();
// $email->From      = 'vandeco@sent.ru';
// $email->FromName  = 'vandeco.ru';
// $email->Subject   = 'Мой заказ';
// $email->Body      = "Мое имя:   ".$this->name." \r\nМоя почта:   ".$this->email." \r\nМой телефон:   ".$this->phone." \r\nМой вопрос:   ".$this->text;
// $email->CharSet = "UTF-8";
// $adres = explode(',',$this->to_mail);
// foreach ($adres as $key=>$value) {
//   $email->AddAddress( $value);
// }


// //$file_to_attach = 'PATH_OF_YOUR_FILE_HERE';
// if ($_FILES) {
// $email->AddAttachment( $_FILES['file']['tmp_name'] , $_FILES['file']['name'] );
// }
// if(!$email->Send()) {
//   echo $email->ErrorInfo;
// }



//                   } elseif ($this->id_of_form == 'callback') {
//    mail($this->to_mail, "Позвоните мне", "Мое имя:   ".$this->name." \r\nМой телефон:   ".$this->phone,"From: vandeco.ru \r\n"."Content-type: text/plain; charset=UTF-8\r\n");
//                   } elseif ($this->id_of_form == 'quick') {
//                   mail($this->to_mail, "Хочу быстро заказать", "Мой телефон:   ".$this->phone." \r\nМой комментарий:   ".$this->text." \r\nХочу заказать:   ".$this->name_of_product,"From: vandeco.ru \r\n"."Content-type: text/plain; charset=UTF-8\r\n");
//                    } elseif ($this->id_of_form == 'contacts-form') {
//                    mail($this->to_mail, "Форма обратной связи со страницы 'Контакты'", "Мое имя:   ".$this->name." \r\nМой телефон:   ".$this->phone." \r\nМой комментарий:   ".$this->text,"From: vandeco.ru \r\n"."Content-type: text/plain; charset=UTF-8\r\n");
//                     }



                   

               // echo '  ';
       

    }




}



//$val = $_GET[val];

$send = new SendForms();
 /*
foreach ($val as $key => $value) {
   // echo $valey['id_of_form'];
  
  if ($value[name] == 'id_of_form') {
    $send->id_of_form = $value[value];
  }
  if ($value[name] == 'name_of_product') {
    $send->name_of_product = $value[value];
  }
  if ($value[name] == 'name') {
    $send->name = $value[value];
  }
  if ($value[name] == 'email') {
    $send->email = $value[value];
  }
  if ($value[name] == 'phone') {
    $send->phone = $value[value];
  }
  if ($value[name] == 'text') {
    $send->text = $value[value];
  }
} */
//echo print_r($val);


if ($_POST['id_of_form']) {
    $send->id_of_form = $_POST['id_of_form'];
  }
  if ($_POST['name_of_product']) {
    $send->name_of_product = $_POST['name_of_product'];
  }
if ($_POST['name']) {
  $send->name = $_POST['name'];
}
if ($_POST['email']) {
    $send->email = $_POST['email'];
  }
  if ($_POST['phone']) {
    $send->phone = $_POST['phone'];
  }
  if ($_POST['text']) {
      $send->text = $_POST['text'];
    }
    

$send->to_mail = "demo@isg-neuro.ru";
// bykova@antivor.ru
$send->name_of_site = "";
$send->sendmail();
//$send->sendcis();

/*
$post = json_encode($_POST);
$ip = $_SERVER['REMOTE_ADDR'];
exec('php '.$_SERVER['DOCUMENT_ROOT'].'/myforms/sendCis.php '.urlencode($post).' '.$ip.' > /dev/null &'); */



?>
