# Textin 生态聚合页设计文档

**设计日期**：2026-04-16  
**设计目标**：创建 Textin 生态集成聚合页面，展示 Skills、MCP、CLI/SDK、RAG 框架等生态集成内容

## 一、项目背景

### 1.1 业务目标
- 对标 MinerU，完成各生态的上架与展示
- 为用户提供统一的生态集成入口
- 展示 Textin xParse 在 Agent、RAG 等领域的生态覆盖

### 1.2 项目上下文
- 项目使用 Mintlify 文档框架
- 配置文件为 `docs.json`
- 现有页面均采用单页面扁平化布局
- 使用标准 MDX 格式和 Mintlify 组件

## 二、页面设计

### 2.1 基本信息
- **URL 路由**：`/ecosystem`
- **文件路径**：`ecosystem.mdx`（项目根目录）
- **页面类型**：全局页面（独立于具体产品版本）
- **页面标题**：Textin 生态集成
- **页面描述**：Textin xParse 已集成主流 Agent 框架、RAG 框架与生产力工具，提供标准化文档解析能力
- **关键词**：文档解析、生态集成、MCP Server、Skill、RAG、LangChain、Dify、Coze

### 2.2 设计原则
1. **单页面扁平化布局**：所有内容在一个页面中垂直排列，符合项目现有风格
2. **卡片网格展示**：使用 Mintlify 的 `<CardGroup>` 和 `<Card>` 组件展示平台和框架
3. **简洁清晰**：无截图图片，主要使用文字、卡片和代码块
4. **依赖默认功能**：代码块复制功能使用 Mintlify 默认实现

### 2.3 页面结构

#### 第一板块：Skills & MCP

**板块标题**：Skills & MCP

**板块描述**：为各类 AI Agent 框架提供标准化的文档解析能力封装，无需编写解析代码，Agent 通过自然语言即可调用。

**内容组成**：

1. **Skills 资源下载**（CardGroup，2-4 列）
   - GitHub 源码下载
     - 链接：https://github.com/intsig-textin/xparse-skills
     - 描述：开源代码仓库
   
   - ClawHub 托管平台
     - 链接：https://clawhub.ai/intsig-textin/xparse-parser
     - 描述：官方托管平台
   
   - 腾讯云国内镜像
     - 链接：https://skillhub.cn/skills/xparse-parser
     - 描述：国内加速访问
   
   - ModelScope Skills
     - 标注：即将上线
     - 描述：ModelScope 技能市场

2. **官方平台集成**（CardGroup，3 列）

   - **OpenClaw**
     - 副标题：官方 SDK 插件
     - 描述：作为 OpenClaw SDK 官方签名的文档解析插件，已纳入主流 Node.js Agent 框架的推荐工具链
   
   - **ZeroClaw**
     - 副标题：低代码技能
     - 描述：面向低代码及零代码 Agent 框架的轻量化解析 Skill，无需编写解析代码即可实现多格式文档的结构化信息抽取
   
   - **Nanobot**
     - 副标题：微内核核心
     - 描述：嵌入式 Agent 场景下的最小解析单元，以微内核架构实现 PDF、DOCX 等文档的高效结构化抽取
   
   - **NanoClaw**
     - 副标题：轻量插件
     - 描述：Node.js 生态中轻量却不失完整的解析插件，为资源受限环境提供与 OpenClaw 同源的文档处理能力
   
   - **PicoClaw**
     - 副标题：边缘/Serverless
     - 描述：专为边缘计算和函数计算场景裁剪的超轻量解析器，在百 KB 级体积内完成多格式文档的标准化输出
   
   - **飞书 aily**
     - 副标题：飞书原生技能
     - 描述：飞书原生 Agent 平台的官方解析插件，深度集成于飞书 aily 技能体系，让 Agent 像读取普通文本一样解析 PDF、PPT 与 DOCX 文档
   
   - **腾讯 QClaw**
     - 副标题：腾讯本地 Agent
     - 描述：腾讯官方出品的个人 AI 助手，已内置 Textin 解析技能。用户通过自然语言即可让 QClaw 理解任意文档
   
   - **钉钉悟空**
     - 副标题：钉钉内置基座
     - 描述：钉钉"悟空"平台的内置解析技能，无需额外集成，Agent 开箱即用，具备企业级多格式文档理解能力

3. **MCP Server 配置**

   **说明文字**：实现大模型客户端与 Textin 解析引擎的标准化通信，让模型能够"看懂"任意格式文档。按照文档说明获取 APPID 与 APPSECRET，然后配置 MCP Server：

   **配置代码块**（JSON）：
   ```json
   {
     "mcpServers": {
       "textin-ocr": {
         "command": "npx",
         "args": [
           "-y",
           "@intsig/server-textin"
         ],
         "env": {
           "APPID": "<YOUR_APPID>",
           "APPSECRET": "<YOUR_APPSECRET>",
           "MCP_SERVER_REQUEST_TIMEOUT": "600000"
         },
         "timeout": 600
       }
     }
   }
   ```

   **教程链接**：查看完整使用教程 → https://github.com/intsig-textin/textin-mcp

#### 第二板块：CLI/SDK

**板块标题**：CLI/SDK

**板块描述**：提供可直接复制运行的命令行工具与 SDK，快速将 xParse 文档解析能力集成到开发环境中。

**内容组成**：

1. **xParser CLI**

   **小标题**：xParser CLI
   
   **描述**：基于 Textin xParse API 的命令行工具，支持 PDF、图片、Office 文档等 20+ 种格式转换为 Markdown 及结构化数据。

   **一键安装**：
   
   Linux/macOS：
   ```bash
   source <(curl -fsSL https://dllf.intsig.net/download/2026/Solution/xparse-cli/install.sh)
   ```
   
   Windows (PowerShell)：
   ```powershell
   irm https://dllf.intsig.net/download/2026/Solution/xparse-cli/install.ps1 | iex
   ```

   **快速开始**：
   ```bash
   # 输出 Markdown 到终端
   xparse-cli parse report.pdf

   # JSON 视图
   xparse-cli parse report.pdf --view json

   # 保存到目录
   xparse-cli parse report.pdf --output ./output/

   # 指定页码范围
   xparse-cli parse report.pdf --page-range "1-5"

   # 加密 PDF
   xparse-cli parse secret.pdf --password mypassword
   ```

   **教程链接**：查看完整使用教程 → https://github.com/intsig-textin/xparse-skills/tree/main/cli

2. **Python SDK**

   **小标题**：Python SDK

   **用法说明**：
   1. 安装依赖：`pip install xparse-client`
   2. 设置环境变量 `TEXTIN_APPID` 和 `TEXTIN_SECRET_CODE`
   3. 运行：`python quickstart.py <文件路径>`

   **代码示例**（Python，约 70 行）：
   ```python
   import json
   import sys
   from pathlib import Path
   from xparse_client import XParseClient, ParseConfig, Capabilities

   def main():
       # 从命令行参数获取文件路径，默认使用 document.pdf
       file_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("document.pdf")
       if not file_path.exists():
           print(f"文件不存在：{file_path}")
           sys.exit(1)

       # Step 1：初始化客户端（自动读取环境变量 TEXTIN_APPID, TEXTIN_SECRET_CODE)
       client = XParseClient()

       # Step 2：解析文档
       with open(file_path, "rb") as f:
           result = client.parse.run(
               file=f,
               filename=file_path.name,
               config=ParseConfig(
                   capabilities=Capabilities(
                       include_table_structure=True,
                       title_tree=True,
                   ),
               ),
           )

       # Step 3：打印解析概览
       print(f"解析完成！共{len(result.elements)}个元素，{result.success_count}页成功")
       print("=" * 60)

       # 输出 Markdown
       if result.markdown:
           print(result.markdown[:2000])
           if len(result.markdown) > 2000:
               print(f"\n...（Markdown 共 {len(result.markdown)} 字符，已截断）")
       print("=" * 60)

       # 遍历文档元素
       for el in result.elements:
           print(f"[{el.type:20s}] p{el.page_number}: {el.text[:60]}")

       # Step 4：保存结果
       output_dir = Path("output")
       output_dir.mkdir(exist_ok=True)

       stem = file_path.stem

       md_path = output_dir / f"{stem}.md"
       with open(md_path, "w", encoding="utf-8") as f:
           f.write(result.markdown)
       print(f"\nMarkdown 已保存：{md_path}")

       json_path = output_dir / f"{stem}.json"
       with open(json_path, "w", encoding="utf-8") as f:
           json.dump(result.model_dump(), f, ensure_ascii=False, indent=2)
       print(f"JSON 已保存：{json_path}")

   if __name__ == "__main__":
       main()
   ```

   **教程链接**：查看完整使用教程 → https://docs.textin.com/xparse/v1/quickstart

3. **REST API**

   **小标题**：REST API

   **同步解析**（Python 代码示例）：
   ```python
   import requests
   import json

   app_id = "your-app-id"
   secret_code = "your-secret-code"

   with open("document.pdf", "rb") as f:
       response = requests.post(
           "https://api.textin.com/api/v1/xparse/parse/sync",
           headers={
               "x-ti-app-id": app_id,
               "x-ti-secret-code": secret_code,
           },
           files={"file": ("document.pdf", f)},
           data={
               "config": json.dumps({
                   "capabilities": {
                       "include_table_structure": True,
                       "title_tree": True
                   }
               })
           },
       )

   result = response.json()
   print(result["data"]["markdown"])
   ```

   **异步解析**（Python 代码示例，约 50 行）：
   ```python
   import requests
   import json
   import time

   app_id = "your-app-id"
   secret_code = "your-secret-code"
   headers = {
       "x-ti-app-id": app_id,
       "x-ti-secret-code": secret_code,
   }

   # Step 1：创建异步任务
   with open("large_document.pdf", "rb") as f:
       response = requests.post(
           "https://api.textin.com/api/v1/xparse/parse/async",
           headers=headers,
           files={"file": ("large_document.pdf", f)},
       )

   job_id = response.json()["data"]["job_id"]
   print(f"任务已创建：{job_id}")

   # Step 2：轮询查询任务状态
   while True:
       status_resp = requests.get(
           f"https://api.textin.com/api/v1/xparse/parse/async/{job_id}",
           headers=headers,
       )
       status_data = status_resp.json()["data"]

       if status_data["status"] == "completed":
           print("解析完成！")
           print(status_data)

           # Step 3：通过 result_url 获取实际结果
           result_url = status_data["result_url"]
           result_resp = requests.get(result_url, headers=headers)
           result_data = result_resp.json()

           # 输出元素信息
           print(f"共解析{len(result_data['elements'])}个元素")
           for element in result_data["elements"][:5]:
               print(f"[{element['type']}] {element['text'][:50]}")
           break

       elif status_data["status"] == "failed":
           print(f"解析失败：{status_data.get('message', '未知错误')}")
           break

       print(f"状态：{status_data['status']}，等待中...")
       time.sleep(5)
   ```

   **教程链接**：查看完整使用教程 → https://docs.textin.com/xparse/v1/quickstart

#### 第三板块：RAG 与 Agent 框架

**板块标题**：RAG 与 Agent 框架

**板块描述**：与主流 RAG 框架深度集成，为知识库提供高质量的结构化数据。兼容 HiAgent、Dify、RagFlow、Langchain、Milvus、Pinecone、Qdrant、pgvector。

**内容组成**：

**主要框架展示**（CardGroup，2-3 列）

1. **LangChain**
   - 描述：langchain-xparse 是 xParse 与 LangChain 的集成插件，通过 XParseLoader 将 xParse Pipeline API 的强大文档解析能力无缝集成到 LangChain 应用中，轻松实现文档解析、分块、向量化等功能
   - GitHub 地址：https://github.com/intsig-textin/langchain-xparse
   - PyPI 地址：https://pypi.org/project/langchain-xparse/
   - 使用教程：https://docs.textin.com/pipeline/integrations/langchain
   - 示例代码：
     ```python
     from langchain_xparse import XParseLoader

     loader = XParseLoader(
         file_path="doc.pdf",
         app_id="your-app-id",
         secret_code="your-secret-code",
     )
     ```

2. **Dify**
   - 描述：xParse 是一个端到端文档处理 AI 基础设施，致力于将非结构化文档高效转化为可查询、可分析的数据资产。目前 xParse 与 Dify 联合研发的 xParse 插件已在 Dify 市场上架，帮助用户搭建工作流，提供强大的文档解析和处理能力
   - 插件下载地址：https://marketplace.dify.ai/plugins/intsig-textin/xparse
   - 使用教程：https://docs.textin.com/pipeline/integrations/dify

3. **RAGFlow**
   - 描述：深度集成 RAGFlow 流程，提供强大的非结构化数据解析支持，助力构建精准的检索增强生成应用
   - GitHub 地址：https://github.com/intsig-textin/xparse-ragflow

4. **Coze**
   - 描述：Textin xParse 插件已上架 Coze 插件市场，支持零代码搭建文档解析工作流。可将 PDF、图片等解析为结构化 Markdown，广泛应用于财报抽取、合同风险解析与知识库构建

5. **Cherry Studio**
   - 描述：支持通过 xParse 插件解析文档并用于对话或知识库

**兼容框架列表**：

已支持：HiAgent、Dify、RagFlow、Langchain、Milvus、Pinecone、Qdrant、pgvector

敬请期待更多框架支持

#### 第四板块：API 文档

使用单个 Card 或链接按钮：
- 标题：查看 API 文档
- 链接：https://docs.textin.com/xparse/v1/quickstart
- 描述：查看完整的 xParse API 文档和快速启动指南

## 三、技术实现

### 3.1 文件结构
```
textin-docs/
├── ecosystem.mdx          # 生态聚合页（新建）
├── docs.json              # 配置文件（需更新）
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-04-16-ecosystem-page-design.md  # 本设计文档
```

### 3.2 路由配置

在 `docs.json` 中配置全局页面路由（后续实现阶段处理）。

### 3.3 组件使用

使用 Mintlify 标准组件：
- `<CardGroup cols={2}>` 或 `cols={3}` - 卡片网格容器
- `<Card title="..." icon="..." href="...">` - 卡片组件
- `<Tip>` - 提示框
- 标准 Markdown 代码块（带语法高亮和复制功能）

### 3.4 代码块规范

- 使用标准 Markdown 三个反引号语法
- 指定语言类型：`bash`、`python`、`json`、`powershell`
- 依赖 Mintlify 默认的代码复制功能
- 无需自定义复制按钮和 toast 提示

## 四、验收标准

### 4.1 页面布局与样式
- [ ] 页面包含所有四个板块（Skills & MCP、CLI/SDK、RAG 与 Agent 框架、API 文档）
- [ ] 使用卡片网格展示平台和框架
- [ ] 页面风格与现有文档页面一致

### 4.2 Skills & MCP 板块
- [ ] 展示 4 个资源下载链接，每个链接有复制和跳转功能
- [ ] 展示 8 个官方平台集成卡片，标题、副标题、描述完整
- [ ] MCP Server 配置代码块正确，教程链接可跳转

### 4.3 CLI/SDK 板块
- [ ] xParser CLI 安装命令（Linux/macOS、Windows）正确
- [ ] 快速开始代码示例完整，教程链接可跳转
- [ ] Python SDK 代码示例完整，教程链接可跳转
- [ ] REST API 同步/异步代码示例完整，教程链接可跳转

### 4.4 RAG 与 Agent 框架板块
- [ ] 展示 5 个主要框架（LangChain、Dify、RAGFlow、Coze、Cherry Studio）
- [ ] 每个框架的链接（GitHub、PyPI、插件下载等）可正常跳转
- [ ] 兼容框架列表展示完整

### 4.5 所有代码块
- [ ] 每个代码块有语法高亮
- [ ] 代码块右上角有复制按钮（Mintlify 默认）
- [ ] 点击复制按钮后可正确复制内容

### 4.6 链接和跳转
- [ ] 所有外部链接可正常打开
- [ ] "查看完整使用教程"链接指向正确

## 五、后续工作

### 5.1 导航入口（后续处理）

根据 edoc.md 需求，以下入口暂不在本次实现范围：
1. xparse 产品页首屏入口（可能在其他系统）
2. demo 页入口（可能在其他系统）
3. 导航栏入口（需要修改 docs.json）

这些入口将在生态聚合页面本身完成后，由相关团队或后续迭代处理。

### 5.2 内容维护

- Skills 资源链接更新
- 新增平台集成
- 框架版本更新
- 代码示例优化

## 六、设计决策记录

### 6.1 为什么选择单页面而非多页面？
- 符合"生态聚合"的定位，用户可以一次性浏览所有内容
- 与项目现有页面风格一致（参考 overview.mdx）
- 开发和维护成本更低
- SEO 更友好

### 6.2 为什么不使用截图图片？
- 减少维护成本（图片需要定期更新）
- 降低加载时间
- 卡片和文字展示更加清晰
- 符合文档站点的简洁风格

### 6.3 为什么不自定义复制功能？
- Mintlify 已提供完善的代码块复制功能
- 减少开发工作量
- 保持与项目其他页面一致的用户体验

### 6.4 为什么将 Skills 和 MCP 合并为一个板块？
- 两者都是面向 Agent 的集成方式
- 内容相关性强
- 减少页面板块数量，使结构更清晰
- 符合用户需求（按使用场景而非技术类型分类）

## 七、风险和限制

### 7.1 已知限制
- edoc.md 中的图片不使用，可能影响视觉丰富度
- 导航入口暂不实现，用户需通过直接 URL 访问
- 代码示例较长，可能影响页面加载性能

### 7.2 缓解措施
- 使用卡片布局增强视觉效果
- 在设计文档中明确说明导航入口为后续工作
- 合理使用折叠或分块展示长代码

## 八、参考资料

- edoc.md：v0.8.7 版本生态聚合需求文档
- 项目现有页面：
  - pipeline/overview.mdx
  - pipeline/integrations/langchain.mdx
  - xparse/overview.mdx
  - xparse/parse-quickstart.mdx
- Mintlify 文档：https://mintlify.com/docs
