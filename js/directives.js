;
// 避免出现全局变量
// 每个组件要写好注释为哪个组件，这里面有我之前的写的组件，没写注释的你们可以看着用，启用的话需要写明注释
// 组件的命名中不能有大写
(function() {
    var directives = angular.module('directives', []);
    
    // xheader 头部组件 =============================
    directives.directive('xheader', ['$state', function($state) {
        return {
            templateUrl: 'directive/xheader.html',
            link: function(scope, ele, attr) {
                scope.columnArr = ['#!/home/index', '#!/home/weitoutiao/yule/2', '#!/home/weitoutiao/junshi/3', '#!/home/weitoutiao/qiche/4', '#!/home/weitoutiao/caijing/5', '#!/home/weitoutiao/xiaohua/6', '#!/home/weitoutiao/tiyu/7', '#!/home/weitoutiao/keji/8']
                scope.tableNum = $state.params.tableNum;
                scope.route = scope.columnArr[scope.tableNum - 1];
                scope.title = '乐玩';
                //console.log(scope.title);
            }
        }
    }]);

    // xsearch 搜索组件 =============================
    directives.directive('xsearch', [function() {
        return {
            templateUrl: 'directive/xsearch.html',
            link: function(scope, ele, attr) {
                scope.isShowSearch = false;
                scope.keyword = '';
                scope.changeShowSearch = function() {
                    scope.isShowSearch = true;
                }
                scope.clearWord = function() {
                    scope.keyword = '';
                }
            }
        }
    }]);
    directives.directive('xswiper', ['$http', function($http) {
        return {
            templateUrl: 'directive/xswiper.html',
            link: function(scope, ele, attr) {
              
          		scope.urls = ["./img/Frontpage/lunbo1.jpg","./img/Frontpage/lunbo2.jpg","./img/Frontpage/lunbo3.jpg","./img/Frontpage/lunbo4.jpg","./img/Frontpage/lunbo5.jpg","./img/Frontpage/lunbo6.jpg","./img/Frontpage/lunbo7.jpg"];
              var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true,//修改swiper的父元素时，自动初始化swiper
					autoplay: 3000,
					autoplayDisableOnInteraction: false
				});
            }
        }
    }]);
    directives.directive('xlist', ['$http', function($http) {
        return {
            templateUrl: 'directive/xlist.html',
            link: function(scope, ele, attr) {
                scope.news = [];
                scope.channel = attr.channel;
                scope.tableNum = 1;
                scope.page = 1;
                scope.pagesize = 10;
                scope.noMore = false;
                scope.showMore = true;
                scope.changeShow = function() {
                    scope.showNews();
                }
                scope.showNews = function() {
                    scope.isShow++;
                    scope.showMore = false;
                    $http({
                        method: 'GET',
                        url: 'http://localhost:6789/',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                        },
                        params: {
                            tableNum: scope.tableNum,
                            page: scope.page++,
                            pagesize: scope.pagesize
                        },
                        transformRequest: function(obj) {
                            var str = [];
                            for (var p in obj) {
                                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                            }
                            return str.join("&");
                        }
                    }).then(function(data) {
                        console.log(data.data.data);
                        scope.news = scope.news.concat(data.data.data);
                        scope.isShow--;
                        scope.showMore = true;
                        if (scope.news.length >= 50) {
                            scope.noMore = true;
                            scope.isShow=0;
                            scope.showMore = false;
                        }
                    }, function(err) {
                        console.log(err);
                    });
                }
                scope.showNews();
            }
        }
    }]);
		directives.directive('xhlist', ["$http",function($http) {
        return {
            templateUrl: 'directive/xhlist.html',
            link:function(scope,ele,attr){
            	var baseUrl = "https://bird.ioliu.cn/v1?url=http://m.maoyan.com";
            	console.log(444);
            	$http({
            		method:"GET",
            		url:baseUrl+"/movie/list.json?type=hot&offset=0&limit=1000"
            	}).then(function(data){
            		console.log(data);
            	})
            }
        }
    }]);
    // xfooter 底部组件===================================
    directives.directive('xfooter', ['$location', function($location) {
        return {
            templateUrl: 'directive/xfooter.html',
            link: function(scope, ele, attr) {
                var urlObj = $location.path().split('/');
                scope.route = urlObj[2];
                // 根据路由来判断每次刷新是显示在哪个column
                scope.currentCol = function() {
                    if (scope.route == 'movie') {
                        scope.tab = 0;
                        scope.changeTab = function(tab) {
                            scope.tab = tab;
                        }
                    } else if (scope.route == 'cinema') {
                        scope.tab = 2;
                        scope.changeTab = function(tab) {
                            scope.tab = tab;
                        }
                    } else if (scope.route == 'mine') {
                        scope.tab = 3;
                        scope.changeTab = function(tab) {
                            scope.tab = tab;
                        }
                    }
                }
                scope.currentCol();
            }
        }
    }]);

    // xcolumn movie的栏目组件====================================
    directives.directive('xcolumn', [function() {
        return {
            templateUrl: 'directive/xcolumn.html',
            link: function(scope, ele, attr) {
                scope.tabNum = 0;
                scope.changeClick = function(num) {
                    scope.tabNum = num;
                }
            }
        }
    }]);

    directives.directive('xloading', [function() {
        return {
            templateUrl: 'directive/xloading.html'
        }
    }]);

    // xwillin willin的栏目组件====================================
    directives.directive('xwillin', ['$state', '$http', function($state, $http) {
        return {
            templateUrl: 'directive/xwillin.html',
            link: function(scope, ele, attr) {
                scope.tabNum = 0;
                scope.changeClick = function(num) {
                    scope.tabNum = num;
                }
                scope.attention = [];
                scope.banner = [];

                // 请求attention==========
                $http({
                    method: 'GET',
                    url: 'data/willin.json',
                }).then(function(data) {
                    scope.attention = data.data.attention;
                    // console.log(scope.attention);
                }, function(err) {
                    console.log(err);
                });
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 4,
                    paginationClickable: true,
                    spaceBetween: 6,
                    freeMode: true,
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true //修改swiper的父元素时，自动初始化swiper
                });
            }
        }
    }]);

    // xwillinlist willin的栏目组件====================================
    directives.directive('xwillinlist', ['$http', '$window', function($http, $window) {
        return {
            templateUrl: 'directive/xwillinlist.html',
            link: function(scope, ele, attr) {
                scope.tabNum = 0;
                scope.page = -1;
                scope.movieList = [];
                scope.isShow = true;

                scope.changeClick = function(num) {
                    scope.tabNum = num;
                    //scope.pageCount = 10;
                }

                scope.loadMore = function(){
                    $http({
                        method: 'GET',
                        url: 'data/willin.json',
                    }).then(function(data) {
                        scope.page++;
                        scope.movieList = scope.movieList.concat(data.data.moviecomings.splice(scope.page * 10, 10));

                        //console.log(scope.movieList);
                        if(scope.movieList.length == 58){
                            scope.isShow = false;
                        }

                    }, function(err) {
                        console.log(err);
                    });  
                }
                scope.loadMore();

                $window.onscroll = function(){
                    var toBottom = document.body.scrollHeight - document.body.scrollTop;
                    if (toBottom == window.screen.availHeight) {
                        scope.loadMore();
                    }
                    console.log(toBottom,window.screen.availHeight );
                }
            }
        }
    }]);
    directives.directive('xloading', [function() {
        return {
            templateUrl: 'directive/xloading.html'
        }
    }]);
    //我的页面
	directives.directive('xmine', [function() {
        return {
            templateUrl: 'directive/xmine.html'
        }
    }]);
})();
