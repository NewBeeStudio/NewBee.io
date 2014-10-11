<?php
class MemberAction extends Action{
	public function index(){
		$user = M('user');
		$this->assign(
			array(
				'member' => $user->where(array('lock'=>0))->order('id desc')->select(),
				'count' => $user->where(array('lock'=>0))->count()
			))->display();
	}
}
?>