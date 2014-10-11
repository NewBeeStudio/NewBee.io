<?php
header("Content-Type:text/html;charset=utf-8");
class JoinAction extends Action{
	public function index(){
		$this->display();
	}

	public function handle(){
		if(IS_POST){
			if(M('user')->where(array('e-mail'=>I('e-mail')))->select()){
				$this->assign(array('info'=>'邮箱已被注册'))->display('handle');
			}
			else if(M('user')->where(array('lock'=>0))->count() >= 50){
				$this->assign(array('info'=>'报名人数已满，不再接受报名信息'))->display('handle');	
			}
			else{
				$user = array(
					'name' => I('name'),
					'sex' => 1,
					'college' => I('college'),
					'grade' => I('grade'),
					'major' => I('major'),
					'tel' => I('tel'),
					'e-mail' => I('e-mail')
					);
				if(I('sex')=='option2'){
					$user['sex'] = 0;
				}
				$verify = getRandStr(8);
				$user['verify'] = $verify;
				if(M('user')->data($user)->add()){
				//$this->redirect('Index/Member/index');
					SendMail(I('e-mail'),'欢迎报名创客工作坊',I('name').'您好！请点击以下链接完成报名：http://localhost/Hackathon_home/index.php/Index/Join/check?verify='.$verify);
					$this->assign(array('info'=>'信息提交成功，请登录邮箱完成报名确认'))->display();
				}
				else{
					$this->redirect('Index/Join/index');
				}
			}
		}
		else{
			$this->redirect('Index/Join/index');
		}
	}

	public function check(){
		$verify = $_GET['verify'];
		$user = M('user')->where(array('verify'=>$verify))->select();
		if($user){
			M('user')->where(array('id'=>$user[0]['id']))->setField('lock','0');
			$this->redirect('Index/Member/index');
		}
	}
}
?>