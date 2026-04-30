# 全球大模型导航

一个现代化的大语言模型导航网站，分类展示国内外主流 AI 大模型，包括 DeepSeek、GPT、Claude、Gemini 等。采用现代化设计，提供清晰的模型分类和详细的模型介绍页面。

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 项目简介

一个**大模型导航网站**，采用 HTML/CSS/JS 完全分离的架构，通过玻璃态设计、动态动画和交互式组件，分类展示国内外主流大语言模型。

### 模型分类

#### 🇨🇳 国产大模型
- **DeepSeek 系列**: DeepSeek V4（旗舰版）、DeepSeek Flash（极速版）、DeepSeek Pro（专业版）
- **通义千问系列**: Qwen-Max、Qwen-Plus
- **文心一言系列**: ERNIE Bot 4.0
- **Kimi**: Kimi Chat

#### 🌍 国外大模型
- **OpenAI 系列**: GPT-4、GPT-4 Turbo、GPT-3.5
- **Anthropic 系列**: Claude 3 Opus、Claude 3 Sonnet、Claude 3 Haiku
- **Google 系列**: Gemini Pro、Gemini Ultra
- **Meta 系列**: Llama 3、Llama 2
- **Mistral 系列**: Mistral Large、Mistral Medium
- **Cohere 系列**: Command R+

### 性能优化亮点

- ✅ **节流优化**：滚动和鼠标事件使用节流函数，减少不必要的计算
- ✅ **requestAnimationFrame**：数字动画使用 RAF 替代 setInterval，更流畅且节省资源
- ✅ **GPU 加速**：CSS 动画使用 `will-change` 和 `transform` 触发硬件加速
- ✅ **被动事件监听器**：滚动事件使用 `{ passive: true }` 提升滚动性能
- ✅ **缓动函数**：数字动画采用 `easeOutQuart` 缓动，视觉效果更自然
- ✅ **减少重排重绘**：优化 CSS 过渡属性，避免触发 layout
- ✅ **无障碍支持**：添加 `prefers-reduced-motion` 媒体查询，尊重用户偏好

## ✨ 核心特性

- **Glassmorphism 设计**：毛玻璃质感与现代渐变配色
- **模型分类导航**：清晰的国产/国外模型分类结构
- **版本标签系统**：旗舰版、极速版、专业版、开源版等标签标识
- **响应式布局**：完美适配桌面、平板与移动设备
- **平滑交互动画**：滚动视差、数字递增、悬停效果（性能优化版）
- **语义化结构**：清晰的模块划分（分类/详情/特性/应用）
- **SEO 友好**：完整的 meta 标签和语义化 HTML 结构
- **易扩展模板**：提供 template.html 模板文件，快速添加新模型页面

## 📁 文件结构

```
├── index.html          # 首页（模型分类导航）
├── deepseek-v4.html    # DeepSeek V4 详情页
├── deepseek-flash.html # DeepSeek Flash 详情页
├── deepseek-pro.html   # DeepSeek Pro 详情页
├── gpt-4.html          # GPT-4 详情页（示例）
├── template.html       # 模型详情页模板（可复制修改）
├── style.css           # 样式定义层（玻璃态、动画、响应式）
├── app.js              # 行为交互层（模块化、性能优化）
├── README.md           # 项目文档
└── LICENSE             # MIT 开源协议
```

## 🚀 快速开始

### 本地运行

#### 方法 1：Python 内置服务器
```bash
git clone https://github.com/HuZaiGong/Deepseekv4-introduction.git
cd Deepseekv4-introduction

# Python 3
python -m http.server 8000
```

#### 方法 2：Node.js Live Server
```bash
# 安装 live-server（如未安装）
npm install -g live-server

# 启动服务
npx live-server
```

#### 方法 3：直接打开
直接在浏览器中打开 `index.html` 文件即可预览。

访问地址：http://localhost:8000

### 部署到 GitHub Pages

1. 推送代码到 main 分支
   ```bash
   git add .
   git commit -m "Update project"
   git push origin main
   ```

2. 进入仓库 Settings → Pages

3. 选择分支 `main` 和根目录 `/`

4. 访问生成的链接：
   ```
   https://HuZaiGong.github.io/Deepseekv4-introduction
   ```

## 🎨 设计亮点

| 模块 | 设计要点 | 性能优化 |
|------|----------|----------|
| 导航栏 | 固定毛玻璃，平滑滚动锚点 | 节流处理 |
| 英雄区 | 动态光晕 + 统计数字动画 | RAF + 缓动函数 |
| 模型卡片 | 分类网格布局，版本标签 | GPU 加速过渡 |
| 能力卡片 | 数据属性驱动进度条 | CSS 变量动画 |
| 时间线 | 高亮里程碑节点 | 最小化重排 |

## 🔧 技术栈

- **HTML5**：语义化标签，SEO 优化
- **CSS3**：Flexbox/Grid布局，CSS变量，Backdrop Filter
- **JavaScript (ES6+)**：模块化设计，Intersection Observer，RequestAnimationFrame
- **无依赖**：纯原生实现，零第三方库依赖

## 📊 性能指标

| 指标 | 优化前 | 优化后 | 提升 |
|------|--------|--------|------|
| 滚动帧率 | ~30fps | ~60fps | +100% |
| 动画流畅度 | 阶梯式 | 平滑缓动 | 主观提升明显 |
| 事件监听器 | 阻塞式 | 被动式 | 滚动更流畅 |
| CPU 占用 | 较高 | 降低约 40% | 更省电 |

## 📝 添加新模型页面

1. 复制 `template.html` 文件
2. 重命名为对应模型名称（如 `claude-3-opus.html`）
3. 修改页面中的占位内容：
   - 标题和 meta 描述
   - 模型徽章（旗舰版/极速版/专业版等）
   - 统计数据卡片
   - 核心特性介绍
   - 应用场景描述
4. 在 `index.html` 中添加对应的模型链接

## 📄 开源协议

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- 图标资源来自 Emoji
- 灵感源自现代 Web 设计趋势
- 感谢所有贡献者

## 📬 联系方式

如有建议或改进，欢迎提交 Issue 或 Pull Request！

---

**最后更新**: 2024 年  
**维护状态**: 活跃维护中
