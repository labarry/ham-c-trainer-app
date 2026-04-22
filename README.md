业余无线电C类题库练习与模拟考试 PWA 应用

一个专为中国业余无线电操作技术能力验证（C类）​ 考试设计的渐进式网页应用（PWA）。提供完整的题库练习、模拟考试、错题复习等功能，支持离线使用，并可以安装到设备桌面。

最新题库：2025版 | 在线访问：https://www.moogs.cn

✨ 核心功能

📚 多种练习模式

顺序练习：按题库顺序逐题学习，带详细解析。

随机练习：随机出题，检验真实掌握程度。

错题专练：自动收集错题，针对性强化复习。

章节练习：分章节突破重点难点。

⏱️ 全真模拟考试

严格模拟正式考试流程：90道题，限时90分钟。

交卷后即时评分。

📊 学习统计

实时记录答题总数、正确率。

通过直观图表展示学习进度与薄弱环节。

📱 PWA 增强体验

可安装：可添加至手机主屏幕或电脑桌面，获得类原生应用体验。

离线可用：首次访问后，题库、界面均可离线使用。

快速加载：资源本地缓存，再次访问瞬间加载。

🚀 使用方式
在线使用（推荐）

直接访问 https://www.moogs.cn
，无需下载。

安装到设备：

安卓/Chrome：点击浏览器菜单（⋮）→ “安装应用” 或 “添加到主屏幕”。

iOS/Safari：点击分享按钮（⎋）→ “添加到主屏幕”。

本地运行与开发
bash
复制
# 1. 克隆项目
git clone https://github.com/labarry/ham-c-trainer-app.git
cd ham-c-trainer-app

# 2. 启动本地服务器（PWA需HTTP环境）
# 使用 Python：
python -m http.server
# 或使用 Node.js http-server：
npx http-server

# 3. 访问应用
# 打开浏览器，访问控制台输出的地址（如 http://localhost:8000）
📁 项目结构
复制
ham-c-trainer-app/
├── index.html              # 应用主入口
├── manifest.json           # PWA 应用清单
├── service-worker.js       # 服务工作者，负责缓存和离线功能
├── style.css               # 全局样式
├── CNAME                   # 自定义域名配置 (www.moogs.cn)
├── icons/                  # PWA 应用图标
├── img/                    # 题目图片
├── screenshots/            # 应用截图
├── app.js                  # 核心应用逻辑
├── config.js               # 应用配置
├── questions.js            # 题库数据（2025版C类）
├── storage.js              # 本地存储管理
├── dialog.js               # 对话框组件
├── utils.js                # 工具函数
└── main.js                 # 应用初始化
🔧 技术栈

前端：原生 JavaScript (ES6+), HTML5, CSS3

PWA 特性：Web App Manifest, Service Worker, 本地缓存

部署：GitHub Pages (自动HTTPS)

数据：localStorage (用户进度持久化)

📄 题库版权说明

本题库基于2025版《业余无线电台操作技术能力验证题库》。

本应用仅为爱好者提供学习与练习的便利工具，并非官方出品。备考请以官方发布的最新资料为准。


🤝仅为个人业余利用AI制作

题目纠错：如发现题目或答案有误，欢迎指正。

📄 许可证

项目代码基于 MIT License
开源。

祝各位无线电爱好者考试顺利，通联愉快！​ 🎯📻

最后更新：2026年4月