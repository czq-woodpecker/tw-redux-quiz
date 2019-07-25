## 要求
1. 采用React & Redux实现所有功能
2. 在TASKING.md文件中列出所有Tasking
3. （**扩展**）实现Jest测试

## 需求
实现基于markdown的笔记网站

0. 从后端API获取数据
   - https://gitlab.com/twu-c-trainee/course/react/react-quiz-backend.git
   - 操作参见后端文档
1. 首页 
    - 首页路由"/"
    - 显示笔记列表
    - 点击笔记标题，跳转到笔记详情页
    - 点击新建笔记，跳转到创建笔记页
    - 样式要求：
        - 按奇偶数显示不同色块
        - 所有Icon来源[Material Design Icons](https://react-icons.netlify.com/#/icons/md)
2. 笔记详情页
    - 详情页路由"/notes/1"
    - 左边栏显示笔记标题列表
    - 点击左边栏笔记标题跳转到对应笔记详情页
    - 右边栏显示笔记标题和正文
    - （**扩展**）正文显示markdown生成效果（mockup为生成后的效果）
    - 样式要求：
        - 当前笔记的左边栏标题需要显示深色背景
        - 左边栏不随页面scroll 
3. 删除笔记
    - 点击笔记详情页底部删除按钮，笔记删除
    - 删除笔记后返回首页，首页列表笔记消失
    - 点击返回按钮，返回首页
    - 样式要求：
        - hover到删除按钮，变为红框白底，字体颜色不变
4. 新建笔记页
    - 笔记页路由"/notes/create"
    - 标题、正文都不能为空，当标题/正文为空时，提交按钮为disable状态
    - 点击提交按钮，创建笔记并返回到首页，首页列表显示出新创建的笔记列表
    - 点击取消按钮，返回首页
    - 无需校验markdown格式
    - 样式要求：
        - 提交按钮为disable状态时，提高红色按钮20%亮度

### 后端API数据结构
```json
[
  {
    "id": 1,
    "title": "HTML5",
    "description": "# 语义化标签的优点：\n - 比`<div>`标签有更加丰富的含义，方便开发与维护 \n - 搜索引擎能更方便的识别页面的每个部分 \n - 方便其他设备解析（如移动设备、盲人阅读器等）"
  },
  {
    "id": 2,
    "title": "CSS预处理器语言",
    "description": "# CSS预处理语言 \n ![Image](https://www.jiuwa.net/tuku/20180706/6wblfWyq.jpg)"
  }
]
```