<?php
header("Content-Type:text/html;charset=utf-8");
class JoinAction extends Action{
	public function index(){
		$this->display();
	}

	public function handle(){
		if(IS_POST){
			if(M("user")->where(array("e-mail"=>I("e-mail")))->select()){
				$this->assign(array("info"=>"邮箱已被注册"))->display("handle");
			}
			else if(M("user")->where(array("lock"=>0))->count() >= 50){
				$this->assign(array("info"=>"报名人数已满，不再接受报名信息"))->display("handle");
			}
			else{
				$user = array(
					"name" => I("name"),
					"sex" => 1,
					"college" => I("college"),
					"grade" => I("grade"),
					"major" => I("major"),
					"tel" => I("tel"),
					"e-mail" => I("e-mail")
					);
				if(I("sex")=="option2"){
					$user["sex"] = 0;
				}
				$verify = getRandStr(8);
				$user["verify"] = $verify;
				if(M("user")->data($user)->add()){
				//$this->redirect("Index/Member/index");
					SendMail(I("e-mail"),"欢迎报名创客工作坊",I("name")."您好！请点击以下链接完成报名：http://newbee.io/hackathon/index.php/Index/Join/check?verify=" . $verify . "\n 上海交通大学黑客马拉松是由网络信息中心、新蜂工作室和电院学生会共同发起的一个系列活动。\n在本次主题活动——创客工作坊（Makers Workshop）中，参与者将以环境监测为主题，以极易上手的开源硬件Arduino为基础，借助于功能齐全的各类传感器，在两天的时间内和伙伴一起成为创客，创造出一款独具特色的环境监测器！\n请注意，本次活动为有偿活动，报名费为30元/人。\n更多关于活动介绍的信息，请参考http://newbee.io/hackathon/index.php/Index/Detail/index");
					$this->assign(array("info"=>"信息提交成功，请登录邮箱完成报名确认"))->display();
				}
				else{
					$this->redirect("Index/Join/index");
				}
			}
		}
		else{
			$this->redirect("Index/Join/index");
		}
	}

	public function check(){
		$verify = $_GET["verify"];
		$user = M("user")->where(array("verify"=>$verify))->select();
		if($user){
			M("user")->where(array("id"=>$user[0]["id"]))->setField("lock","0");
			$this->redirect("Index/Member/index");
		}
	}
}
?>