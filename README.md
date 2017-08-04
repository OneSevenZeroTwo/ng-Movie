# ng-Movie 数据接口文档
[api协议](http://m.maoyan.com/)

## 1 查询出首页电影列表
	说明：获取首页列表
	接口地址：http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000
	request：
	type=hot类型
	offset:数据开始位置
	limit:偏移量
*response:*
```javascript
	{
    "control": {
        "expires": 1800
    },
    "status": 0,
    "data": {
        "hasNext": true,
        "movies": [
            {
                "late": true,
                "cnms": 31,
                "sn": 436,
                "showDate": "",
                "dur": 115,
                "img": "http://p0.meituan.net/165.220/movie/7f32684e28253f39fe2002868a1f3c95373851.jpg",
                "sc": 9.1,
                "ver": "3D/IMAX 3D",
                "rt": "本周二上映",
                "nm": "末日崩塌",
                "scm": "史无前例超级地震撕裂一切",
                "imax": true,
                "snum": 20129,
                "src": "美国",
                "pn": 74,
                "preSale": 0,
                "vd": "",
                "dir": "布拉德·佩顿",
                "star": "巨石强森,等",
                "cat": "剧情,动作,惊悚",
                "wish": 65386,
                "3d": true,
                "time": "",
                "id": 246363
            }
        ]
    }
}
```
## 2 查出电影详情(包含评论)
	说明：查看电影详情
	接口地址：http://m.maoyan.com/movie/xxxx.json
	request:
		这里直接在将xxxx换成movieid 例子 246363.json
## 3 加载更多评论
	说明：加载更多评论
	接口地址：http://m.maoyan.com/comments.json?movieid=246363&limit=5&offset=5
	request：
	movieid : 电影id
	offset:数据开始位置
	limit:偏移量
*response:*
```javascript
	{
    "control": {
        "expires": 300
    },
    "status": 0,
    "data": {
        "CommentResponseModel": {
            "total": 5147,
            "cmts": [
                {
                    "nick": "ToyoGu李学栋",
                    "approve": 0,
                    "oppose": 0,
                    "reply": 0,
                    "avatarurl": "http://p1.meituan.net/avatar/15beaf1aafc1571890808171618e552741843.jpg",
                    "userId": 62209126,
                    "score": 5,
                    "id": 17178527,
                    "content": "不错，好看，",
                    "time": "2015-06-05 00:20"
                },
                {
                    "nick": "死生成说",
                    "approve": 0,
                    "oppose": 0,
                    "reply": 0,
                    "avatarurl": "http://p0.meituan.net/avatar/__47448219__1684116.jpg",
                    "userId": 15946769,
                    "score": 5,
                    "id": 17178526,
                    "content": "VIP很爽的",
                    "time": "2015-06-05 00:20"
                },
                {
                    "nick": "彩虹天边的雨云",
                    "approve": 0,
                    "oppose": 0,
                    "reply": 0,
                    "avatarurl": "http://p0.meituan.net/movie/__40465654__9539763.png",
                    "userId": 137865391,
                    "score": 4,
                    "id": 17178518,
                    "content": "场面震撼，衔接完美，美国式英雄主义，主角家不死光环，但是结尾有点简洁普通点",
                    "time": "2015-06-05 00:20"
                },
                {
                    "nick": "春春的嘛",
                    "approve": 0,
                    "oppose": 0,
                    "reply": 0,
                    "avatarurl": "http://p1.meituan.net/avatar/a3ad3970104ede947f65d7a2d5685cdb12829.jpg",
                    "userId": 1698060,
                    "score": 4,
                    "id": 17178511,
                    "content": "强老大的电影要支持，灾难效果比之前几部灾难片好的多，强老大女儿身材棒棒哒！",
                    "time": "2015-06-05 00:20"
                },
                {
                    "nick": "XxV543764616",
                    "approve": 0,
                    "oppose": 0,
                    "reply": 0,
                    "avatarurl": "http://p0.meituan.net/movie/__40465654__9539763.png",
                    "userId": 201943883,
                    "score": 5,
                    "id": 17178494,
                    "content": "不错啊，好几年没看灾难片了，感觉有点像2010",
                    "time": "2015-06-05 00:20"
                }
            ]
        },
        "hasNext": true,
        "movieid": 246363,
        "offset": 5,
        "limit": 5
    }
}
```
## 4 查出影院
	说明：查出电影院
	接口地址：http://m.maoyan.com/cinemas.json
	request：
		猫眼的服务器会根据你的ip段加载出你本地的影院
## 5 查询出影院详情
	说明：查出电影院详情
	接口地址：http://m.maoyan.com/showtime/wrap.json?cinemaid=11533&movieid=
	request：(必选)
		cinemaid : 影院id
		movieid : 电影id
## 6 轮播图
	说明：轮播图
	接口地址：http://apiv2.vmovier.com/api/index/getBanner?
	请求方式:post
	参数：
	返回数据:{data:Array(6)}
*json:*
```javascript
	{
    "status": 0,
    "msg": "OK",
    "data": [
        {
            "banner_id": "379",
            "title": "",
            "image": "http://apiv2.vmovier.com/Uploads/Vmovier/banner/2015/07-01/559361e8eb52b.jpg",
            "type": "post",
            "object_id": "46986"
        },
        {
            "banner_id": "378",
            "title": "喜极而泣超感人短片《Proud to love》",
            "image": "http://apiv2.vmovier.com/Uploads/Vmovier/banner/2015/06-30/5592532356bc1.jpg",
            "type": "post",
            "object_id": "46974"
        },
        {
            "banner_id": "377",
            "title": "虐心结局法国动画短片《CARN》",
            "image": "http://apiv2.vmovier.com/Uploads/Vmovier/banner/2015/06-29/5590aa6f64b8d.jpg",
            "type": "post",
            "object_id": "46948"
        },
        {
            "banner_id": "375",
            "title": "狱后生活感人短片《走出笼中》",
            "image": "http://apiv2.vmovier.com/Uploads/Vmovier/banner/2015/06-26/558cec489f143.jpg",
            "type": "post",
            "object_id": "46928"
        },
        {
            "banner_id": "374",
            "title": "",
            "image": "http://apiv2.vmovier.com/Uploads/Vmovier/banner/2015/06-26/558cfd17c57a6.jpg",
            "type": "post",
            "object_id": "46954"
        },
        {
            "banner_id": "368",
            "title": "【电影自习室】第四十三期",
            "image": "http://apiv2.vmovier.com/Uploads/Vmovier/banner/2015/06-25/558bef28d2ab8.jpg",
            "type": "backstage",
            "object_id": "46958"
        }
    ]
}
```
## 7 正在热映
	说明：
	接口地址：https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290
*json:*
```javascript
	{
		"bImg": "http://img5.mtime.cn/mg/2017/01/25/172446.45527982.jpg",
		"date": "2017-02-02",
		"lid": 20,
		"ms": [
		    {
	      "NearestCinemaCount": 152,
	      "NearestDay": 1486022400,
	      "NearestShowtimeCount": 1767,
	      "aN1": "成龙",
	      "aN2": "李治廷",
	      "cC": 152,
	      "commonSpecial": "大哥携“小鲜肉”全球寻宝石",
	      "d": "108",
	      "dN": "唐季礼",
	      "def": 0,
	      "id": 217896,
	      "img": "http://img5.mtime.cn/mt/2017/01/13/191421.14582165_1280X720X2.jpg",
	      "is3D": false,
	      "isDMAX": false,
	      "isFilter": false,
	      "isHot": true,
	      "isIMAX": false,
	      "isIMAX3D": false,
	      "isNew": false,
	      "isTicket": true,
	      "m": "",
	      "movieType": "动作 / 冒险 / 喜剧",
	      "p": [
	        "动作冒险喜剧"
	      ],
	      "r": 6.2,
	      "rc": 0,
	      "rd": "20170128",
	      "rsC": 0,
	      "sC": 3003,
	      "t": "功夫瑜伽",
	      "tCn": "功夫瑜伽",
	      "tEn": "Kung-Fu Yoga",
	      "ua": -1,
	      "versions": [],
	      "wantedCount": 1132
	    },
	    {
	      "NearestCinemaCount": 151,
	      "NearestDay": 1486022400,
	      "NearestShowtimeCount": 1112,
	      "aN1": "邓超",
	      "aN2": "彭于晏",
	      "cC": 151,
	      "commonSpecial": "邓超彭于晏一起街头热血",
	      "d": "102",
	      "dN": "韩寒",
	      "def": 0,
	      "id": 237054,
	      "img": "http://img5.mtime.cn/mt/2017/01/12/181512.62044353_1280X720X2.jpg",
	      "is3D": false,
	      "isDMAX": false,
	      "isFilter": false,
	      "isHot": true,
	      "isIMAX": false,
	      "isIMAX3D": false,
	      "isNew": false,
	      "isTicket": true,
	      "m": "",
	      "movieType": "喜剧",
	      "p": [
	        "喜剧"
	      ],
	      "r": 6.5,
	      "rc": 0,
	      "rd": "20170128",
	      "rsC": 0,
	      "sC": 1928,
	      "t": "乘风破浪",
	      "tCn": "乘风破浪",
	      "tEn": "Duckweed",
	      "ua": -1,
	      "versions": [
	        {
	          "enum": 1,
	          "version": "2D"
	        }
	      ],
	      "wantedCount": 2802
	    }
	  ],
	  "newActivitiesTime": 0,
	  "totalComingMovie": 39,
	  "voucherMsg": ""
	}
```
*解析:*
```
	* bImg:???
	* date：日期
	* lid：ms 数量 x 10？
	* ms：具体正在热映电影信息
	* aN1：演员1
	* aN2：演员2
	* cC：今日上映该电影的影院数量，同NearestCinemaCount
	* d：影片时长
	* dN：导演
	* def：???
	* id：影片 id，需要提供给影片详情
	* r：影片评分
	* rd：影片上映时间
	* sC：???
	* t：影片名
	* tCn：影片中文名
	* tEn：影片英文名
	* versions：影片观影类型，如 3D、IMAX等
```
## 8 即将上映
	说明：获取即将上映的数据
	接口地址：https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290
*json:*
```javascript
	{
	  "attention": [
	    {
	      "actor1": "范·迪塞尔",
	      "actor2": "露比·罗丝",
	      "director": "D·J·卡卢索",
	      "id": 125805,
	      "image": "http://img5.mtime.cn/mt/2017/01/05/105822.16893974_1280X720X2.jpg",
	      "isFilter": false,
	      "isTicket": true,
	      "isVideo": true,
	      "locationName": "美国",
	      "rDay": 10,
	      "rMonth": 2,
	      "rYear": 2017,
	      "releaseDate": "2月10日上映",
	      "title": "极限特工：终极回归",
	      "type": "动作 / 冒险 / 惊悚",
	      "videoCount": 3,
	      "videos": [
	        {
	          "hightUrl": "",
	          "image": "http://img5.mtime.cn/mg/2017/01/05/105124.83548335.jpg",
	          "length": 30,
	          "title": "极限特工：终极回归 中国版预告片",
	          "url": "http://vf.test.com/Video/2017/01/05/mp4/170105105137886980.mp4",
	          "videoId": 64107
	        },
	        {
	          "hightUrl": "",
	          "image": "http://img5.mtime.cn/mg/2016/11/02/082857.54680705.jpg",
	          "length": 139,
	          "title": "极限特工：终极回归 中文版终极预告片",
	          "url": "http://vf.test.com/Video/2016/11/02/mp4/161102083059175649.mp4",
	          "videoId": 63180
	        },
	        {
	          "hightUrl": "",
	          "image": "http://img31.mtime.cn/mg/2016/08/05/122731.94053608.jpg",
	          "length": 91,
	          "title": "极限特工：终极回归 中文版预告片",
	          "url": "http://vf.test.com/Video/2016/08/05/mp4/160805122727094193.mp4",
	          "videoId": 61933
	        }
	      ],
	      "wantedCount": 1359
	    },
	    {
	      "actor1": "杜天皓",
	      "actor2": "闫妮",
	      "director": "黄美娜",
	      "id": 238265,
	      "image": "http://img5.mtime.cn/mt/2017/01/06/103911.39785227_1280X720X2.jpg",
	      "isFilter": false,
	      "isTicket": false,
	      "isVideo": true,
	      "locationName": "中国",
	      "rDay": 10,
	      "rMonth": 3,
	      "rYear": 2017,
	      "releaseDate": "3月10日上映",
	      "title": "美容针",
	      "type": "爱情 / 剧情",
	      "videoCount": 1,
	      "videos": [
	        {
	          "hightUrl": "",
	          "image": "http://img5.mtime.cn/mg/2017/01/09/134440.69569620.jpg",
	          "length": 77,
	          "title": "美容针 先导预告片",
	          "url": "http://vf.test.com/Video/2017/01/09/mp4/170109134511076173.mp4",
	          "videoId": 64162
	        }
	      ],
	      "wantedCount": 13
	    }
	  ],
	  "moviecomings": [
	    {
	      "actor1": "贾乃亮",
	      "actor2": "马丽",
	      "director": "郭大雷",
	      "id": 230769,
	      "image": "http://img5.mtime.cn/mt/2017/01/16/104630.29361196_1280X720X2.jpg",
	      "isFilter": false,
	      "isTicket": true,
	      "isVideo": true,
	      "locationName": "中国",
	      "rDay": 3,
	      "rMonth": 2,
	      "rYear": 2017,
	      "releaseDate": "2月3日上映",
	      "title": "东北往事之破马张飞",
	      "type": "喜剧",
	      "videoCount": 3,
	      "videos": [
	        {
	          "hightUrl": "",
	          "image": "http://img5.mtime.cn/mg/2016/11/01/211216.75603152.jpg",
	          "length": 58,
	          "title": "东北往事之破马张飞 先行版预告片",
	          "url": "http://vf.test.com/Video/2016/11/01/mp4/161101211204394445.mp4",
	          "videoId": 63176
	        },
	        {
	          "hightUrl": "",
	          "image": "http://img5.mtime.cn/mg/2016/12/06/215919.97317974.jpg",
	          "length": 89,
	          "title": "东北往事之破马张飞 剧情版预告片",
	          "url": "http://vf.test.com/Video/2016/12/06/mp4/161206215730098083.mp4",
	          "videoId": 63664
	        },
	        {
	          "hightUrl": "",
	          "image": "http://img5.mtime.cn/mg/2016/12/29/153033.28636603.jpg",
	          "length": 53,
	          "title": "东北往事之破马张飞 彩蛋之为金士杰庆生",
	          "url": "http://vf.test.com/Video/2016/12/29/mp4/161229153012984378.mp4",
	          "videoId": 64028
	        }
	      ],
	      "wantedCount": 1677
	    },
	    {
	      "actor1": "山新",
	      "actor2": "姚雷",
	      "director": "邓伟锋",
	      "id": 233227,
	      "image": "http://img5.mtime.cn/mt/2017/01/17/173909.17348918_1280X720X2.jpg",
	      "isFilter": false,
	      "isTicket": true,
	      "isVideo": true,
	      "locationName": "中国",
	      "rDay": 5,
	      "rMonth": 2,
	      "rYear": 2017,
	      "releaseDate": "2月5日上映",
	      "title": "萤火奇兵",
	      "type": "动画 / 奇幻 / 冒险",
	      "videoCount": 3,
	      "videos": [
	        {
	          "hightUrl": "",
	          "image": "http://img31.mtime.cn/mg/2016/06/29/142348.49429265.jpg",
	          "length": 84,
	          "title": "萤火奇兵 预告片",
	          "url": "http://vf.test.com/Video/2016/06/29/mp4/160629142150295349.mp4",
	          "videoId": 61192
	        },
	        {
	          "hightUrl": "",
	          "image": "http://img31.mtime.cn/mg/2016/07/20/114328.48612333.jpg",
	          "length": 45,
	          "title": "萤火奇兵 先行版预告片",
	          "url": "http://vf.test.com/Video/2016/07/20/mp4/160720114306954253.mp4",
	          "videoId": 61554
	        },
	        {
	          "hightUrl": "",
	          "image": "http://img5.mtime.cn/mg/2016/09/14/132405.13320533.jpg",
	          "length": 93,
	          "title": "预告片2",
	          "url": "http://vf.test.com/Video/2016/09/14/mp4/160914132505167172.mp4",
	          "videoId": 62519
	        }
	      ],
	      "wantedCount": 179
	    }
	  ]
	}
```
*解析：*
```
	首先大体分为两个部分 ——
		* attention：最受关注
		* moviecomings：即将上映
	接下来就是里面具体的字段：
		* videos：预告片，不过我们无权访问
```
## 9 影片详情
	说明：获取影片详情信息
	接口地址：https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805
	必选参数：id
*json:*
```javascript
	{
	  "code": "1",
	  "data": {
	    "advertisement": {
	      "advList": [
	        {
	          "advTag": "",
	          "endDate": 1514649599,
	          "isHorizontalScreen": false,
	          "isOpenH5": false,
	          "startDate": 1451577600,
	          "tag": "西游伏妖篇（票务）",
	          "type": "203",
	          "typeName": "影片详情页banner2",
	          "url": "https://static4da.mtime.cn/feature/mobile/banner/2017/0122/210.html"
	        }
	      ],
	      "count": 1,
	      "error": "",
	      "success": true
	    },
	    "basic": {
	      "actors": [
	        {
	          "actorId": 913378,
	          "img": "http://img31.mtime.cn/ph/2014/09/01/170748.64755972_1280X720X2.jpg",
	          "name": "范·迪塞尔",
	          "nameEn": "Vin Diesel",
	          "roleImg": "http://img5.mtime.cn/mg/2017/01/05/162613.85098094.jpg",
	          "roleName": "Xander Cage"
	        }
	      ],
	      "award": {
	        "awardList": [],
	        "totalNominateAward": 0,
	        "totalWinAward": 0
	      },
	      "commentSpecial": "",
	      "community": {},
	      "director": {
	        "directorId": 903521,
	        "img": "http://img31.mtime.cn/ph/2016/09/02/144150.57291017_1280X720X2.jpg",
	        "name": "D·J·卡卢索",
	        "nameEn": "D.J. Caruso"
	      },
	      "festivals": [],
	      "hotRanking": 5,
	      "img": "http://img5.mtime.cn/mt/2017/01/05/105822.16893974_1280X720X2.jpg",
	      "is3D": true,
	      "isDMAX": true,
	      "isEggHunt": false,
	      "isFilter": false,
	      "isIMAX": false,
	      "isIMAX3D": true,
	      "isTicket": true,
	      "message": "该操作将清除您对该片的评分！是否确认？",
	      "mins": "107分钟",
	      "movieId": 125805,
	      "name": "极限特工：终极回归",
	      "nameEn": "xXx: The Return of Xander Cage",
	      "overallRating": -1,
	      "personCount": 123,
	      "quizGame": {},
	      "releaseArea": "中国",
	      "releaseDate": "20170210",
	      "showCinemaCount": 27,
	      "showDay": 1486627200,
	      "showtimeCount": 14,
	      "stageImg": {
	        "count": 124,
	        "list": [
	          {
	            "imgId": 7180661,
	            "imgUrl": "http://img31.mtime.cn/pi/2016/04/06/163644.66635601_1280X720X2.jpg"
	          },
	          {
	            "imgId": 7301637,
	            "imgUrl": "http://img5.mtime.cn/pi/2016/11/02/174909.42908242_1280X720X2.jpg"
	          },
	          {
	            "imgId": 7203067,
	            "imgUrl": "http://img31.mtime.cn/pi/2016/04/07/160807.83892239_1280X720X2.jpg"
	          },
	          {
	            "imgId": 7301211,
	            "imgUrl": "http://img5.mtime.cn/pi/2016/11/01/091327.68190533_1280X720X2.jpg"
	          }
	        ]
	      },
	      "story": "《极限特工3》将故事聚焦在由范·迪塞尔带头的的特工小队和以甄子丹为首的反派组织之间的对决。在这部作品中，迪塞尔饰演的特工凯奇不再是孤胆英雄，他将与一群出色的伙伴共同作战：塞缪尔·杰克逊饰演的国安局特工，印度女星迪皮卡·帕度柯妮饰演的与凯奇颇有渊源的女猎人，凭借《吸血鬼日记》走红的妮娜·杜波夫扮演的技术专家，《女子监狱》女星露比·罗丝饰演的狙击手，中国当红偶像演员吴亦凡饰演的特工Nicks。",
	      "style": {
	        "isLeadPage": 0,
	        "leadImg": "https://img2.mtime.cn/mg/.jpg",
	        "leadUrl": ""
	      },
	      "totalNominateAward": 0,
	      "totalWinAward": 0,
	      "type": [
	        "动作",
	        "冒险",
	        "惊悚"
	      ],
	      "url": "https://movie.mtime.com/125805/",
	      "video": {
	        "count": 18,
	        "hightUrl": "https://vfx.mtime.cn/Video/2017/01/05/mp4/170105105137886980.mp4",
	        "img": "http://img5.mtime.cn/mg/2017/01/05/105124.57142324_235X132X4.jpg",
	        "title": "极限特工：终极回归 中国版预告片",
	        "url": "https://vfx.mtime.cn/Video/2017/01/05/mp4/170105105137886980_480.mp4",
	        "videoId": 64107
	      }
	    },
	    "boxOffice": {
	      "movieId": 125805,
	      "ranking": 41,
	      "todayBox": 0,
	      "todayBoxDes": "",
	      "todayBoxDesUnit": "",
	      "totalBox": 0,
	      "totalBoxDes": "",
	      "totalBoxUnit": ""
	    },
	    "live": {},
	    "related": {
	      "goodsCount": 0,
	      "goodsList": [],
	      "relateId": 0,
	      "relatedUrl": "https://mall-wv.mtime.cn/#!/commerce/list/",
	      "type": 0
	    }
	  },
	  "msg": "成功",
	  "showMsg": ""
	}
```
*解析：*
```
	url:https://ticket-api-m.mtime.cn/movie/detail.api?locationId=?&movieId=?
		其中 locationId 就不做多解释了，movieId 可以分别从正在售票、正在热映、即将上映对应 json 的 movieId、id、id 字段中获取
	其中advertisement、related是无关字段，不做解析
		* basic：具体内容
		* actors：演员信息
		* actorId：演员 id
		* img：演员照片
		* name：演员名
		* nameEn：演员英文名
		* roleImg：影片中饰演角色图片
		* roleName：影片中饰演角色名字
		* award：获得的奖项？
		* commentSpecial：一句话总结该电影
		* community：???
		* director：导演信息
		* hotRanking：热映排行榜
		* img：剧照
		* releaseArea：上映地区
		* stageImg：影片剧照
		* story：剧情简介
		* video：预告片
		* boxOffice：专业解读内容
		* ranking：票房排名
		* todayBox：今日实时票房量
		* todayBoxDes 和 todayBoxDesUnit：今日实时票房量
		* totalBox 和 totalBoxUnit：累计票房量
	ps：这里还有一些字段没有解析，由于采样不够大，所以笔者也无法判断部分字段含义
```
## 10 演职员表
	说明：获取演职员表数据
	接口地址：https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=217896
*json:*
```javascript
	{
	  "types": [
	    {
	      "typeName": "导演",
	      "typeNameEn": "Director",
	      "persons": [
	        {
	          "id": 892951,
	          "name": "唐季礼",
	          "nameEn": "Stanley Tong",
	          "image": "http://img31.mtime.cn/ph/2014/02/22/192821.88623670_1280X720X2.jpg"
	        }
	      ]
	    },
	    {
	      "typeName": "演员",
	      "typeNameEn": "Actor",
	      "persons": [
	        {
	          "id": 892908,
	          "name": "成龙",
	          "nameEn": "Jackie Chan",
	          "image": "http://img31.mtime.cn/ph/2014/02/28/112422.17365543_1280X720X2.jpg",
	          "personate": "Jack",
	          "personateCn": "",
	          "personateEn": "Jack",
	          "roleCover": "http://img5.mtime.cn/mg/2017/01/11/145413.83105118_120X120X4.jpg"
	        },
	        {
	          "id": 1706195,
	          "name": "李治廷",
	          "nameEn": "Aarif Lee",
	          "image": "http://img31.mtime.cn/ph/2016/08/29/141047.77357073_1280X720X2.jpg",
	          "personate": "李琼斯",
	          "personateCn": "李琼斯",
	          "personateEn": "",
	          "roleCover": "http://img5.mtime.cn/mg/2017/01/11/145626.54701937_120X120X4.jpg"
	        }
	      ]
	    },
	    {
	      "typeName": "编剧",
	      "typeNameEn": "Writer",
	      "persons": [
	        {
	          "id": 892951,
	          "name": "唐季礼",
	          "nameEn": "Stanley Tong",
	          "image": "http://img31.mtime.cn/ph/2014/02/22/192821.88623670_1280X720X2.jpg"
	        }
	      ]
	    },
	    {
	      "typeName": "制作人",
	      "typeNameEn": "Produced by",
	      "persons": [
	        {
	          "id": 2038377,
	          "name": "",
	          "nameEn": "Maxine De Vere",
	          "image": "http://img31.mtime.cn/ph/377/2038377/2038377_1280X720X2.jpg"
	        },
	        {
	          "id": 1209821,
	          "name": "董韵诗",
	          "nameEn": "Barbie Tung",
	          "image": "http://img31.mtime.cn/ph/2016/09/05/174813.15229657_1280X720X2.jpg"
	        }
	      ]
	    },
	    {
	      "typeName": "美术设计",
	      "typeNameEn": "Art Direction by",
	      "persons": [
	        {
	          "id": 2203560,
	          "name": "",
	          "nameEn": "Zhen Wu",
	          "image": "http://img31.mtime.cn/ph/1560/2203560/2203560_1280X720X2.jpg"
	        }
	      ]
	    },
	    {
	      "typeName": "服装设计",
	      "typeNameEn": "Costume Design by",
	      "persons": [
	        {
	          "id": 1265610,
	          "name": "黄家仪",
	          "nameEn": "Phoebe Wong",
	          "image": "http://img31.mtime.cn/ph/1610/1265610/1265610_1280X720X2.jpg"
	        }
	      ]
	    },
	    {
	      "typeName": "视觉特效总监",
	      "typeNameEn": "Visual Effects Supervisor",
	      "persons": [
	        {
	          "id": 2239688,
	          "name": "",
	          "nameEn": "Khandu Bidkar",
	          "image": "http://img31.mtime.cn/ph/1688/2239688/2239688_1280X720X2.jpg"
	        }
	      ]
	    },
	    {
	      "typeName": "动作指导",
	      "typeNameEn": "Choreographer",
	      "persons": [
	        {
	          "id": 892951,
	          "name": "唐季礼",
	          "nameEn": "Stanley Tong",
	          "image": "http://img31.mtime.cn/ph/2014/02/22/192821.88623670_1280X720X2.jpg"
	        },
	        {
	          "id": 1865296,
	          "name": "伍刚",
	          "nameEn": "Gang Wu",
	          "image": "http://img5.mtime.cn/ph/2016/11/26/222616.41967971_1280X720X2.jpg"
	        }
	      ]
	    },
	    {
	      "typeName": "副导演/助理导演",
	      "typeNameEn": "Assistant Director",
	      "persons": [
	        {
	          "id": 1893463,
	          "name": "",
	          "nameEn": "James Cho",
	          "image": "http://img31.mtime.cn/ph/1463/1893463/1893463_1280X720X2.jpg"
	        }
	      ]
	    },
	    {
	      "typeName": "声音部门",
	      "typeNameEn": "Sound Department",
	      "persons": [
	        {
	          "id": 2203561,
	          "name": "",
	          "nameEn": "Sindri Þór Kárason",
	          "image": "http://img31.mtime.cn/ph/1561/2203561/2203561_1280X720X2.jpg"
	        }
	      ]
	    }
	  ]
	}
```
*解析：*
```
	* typeName：已知取值有导演、演员、编剧等
	* typeNameEn：typeName 字段对应的英文
	* persons：具体人员信息
	* id：人员 id
	* name：人员姓名
	* nameEn：人员英文名
以下字段是演员特有的：
	* image：人员照片
	* personate：饰演角色名
	* personateCn：饰演角色名的中文名
	* personateEn：饰演角色名的英文名
	* roleCover：饰演角色剧照
人员详细信息 url：https://ticket-api-m.mtime.cn/person/detail.api?personId=?&cityId=？
示例 url：https://ticket-api-m.mtime.cn/person/detail.api?personId=892908&cityId=290
解析：就是上面获取到的人员 id 和你的地区 id 拼接上去就可以了
```
## 11 影片评论
	说明：获取影片评论信息
	接口地址；https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId=125805
*json:*
```javascript
	{
	  "code": "1",
	  "data": {
	    "mini": {
	      "list": [
	        {
	          "commentDate": 1485949110,
	          "commentId": 41530503,
	          "content": "小小可惜，甄子丹已经过了最能打的年纪，倘若在杀破狼时期的话，甄子丹一定发挥的更好！",
	          "headImg": "//img32.mtime.cn/up/2016/04/21/164216.20185739_128X128.jpg",
	          "img": "",
	          "isHot": false,
	          "isPraise": false,
	          "locationName": "温哥华",
	          "nickname": "百家影评",
	          "praiseCount": 1,
	          "rating": 0,
	          "replyCount": 0
	        }
	      ],
	      "total": 106
	    },
	    "plus": {
	      "list": [
	        {
	          "commentDate": 1468225860,
	          "commentId": 7967852,
	          "content": "\n常年锃光瓦亮的光头、一身健硕的肌肉、还有那永恒不变的T恤背心，这是一位令人为之惊讶、欢呼的糙汉，他便是范·迪塞尔。\n\n糙汉的《速激》人生\n\n\n\n提到老范，你最熟悉他哪部电影？那肯定没有其他答案，肯定是《速度与激情》系列了。\n这部全球最风靡的赛车题材系列电影起初的男一号是保罗·沃克饰演的卧底警察，但电影上映后人们发现，老范才是最吸引眼球的。\n拍摄《速度与激情2》时，老范因为档期原因没有参演，电影...",
	          "headImg": "//img32.mtime.cn/up/2013/06/26/161117.68950441_128X128.jpg",
	          "isWantSee": false,
	          "locationName": "",
	          "nickname": "冷子墨",
	          "rating": 7,
	          "replyCount": 4,
	          "title": "biubiubiu！看大汉玩转你的小心跳！——范·迪塞尔"
	        }
	      ],
	      "total": 2
	    }
	  },
	  "msg": "",
	  "showMsg": ""
	}
```
*解析：*
```
	* mini 是短评，更多短评访问 url：https://api-m.mtime.cn/Showtime/HotMovieComments.api?pageIndex=?&movieId=? (如：https://api-m.mtime.cn/Showtime/HotMovieComments.api?pageIndex=1&movieId=217896)
	* plus 是精选影评，更多精选影评访问 url：https://api-m.mtime.cn/Movie/HotLongComments.api?pageIndex=?&movieId=? (如https://api-m.mtime.cn/Movie/HotLongComments.api?pageIndex=1&movieId=217896)
	* ca：用户名
	* caimg：用户头像
	* cal：用户地区
	* cd：用户评论时间
	* ce：用户评论内容
	* ceimg：评论内容中的图片地址
	* commentCount：评论点赞量
	* cr：用户评分
	* isHot：是否是热门评论
	* tweetId：???
	* total：影评总数量
```
## 12 剧照
	说明：
	接口地址：https://api-m.mtime.cn/Movie/ImageAll.api?movieId=217896
*json:*
```javascript
	{
	  "images": [
	    {
	      "id": 7317312,
	      "image": "http://img5.mtime.cn/pi/2016/12/25/153213.67270192_1000X1000.jpg",
	      "type": 1
	    },
	    {
	      "id": 7323621,
	      "image": "http://img5.mtime.cn/pi/2017/01/12/113131.12368570_1000X1000.jpg",
	      "type": 6
	    },
	    {
	      "id": 7241716,
	      "image": "http://img31.mtime.cn/pi/2016/06/12/092438.89530314_1000X1000.jpg",
	      "type": 31
	    },
	
	    {
	      "id": 7315536,
	      "image": "http://img5.mtime.cn/pi/2016/12/21/112702.53654087_1000X1000.jpg",
	      "type": 41
	    }
	  ],
	  "imageTypes": [
	    {
	      "type": -1,
	      "typeName": "显示所有"
	    },
	    {
	      "type": 6,
	      "typeName": "剧照"
	    },
	    {
	      "type": 1,
	      "typeName": "海报"
	    },
	    {
	      "type": 41,
	      "typeName": "工作照"
	    },
	    {
	      "type": 31,
	      "typeName": "新闻图片"
	    }
	  ]
	}
```
*解析：*
```
	* images：图片内容
	* id：图片 id
	* image：图片链接
	* type：图片类型码
	* imageTypes：图片类型内容
	* typeName：图片类型码对应的图片所属类型
```
