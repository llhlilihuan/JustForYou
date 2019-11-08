

$(function(){
 	// 自动刷新加载首页内容
 	$("#content").load("./pages/homepage.html");

 	// 点击左侧列表时跳转页面
 	$("ul.left_ul").on("click","li",function(){
 		$("ul.left_ul>li").removeClass("active");
		$(this).addClass("active");
		// 当前被点击的元素的索引
		var index = $(this).index();
 		// 获取a标签进行判断并跳转到指定页面
 		switch(index){
			case 0:
				// 首页
				$("#content").load("./pages/homepage.html");
				break;
			case 1:
				// 商家管理
				$("#content").load("./pages/business.html");
				break;
			case 2:
				// 招聘管理
				$("#content").load("./pages/recruitment.html");
				break;
			case 3:
				// 用户管理
				$("#content").load("./pages/user.html");
				break;
			case 4:
				// 求职联系模块
				$("#content").load("./pages/JobInformation.html");
				
				break;
			case 5:
				// 客服管理
				$("#content").load("./pages/user.html");
				break;
			case 6:
				// 权限管理
				$("#content").load("./pages/user.html");
				break;
			case 7:
				// 模块管理
				$("#content").load("./pages/user.html");
				break;
			case 8:
				// 审核模块
				$("#content").load("./pages/user.html");
				break;
			case 9:
				// APP管理
				$("#content").load("./pages/user.html");
				break;
		}
		event.preventDefault();
 	});
 })