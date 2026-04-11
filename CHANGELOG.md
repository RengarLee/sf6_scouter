# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.2] - 2026-04-11
[zh]
### 修复
- **网络不稳定时图表绘制异常**：修复了弱网场景下数据跟踪计算错误，导致图表显示异常的问题。
  <sub>🙌 特别感谢 QQ @宇宙最酷, QQ @Jesusleo 提供的反馈</sub>

### 优化
- **官网请求增加多次重试机制**：提升网络不稳定时的数据获取成功率。

[en]
### Fixed
- **Chart Rendering Issues on Unstable Networks**: Fixed an issue where incorrect tracking calculations under poor network conditions caused chart rendering anomalies.
  <sub>🙌 Special thanks to QQ @宇宙最酷 and QQ @Jesusleo for the feedback</sub>

### Improved
- **Added Multiple Retries for Official API Requests**: Increased data fetch success rate when network connectivity is unstable.

[ja]
### 修正
- **不安定なネットワーク環境でのグラフ描画不具合**: 通信状態が不安定な場合に追跡計算が誤り、グラフ表示が異常になる問題を修正しました。
  <sub>🙌 フィードバックをいただいたQQの @宇宙最酷 さん、QQの @Jesusleo さんに感謝いたします</sub>

### 改善
- **公式APIリクエストの再試行回数を強化**: ネットワークが不安定な環境でのデータ取得成功率を向上させました。


## [0.3.1] - 2026-04-10
[zh]
### 新增
- **Mini/Pro视图支持分享**：用户可以当前视图（Mini或Pro）右键选择分享，生成可分享的图片到剪切板，方便在社交媒体上展示战绩。
  <sub>🙌 特别感谢 QQ @宇宙最酷 提供的建议</sub>
  ![v0.3.1 Pro Layout](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_1_Share.gif)

- **Pro支持自定义布局**：用户现在可以在设置-外观页面自定义Pro视图的布局，以更好地满足个人需求。
  <sub>🙌 特别感谢 NGA @就会玩治疗 提供的建议</sub>
  ![v0.3.1 Pro Layout](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_1_ProLayout.gif)

- **视图支持大/中/小快速设置**：用户现在可以在设置-外观页面快速选择视图大小（大/中/小），实现开箱即用。
  <sub>🙌 特别感谢 NGA @AinJianke 提供的建议</sub>
  ![v0.3.1 Pro Layout](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_1_WindowSize.gif)


### 优化
- **新版本提醒页面排版优化**：优化新版本提醒页面的排版和样式，使其更清晰易读。

### 修复
- **启动后界面显示异常**：修复了在某些系统配置下，应用启动后界面无法正常显示的问题。
  <sub>🙌 特别感谢 QQ @墨昀uuuun 提供的反馈</sub>

[en]
### Added
- **Share from Mini/Pro View**: Right-click in either Mini or Pro view to share your match results as an image copied to the clipboard — perfect for posting on social media.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the suggestion</sub>
  ![v0.3.1 Share](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_1_Share.gif)

- **Custom Layout for Pro View**: You can now customize the layout of the Pro view from Settings > Appearance to better suit your personal preferences.
  <sub>🙌 Special thanks to NGA @就会玩治疗 for the suggestion</sub>
  ![v0.3.1 Pro Layout](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_1_ProLayout.gif)

- **Quick Size Presets (Large / Medium / Small)**: Choose a view size preset instantly from Settings > Appearance for an out-of-the-box experience.
  <sub>🙌 Special thanks to NGA @AinJianke for the suggestion</sub>
  ![v0.3.1 Window Size](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_1_WindowSize.gif)

### Improved
- **Update Notification Page**: Improved the layout and styling of the new-version notification page for better clarity and readability.

### Fixed
- **UI Not Showing After Launch**: Fixed an issue where the app window failed to display correctly on certain system configurations.
  <sub>🙌 Special thanks to QQ @墨昀uuuun for the feedback</sub>

[ja]
### 追加
- **Mini/Proビューからシェア**: MiniまたはProビューで右クリックすることで、対戦成績を画像としてクリップボードにコピーし、SNSに共有できるようになりました。
  <sub>🙌 ご提案いただいたQQの @宇宙最酷 さんに感謝いたします</sub>
  ![v0.3.1 Share](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_1_Share.gif)

- **Proビューのカスタムレイアウト**: 設定 > 外観画面でProビューのレイアウトをカスタマイズできるようになり、個人の好みに合わせた表示が可能になりました。
  <sub>🙌 ご提案いただいたNGAの @就会玩治疗 さんに感謝いたします</sub>
  ![v0.3.1 Pro Layout](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_1_ProLayout.gif)

- **ウィンドウサイズのクイック設定（大／中／小）**: 設定 > 外観画面でビューサイズをワンクリックで選択できるプリセットを追加し、すぐに使い始められるようになりました。
  <sub>🙌 ご提案いただいたNGAの @AinJianke さんに感謝いたします</sub>
  ![v0.3.1 Window Size](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_1_WindowSize.gif)

### 改善
- **バージョン通知ページの改善**: 新バージョン通知ページのレイアウトとスタイルを改善し、より見やすくなりました。

### 修正
- **起動後に画面が表示されない問題**: 一部のシステム環境でアプリ起動後に画面が正常に表示されない問題を修正しました。
  <sub>🙌 フィードバックいただいたQQの @墨昀uuuun さんに感謝いたします</sub>

## [0.3.0] - 2026-04-08
[zh]
### 新增
- **设置功能独立窗口**：设置功能现在在独立窗口中打开，提供更专注的配置体验。
  <sub>🙌 特别感谢 NGA @AinJianke 提供的建议</sub>

- **提供查看各个角色数据功能**：用户现在可以在设置-数据页面查看当前角色跟踪角色和各个角色的数据
  <sub>🙌 特别感谢 NGA @AinJianke 提供的建议</sub>

- **添加Mini和Pro快速切换按钮**：在视图右上角添加了一个切换按钮，允许用户在 Mini 模式和 Pro 模式之间快速切换，无需进入设置。
  <sub>🙌 特别感谢 NGA @AinJianke 提供的建议</sub>

- **提供设置数据间隔配置**：用户现在可以设置-用户页面自定义数据刷新间隔，以优化性能和体验。
  <sub>🙌 特别感谢 QQ @宇宙最酷 提供的建议</sub>

- **对战记录持久化**：用户现在可以在设置-数据页面启用对战记录持久化，应用现在支持将战绩数据持久化存储，重启应用后数据不会丢失。(预览功能：新版本可能会造成持久化数据丢失)
  <sub>🙌 特别感谢 QQ @宇宙最酷 提供的建议</sub>

- **对战记录截取**：用户现在可以在设置-数据页面启用对战记录截取，自主选择从哪一场对战开始跟踪。
  <sub>🙌 特别感谢 QQ @宇宙最酷 提供的建议</sub>

- **新增新版本提醒功能**：当有新版本发布时，应用进行提醒，点击后可查看更新详情并选择立即更新或稍后提醒。

### 优化
- **优化角色切换**：优化角色切换逻辑，用户游戏中切换角色后，应用能更快地识别并切换到正确的 LP/MR 数据显示。
  <sub>🙌 特别感谢 NGA @AinJianke 提供的建议</sub>

[en]
### Added
- **Standalone Settings Window**: Settings now open in a separate window for a more focused configuration experience.
  <sub>🙌 Special thanks to NGA @AinJianke for the suggestion</sub>

- **Character Data Viewer**: Users can now view tracked character data and per-character stats from Settings > Data.
  <sub>🙌 Special thanks to NGA @AinJianke for the suggestion</sub>

- **Mini/Pro Quick Toggle Button**: Added a quick toggle button in the top-right corner to switch between Mini and Pro modes without opening Settings.
  <sub>🙌 Special thanks to NGA @AinJianke for the suggestion</sub>

- **Configurable Data Refresh Interval**: Users can now customize the data refresh interval to optimize performance and experience.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the suggestion</sub>

- **Battle Record Persistence**: Added an option in Settings > Data to persist battle records, so data is retained after app restart. (Preview feature: data may be reset in newer versions.)
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the suggestion</sub>

- **Battle Record Start Point**: Added an option in Settings > Data to trim old records and start tracking from a selected match.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the suggestion</sub>

- **New Version Notification**: The app now notifies you when a new version is available. Click to view update details and choose to update now or be reminded later.

### Improved
- **Improved Character Switching**: Optimized character-switch detection so LP/MR display updates faster and more accurately when switching characters in-game.
  <sub>🙌 Special thanks to NGA @AinJianke for the suggestion</sub>

[ja]
### 追加
- **設定の独立ウィンドウ化**: 設定機能が独立したウィンドウで開くようになり、より集中して設定できるようになりました。
  <sub>🙌 ご提案いただいたNGAの @AinJianke さんに感謝いたします</sub>

- **キャラクターデータ閲覧機能**: 設定 > データ画面で、現在追跡中のキャラクターおよび各キャラクターのデータを確認できるようになりました。
  <sub>🙌 ご提案いただいたNGAの @AinJianke さんに感謝いたします</sub>

- **Mini/Pro クイック切替ボタン**: 画面右上にクイック切替ボタンを追加し、設定を開かずに Mini モードと Pro モードを切り替えられるようになりました。
  <sub>🙌 ご提案いただいたNGAの @AinJianke さんに感謝いたします</sub>

- **データ更新間隔の設定**: データの更新間隔をカスタマイズできるようになり、パフォーマンスと操作感を最適化できます。
  <sub>🙌 ご提案いただいたQQの @宇宙最酷 さんに感謝いたします</sub>

- **対戦記録の永続化**: 設定 > データ画面で対戦記録の永続化を有効にできるようになり、アプリ再起動後もデータを保持できます。（プレビュー機能: 新バージョンでデータが失われる可能性があります）
  <sub>🙌 ご提案いただいたQQの @宇宙最酷 さんに感謝いたします</sub>

- **対戦記録の開始位置設定**: 設定 > データ画面で古い記録を整理し、任意の試合から追跡を開始できるようになりました。
  <sub>🙌 ご提案いただいたQQの @宇宙最酷 さんに感謝いたします</sub>

- **新バージョン通知**: 新しいバージョンが公開されるとアプリが通知し、クリックすると更新内容を確認して「今すぐ更新」または「後で通知」を選択できます。

### 改善
- **キャラクター切替の最適化**: ゲーム中のキャラクター切替後、LP/MR の表示切替をより速く正確に行えるよう最適化しました。
  <sub>🙌 ご提案いただいたNGAの @AinJianke さんに感謝いたします</sub>


## [0.2.3] - 2026-04-07


[zh]
### 新增
- **自动切换LP/MR**：根据玩家的当前角色是否是大师,自动切换 LP 和 MR 数据显示。
  <sub>🙌 特别感谢 NGA @AinJianke 和 QQ @宇宙最酷 提供的建议</sub>
  <sub>🙌 特别感谢 QQ 用户 @宇宙最酷 提供的测试</sub>

[en]
### Added
- **Auto Switch LP/MR**: Automatically switch between LP and MR display based on whether the current character is a Master。
  <sub>🙌 Special thanks to NGA @AinJianke and QQ @宇宙最酷 for suggestions</sub>
  <sub>🙌 Special thanks to QQ user @宇宙最酷 for testing</sub>

[ja]
### 追加
- **LP/MR自動切替**: 現在のキャラクターがマスターかどうかに応じて、LPとMRの表示を自動的に切り替えます。
  <sub>🙌 NGAの @AinJianke さん、QQの @宇宙最酷 さん、ご提案に感謝いたします</sub>
  <sub>🙌 QQユーザーの @宇宙最酷 さん、テストへのご協力に感謝いたします</sub>

## [0.2.2] - 2026-04-06


[zh]
### 修复
- **修复**：修复无法跟踪豪鬼、拜森、本田的 LP 和 MR 数据的问题。
  <sub>🙌 特别感谢 QQ 用户 @balance，@宇宙最酷 提供的反馈和测试</sub>

[en]
### Fixed
- **Fix**: Resolved the issue where LP and MR data tracking failed for characters Akuma, Bison, and Honda.
  <sub>🙌 Special thanks to QQ users @balance and @宇宙最酷 for their feedback and testing</sub>

[ja]
### 修正
- **修正**: 豪鬼、バイソン、エドモンド本田の LP と MR データが追跡できない問題を修正しました。
  <sub>🙌 QQ ユーザーの @balance さん、@宇宙最酷 さん、フィードバックとテストへのご協力に感謝いたします</sub>

## [0.2.1] - 2026-04-03

[zh]

### 新增
- **跨 ID 追踪**：登录后支持追踪并切换其他玩家的 ID 战绩。
  <sub>🙌 特别感谢 NGA @丧心病狂的追忆 提供的建议</sub>

- **Pro 面板**：新增专业战绩面板，以动态折线图形式直观展示分数走势。
  <sub>🙌 特别感谢 NGA @gjf779, @丧心病狂的追忆, @AinJianke 提供的建议</sub>

- **窗口记忆**：支持自动记忆窗口配置，重新打开时将自动还原至上次关闭时的精确位置和大小。
  <sub>🙌 特别感谢 NGA @就会玩治疗 提供的建议</sub>

- **视觉增强**：为数字更新添加滚动特效。

[en]
### Added
- **Cross-Tracking**: You can now track other players' IDs after logging in.
  <sub>🙌 Special thanks to NGA user 丧心病狂 of Recall for the suggestions</sub>

- **Pro Panel**: New statistics dashboard featuring line charts to visualize your score trends (LP/MR).
  <sub>🙌 Special thanks to NGA users gjf779, 丧心病狂 of Recall, AinJianke for the suggestions</sub>

- **Smart Config**: The app now remembers your window configuration, automatically restoring to its exact last closed position and size upon reopening.
  <sub>🙌 Special thanks to NGA user 就会玩治疗 for the suggestions</sub>

- **Visual Polish**: Added smooth number scrolling animation effects for data updates.

[ja]
### 追加
- **他者ID追跡**: ログイン後、他のプレイヤーのIDを追跡・切り替えられるようになりました。
  <sub>🙌 NGAの 丧心病狂的追忆 さんによる提案に感謝いたします</sub>

- **Pro パネル**: ランクポイント（LP/MR）の推移を折れ線グラフで視覚化する新しい統計ダッシュボードを追加しました。
  <sub>🙌 NGAの gjf779, 丧心病狂的追忆, AinJianke さんによる提案に感謝いたします</sub>

- **設定記憶**: ウィンドウ設定を記憶し、再起動時に前回終了時の位置とサイズを正確に復元するようになりました。
  <sub>🙌 NGAの 就会玩治疗 さんによる提案に感謝いたします</sub>

- **ビジュアル強化**: 数値更新時にスムーズな数字スクロールアニメーションを追加しました。

## [0.1.35] - 2026-03-29

[zh]
### 优化
- **重构追踪代码**：重构代码结构，提高可读性和可维护性。

- **UI 调整**：微调 UI 并修复了一些小 Bug。

[en]
### Improved
- Refactor code structure for improved readability and maintainability.
- Minor UI adjustments and bug fixes.

[ja]
### 改善
- コード構造のリファクタリングにより、可読性とメンテナンス性が向上しました。
- UIの微調整とバグ修正を行いました。
