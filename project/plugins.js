var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {

	console.log("插件编写测试");

	// 可以写一些直接执行的代码
	// 在这里写的代码将会在【资源加载前】被执行，此时图片等资源尚未被加载。
	// 请勿在这里对包括bgm，图片等资源进行操作。


	this._afterLoadResources = function () {
		// 本函数将在所有资源加载完毕后，游戏开启前被执行
		// 可以在这个函数里面对资源进行一些操作，比如切分图片等。

		// 这是一个将assets.png拆分成若干个32x32像素的小图片并保存的样例。
		// var arr = core.splitImage("assets.png", 32, 32);
		// for (var i = 0; i < arr.length; i++) {
		//     core.material.images.images["asset"+i+".png"] = arr[i];
		// }

	};
	// 显示图片

	this.a = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [1, 256], 1, 20, true);
	};
	this.a2 = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [1, 256], 1, 20, true);
	};
	this.aa = function () {
		var code = (core.getFlag('id', 0) + 2400);
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [1, 116], 1, 20, true);
	};
	this.aa2 = function () {
		var code = (core.getFlag('id', 0) + 2400);
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [1, 116], 1, 20, true);
	};
	// id的一半，下整
	this.b = function () {
		core.status.hero.atk = core.getFlag('id', 0) / 2;
		core.status.hero.atk = Math.floor(core.status.hero.atk);

	};
	// 移动图片
	this.c = function () {
		var code = (core.getFlag('id', 0));
		var to = [
			(core.getFlag('x', 0)),
			(core.getFlag('y', 0))
		];
		core.moveImage(code, to, 1, 300, true);
	};
	this.c2 = function () {
		var code = (core.getFlag('id', 0));
		var to = [
			(core.getFlag('x', 0)),
			(core.getFlag('y', 0))
		];
		core.moveImage(code, to, 1, 5, true);
	};
	this.cc = function () {
		var code = (core.getFlag('id', 0) + 2400);
		var to = [
			(core.getFlag('x', 0)),
			(core.getFlag('y', 0))
		];
		core.moveImage(code, to, 1, 300, true);
	};
	this.cc2 = function () {
		var code = (core.getFlag('id', 0) + 2400);
		var to = [
			(core.getFlag('x', 0)),
			(core.getFlag('y', 0))
		];
		core.moveImage(code, to, 1, 5, true);
	};
	// 清除图片
	this.d = function () {
		var code = (core.getFlag('id', 0));
		core.hideImage(code, 0, true);
	};
	this.dd = function () {
		var code = (core.getFlag('id', 0) + 2400);
		core.hideImage(code, 0, true);
	};
	// 攻血显示
	this.xa = function () {
		var image = (4730 + core.getFlag('atka', 0)) + ".png";
		core.showImage(4861, image, null, [125, 345], 1, 0, true);
	};
	this.xa2 = function () {
		if (core.getFlag('hpa', 0) <= -1) {
			core.setFlag("hpa", 0);
		}
		var image = (4730 + core.getFlag('hpa', 0)) + ".png";
		core.showImage(4881, image, null, [143, 345], 1, 0, true);
	};
	this.xb = function () {
		var image = (4730 + core.getFlag('atkb', 0)) + ".png";
		core.showImage(4862, image, null, [205, 345], 1, 0, true);
	};
	this.xb2 = function () {
		if (core.getFlag('hpb', 0) <= -1) {
			core.setFlag("hpb", 0);
		}
		var image = (4730 + core.getFlag('hpb', 0)) + ".png";
		core.showImage(4882, image, null, [223, 345], 1, 0, true);
	};
	this.xc = function () {
		var image = (4730 + core.getFlag('atkc', 0)) + ".png";
		core.showImage(4863, image, null, [285, 345], 1, 0, true);
	};
	this.xc2 = function () {
		if (core.getFlag('hpc', 0) <= -1) {
			core.setFlag("hpc", 0);
		}
		var image = (4730 + core.getFlag('hpc', 0)) + ".png";
		core.showImage(4883, image, null, [303, 345], 1, 0, true);
	};
	this.xd = function () {
		var image = (4730 + core.getFlag('atkd', 0)) + ".png";
		core.showImage(4864, image, null, [365, 345], 1, 0, true);
	};
	this.xd2 = function () {
		if (core.getFlag('hpd', 0) <= -1) {
			core.setFlag("hpd", 0);
		}
		var image = (4730 + core.getFlag('hpd', 0)) + ".png";
		core.showImage(4884, image, null, [383, 345], 1, 0, true);
	};
	this.xe = function () {
		var image = (4730 + core.getFlag('atke', 0)) + ".png";
		core.showImage(4865, image, null, [445, 345], 1, 0, true);
	};
	this.xe2 = function () {
		if (core.getFlag('hpe', 0) <= -1) {
			core.setFlag("hpe", 0);
		}
		var image = (4730 + core.getFlag('hpe', 0)) + ".png";
		core.showImage(4885, image, null, [463, 345], 1, 0, true);
	};
	this.xl = function () {
		var image = (4730 + core.getFlag('atkl', 0)) + ".png";
		core.showImage(4866, image, null, [125, 205], 1, 0, true);
	};
	this.xl2 = function () {
		if (core.getFlag('hpl', 0) <= -1) {
			core.setFlag("hpl", 0);
		}
		var image = (4730 + core.getFlag('hpl', 0)) + ".png";
		core.showImage(4886, image, null, [143, 205], 1, 0, true);
	};
	this.xm = function () {
		var image = (4730 + core.getFlag('atkm', 0)) + ".png";
		core.showImage(4867, image, null, [205, 205], 1, 0, true);
	};
	this.xm2 = function () {
		if (core.getFlag('hpm', 0) <= -1) {
			core.setFlag("hpm", 0);
		}
		var image = (4730 + core.getFlag('hpm', 0)) + ".png";
		core.showImage(4887, image, null, [223, 205], 1, 0, true);
	};
	this.xn = function () {
		var image = (4730 + core.getFlag('atkn', 0)) + ".png";
		core.showImage(4868, image, null, [285, 205], 1, 0, true);
	};
	this.xn2 = function () {
		if (core.getFlag('hpn', 0) <= -1) {
			core.setFlag("hpn", 0);
		}
		var image = (4730 + core.getFlag('hpn', 0)) + ".png";
		core.showImage(4888, image, null, [303, 205], 1, 0, true);
	};
	this.xo = function () {
		var image = (4730 + core.getFlag('atko', 0)) + ".png";
		core.showImage(4869, image, null, [365, 205], 1, 0, true);
	};
	this.xo2 = function () {
		if (core.getFlag('hpo', 0) <= -1) {
			core.setFlag("hpo", 0);
		}
		var image = (4730 + core.getFlag('hpo', 0)) + ".png";
		core.showImage(4889, image, null, [383, 205], 1, 0, true);
	};
	this.xp = function () {
		var image = (4730 + core.getFlag('atkp', 0)) + ".png";
		core.showImage(4870, image, null, [445, 205], 1, 0, true);
	};
	this.xp2 = function () {
		if (core.getFlag('hpp', 0) <= -1) {
			core.setFlag("hpp", 0);
		}
		var image = (4730 + core.getFlag('hpp', 0)) + ".png";
		core.showImage(4890, image, null, [463, 205], 1, 0, true);
	};
	// 回魂
	this.e = function () {
		flags["卡下" + flags["卡下"]] = (core.getFlag('id', 0));
	};
	this.f = function () {
		flags["敌卡下" + flags["敌卡下"]] = (core.getFlag('id', 0));
	};
	// 清场
	this.g0 = function () {
		flags["记录" + flags["记"]] = 0;
	};
	this.g1 = function () {
		flags["抽" + flags["记"]] = 0;
	};
	this.g2 = function () {
		flags["敌抽" + flags["记"]] = 0;
	};
	this.g3 = function () {
		flags["墓" + flags["记"]] = 0;
	};
	this.g4 = function () {
		flags["敌墓" + flags["记"]] = 0;
	};
	this.h = function () { core.drawTip("触发转生"); };
	this.t = function () { core.deleteAllCanvas(); };
	// 积分记录
	this.u = function () { core.drawTip("该关卡需出战卡组为" + (core.getFlag('需卡组', 0)) + ""); };
	this.v = function () {
		if (flags["记录" + flags["关卡"]] <= flags["积分"] - 1) {
			flags["总积分"] += flags["积分"] - flags["记录" + flags["关卡"]];
			flags["记录" + flags["关卡"]] = flags["积分"];
		}
	};
	this.w = function () {
		flags["余" + flags["9"]] -= 1;
		flags["余" + [flags["9"] - 1]] -= 1;
	};
	this.x = function () { core.drawTip("牌库1/2，还可选" + (core.getFlag('角', 0)) + "-" + (core.getFlag('法', 0)) + "-" + (core.getFlag('神', 0)) + ""); };
	this.y = function () { core.drawTip("牌库0/2，还可选" + (core.getFlag('角', 0)) + "-" + (core.getFlag('法', 0)) + "-" + (core.getFlag('神', 0)) + ""); };
	this.z = function () { core.drawTip("牌库0/1，还可选" + (core.getFlag('角', 0)) + "-" + (core.getFlag('法', 0)) + "-" + (core.getFlag('神', 0)) + ""); };
	this.z0 = function () { core.drawTip("无尽的摸牌战"); };
	this.z1 = function () { core.drawTip("还需选择1张卡牌"); };
	this.z2 = function () { core.drawTip("还需选择2张卡牌"); };
	this.z3 = function () { core.drawTip("还需选择3张卡牌"); };
	this.z4 = function () { core.drawTip("还需选择4张卡牌"); };
	this.z5 = function () { core.drawTip("还需选择5张卡牌"); };
	this.z6 = function () { core.drawTip("还需选择6张卡牌"); };
	this.h1 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [1, 2], 1, 0, true);
	};
	this.h1b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [1, 2], 1, 0, true);
	};
	this.h2 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [1, 116], 1, 0, true);
	};
	this.h2b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [1, 116], 1, 0, true);
	};
	this.h3 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [81, 116], 1, 0, true);
	};
	this.h3b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [81, 116], 1, 0, true);
	};
	this.h4 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [161, 116], 1, 0, true);
	};
	this.h4b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [161, 116], 1, 0, true);
	};
	this.h5 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [241, 116], 1, 0, true);
	};
	this.h5b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [241, 116], 1, 0, true);
	};
	this.h6 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [321, 116], 1, 0, true);
	};
	this.h6b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [321, 116], 1, 0, true);
	};
	this.h7 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [401, 116], 1, 0, true);
	};
	this.h7b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [401, 116], 1, 0, true);
	};
	this.h8 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [1, 370], 1, 0, true);
	};
	this.h8b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [1, 370], 1, 0, true);
	};
	this.h9 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [1, 256], 1, 0, true);
	};
	this.h9b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [1, 256], 1, 0, true);
	};
	this.h10 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [81, 256], 1, 0, true);
	};
	this.h10b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [81, 256], 1, 0, true);
	};
	this.h11 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [161, 256], 1, 0, true);
	};
	this.h11b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [161, 256], 1, 0, true);
	};
	this.h12 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [241, 256], 1, 0, true);
	};
	this.h12b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [241, 256], 1, 0, true);
	};
	this.h13 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [321, 256], 1, 0, true);
	};
	this.h13b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [321, 256], 1, 0, true);
	};
	this.h14 = function () {
		var code = (core.getFlag('id', 0));
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(code, image, null, [401, 256], 1, 0, true);
	};
	this.h14b = function () {
		var code = (core.getFlag('id', 0));
		var image = (2 * core.status.hero.atk) + ".jpg";
		core.showImage(code, image, null, [401, 256], 1, 0, true);
	};
	this.h15 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-89, image, null, [81, 2], 1, 0, true);
	};
	this.h16 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-88, image, null, [161, 2], 1, 0, true);
	};
	this.h17 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-87, image, null, [241, 2], 1, 0, true);
	};
	this.h18 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-86, image, null, [321, 2], 1, 0, true);
	};
	this.h19 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-85, image, null, [401, 2], 1, 0, true);
	};
	this.h20 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-84, image, null, [81, 370], 1, 0, true);
	};
	this.h21 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-83, image, null, [161, 370], 1, 0, true);
	};
	this.h22 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-82, image, null, [241, 370], 1, 0, true);
	};
	this.h23 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-81, image, null, [321, 370], 1, 0, true);
	};
	this.h24 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-80, image, null, [401, 370], 1, 0, true);
	};
	this.h31 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-79, image, null, [1, 2], 1, 0, true);
	};
	this.h32 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-76, image, null, [1, 116], 1, 0, true);
	};
	this.h33 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-75, image, null, [81, 116], 1, 0, true);
	};
	this.h34 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-74, image, null, [161, 116], 1, 0, true);
	};
	this.h35 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-73, image, null, [241, 116], 1, 0, true);
	};
	this.h36 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-72, image, null, [321, 116], 1, 0, true);
	};
	this.h37 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-71, image, null, [401, 116], 1, 0, true);
	};
	this.h38 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-70, image, null, [1, 370], 1, 0, true);
	};
	this.h39 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-69, image, null, [1, 256], 1, 0, true);
	};
	this.h40 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-68, image, null, [81, 256], 1, 0, true);
	};
	this.h41 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-67, image, null, [161, 256], 1, 0, true);
	};
	this.h42 = function () {

		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-66, image, null, [241, 256], 1, 0, true);
	};
	this.h43 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-65, image, null, [321, 256], 1, 0, true);
	};
	this.h44 = function () {
		var image = (core.getFlag('id', 0)) + ".jpg";
		core.showImage(-64, image, null, [401, 256], 1, 0, true);
	};
	// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为 core.plugin.xxx();
	// 从V2.6开始，插件中用this.XXX方式定义的函数也会被转发到core中，详见文档-脚本-函数的转发。
},
    "drawLight": function () {

	// 绘制灯光/漆黑层效果。调用方式 core.plugin.drawLight(...)
	// 【参数说明】
	// name：必填，要绘制到的画布名；可以是一个系统画布，或者是个自定义画布；如果不存在则创建
	// color：可选，只能是一个0~1之间的数，为不透明度的值。不填则默认为0.9。
	// lights：可选，一个数组，定义了每个独立的灯光。
	//        其中每一项是三元组 [x,y,r] x和y分别为该灯光的横纵坐标，r为该灯光的半径。
	// lightDec：可选，0到1之间，光从多少百分比才开始衰减（在此范围内保持全亮），不设置默认为0。
	//        比如lightDec为0.5代表，每个灯光部分内圈50%的范围全亮，50%以后才开始快速衰减。
	// 【调用样例】
	// core.plugin.drawLight('curtain'); // 在curtain层绘制全图不透明度0.9，等价于更改画面色调为[0,0,0,0.9]。
	// core.plugin.drawLight('ui', 0.95, [[25,11,46]]); // 在ui层绘制全图不透明度0.95，其中在(25,11)点存在一个半径为46的灯光效果。
	// core.plugin.drawLight('test', 0.2, [[25,11,46,0.1]]); // 创建一个test图层，不透明度0.2，其中在(25,11)点存在一个半径为46的灯光效果，灯光中心不透明度0.1。
	// core.plugin.drawLight('test2', 0.9, [[25,11,46],[105,121,88],[301,221,106]]); // 创建test2图层，且存在三个灯光效果，分别是中心(25,11)半径46，中心(105,121)半径88，中心(301,221)半径106。
	// core.plugin.drawLight('xxx', 0.3, [[25,11,46],[105,121,88,0.2]], 0.4); // 存在两个灯光效果，它们在内圈40%范围内保持全亮，且40%后才开始衰减。
	this.drawLight = function (name, color, lights, lightDec) {

		// 清空色调层；也可以修改成其它层比如animate/weather层，或者用自己创建的canvas
		var ctx = core.getContextByName(name);
		if (ctx == null) {
			if (typeof name == 'string')
				ctx = core.createCanvas(name, 0, 0, core.__PIXELS__, core.__PIXELS__, 98);
			else return;
		}

		ctx.mozImageSmoothingEnabled = false;
		ctx.webkitImageSmoothingEnabled = false;
		ctx.msImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;

		core.clearMap(name);
		// 绘制色调层，默认不透明度
		if (color == null) color = 0.9;
		ctx.fillStyle = "rgba(0,0,0," + color + ")";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		lightDec = core.clamp(lightDec, 0, 1);

		// 绘制每个灯光效果
		ctx.globalCompositeOperation = 'destination-out';
		lights.forEach(function (light) {
			// 坐标，半径，中心不透明度
			var x = light[0],
				y = light[1],
				r = light[2];
			// 计算衰减距离
			var decDistance = parseInt(r * lightDec);
			// 正方形区域的直径和左上角坐标
			var grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
			grd.addColorStop(0, "rgba(0,0,0,1)");
			grd.addColorStop(1, "rgba(0,0,0,0)");
			ctx.beginPath();
			ctx.fillStyle = grd;
			ctx.arc(x, y, r, 0, 2 * Math.PI);
			ctx.fill();
		});
		ctx.globalCompositeOperation = 'source-over';
		// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();
	}
},
    "itemShop": function () {
	// 道具商店相关的插件
	// 可在全塔属性-全局商店中使用「道具商店」事件块进行编辑（如果找不到可以在入口方块中找）

	var shopId = null; // 当前商店ID
	var type = 0; // 当前正在选中的类型，0买入1卖出
	var selectItem = 0; // 当前正在选中的道具
	var selectCount = 0; // 当前已经选中的数量
	var page = 0;
	var totalPage = 0;
	var totalMoney = 0;
	var list = [];

	var bigFont = core.ui._buildFont(20, false),
		middleFont = core.ui._buildFont(18, false);

	this.drawItemShop = function () {
		// 绘制道具商店

		// Step 1: 背景和固定的几个文字
		core.ui._createUIEvent();
		core.clearMap('uievent');
		core.ui._uievent_drawSelector({ "code": 1 });
		core.ui._uievent_drawSelector({ "code": 2 });
		core.setTextAlign('uievent', 'left');
		core.setTextBaseline('uievent', 'top');
		core.fillRect('uievent', 0, 0, 480, 480, 'black');
		core.ui._uievent_drawBackground({ background: 'winskin.png', x: 0, y: 0, width: 480, height: 64 });
		core.ui._uievent_drawBackground({ background: 'winskin.png', x: 0, y: 64, width: 360, height: 64 });
		core.ui._uievent_drawBackground({ background: 'winskin.png', x: 0, y: 128, width: 360, height: 352 });
		core.ui._uievent_drawBackground({ background: 'winskin.png', x: 360, y: 64, width: 120, height: 64 });
		core.ui._uievent_drawBackground({ background: 'winskin.png', x: 360, y: 128, width: 120, height: 352 });
		core.setFillStyle('uievent', 'white');
		core.setStrokeStyle('uievent', 'white');
		core.fillText("uievent", "购买", 32, 84, 'white', bigFont);
		core.fillText("uievent", "卖出", 152, 84);
		core.fillText("uievent", "离开", 272, 84);
		core.fillText("uievent", "当前金币", 374, 75, null, middleFont);
		core.setTextAlign("uievent", "right");
		core.fillText("uievent", core.formatBigNumber(core.status.hero.money), 466, 100);
		core.setTextAlign("uievent", "left");
		core.ui._uievent_drawSelector({
			"type": "drawSelector",
			"image": "winskin.png",
			"code": 2,
			"x": 22 + 120 * type,
			"y": 76,
			"width": 60,
			"height": 33
		});
		if (selectItem != null) {
			core.setTextAlign('uievent', 'center');
			core.fillText("uievent", type == 0 ? "买入个数" : "卖出个数", 420, 360, null, bigFont);
			core.fillText("uievent", "◀   " + selectCount + "   ▶", 420, 390);
			core.fillText("uievent", "确定", 420, 420);
		}

		// Step 2：获得列表并展示
		var choices = core.status.shops[shopId].choices;
		list = choices.filter(function (one) {
			if (one.condition != null) {
				try { if (!core.calValue(one.condition)) return false; } catch (e) {}
			}
			return (type == 0 && one.money != null) || (type == 1 && one.sell != null);
		});
		var per_page = 7;
		totalPage = Math.ceil(list.length / per_page);
		page = Math.floor((selectItem || 0) / per_page) + 1;

		// 绘制分页
		if (totalPage > 1) {
			var half = 180;
			core.setTextAlign('uievent', 'center');
			core.fillText('uievent', page + " / " + totalPage, half, 450, null, middleFont);
			if (page > 1) core.fillText('uievent', '上一页', half - 80, 450);
			if (page < totalPage) core.fillText('uievent', '下一页', half + 80, 450);
		}
		core.setTextAlign('uievent', 'left');

		// 绘制每一项
		var start = (page - 1) * per_page;
		for (var i = 0; i < per_page; ++i) {
			var curr = start + i;
			if (curr >= list.length) break;
			var item = list[curr];
			core.drawIcon('uievent', item.id, 10, 141 + i * 40);
			core.setTextAlign('uievent', 'left');
			core.fillText('uievent', core.material.items[item.id].name, 50, 148 + i * 40, null, bigFont);
			core.setTextAlign('uievent', 'right');
			core.fillText('uievent', (type == 0 ? core.calValue(item.money) : core.calValue(item.sell)) + "金币/个", 340, 149 + i * 40, null, middleFont);
			core.setTextAlign("uievent", "left");
			if (curr == selectItem) {
				// 绘制描述，文字自动放缩
				var text = core.material.items[item.id].text || "该道具暂无描述";
				try { text = core.replaceText(text); } catch (e) {}
				for (var fontSize = 20; fontSize >= 8; fontSize -= 2) {
					var config = { left: 10, fontSize: fontSize, maxWidth: 467, lineHeight: 1.4 };
					var height = core.getTextContentHeight(text, config);
					if (height <= 60) {
						config.top = (64 - height) / 2;
						core.drawTextContent("uievent", text, config);
						break;
					}
				}
				core.ui._uievent_drawSelector({ "type": "drawSelector", "image": "winskin.png", "code": 1, "x": 8, "y": 137 + i * 40, "width": 343, "height": 40 });
				if (type == 0 && item.number != null) {
					core.fillText("uievent", "存货", 370, 152, null, bigFont);
					core.setTextAlign("uievent", "right");
					core.fillText("uievent", item.number, 470, 152, null, null, 60);
				} else if (type == 1) {
					core.fillText("uievent", "数量", 370, 152, null, bigFont);
					core.setTextAlign("uievent", "right");
					core.fillText("uievent", core.itemCount(item.id), 470, 152, null, null, 40);
				}
				core.setTextAlign("uievent", "left");
				core.fillText("uievent", "预计金额", 370, 280);
				core.setTextAlign("uievent", "right");
				totalMoney = selectCount * (type == 0 ? core.calValue(item.money) : core.calValue(item.sell));
				core.fillText("uievent", core.formatBigNumber(totalMoney), 470, 310);

				core.setTextAlign("uievent", "left");
				core.fillText("uievent", type == 0 ? "已购次数" : "已卖次数", 370, 190);
				core.setTextAlign("uievent", "right");
				core.fillText("uievent", (type == 0 ? item.money_count : item.sell_count) || 0, 470, 220);
			}
		}

		core.setTextAlign('uievent', 'left');
		core.setTextBaseline('uievent', 'alphabetic');
	}

	var _add = function (item, delta) {
		if (item == null) return;
		selectCount = core.clamp(
			selectCount + delta, 0,
			Math.min(type == 0 ? Math.floor(core.status.hero.money / core.calValue(item.money)) : core.itemCount(item.id),
				type == 0 && item.number != null ? item.number : Number.MAX_SAFE_INTEGER)
		);
	}

	var _confirm = function (item) {
		if (item == null || selectCount == 0) return;
		if (type == 0) {
			core.status.hero.money -= totalMoney;
			core.getItem(item.id, selectCount);
			if (item.number != null) item.number -= selectCount;
			item.money_count = (item.money_count || 0) + selectCount;
		} else {
			core.status.hero.money += totalMoney;
			core.removeItem(item.id, selectCount);
			core.drawTip("成功卖出" + selectCount + "个" + core.material.items[item.id].name, item.id);
			if (item.number != null) item.number += selectCount;
			item.sell_count = (item.sell_count || 0) + selectCount;
		}
		selectCount = 0;
	}

	this._performItemShopKeyBoard = function (keycode) {
		var item = list[selectItem] || null;
		// 键盘操作
		switch (keycode) {
		case 38: // up
			if (selectItem == null) break;
			if (selectItem == 0) selectItem = null;
			else selectItem--;
			selectCount = 0;
			break;
		case 37: // left
			if (selectItem == null) {
				if (type > 0) type--;
				break;
			}
			_add(item, -1);
			break;
		case 39: // right
			if (selectItem == null) {
				if (type < 2) type++;
				break;
			}
			_add(item, 1);
			break;
		case 40: // down
			if (selectItem == null) {
				if (list.length > 0) selectItem = 0;
				break;
			}
			if (list.length == 0) break;
			selectItem = Math.min(selectItem + 1, list.length - 1);
			selectCount = 0;
			break;
		case 13:
		case 32: // Enter/Space
			if (selectItem == null) {
				if (type == 2)
					core.insertAction({ "type": "break" });
				else if (list.length > 0)
					selectItem = 0;
				break;
			}
			_confirm(item);
			break;
		case 27: // ESC
			if (selectItem == null) {
				core.insertAction({ "type": "break" });
				break;
			}
			selectItem = null;
			break;
		}
	}

	this._performItemShopClick = function (px, py) {
		var item = list[selectItem] || null;
		// 鼠标操作
		if (px >= 22 && px <= 82 && py >= 81 && py <= 112) {
			// 买
			if (type != 0) {
				type = 0;
				selectItem = null;
				selectCount = 0;
			}
			return;
		}
		if (px >= 142 && px <= 202 && py >= 81 && py <= 112) {
			// 卖
			if (type != 1) {
				type = 1;
				selectItem = null;
				selectCount = 0;
			}
			return;
		}
		if (px >= 262 && px <= 322 && py >= 81 && py <= 112) // 离开
			return core.insertAction({ "type": "break" });
		// ◀，▶
		if (px >= 370 && px <= 395 && py >= 392 && py <= 415)
			return _add(item, -1);
		if (px >= 445 && px <= 470 && py >= 302 && py <= 415)
			return _add(item, 1);
		// 确定
		if (px >= 392 && px <= 443 && py >= 421 && py <= 446)
			return _confirm(item);

		// 上一页/下一页
		if (px >= 70 && px <= 130 && py >= 450) {
			if (page > 1) selectItem -= 7
			return;
		}
		if (px >= 230 && px <= 290 && py >= 450) {
			if (page < totalPage) selectItem = Math.min(selectItem + 7, list.length - 1);
			return;
		}

		// 实际区域
		if (px >= 9 && px <= 351 && py >= 142 && py < 422) {
			if (list.length == 0) return;
			var index = parseInt((py - 142) / 40);
			var newItem = 7 * (page - 1) + index;
			if (newItem >= list.length) newItem = list.length - 1;
			if (newItem != selectItem) {
				selectItem = newItem;
				selectCount = 0;
			}
			return;
		}
	}

	this.performItemShopAction = function () {
		if (flags.type == 0) return this._performItemShopKeyBoard(flags.keycode);
		else return this._performItemShopClick(flags.px, flags.py);
	}

	this.openItemShop = function (itemShopId) {
		shopId = itemShopId;
		type = 0;
		page = 0;
		selectItem = null;
		selectCount = 0;
		core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [
					{ "type": "function", "function": "function () { core.drawItemShop(); }" },
					{ "type": "wait" },
					{ "type": "function", "function": "function() { core.performItemShopAction(); }" }
				]
			},
			{ "type": "function", "function": "function () { " +
					"core.deleteCanvas('uievent'); " +
					"core.ui._uievent_drawSelector({ \"code\": 1 }); " +
					"core.ui._uievent_drawSelector({ \"code\": 2 }); " +
					"}" }
		]);
	}

	// Write item number to save
	core.control.saveData = function () {
		var data = this.controldata.saveData();
		for (var shopId in core.status.shops) {
			if (core.status.shops[shopId].item) {
				data.shops[shopId].choices = core.status.shops[shopId].choices.map(function (t) {
					return {
						number: t.number,
						money_count: t.money_count || 0,
						sell_count: t.sell_count || 0
					}
				});
			}
		}
		return data;
	}

	core.control.loadData = function (data, callback) {
		this.controldata.loadData(data, callback);
		for (var shopId in data.shops) {
			if (data.shops[shopId].choices) {
				for (var i = 0; i < data.shops[shopId].choices.length; ++i) {
					core.status.shops[shopId].choices[i].number = data.shops[shopId].choices[i].number;
					core.status.shops[shopId].choices[i].money_count = data.shops[shopId].choices[i].money_count;
					core.status.shops[shopId].choices[i].sell_count = data.shops[shopId].choices[i].sell_count;
				}
			}
		}
	}

},
    "smoothCamera": function () {

    // 是否启用本插件，默认不启用
	this.__enableSmoothCamera = false;
	if (!this.__enableSmoothCamera) return;

	this.Camera = function () {

		// 下面这个变量决定本插件的开关
		// 你可以在游戏中使用core.setFlag('smoothCamera',false)来关闭本插件的功能
		// 同时也可以core.setFlag('smoothCamera',true)重新开启
		// 此项默认为true
		// 
		this.__switchName = 'smoothCamera';

		// 初始化成员变量
		this._cameraNeedRefresh = true;
		this._nowOffsetX = 0;
		this._nowOffsetY = 0;
		this._targetOffsetX = 0;
		this._targetOffsetY = 0;
		this._currentFloorId = null;

		// 重置镜头，在楼层变更时使用
		this.resetCamera = function () {
			this._targetOffsetX = core.bigmap.offsetX;
			this._targetOffsetY = core.bigmap.offsetY;
			this._nowOffsetX = this._targetOffsetX;
			this._nowOffsetY = this._targetOffsetY;
			this._cameraNeedRefresh = true;
		};

		// 设置焦点坐标，目前没有用
		this.setTarget = function (x, y) {
			this._targetOffsetX = x;
			this._targetOffsetY = y;
		};

		// 请求镜头更新
		this.requestCameraUpdate = function () {
			this._cameraNeedRefresh = true;
		};

		// 更新焦点坐标，目前仅根据大地图偏移决定
		this.updateTargetPosition = function () {
			this._targetOffsetX = core.bigmap.offsetX;
			this._targetOffsetY = core.bigmap.offsetY;
		};

		// 更新额外的刷新条件，即镜头未指向焦点时
		this.updateRefreshFlag = function () {
			if (this._nowOffsetX != this._targetOffsetX || this._nowOffsetY != this._targetOffsetY) {
				this._cameraNeedRefresh = true;
			}
		};

		// 判断是否禁止了弹性滚动
		this.canDirectMove = function () {
			return !core.getFlag(this.__switchName, true);
		};

		// 更新镜头坐标
		this.updateCameraPosition = function () {
			if (this._cameraNeedRefresh) {
				this._cameraNeedRefresh = false;
				var disX = this._targetOffsetX - this._nowOffsetX;
				var disY = this._targetOffsetY - this._nowOffsetY;
				if (Math.abs(disX) <= 2 && Math.abs(disY) <= 2 || this.canDirectMove()) {
					this._nowOffsetX = this._targetOffsetX;
					this._nowOffsetY = this._targetOffsetY;
				} else {
					this._nowOffsetX += disX / 10;
					this._nowOffsetY += disY / 10;
				}
				var x = -Math.floor(this._nowOffsetX);
				var y = -Math.floor(this._nowOffsetY);
				core.bigmap.canvas.forEach(function (cn) {
					core.control.setGameCanvasTranslate(cn, x, y);
				});
				core.relocateCanvas('route', core.status.automaticRoute.offsetX + x, core.status.automaticRoute.offsetY + y);
				core.setGameCanvasTranslate('hero', x + this._targetOffsetX, y + this._targetOffsetY);
			}
		};

		// 更新逻辑主体
		this.update = function () {
			this.updateTargetPosition();
			this.updateRefreshFlag();
			this.updateCameraPosition();
		};
	};

	// 其实只注释了最后一行，只能这样了
	control.drawHero = function (status, offset) {
		if (!core.isPlaying() || !core.status.floorId || core.status.gameOver) return;
		var x = core.getHeroLoc('x'),
			y = core.getHeroLoc('y'),
			direction = core.getHeroLoc('direction');
		status = status || 'stop';
		offset = offset || 0;
		var way = core.utils.scan[direction];
		var dx = way.x,
			dy = way.y,
			offsetX = dx * offset,
			offsetY = dy * offset;
		core.bigmap.offsetX = core.clamp((x - core.__HALF_SIZE__) * 32 + offsetX, 0, 32 * core.bigmap.width - core.__PIXELS__);
		core.bigmap.offsetY = core.clamp((y - core.__HALF_SIZE__) * 32 + offsetY, 0, 32 * core.bigmap.height - core.__PIXELS__);
		core.clearAutomaticRouteNode(x + dx, y + dy);
		core.clearMap('hero');

		if (!core.hasFlag('hideHero')) {
			this._drawHero_getDrawObjs(direction, x, y, status, offset).forEach(function (block) {
				core.drawImage('hero', block.img, block.heroIcon[block.status] * block.width,
					block.heroIcon.loc * block.height, block.width, block.height,
					block.posx + (32 - block.width) / 2, block.posy + 32 - block.height, block.width, block.height);
			});
		}

		core.control.updateViewport();
		//core.setGameCanvasTranslate('hero', 0, 0);
	};

	// 复写转发
	core.drawHero = function (status, offset) {
		return core.control.drawHero(status, offset);
	};

	// 创建摄像机对象
	this.camera = new this.Camera();

	// 帧事件 更新摄像机
	this.updateCameraEx = function () {
		this.camera.update();
	};

	// 代理原本的镜头事件
	control.updateViewport = function () {
		core.plugin.camera.requestCameraUpdate();
	};

	// 更变楼层的行为追加，重置镜头
	events.prototype.changingFloor = function (floorId, heroLoc, fromLoad) {
		this.eventdata.changingFloor(floorId, heroLoc, fromLoad);
		core.plugin.camera.resetCamera();
	};

	// 注册帧事件
	core.registerAnimationFrame('smoothCameraFlash', true, this.updateCameraEx.bind(this));
}
}