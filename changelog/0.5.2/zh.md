# 0.5.2 - 2026-10-05

### 添加
- **回放分析升级为历史列表与侧边详情**：集中查看本机提交过、以及成功查看过的回放分析，支持按玩家名、CFN 或回放 ID 搜索，按角色和状态筛选。未完成任务的进度在后台同步；点击记录即可在侧边抽屉查看详情。
   <sub>🙌 特别感谢 焕冥 提供的建议</sub>
  ![回放分析历史列表](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0.5.2/replay-history.png)
- **添加回放分析入口**： 可通过对战记录，收藏回放右键直接开始进入回放分析页面
 <sub>🙌 特别感谢 QQ 焕冥, QQ 痛饮三杯 提供的建议</sub>
- **回放分析导出回放分析数据**：打开回放分析详情，在“状态”中选择“导出回放分析数据”，即可保存包含对局数据和复盘提示词的 Markdown 文件，交给你常用的 AI 继续分析。
  <sub>🙌 特别感谢 QQ 痛饮三杯 提供的建议</sub>
  ![AI 复盘材料导出入口](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0.5.2/ai-export.png)

- **按伤害优先级给出改进建议**：整场总览新增“改进建议”，从对空、被确反、应对迸发、抢招被打康和被差合等已记录问题中，优先展示关联伤害较高的复盘重点，帮助决定先练什么。

- **新增赞助入口**：可在系统设置中找到赞助链接，支持 SF6Scouter 的持续开发。
### 优化

- **更细的起手与伤害分析**：新增对手起手招式统计；“附近事件”新增整段受伤结束后的剩余血量。
  ![整场复盘与改进建议](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0.5.2/replay-review.png)
  <sub>🙌 特别感谢 QQ 悠哈, QQ 太简单, QQ 无道, QQ 此路<-不通 提供的建议</sub>
- **从分数趋势直接查看逐局表现**：MR／LP 趋势图保留整体曲线，放大到足够细的范围后显示对手角色头像，以绿框／红框区分胜负，下方对战记录随可见范围联动。新增放大、缩小、总览按钮，支持横向拖选放大、Ctrl + 拖动或滚轮平移；逐局视图使用更细的数值刻度，方便观察小幅变化。
  <sub>🙌 特别感谢 QQ balance 提供的建议</sub>
  ![趋势图逐局头像与对战记录联动](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0.5.2/trend-matches.png)

- **对战信息更易读**：统一对战记录、收藏对战和回放分析列表的双行玩家信息与胜负标识；对战记录和收藏对战的筛选栏、表头保持可见，记录在表格内滚动。
