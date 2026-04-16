# Textin 生态聚合页实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 创建 Textin 生态聚合页面（/ecosystem），展示 Skills、MCP、CLI/SDK、RAG 框架等生态集成内容

**Architecture:** 单个 MDX 文件，使用 Mintlify 的 CardGroup 和 Card 组件展示各平台和框架。页面采用扁平化垂直布局，包含 4 个主要板块。

**Tech Stack:** Mintlify 文档框架、MDX 格式、Mintlify 标准组件（CardGroup、Card）

---

## 文件结构

**创建的文件：**
- `d:\source\textin-docs\ecosystem.mdx` - 生态聚合页面主文件

**无需修改的文件：**
- `docs.json` - 导航配置（后续处理）

**说明：** 这是一个纯文档页面实现，无需测试文件。页面内容分为 4 个板块，每个板块作为独立任务实现。

---

### Task 1: 创建文件和页面头部

**Files:**
- Create: `d:\source\textin-docs\ecosystem.mdx`

- [ ] **Step 1: 创建 ecosystem.mdx 文件并添加 frontmatter**

```mdx
---
title: "Textin 生态集成"
description: "Textin xParse 已集成主流 Agent 框架、RAG 框架与生产力工具，提供标准化文档解析能力"
---

```

- [ ] **Step 2: 验证文件创建成功**

Run: `ls -la d:/source/textin-docs/ecosystem.mdx`
Expected: 文件存在，包含 frontmatter

- [ ] **Step 3: 提交**

```bash
cd d:/source/textin-docs
git add ecosystem.mdx
git commit -m "feat: add ecosystem page skeleton

添加生态聚合页面框架和 frontmatter

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 2: 实现 Skills & MCP 板块

**Files:**
- Modify: `d:\source\textin-docs\ecosystem.mdx`

- [ ] **Step 1: 添加 Skills & MCP 板块标题和描述**

在 `ecosystem.mdx` 的 frontmatter 后添加：

```mdx
## Skills & MCP

为各类 AI Agent 框架提供标准化的文档解析能力封装，无需编写解析代码，Agent 通过自然语言即可调用。

### Skills 资源与下载

<CardGroup cols={2}>
  <Card
    title="GitHub 源码下载"
    icon="github"
    href="https://github.com/intsig-textin/xparse-skills"
  >
    开源代码仓库，查看完整源码和文档
  </Card>
  <Card
    title="ClawHub 托管平台"
    icon="cloud"
    href="https://clawhub.ai/intsig-textin/xparse-parser"
  >
    官方托管平台，一键安装和部署
  </Card>
  <Card
    title="腾讯云国内镜像"
    icon="server"
    href="https://skillhub.cn/skills/xparse-parser"
  >
    国内加速访问，提供稳定的镜像服务
  </Card>
  <Card
    title="ModelScope Skills"
    icon="sparkles"
  >
    ModelScope 技能市场（即将上线）
  </Card>
</CardGroup>

```

- [ ] **Step 2: 添加官方平台集成卡片**

继续在 `ecosystem.mdx` 中添加：

```mdx
### 官方平台集成

<CardGroup cols={3}>
  <Card
    title="OpenClaw"
    icon="puzzle-piece"
  >
    **官方 SDK 插件**
    
    作为 OpenClaw SDK 官方签名的文档解析插件，已纳入主流 Node.js Agent 框架的推荐工具链
  </Card>
  <Card
    title="ZeroClaw"
    icon="code"
  >
    **低代码技能**
    
    面向低代码及零代码 Agent 框架的轻量化解析 Skill，无需编写解析代码即可实现多格式文档的结构化信息抽取
  </Card>
  <Card
    title="Nanobot"
    icon="microchip"
  >
    **微内核核心**
    
    嵌入式 Agent 场景下的最小解析单元，以微内核架构实现 PDF、DOCX 等文档的高效结构化抽取
  </Card>
  <Card
    title="NanoClaw"
    icon="feather"
  >
    **轻量插件**
    
    Node.js 生态中轻量却不失完整的解析插件，为资源受限环境提供与 OpenClaw 同源的文档处理能力
  </Card>
  <Card
    title="PicoClaw"
    icon="bolt"
  >
    **边缘/Serverless**
    
    专为边缘计算和函数计算场景裁剪的超轻量解析器，在百 KB 级体积内完成多格式文档的标准化输出
  </Card>
  <Card
    title="飞书 aily"
    icon="message-square"
  >
    **飞书原生技能**
    
    飞书原生 Agent 平台的官方解析插件，深度集成于飞书 aily 技能体系，让 Agent 像读取普通文本一样解析 PDF、PPT 与 DOCX 文档
  </Card>
  <Card
    title="腾讯 QClaw"
    icon="bot"
  >
    **腾讯本地 Agent**
    
    腾讯官方出品的个人 AI 助手，已内置 Textin 解析技能。用户通过自然语言即可让 QClaw 理解任意文档
  </Card>
  <Card
    title="钉钉悟空"
    icon="users"
  >
    **钉钉内置基座**
    
    钉钉"悟空"平台的内置解析技能，无需额外集成，Agent 开箱即用，具备企业级多格式文档理解能力
  </Card>
</CardGroup>

```

- [ ] **Step 3: 添加 MCP Server 配置部分**

继续添加：

```mdx
### MCP Server

实现大模型客户端与 Textin 解析引擎的标准化通信，让模型能够"看懂"任意格式文档。按照[文档说明](/pipeline/api-key)获取 APPID 与 APPSECRET，然后配置 MCP Server：

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

查看完整使用教程：[https://github.com/intsig-textin/textin-mcp](https://github.com/intsig-textin/textin-mcp)

```

- [ ] **Step 4: 验证 Skills & MCP 板块内容**

检查文件内容：
- frontmatter 完整
- Skills 资源卡片（4 个）
- 官方平台集成卡片（8 个）
- MCP Server 配置代码块

- [ ] **Step 5: 提交**

```bash
cd d:/source/textin-docs
git add ecosystem.mdx
git commit -m "feat: add Skills & MCP section to ecosystem page

添加 Skills 资源下载、官方平台集成和 MCP Server 配置

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 3: 实现 CLI/SDK 板块

**Files:**
- Modify: `d:\source\textin-docs\ecosystem.mdx`

- [ ] **Step 1: 添加 CLI/SDK 板块标题和 xParser CLI 部分**

在 `ecosystem.mdx` 的 MCP Server 部分后添加：

```mdx
## CLI/SDK

提供可直接复制运行的命令行工具与 SDK，快速将 xParse 文档解析能力集成到开发环境中。

### xParser CLI

基于 Textin xParse API 的命令行工具，支持 PDF、图片、Office 文档等 20+ 种格式转换为 Markdown 及结构化数据。

**一键安装**

Linux/macOS:
```bash
source <(curl -fsSL https://dllf.intsig.net/download/2026/Solution/xparse-cli/install.sh)
```

Windows (PowerShell):
```powershell
irm https://dllf.intsig.net/download/2026/Solution/xparse-cli/install.ps1 | iex
```

**快速开始**

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

查看完整使用教程：[https://github.com/intsig-textin/xparse-skills/tree/main/cli](https://github.com/intsig-textin/xparse-skills/tree/main/cli)

```

- [ ] **Step 2: 添加 Python SDK 部分**

继续添加：

```mdx
### Python SDK

**用法说明：**
1. 安装依赖：`pip install xparse-client`
2. 设置环境变量 `TEXTIN_APPID` 和 `TEXTIN_SECRET_CODE`
3. 运行：`python quickstart.py <文件路径>`

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

查看完整使用教程：[https://docs.textin.com/xparse/v1/quickstart](https://docs.textin.com/xparse/v1/quickstart)

```

- [ ] **Step 3: 添加 REST API 部分**

继续添加：

```mdx
### REST API

**同步解析**

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

**异步解析**

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

查看完整使用教程：[https://docs.textin.com/xparse/v1/quickstart](https://docs.textin.com/xparse/v1/quickstart)

```

- [ ] **Step 4: 验证 CLI/SDK 板块内容**

检查文件内容包含：
- CLI 安装命令（Linux/macOS 和 Windows）
- CLI 快速开始示例
- Python SDK 完整代码
- REST API 同步和异步示例

- [ ] **Step 5: 提交**

```bash
cd d:/source/textin-docs
git add ecosystem.mdx
git commit -m "feat: add CLI/SDK section to ecosystem page

添加 xParser CLI、Python SDK 和 REST API 使用示例

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 4: 实现 RAG 与 Agent 框架板块

**Files:**
- Modify: `d:\source\textin-docs\ecosystem.mdx`

- [ ] **Step 1: 添加 RAG 与 Agent 框架板块标题和主要框架**

在 `ecosystem.mdx` 的 CLI/SDK 部分后添加：

```mdx
## RAG 与 Agent 框架

与主流 RAG 框架深度集成，为知识库提供高质量的结构化数据。兼容 HiAgent、Dify、RagFlow、Langchain、Milvus、Pinecone、Qdrant、pgvector。

<CardGroup cols={2}>
  <Card
    title="LangChain"
    icon="link"
    href="https://github.com/intsig-textin/langchain-xparse"
  >
    langchain-xparse 是 xParse 与 LangChain 的集成插件，通过 XParseLoader 将 xParse Pipeline API 的强大文档解析能力无缝集成到 LangChain 应用中
    
    - [GitHub 地址](https://github.com/intsig-textin/langchain-xparse)
    - [PyPI 地址](https://pypi.org/project/langchain-xparse/)
    - [使用教程](https://docs.textin.com/pipeline/integrations/langchain)
    
    ```python
    from langchain_xparse import XParseLoader

    loader = XParseLoader(
        file_path="doc.pdf",
        app_id="your-app-id",
        secret_code="your-secret-code",
    )
    ```
  </Card>
  <Card
    title="Dify"
    icon="workflow"
    href="https://marketplace.dify.ai/plugins/intsig-textin/xparse"
  >
    xParse 与 Dify 联合研发的插件已在 Dify 市场上架，帮助用户搭建工作流，提供强大的文档解析和处理能力
    
    - [插件下载地址](https://marketplace.dify.ai/plugins/intsig-textin/xparse)
    - [使用教程](https://docs.textin.com/pipeline/integrations/dify)
  </Card>
  <Card
    title="RAGFlow"
    icon="database"
    href="https://github.com/intsig-textin/xparse-ragflow"
  >
    深度集成 RAGFlow 流程，提供强大的非结构化数据解析支持，助力构建精准的检索增强生成应用
    
    - [GitHub 地址](https://github.com/intsig-textin/xparse-ragflow)
  </Card>
  <Card
    title="Coze"
    icon="sparkles"
  >
    Textin xParse 插件已上架 Coze 插件市场，支持零代码搭建文档解析工作流。可将 PDF、图片等解析为结构化 Markdown，广泛应用于财报抽取、合同风险解析与知识库构建
  </Card>
  <Card
    title="Cherry Studio"
    icon="cherry"
  >
    支持通过 xParse 插件解析文档并用于对话或知识库
  </Card>
</CardGroup>

```

- [ ] **Step 2: 添加兼容框架列表**

继续添加：

```mdx
### 兼容上下游框架

已支持：**HiAgent**、**Dify**、**RagFlow**、**Langchain**、**Milvus**、**Pinecone**、**Qdrant**、**pgvector**

敬请期待更多框架支持

```

- [ ] **Step 3: 验证 RAG 框架板块内容**

检查文件内容包含：
- 5 个主要框架卡片（LangChain、Dify、RAGFlow、Coze、Cherry Studio）
- LangChain 示例代码
- 兼容框架列表

- [ ] **Step 4: 提交**

```bash
cd d:/source/textin-docs
git add ecosystem.mdx
git commit -m "feat: add RAG & Agent frameworks section to ecosystem page

添加 LangChain、Dify、RAGFlow 等主要框架集成说明

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 5: 实现 API 文档板块

**Files:**
- Modify: `d:\source\textin-docs\ecosystem.mdx`

- [ ] **Step 1: 添加 API 文档板块**

在 `ecosystem.mdx` 的最后添加：

```mdx
## API 文档

<Card
  title="查看完整 API 文档"
  icon="book"
  href="https://docs.textin.com/xparse/v1/quickstart"
>
  查看完整的 xParse API 文档和快速启动指南，了解更多使用方法和最佳实践
</Card>

```

- [ ] **Step 2: 验证完整页面内容**

检查 `ecosystem.mdx` 包含所有板块：
1. Frontmatter（标题和描述）
2. Skills & MCP 板块
3. CLI/SDK 板块
4. RAG 与 Agent 框架板块
5. API 文档板块

- [ ] **Step 3: 提交**

```bash
cd d:/source/textin-docs
git add ecosystem.mdx
git commit -m "feat: add API documentation section to ecosystem page

完成生态聚合页面所有板块的实现

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 6: 最终验证和文档更新

**Files:**
- Read: `d:\source\textin-docs\ecosystem.mdx`

- [ ] **Step 1: 验证页面结构完整性**

检查 `ecosystem.mdx` 内容：
- [ ] Frontmatter 包含 title 和 description
- [ ] Skills & MCP 板块：4 个资源卡片 + 8 个平台卡片 + MCP 配置
- [ ] CLI/SDK 板块：CLI 安装 + Python SDK + REST API
- [ ] RAG 框架板块：5 个框架卡片 + 兼容列表
- [ ] API 文档板块：单个文档卡片

- [ ] **Step 2: 检查所有链接有效性**

验证所有外部链接格式正确：
- GitHub 链接（多个）
- PyPI 链接
- 使用教程链接（多个）
- Dify marketplace 链接

- [ ] **Step 3: 检查代码块语法**

验证所有代码块：
- JSON 代码块有正确的语言标记
- Python 代码块有正确的语言标记
- Bash/PowerShell 代码块有正确的语言标记
- 代码缩进正确

- [ ] **Step 4: 更新设计文档状态**

在 `docs/superpowers/specs/2026-04-16-ecosystem-page-design.md` 的验收标准部分标记已完成的项。

- [ ] **Step 5: 最终提交**

```bash
cd d:/source/textin-docs
git add docs/superpowers/specs/2026-04-16-ecosystem-page-design.md
git commit -m "docs: mark ecosystem page implementation as completed

更新设计文档验收标准完成状态

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## 验收标准对照

根据设计文档的验收标准，完成后应满足：

### 4.1 页面布局与样式
- ✅ 页面包含所有四个板块
- ✅ 使用卡片网格展示平台和框架
- ✅ 页面风格与现有文档页面一致（使用相同的 Mintlify 组件）

### 4.2 Skills & MCP 板块
- ✅ 展示 4 个资源下载链接（CardGroup）
- ✅ 展示 8 个官方平台集成卡片
- ✅ MCP Server 配置代码块和教程链接

### 4.3 CLI/SDK 板块
- ✅ xParser CLI 安装命令（Linux/macOS、Windows）
- ✅ 快速开始代码示例和教程链接
- ✅ Python SDK 代码示例和教程链接
- ✅ REST API 同步/异步代码示例和教程链接

### 4.4 RAG 与 Agent 框架板块
- ✅ 展示 5 个主要框架
- ✅ 每个框架的链接
- ✅ 兼容框架列表展示

### 4.5 所有代码块
- ✅ 代码块有语法高亮（通过语言标记）
- ✅ Mintlify 默认提供复制按钮

### 4.6 链接和跳转
- ✅ 所有外部链接格式正确

---

## 实现说明

1. **无需测试**：这是纯文档页面，无需编写测试代码
2. **无需导航配置**：根据设计文档，导航入口在后续处理
3. **渐进式提交**：每个板块完成后立即提交，便于回滚和审查
4. **组件使用**：严格使用 Mintlify 标准组件，确保与现有页面风格一致
5. **代码示例**：所有代码示例从设计文档中复制，保证准确性

---

## 后续工作（不在本计划范围）

1. 在 `docs.json` 中配置导航入口
2. 在产品页和 demo 页添加跳转入口
3. 页面内容的定期维护和更新
