<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="SJTU, 新蜂工作室, hackathon, 黑客马拉松">
	<meta name="author" content="Newbee Studio">
    <title>SJTU-Hackathon</title>
    <link href="__PUBLIC__/css/bootstrap.min.css" rel="stylesheet">
	<link href="__PUBLIC__/css/Index_Index_index.css" rel="stylesheet">
	<script src="__PUBLIC__/jquery.min.js"></script>
	<script src="__PUBLIC__/js/bootstrap.min.js"></script>
  </head>
<body>
	<div class="nav-bar">
		<nav class="navbar bgnav " role="navigation">
		  <div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <a class="navbar-brand" id="brandcolor" href="<?php echo U('Index/Index/index');?>">Hackathon</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			  <ul class="nav navbar-nav nav-pills ">
				<li role="presentation"><a href="<?php echo U('Index/Index/index');?>" >首页</a></li>
				<li role="presentation"><a href="<?php echo U('Index/Detail/index');?>" >详细介绍</a></li>
				<li role="presentation"><a href="<?php echo U('Index/Member/index');?>" >参赛人员</a></li>
				<li role="presentation"><a href="<?php echo U('Index/Result/index');?>" >作品展示</a></li>
			  </ul>
			  <ul class="nav navbar-nav nav-pills navbar-right">
				<li	role="presentation" onmouseover="mOver(this)" onmouseout="mOut(this)"><a href="<?php echo U('Index/Join/index');?>">戳我报名</a></li>
			  </ul>
			</div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
	</div>

	<div id="main-img">
		<h1>创客 工作坊</h1>
		<h4>SJTU Hac<span style="font-family:'Gabriola'; font-size:140%;">k</span>athon</h4>
		<a class="btn btn-lg btn-primary btn-shadow" role="button" style="margin-top: 40px" href="<?php echo U('Index/Join/index');?>">Join Now!</a>
	</div>

	<div id="main">
		<div id="intro">
			<p class='subtitle'>活动简介</p>
			<hr>
			<div id="intro-container">
				<div class="block">
					<h2><span id="easy-to-do">E</span>asy-to-do</h2>
					<img src="__PUBLIC__/img/logo1.png" alt="" class="logo">
					<p class="first-line"><span>0</span> 基础也能玩单片机?当然可以！</p>
					<p>一个个组件模块，在新蜂工作室同学们的努力下，被包装成简易可用的黑盒子...</p>
					<p>只需要少量C语言基本编程知识，黑客马拉松的大门就为你敞开！</p>
				</div>
				<div class="block">
					<h2><span id="creative">C</span>reative</h2>
					<img src="__PUBLIC__/img/logo2.png" alt="" class="logo">
					<p class="first-line"><span>38</span> 种组件，数不清的组合方式！</p>
					<p>你会用它们来做什么?火焰传感器、三色LED、自制继电器...任何你能想到的创意</p>
					<p>如果你有很棒的创意，或是想尝试新鲜事事物，它们就为你开放！</p>
				</div>
				<div class="block">
					<h2><span id="exciting">E</span>xciting</h2>
					<img src="__PUBLIC__/img/logo3.png" alt="" class="logo">
					<p class="first-line"><span>48</span> 小时的时间，可以用来做些什么?</p>
					<p>在宿舍教室和食堂之间两点一线，就和往常一样？或是尝试一种全新的体验?</p>
					<p>在黑客马拉松这项活动里，你将体验急速开发，感受一步步实现自己创意的快感！</p>
				</div>
			</div>
		</div>
		<div id="info">
			<p class='subtitle'>举办单位</p>
			<hr>
			<div class="support">
				<a href="http://newbee.io" target='_blank'><img class='supporter' src="__PUBLIC__/img/newbee.png">新蜂工作室</a>
				<a href="http://net.sjtu.edu.cn" target='_blank'><img class='supporter' src="__PUBLIC__/img/omnilab.png">交大网络信息中心</a>
				<a href="http://page.renren.com/600756845" target='_blank'><img class='supporter' src="__PUBLIC__/img/union.jpg">交大电院学生会</a>
			</div>
		</div>
	</div>

	<footer class="footer">
	     <p>SJTU Hackathon 2014</p>
	     <p>© 上海交通大学网络信息中心OmniLab</p>   
	</footer>   
</body>

</html>