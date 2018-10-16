# 开始一个新的项目
### 项目结构
<pre>
│  .gitattributes
│  .gitignore
│  app.js                # 小程序逻辑
│  app.json              # 小程序公共设置（页面路径、窗口表现、设置网络超时时间、设置多tab）
│  app.wxss              # 小程序公共样式表
│  README.md             # 小程序项目说明
│  
├─image                  # 小程序图片资源
|
├─pages                  # 小程序文件
│  ├─common     
│  ├─detail
│  ├─index        
│  │    index.js      # 页面逻辑
│  │    index.wxml    # 页面渲染层
│  │    index.wxss    # 页面样式
│  ├─login
|  ├─logs
│  └─topics
│          
└─utils                  # 小程序公用方法模块
    api.js       
    util.js    
</pre>


简单封装wx.request(OBJECT)

  <pre>
    // get请求方法
    function fetchGet(url, callback) {
      // return callback(null, top250)
      wx.request({
        url: url,
        header: { 'Content-Type': 'application/json' },
        success (res) {
          callback(null, res.data)
        },
        fail (e) {
          console.error(e)
          callback(e)
        }
      })
    }

    // post请求方法
    function fetchPost(url, data, callback) {
      wx.request({
        method: 'POST',
        url: url,
        data: data,
        success (res) {
          callback(null, res.data)
        },
        fail (e) {
          console.error(e)
          callback(e)
        }
      })
    }

    module.exports = {
      // METHOD
      fetchGet: fetchGet,
      fetchPost: fetchPost
    }
  </pre>

开发工具与资源

- 开发工具介绍和下载：https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html
- 注册流程：https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html
- 设计规范：https://mp.weixin.qq.com/debug/wxadoc/design/index.html
- 开发框架：https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html
- 开发组件：https://mp.weixin.qq.com/debug/wxadoc/dev/component/
- 开发API：https://mp.weixin.qq.com/debug/wxadoc/dev/api/
