# uniapp 笔记

## 全局取消原生导航栏

> 在page.js 中的globalStyle中 更改 navigationStyle 默认default 显示原生导航栏 custom 没有原生导航栏

## 单独去除原生导航栏

> 在 每个页面下的style 中 navigationStyle 设置为 custom

## App去除导航栏后改变状态栏样式

```js
	<!-- #ifdef APP-PLUS -->  
	<view class="status_bar">  
		<view class="top_view"></view>  
	</view>  
	<!-- #endif -->
	.status_bar {  
		height: var(--status-bar-height);  
		width: 100%;  
		background-color: #F8F8F8;  
	}  
	.top_view {  
		height: var(--status-bar-height);  
		width: 100%;  
		position: fixed;  
		background-color: #F8F8F8;  
		top: 0;  
		z-index: 999;  
	}
```

## 给原生导航栏添加自定义按钮

```js
export default {  
    data() {  
        return {}  
    },  
    onNavigationBarButtonTap() {  
        console.log("点击了自定义按钮");  
    }  
}  
<!-- page.json 中配置如下 -->
{  
    "path": "pages/log/log",  
    "style": {  
        "navigationBarTitleText": "hello",  
        "app-plus": {  
            "titleNView": {  
                "buttons": [{   // 配置button的背景颜色为透明：background:'rgba(0,0,0,0)'
                    "text": "\ue534",   // buttons的text推荐使用字体图标。
                    "fontSrc": "/static/uni.ttf",  
                    "fontSize": "22px"  
                }]  
            }  
        }  
    }  
}
```

## 原生导航栏自定义按钮带红点和角标

```js
{  
    "path" : "nav-dot/nav-dot",  
    "style" : {  
        "navigationBarTitleText" : "导航栏带红点和角标",  
        "app-plus" : {  
            "titleNView" : {  
                "buttons" : [  
                    {  
                        "text" : "消息",  
                        "fontSize" : "14",  
                        "redDot" : true  
                    },  
                    {  
                        "text" : "关注",  
                        "fontSize" : "14",  
                        "badgeText" : "12"  
                    }  
                ]  
            }  
        }  
    }  
}
```

## 原生导航栏自定义按钮带下拉选择（城市选择）

```js
{  
    "path" : "nav-city-dropdown/nav-city-dropdown",  
    "style" : {  
        "navigationBarTitleText" : "导航栏带城市选择",  
        "app-plus" : {  
            "titleNView" : {  
                "buttons" : [  
                    {  
                        "text" : "北京市",  
                        "fontSize" : "14",  
                        "select" : true,  
                        "width" : "auto"  
                    }  
                ]  
            }  
        }  
    }  
}
```

## 配置原生导航栏的透明渐变

```js 
{  
    "path": "pages/log/log",  
    "style": {  
        "navigationBarTitleText": "hello",  
        "app-plus": {  
            "titleNView": {  
                "type": "transparent"  
            }  
        }  
    }  
}
```

## 原生导航栏回执图片

```js
{  
    "path" : "nav-image/nav-image",  
    "style" : {  
        "app-plus" : {  
            "titleNView" : {  
                "titleText" : "",  
                "tags" : [  
                    {  
                        "tag" : "img",  
                        "src" : "/static/nav.png",  
                        "position" : {  
                            "left" : "auto",  
                            "top" : "auto",  
                            "width" : "110px",  
                            "height" : "26px"  
                        }  
                    }  
                ]  
            }  
        }  
    }  
}
```


## 自动隐藏页面的导航栏 navigationBar

```css  
 /* 只需要隐藏某个的页面 navigationBar */
/* 隐藏路径为 pages/component/view/view 页面的 navigationBar  */
.uni-app--showtopwindow [data-page="pages/component/view/view"] uni-page-head {
    display: none;
}
/* 需要隐藏大部分页面的 navigationBar，显示某个页面的 navigationBar */
/* <!-- 隐藏所有页面的 navigationBar --> */
.uni-app--showtopwindow uni-page-head {
    display: none;
}

/* <!-- 显示路径为 pages/component/view/view 页面的 navigationBar --> */
.uni-app--showtopwindow [data-page="pages/component/view/view"] uni-page-head {
    display: block;
}
```