SET NAMES UTF8;
DROP DATABASE IF EXISTS ly;
CREATE DATABASE ly CHARSET=UTF8;
USE ly;

/**轮播图片**/
CREATE TABLE index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  subtitle VARCHAR(64),
  img VARCHAR(128),
  href VARCHAR(128)
);

/**服务介绍**/
CREATE TABLE serve_produce(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  promise VARCHAR(256),
  img VARCHAR(128)
);
/**产品**/
CREATE TABLE product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  subtitle VARCHAR(64),
  img VARCHAR(128),
  details VARCHAR(128), #产品详细说明
  href VARCHAR(128)
);

/**实时新闻**/
CREATE TABLE real_news(
  rid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  subtitle VARCHAR(64),
  details VARCHAR(128),
  img VARCHAR(128),
  did INT
);
/*details*/
CREATE TABLE details(
  did INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  video VARCHAR(128),
  content VARCHAR(256)
);
/**工作职位 招聘**/
CREATE TABLE job_position(
  jid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  descr VARCHAR(128),
  eng VARCHAR(512)
);

/**用户**/
/**用户信息**/
CREATE TABLE leiyou_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

INSERT INTO leiyou_user VALUES
(NULL,'励志哥','123456lz','123456lz@qq.com','13515512456',"#","李磊","1"),
(NULL,'奋斗姐','123456fd','123456fd@qq.com','13545674455',"#","王芳","0"),
(NULL,'海绵宝宝','123456bb','1235@163.com','13641512451',"#","星河","1"),
(NULL,'派大星','123456xx','1234x@qq.com','15212645124',"#","lily","0");

/*******************/
/******数据导入******/
/*******************/
/**轮播**/
INSERT INTO index_carousel VALUES
(NULL,'类友网络','完美前端体验','img/banner1.jpg',''),
(NULL,'类友网络','完美前端体验','img/banner2.jpg',''),
(NULL,'类友网络','完美前端体验','img/banner3.jpg',''),
(NULL,'类友网络','完美前端体验','img/banner4.jpg','');

/**首页**/
/**服务介绍**/
INSERT INTO serve_produce VALUES
(1,'1对1前端之约','当你我之手叠在一起，我们是这份盟约的基石。我们乐意感受这重量和责任，于指尖之术，打造更完善的开源的基础前端 UI 框架，化作你方寸屏幕前的亿万字节，共筑利器。','img/home_img1.jpg'),
(2,'我们的社区服务','社区是我们的一部分，我们从未忽视它的存在。在精心打造每一款产品之余，关乎于它的社区总是会给我们带来更多的能量。它聚集了太多的情怀开发者，无私破解一道道难题。','img/home_img2.jpg'),
(3,'特殊的模板定制','也许你并不需要专门聘请一位前端开发者，我们正在考虑是否能为你提供模板定制，但愿这是一个愉快的过程。然而，我们还在为这项服务做各项准备，敬请期待！','img/home_img3.jpg'),
(4,'1对1技术指导','很多时候，你更需要的是一个手把手的帮助。敬请期待！','img/home_img4.jpg');

/**产品库**/
INSERT INTO product VALUES
(1, 'JS基础库', '从小屏逐步扩展到大屏，最终实现所有屏幕适配，最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。','img/Product_img1.jpg','',''),
(2, 'css处理', '从小屏逐步扩展到大屏，最终实现所有屏幕适配，最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。','img/Product_img2.jpg','',''),
(3, '兼容性', '从小屏逐步扩展到大屏，最终实现所有屏幕适配，最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。','img/Product_img3.jpg','',''),
(4, '响应性', '从小屏逐步扩展到大屏，最终实现所有屏幕适配，最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。','img/Product_img4.jpg','','');

/*news*/
/**时事新闻**/
INSERT INTO  real_news VALUES
(NULL, '一直在你身边对你好，你却没有发现', 'subtitle', 'details', 'img','1'),
(NULL, '一直在你身边对你好，你却没有发现', 'subtitle', 'details', 'img','2'),
(NULL, '一直在你身边对你好，你却没有发现', 'subtitle', 'details', 'img','3'),
(NULL, '一直在你身边对你好，你却没有发现', 'subtitle', 'details', 'img','4'),
(NULL, '一直在你身边对你好，你却没有发现', 'subtitle', 'details', 'img','5'),
(NULL, '一直在你身边对你好，你却没有发现', 'subtitle', 'details', 'img','6'),
(NULL, '一直在你身边对你好，你却没有发现', 'subtitle', 'details', 'img','7'),
(NULL, '一直在你身边对你好，你却没有发现', 'subtitle', 'details', 'img','8');

/*deatails*/
INSERT INTO details VALUES
(NULL,'为创意而来 2019全国短视频创意峰会在郑举行','img/lei.mp4','发展：短视频的蔚然成风、全民狂欢来源于这个类目下的几个产品，风头最劲的抖音、用户最多的快手、不甘落寞的微视、红极一时的美拍，和抖音同根生的火山，这些产品的用户量已全部破亿或者破几亿；此外还有酷狗的短酷、歪歪的补刀、百度的Nani、新浪微博的爱动等大厂产品也都枕戈待旦，不断发力……这个类目已然成为各家平台银行存款的焚烧机，所有网红大V的梦工厂。特色：社交媒体和其他类目之间的最大不同为UGC式的内容生产，提倡竖屏展示，目前UGC这个定位已经不太准确，由于产品调性类似新浪微博，所以类目界定为社交媒体。抖音、快手是其中的佼佼者，抖音以内容玩法为主，快手以玩家特色为主，一个内容偏平台引领，一个内容偏人物自带，类目内其他产品基本也是对标这两个。'),
(NULL,'为创意而来 2019全国短视频创意峰会在郑举行','img/lei.mp4','发展：短视频的蔚然成风、全民狂欢来源于这个类目下的几个产品，风头最劲的抖音、用户最多的快手、不甘落寞的微视、红极一时的美拍，和抖音同根生的火山，这些产品的用户量已全部破亿或者破几亿；此外还有酷狗的短酷、歪歪的补刀、百度的Nani、新浪微博的爱动等大厂产品也都枕戈待旦，不断发力……这个类目已然成为各家平台银行存款的焚烧机，所有网红大V的梦工厂。特色：社交媒体和其他类目之间的最大不同为UGC式的内容生产，提倡竖屏展示，目前UGC这个定位已经不太准确，由于产品调性类似新浪微博，所以类目界定为社交媒体。抖音、快手是其中的佼佼者，抖音以内容玩法为主，快手以玩家特色为主，一个内容偏平台引领，一个内容偏人物自带，类目内其他产品基本也是对标这两个。'),
(NULL,'为创意而来 2019全国短视频创意峰会在郑举行','img/lei.mp4','发展：短视频的蔚然成风、全民狂欢来源于这个类目下的几个产品，风头最劲的抖音、用户最多的快手、不甘落寞的微视、红极一时的美拍，和抖音同根生的火山，这些产品的用户量已全部破亿或者破几亿；此外还有酷狗的短酷、歪歪的补刀、百度的Nani、新浪微博的爱动等大厂产品也都枕戈待旦，不断发力……这个类目已然成为各家平台银行存款的焚烧机，所有网红大V的梦工厂。特色：社交媒体和其他类目之间的最大不同为UGC式的内容生产，提倡竖屏展示，目前UGC这个定位已经不太准确，由于产品调性类似新浪微博，所以类目界定为社交媒体。抖音、快手是其中的佼佼者，抖音以内容玩法为主，快手以玩家特色为主，一个内容偏平台引领，一个内容偏人物自带，类目内其他产品基本也是对标这两个。'),
(NULL,'为创意而来 2019全国短视频创意峰会在郑举行','img/lei.mp4','发展：短视频的蔚然成风、全民狂欢来源于这个类目下的几个产品，风头最劲的抖音、用户最多的快手、不甘落寞的微视、红极一时的美拍，和抖音同根生的火山，这些产品的用户量已全部破亿或者破几亿；此外还有酷狗的短酷、歪歪的补刀、百度的Nani、新浪微博的爱动等大厂产品也都枕戈待旦，不断发力……这个类目已然成为各家平台银行存款的焚烧机，所有网红大V的梦工厂。特色：社交媒体和其他类目之间的最大不同为UGC式的内容生产，提倡竖屏展示，目前UGC这个定位已经不太准确，由于产品调性类似新浪微博，所以类目界定为社交媒体。抖音、快手是其中的佼佼者，抖音以内容玩法为主，快手以玩家特色为主，一个内容偏平台引领，一个内容偏人物自带，类目内其他产品基本也是对标这两个。'),
(NULL,'为创意而来 2019全国短视频创意峰会在郑举行','img/lei.mp4','发展：短视频的蔚然成风、全民狂欢来源于这个类目下的几个产品，风头最劲的抖音、用户最多的快手、不甘落寞的微视、红极一时的美拍，和抖音同根生的火山，这些产品的用户量已全部破亿或者破几亿；此外还有酷狗的短酷、歪歪的补刀、百度的Nani、新浪微博的爱动等大厂产品也都枕戈待旦，不断发力……这个类目已然成为各家平台银行存款的焚烧机，所有网红大V的梦工厂。特色：社交媒体和其他类目之间的最大不同为UGC式的内容生产，提倡竖屏展示，目前UGC这个定位已经不太准确，由于产品调性类似新浪微博，所以类目界定为社交媒体。抖音、快手是其中的佼佼者，抖音以内容玩法为主，快手以玩家特色为主，一个内容偏平台引领，一个内容偏人物自带，类目内其他产品基本也是对标这两个。'),
(NULL,'为创意而来 2019全国短视频创意峰会在郑举行','img/lei.mp4','发展：短视频的蔚然成风、全民狂欢来源于这个类目下的几个产品，风头最劲的抖音、用户最多的快手、不甘落寞的微视、红极一时的美拍，和抖音同根生的火山，这些产品的用户量已全部破亿或者破几亿；此外还有酷狗的短酷、歪歪的补刀、百度的Nani、新浪微博的爱动等大厂产品也都枕戈待旦，不断发力……这个类目已然成为各家平台银行存款的焚烧机，所有网红大V的梦工厂。特色：社交媒体和其他类目之间的最大不同为UGC式的内容生产，提倡竖屏展示，目前UGC这个定位已经不太准确，由于产品调性类似新浪微博，所以类目界定为社交媒体。抖音、快手是其中的佼佼者，抖音以内容玩法为主，快手以玩家特色为主，一个内容偏平台引领，一个内容偏人物自带，类目内其他产品基本也是对标这两个。'),
(NULL,'为创意而来 2019全国短视频创意峰会在郑举行','img/lei.mp4','发展：短视频的蔚然成风、全民狂欢来源于这个类目下的几个产品，风头最劲的抖音、用户最多的快手、不甘落寞的微视、红极一时的美拍，和抖音同根生的火山，这些产品的用户量已全部破亿或者破几亿；此外还有酷狗的短酷、歪歪的补刀、百度的Nani、新浪微博的爱动等大厂产品也都枕戈待旦，不断发力……这个类目已然成为各家平台银行存款的焚烧机，所有网红大V的梦工厂。特色：社交媒体和其他类目之间的最大不同为UGC式的内容生产，提倡竖屏展示，目前UGC这个定位已经不太准确，由于产品调性类似新浪微博，所以类目界定为社交媒体。抖音、快手是其中的佼佼者，抖音以内容玩法为主，快手以玩家特色为主，一个内容偏平台引领，一个内容偏人物自带，类目内其他产品基本也是对标这两个。'),
(NULL,'为创意而来 2019全国短视频创意峰会在郑举行','img/lei.mp4','发展：短视频的蔚然成风、全民狂欢来源于这个类目下的几个产品，风头最劲的抖音、用户最多的快手、不甘落寞的微视、红极一时的美拍，和抖音同根生的火山，这些产品的用户量已全部破亿或者破几亿；此外还有酷狗的短酷、歪歪的补刀、百度的Nani、新浪微博的爱动等大厂产品也都枕戈待旦，不断发力……这个类目已然成为各家平台银行存款的焚烧机，所有网红大V的梦工厂。特色：社交媒体和其他类目之间的最大不同为UGC式的内容生产，提倡竖屏展示，目前UGC这个定位已经不太准确，由于产品调性类似新浪微博，所以类目界定为社交媒体。抖音、快手是其中的佼佼者，抖音以内容玩法为主，快手以玩家特色为主，一个内容偏平台引领，一个内容偏人物自带，类目内其他产品基本也是对标这两个。');
/*about*/
/****招聘信息****/
INSERT INTO job_position VALUES
(NULL, '前端开发工程师','前端开发及维护工作；
有良好的技术基础，熟悉 Web 标准，熟练掌握多种 Web 前端技术；
掌握行业内流行的类库，Vue.js， React 等主流框架；
参与公司前端工程的设计、研发；
了解不同浏览器之间的差异，移动设备之间的差异。','President Xi Jinping has instructed local peoples congresses and their standing committees to creatively improve legislation and supervision based on local conditions.
The local peoples congresses and their standing committees are expected to better contribute to economic and social development as well as reforms, said Xi, also general secretary of the Communist Party of China (CPC) Central Committee and chairman of the Central Military Commission, in a recent instruction about the work of the local peoples congresses and their standing committees.
A symposium was held in Beijing Thursday to mark the 40th anniversary of the establishment of standing committees at the local peoples congresses.'),
(NULL, 'UI设计师','负责 PC 和 移动端网页 UI 、Banner、活动推广等设计；
结合产品风格和定位，给出合理的设计方案；
参能独立承担产品的完整设计任务；','President Xi Jinping has instructed local peoples congresses and their standing committees to creatively improve legislation and supervision based on local conditions.
The local peoples congresses and their standing committees are expected to better contribute to economic and social development as well as reforms, said Xi, also general secretary of the Communist Party of China (CPC) Central Committee and chairman of the Central Military Commission, in a recent instruction about the work of the local peoples congresses and their standing committees.
A symposium was held in Beijing Thursday to mark the 40th anniversary of the establishment of standing committees at the local peoples congresses.'),
(NULL, '大数据工程师','基于hadoop生态的大数据存储平台搭建和部署;
数据仓库的设计，开发，维护；
产品相关的用户、运营数据的统计分析、挖掘、预测','President Xi Jinping has instructed local peoples congresses and their standing committees to creatively improve legislation and supervision based on local conditions.
The local peoples congresses and their standing committees are expected to better contribute to economic and social development as well as reforms, said Xi, also general secretary of the Communist Party of China (CPC) Central Committee and chairman of the Central Military Commission, in a recent instruction about the work of the local peoples congresses and their standing committees.
A symposium was held in Beijing Thursday to mark the 40th anniversary of the establishment of standing committees at the local peoples congresses.'),
(NULL, '数据分析师','负责周期性报告的上报工作；
负责指标口径制定，提交数据开发需求、核对数据报表准确性；
根据业务需要，对接产品和开发，参与数据挖掘模型的构建、维护、部署和评估；
通过需求调研、数据分析和数据挖掘，针对业务问题，提出优化建议；
各业务中心数据指标监控、异常指标预警、指标的专项提升工作；
对接业务管理部门和交付中心，跟进业务变更对指标的影响、关注客服反馈问题的业务优化','President Xi Jinping has instructed local peoples congresses and their standing committees to creatively improve legislation and supervision based on local conditions.
The local peoples congresses and their standing committees are expected to better contribute to economic and social development as well as reforms, said Xi, also general secretary of the Communist Party of China (CPC) Central Committee and chairman of the Central Military Commission, in a recent instruction about the work of the local peoples congresses and their standing committees.
A symposium was held in Beijing Thursday to mark the 40th anniversary of the establishment of standing committees at the local peoples congresses.');

