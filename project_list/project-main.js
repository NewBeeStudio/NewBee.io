function changeSection(sectionName)
{
	if (sectionName==1)
	{
		document.getElementById("menu-homepage").src="./image/homepage.png";
		document.getElementById("menu-about-Newbee").src="./image/about-Newbee-right.png";
		document.getElementById("menu-project-intro").src="./image/project-intro-right.png";
		document.getElementById("menu-member-intro").src="./image/member-intro-right.png";
		document.getElementById("menu-miao").src="./image/miao-right.png";
	}
	else if (sectionName==2)
	{
		document.getElementById("menu-homepage").src="./image/homepage-left.png";
		document.getElementById("menu-about-Newbee").src="./image/about-Newbee.png";
		document.getElementById("menu-project-intro").src="./image/project-intro-right.png";
		document.getElementById("menu-member-intro").src="./image/member-intro-right.png";
		document.getElementById("menu-miao").src="./image/miao-right.png";
	}
	else if (sectionName==3)
	{
		document.getElementById("menu-homepage").src="./image/homepage-left.png";
		document.getElementById("menu-about-Newbee").src="./image/about-Newbee-left.png";
		document.getElementById("menu-project-intro").src="./image/project-intro.png";
		document.getElementById("menu-member-intro").src="./image/member-intro-right.png";
		document.getElementById("menu-miao").src="./image/miao-right.png";
	}
	else if (sectionName==4)
	{
		document.getElementById("menu-homepage").src="./image/homepage-left.png";
		document.getElementById("menu-about-Newbee").src="./image/about-Newbee-left.png";
		document.getElementById("menu-project-intro").src="./image/project-intro-left.png";
		document.getElementById("menu-member-intro").src="./image/member-intro.png";
		document.getElementById("menu-miao").src="./image/miao-right.png";
	}
	else if (sectionName==5)
	{
		document.getElementById("menu-homepage").src="./image/homepage-left.png";
		document.getElementById("menu-about-Newbee").src="./image/about-Newbee-left.png";
		document.getElementById("menu-project-intro").src="./image/project-intro-left.png";
		document.getElementById("menu-member-intro").src="./image/member-intro-left.png";
		document.getElementById("menu-miao").src="./image/miao.png";
	}
}