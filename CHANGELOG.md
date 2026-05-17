# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.10] - 2026-05-17

[zh]
### 优化

- **调整数据反馈采样比例**：调整数据反馈比例

## [0.3.9] - 2026-05-17

[zh]
### 新增
- **新增VS画面时获得对手画像**：引入OCR技术，在VS加载画面时就自动识别对手并尝试展示对手画像，帮助用户更快速地了解对手习惯和特点。该功能默认开启，开关位置在设置-数据-对手画像-OCR识别中开启。对手画像展示的快慢取决于官网请求速率，网络较慢时可能会有较长的等待时间。
  <sub>🙌 特别感谢 QQ @宇宙最酷 的灵感启发</sub>
    ![v0_3_9_OCR_Vs_Name](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_9_OCR_Vs_Name.gif)

- **新增数据反馈功能**：新增数据反馈功能。开关位置在 设置-系统-让SF6 Scouter变得更聪明，用户可以选择将使用数据匿名反馈给开发者，用于优化产品体验。该功能默认开启，用户可以根据自己的意愿选择开启。目前数据为VS画面识别的相关数据，用于训练模型，提供更高的准确性，后续会根据用户反馈和需求增加更多的数据。


### 优化
- **优化对手画像逻辑**：优化对手画像的逻辑，提高识别准确性。

[en]
### Added
- **Opponent profile display on VS screen**: Introduced OCR technology to automatically identify the opponent during the VS loading screen and attempt to display their profile, helping users quickly understand their opponent's habits and tendencies. This feature is enabled by default; the toggle is located at Settings → Data → Opponent Profile → OCR Recognition. The speed of profile display depends on the official website's request rate — slower networks may result in longer wait times.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the inspiration</sub>
  ![v0_3_9_OCR_Vs_Name](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_9_OCR_Vs_Name.gif)

- **Data feedback feature**: Added a data feedback feature. The toggle is located at Settings → System → Make SF6 Scouter Smarter. Users can choose to anonymously send usage data to the developer for product optimization. This feature is enabled by default; users may toggle it according to their preference. Currently the data consists of VS screen recognition results, used to train models for improved accuracy. More data types will be added based on user feedback and needs.

### Improved
- **Optimized opponent profile logic**: Refined the logic for opponent profile retrieval to improve recognition accuracy.

[ja]
### 追加
- **VS画面での対戦相手プロフィール表示**: OCR技術を導入し、VSローディング画面で対戦相手を自動認識してプロフィールを表示できるようになりました。対戦相手の傾向や特徴をより素早く把握するのに役立ちます。この機能はデフォルトで有効です。設定→データ→対戦相手プロフィール→OCR認識からオン／オフを切り替えられます。プロフィールの表示速度は公式サイトへのリクエスト速度に依存するため、回線が遅い場合は待機時間が長くなることがあります。
  <sub>🙌 インスピレーションをくださった QQ @宇宙最酷 さんに特別な感謝を</sub>
  ![v0_3_9_OCR_Vs_Name](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_9_OCR_Vs_Name.gif)

- **データフィードバック機能**: データフィードバック機能を追加しました。設定→システム→SF6 Scouter をもっと賢くする からオン／オフを切り替えられます。ユーザーは使用データを匿名で開発者に送信し、製品改善に役立てることを選択できます。この機能はデフォルトで有効ですが、ユーザーの意向に応じて変更可能です。現在のデータはVS画面認識に関するもので、モデルの学習・精度向上に使用されます。今後はユーザーのフィードバックや要望に応じてデータの種類を拡充していく予定です。

### 改善
- **対戦相手プロフィールロジックの最適化**: 対戦相手プロフィール取得のロジックを改善し、認識精度を向上させました。

## [0.3.8] - 2026-05-07
[zh]
### 优化
- **优化未定分角色的段位展示**：将未定分的角色段位展示为挑战者，提升用户体验。
  <sub>🙌 特别感谢 QQ 宇宙最酷 提供的建议</sub>

[en]
### Improved
- **Unranked Character Rank Display**: Characters without a placement rank are now shown as Challenger, improving the user experience.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for the suggestion</sub>

[ja]
### 改善
- **未確定段位キャラクターのランク表示の改善**: 段位が未確定のキャラクターを「チャレンジャー」として表示するようにしました。ユーザー体験の向上を図っています。
  <sub>🙌 ご提案いただいたQQ 宇宙最酷 さんに感謝いたします</sub>

## [0.3.7] - 2026-05-06
[zh]
### 新增
- **新增周期报告功能**：用户现在可以在设置 > 数据分析 > 周期报告中查看每周的战绩总结与分析，更直观地了解自己的表现和趋势。周期报告基于本工具采集的数据生成，因此如果长时间未使用工具抓取数据，报告内容可能不完整。
  <sub>🙌 特别感谢 QQ 第一百零五天 提供的建议</sub>
  ![v0_3_7_Report](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_7_Report.png)

- **新增数据分析窗口快捷入口**：在 Mini 面板和 Pro 面板右上角新增了数据分析窗口快捷入口，方便快速进入数据分析页面。

- **新增段位模块自定义功能**：用户现在可以在设置 > Pro布局中自定义段位模块的展示样式，以满足个性化需求。
  <sub>🙌 特别感谢 QQ @宇宙最酷 提供的建议</sub>

### 优化
- **追踪功能仅记录排位数据**：优化了数据追踪逻辑，现在面板仅处理排位数据，提供更专注的上分追踪体验。
  <sub>🙌 特别感谢 小黑盒 李某某 提供的建议</sub>

- **优化分数模块展示效果**：优化了分数模块的展示效果，确保在不同分辨率下都能正常显示，避免数字被遮挡。
  <sub>🙌 特别感谢 QQ @星离雨散 提供的建议</sub>

### 修复
- **修复游玩数据页面排名问题**：修复了游玩数据页面中非大师用户排名显示不正确的问题，确保用户能够准确查看排名信息。
  <sub>🙌 特别感谢 QQ @宇宙最酷 提供的反馈</sub>

- **修复面板窗口变动后坐标数据异常**：修复了面板窗口位置或宽高变动后坐标数据异常的问题，确保用户拖动窗口时位置记录正确。
  <sub>🙌 特别感谢 QQ @宇宙最酷 提供的反馈</sub>

[en]
### Added
- **Weekly Report Feature**: Users can now view a weekly match summary and analysis from Settings > Data Analysis > Weekly Report to better understand their performance and trends. The report is generated from data collected by this tool, so it may be incomplete if the tool has not been used to capture data for a long time.
  <sub>🙌 Special thanks to QQ 第一百零五天 for the suggestion</sub>
  ![v0_3_7_Report](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_7_Report.png)

- **Data Analysis Shortcut Entry**: Added a shortcut to the Data Analysis window in the top-right corner of both the Mini and Pro panels for quicker access.

- **Rank Module Customization**: Users can now customize the display style of the rank module from Settings > Pro Layout for a more personalized layout.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the suggestion</sub>

### Improved
- **Tracking Now Records Ranked Matches Only**: Refined the tracking logic so that only ranked-match data is recorded, providing a more focused ranked-climb tracking experience.
  <sub>🙌 Special thanks to 小黑盒 李某某 for the suggestion</sub>

- **Improved Score Module Display**: Improved the score module display to ensure it renders properly across different resolutions and avoids clipped numbers.
  <sub>🙌 Special thanks to QQ @星离雨散 for the suggestion</sub>

### Fixed
- **Play Data Ranking Issue**: Fixed an issue where rankings for non-Master users were displayed incorrectly on the Play Data page, ensuring ranking information is shown accurately.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the feedback</sub>

- **Panel Window Coordinate Errors After Layout Changes**: Fixed an issue where coordinate data could become incorrect after changing a panel window's position or size, ensuring dragged window positions are recorded correctly.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the feedback</sub>

[ja]
### 追加
- **周期レポート機能の追加**: 設定 > データ分析 > 周期レポート から、毎週の戦績サマリーと分析を確認できるようになりました。自分の成績や傾向をより直感的に把握できます。なお、このレポートは本ツールが収集したデータをもとに生成されるため、長期間データ取得を行っていない場合は内容が不完全になることがあります。
  <sub>🙌 ご提案いただいたQQ 第一百零五天 さんに感謝いたします</sub>
  ![v0_3_7_Report](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_7_Report.png)

- **データ分析ウィンドウへのショートカットを追加**: MiniパネルとProパネルの右上に、データ分析ウィンドウへ素早く移動できるショートカットを追加しました。

- **段位モジュールのカスタマイズ機能を追加**: 設定 > Proレイアウト から、段位モジュールの表示スタイルをカスタマイズできるようになりました。
  <sub>🙌 ご提案いただいたQQ @宇宙最酷 さんに感謝いたします</sub>

### 改善
- **追跡機能をランクマッチデータのみに最適化**: データ追跡ロジックを改善し、ランクマッチのデータのみを記録するようにしました。より集中したランク上げの追跡体験を提供します。
  <sub>🙌 ご提案いただいた小黑盒 李某某 さんに感謝いたします</sub>

- **スコアモジュールの表示を改善**: スコアモジュールの表示を改善し、異なる解像度でも数値が隠れず正しく表示されるようにしました。
  <sub>🙌 ご提案いただいたQQ @星离雨散 さんに感謝いたします</sub>

### 修正
- **プレイデータページの順位表示問題を修正**: プレイデータページで、マスター未満のユーザーの順位が正しく表示されない問題を修正し、順位情報を正確に確認できるようにしました。
  <sub>🙌 フィードバックをいただいたQQ @宇宙最酷 さんに感謝いたします</sub>

- **パネルウィンドウ変更後の座標データ異常を修正**: パネルウィンドウの位置やサイズを変更した後に座標データが不正になる問題を修正し、ウィンドウをドラッグした位置が正しく記録されるようにしました。
  <sub>🙌 フィードバックをいただいたQQ @宇宙最酷 さんに感謝いたします</sub>

## [0.3.6] - 2026-04-26
[zh]
### 新增
- **新增Pro布局功能**：用户现在可以在设置-Pro布局高度自定义Pro视图中不同模块的显示，并保存，后续可以一键还原。
  <sub>🙌 特别感谢 QQ memory, QQ 宇宙最酷 提供的建议</sub>
  ![v0.3.6 Pro Layout](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_6_Pro_Layout.gif)

- **新增设置用户画像提示时长功能**：用户现在可以在设置-数据设置中调整对手画像提示的显示时长。
 <sub>🙌 特别感谢 QQ Hinako 提供的建议</sub>

### 优化
- **Pro视图弹窗位置优化**：优化了Pro视图中弹窗的位置，使其显示更加合理，避免遮挡主要内容。
  <sub>🙌 特别感谢 QQ 宇宙最酷 提供的建议</sub>

[en]
### Added
- **New Pro Layout Feature**: Users can now fully customize the display of each module in the Pro view from Settings > Pro Layout, save their layout, and restore it with one click.
  <sub>🙌 Special thanks to QQ memory, QQ 宇宙最酷 for the suggestion</sub>
  ![v0.3.6 Pro Layout](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_6_Pro_Layout.gif)

- **Configurable Opponent Profile Hint Duration**: Users can now adjust how long opponent profile hints stay visible from Settings > Data Settings.
 <sub>🙌 Special thanks to QQ Hinako for the suggestion</sub>

### Improved
- **Pro View Popup Positioning**: Improved the popup positioning in the Pro view for more reasonable display and to avoid covering main content.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for the suggestion</sub>

[ja]
### 追加
- **Proレイアウト機能の追加**: 設定 > ProレイアウトからProビューの各モジュール表示を自由にカスタマイズし、保存・ワンクリックで復元できるようになりました。
  <sub>🙌 ご提案いただいたQQ memory さん、QQ 宇宙最酷 さんに感謝いたします</sub>
  ![v0.3.6 Pro Layout](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_6_Pro_Layout.gif)

- **対戦相手プロファイルの表示時間設定を追加**: 設定 > データ設定 から、対戦相手プロファイルのヒント表示時間を調整できるようになりました。
 <sub>🙌 ご提案いただいたQQ Hinako さんに感謝いたします</sub>

### 改善
- **Proビューのポップアップ位置最適化**: Proビュー内のポップアップ表示位置を最適化し、主要コンテンツの邪魔にならないよう改善しました。
  <sub>🙌 ご提案いただいたQQ 宇宙最酷 さんに感謝いたします</sub>

## [0.3.5] - 2026-04-23
[zh]
### 新增
- **添加Logo**：在应用程序和官网中添加了一个新的Logo，以提升用户识别度。
  <sub>🙌 特别感谢 QQ 宇宙最酷 无偿提供的Logo</sub>
  ![v0.3.5 logo](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_sf6scouter_logo.png)

- **Pro面板添加段位视图**：用户可以在设置-外观-布局中选择段位视图，即可在Pro视图中显示段位和排名，提升用户体验。
  <sub>🙌 特别感谢 QQ Jesusleo, QQ 宇宙最酷 提供的建议</sub>
  ![v0.3.5 Rank](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_Rank.jpg)

- **数据分析面板添加游玩数据页**：用户可以在设置-数据-数据分析-游玩数据查询用户的游玩数据,包含角色段位，游戏时长，格斗成就等数据。
  <sub>🙌 特别感谢 NGA AinJianke, QQ 宇宙最酷, 小黑盒 ghetto 提供的建议</sub>
  ![v0.3.5 PlayData](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_PlayData.gif)

- **Pro面板的数据点支持查看对手数据**：用户可以点击Pro视图中的数据点，快速查看对手数据，并且可以直接跳转到游玩数据页面。
  <sub>🙌 特别感谢 QQ 宇宙最酷 提供的建议</sub>
  ![v0.3.5 Pro_PlayData](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_Pro_PlayData.gif)

- **预览功能-对战结束后提供对手行为画像**：在首次和对手对战结束后，将提示对手的行为画像，帮助用户更好地了解对手习惯，用户可以在设置-数据-对手画像选项关闭该功能。
  <sub>🙌 特别感谢 QQ 宇宙最酷 提供的建议</sub>
  ![v0.3.5 User Image](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_user_image.jpg)

### 优化
- **Pro视图Y轴段位显示优化**：放大Y轴段位图片，停止负数展示，提升可读性。
  <sub>🙌 特别感谢 微信 HENRY, QQ 宇宙最酷 提供的建议</sub>

- **添加段位视图作为Pro视图默认布局**：添加段位视图到Pro视图默认布局，提升用户体验。
  ![v0.3.5 Pro](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_Pro.jpg)

### 修复
- **部分场景下抢夺窗口焦点**：修复了在某些特定场景下，强制抢夺窗口焦点的问题。
  <sub>🙌 特别感谢 QQ 宇宙最酷 提供的反馈</sub>

[en]
### Added
- **New Logo**: Added a new logo to the app and official website to improve user recognition.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for providing the logo free of charge</sub>
  ![v0.3.5 logo](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_sf6scouter_logo.png)

- **Rank View in Pro Panel**: Select "Rank View" in Settings > Appearance > Layout to display rank and ranking in the Pro view.
  <sub>🙌 Special thanks to QQ Jesusleo, QQ 宇宙最酷 for the suggestion</sub>
  ![v0.3.5 Rank](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_Rank.jpg)

- **Play Data Page in Data Analysis Panel**: View play data including character ranks, play time, combat achievements, and more from Settings > Data > Data Analysis > Play Data.
  <sub>🙌 Special thanks to NGA AinJianke, QQ 宇宙最酷, 小黑盒 ghetto for the suggestion</sub>
  ![v0.3.5 PlayData](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_PlayData.gif)

- **View Opponent Data from Pro Panel Data Points**: Click on a data point in the Pro view to quickly view opponent data and jump directly to the Play Data page.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for the suggestion</sub>
  ![v0.3.5 Pro_PlayData](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_Pro_PlayData.gif)

- **Preview Feature — Opponent Behavior Profile After Battle**: After your first battle with an opponent ends, a behavior profile of the opponent will be shown to help you understand their habits. This feature can be disabled from Settings > Data > Opponent Profile.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for the suggestion</sub>
  ![v0.3.5 User Image](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_user_image.jpg)

### Improved
- **Pro View Y-Axis Rank Display**: Enlarged rank icons on the Y-axis and removed negative value display for better readability.
  <sub>🙌 Special thanks to WeChat HENRY, QQ 宇宙最酷 for the suggestion</sub>

- **Rank View Added as Default Pro View Layout**: Added Rank View as the default layout for the Pro view to improve the out-of-the-box experience.
  ![v0.3.5 Pro](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_Pro.jpg)

### Fixed
- **Window Focus Stealing in Certain Scenarios**: Fixed an issue where the app forcibly grabbed window focus in specific scenarios.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for the feedback</sub>

[ja]
### 追加
- **新しいロゴの追加**: アプリと公式サイトに新しいロゴを追加し、ユーザー認知度を向上させました。
  <sub>🙌 ロゴを無償提供いただいたQQ 宇宙最酷 さんに感謝いたします</sub>
  ![v0.3.5 logo](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_sf6scouter_logo.png)

- **ProパネルにランクビューViewを追加**: 設定 > 外観 > レイアウトで「ランクビュー」を選択すると、Proビューにランクと順位が表示されます。
  <sub>🙌 ご提案いただいたQQ Jesusleo さん、QQ 宇宙最酷 さんに感謝いたします</sub>
  ![v0.3.5 Rank](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_Rank.jpg)

- **データ分析パネルにプレイデータページを追加**: 設定 > データ > データ分析 > プレイデータから、キャラクターランク・プレイ時間・格闘実績などのプレイデータを確認できます。
  <sub>🙌 ご提案いただいたNGA AinJianke さん、QQ 宇宙最酷 さん、小黑盒 ghetto さんに感謝いたします</sub>
  ![v0.3.5 PlayData](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_PlayData.gif)

- **Proパネルのデータポイントから対戦相手データを確認**: Proビューのデータポイントをクリックすることで、対戦相手のデータをすばやく確認し、プレイデータページに直接移動できます。
  <sub>🙌 ご提案いただいたQQ 宇宙最酷 さんに感謝いたします</sub>
  ![v0.3.5 Pro_PlayData](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_Pro_PlayData.gif)

- **プレビュー機能 — 対戦終了後に対戦相手の行動プロファイルを表示**: 初めて対戦した相手との試合終了後、その相手の行動プロファイルが表示され、相手の傾向をより深く把握できます。この機能は設定 > データ > 対戦相手プロファイルから無効にできます。
  <sub>🙌 ご提案いただいたQQ 宇宙最酷 さんに感謝いたします</sub>
  ![v0.3.5 User Image](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_user_image.jpg)

### 改善
- **ProビューY軸のランク表示の最適化**: Y軸のランクアイコンを拡大し、マイナス値の表示を廃止することで可読性を向上しました。
  <sub>🙌 ご提案いただいたWeChat HENRY さん、QQ 宇宙最酷 さんに感謝いたします</sub>

- **ランクビューをProビューのデフォルトレイアウトに追加**: ランクビューをProビューのデフォルトレイアウトとして追加し、初期使用体験を向上させました。
  ![v0.3.5 Pro](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_5_Pro.jpg)

### 修正
- **特定シナリオでのウィンドウフォーカス奪取**: 特定の状況下でアプリが強制的にウィンドウフォーカスを奪う問題を修正しました。
  <sub>🙌 フィードバックをいただいたQQ 宇宙最酷 さんに感謝いたします</sub>

## [0.3.4] - 2026-04-18
[zh]
### 新增
- **Pro面板添加展示连胜连败视图**：用户可以在设置-外观-布局中选择战绩视图，即可在Pro视图中显示连胜/连败，最大连胜，最大连败，提升用户体验。
  <sub>🙌 特别感谢 QQ Jesusleo, QQ 宇宙最酷 提供的建议</sub>
  ![v0.3.4 Pro Head Image](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_4_BattleStats.jpg)

- **Pro面板折线图Y轴展示段位**：用户可以在设置-外观-布局中选择战绩视图，即可在Pro视图中显示连胜/连败，最大连胜，最大连败，提升用户体验。
  <sub>🙌 特别感谢 QQ Jesusleo, QQ 墨昀uuuun 提供的建议</sub>
  ![v0.3.4 Pro Head Image](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_4_Pro_Y_Rank.jpg)

### 优化
- **提供额外下载路线**：用户使用官网或软件更新时，自动选择下载路线，提升下载体验。

### 修复
- **部分场景下计算胜负异常**：修复了在某些特定场景下，胜负计算异常的问题。更新后历史数据将自动修正。
  <sub>🙌 特别感谢 NGA 狗仔至 提供的反馈</sub>

[en]
### Added
- **Win/Loss Streak View in Pro Panel**: Select "Battle Stats" view in Settings > Appearance > Layout to display win streaks, loss streaks, max win streak, and max loss streak in the Pro view.
  <sub>🙌 Special thanks to QQ Jesusleo, QQ 宇宙最酷 for the suggestion</sub>
  ![v0.3.4 BattleStats](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_4_BattleStats.jpg)

- **Rank Labels on Pro Panel Line Chart Y-Axis**: Select "Battle Stats" view in Settings > Appearance > Layout to display rank labels on the Y-axis of the Pro panel's line chart.
  <sub>🙌 Special thanks to QQ Jesusleo, QQ 墨昀uuuun for the suggestion</sub>
  ![v0.3.4 Pro Y Rank](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_4_Pro_Y_Rank.jpg)

### Improved
- **Additional Download Routes**: Download routes are automatically selected when updating via the official site or in-app updater, improving the download experience.

### Fixed
- **Incorrect Win/Loss Calculation in Certain Scenarios**: Fixed win/loss calculation errors in specific scenarios. Historical data will be automatically corrected after updating.
  <sub>🙌 Special thanks to NGA 狗仔至 for the feedback</sub>

[ja]
### 追加
- **ProパネルにW/L連勝・連敗ビューを追加**: 設定 > 外観 > レイアウトで「戦績ビュー」を選択すると、Proビューに連勝・連敗・最大連勝・最大連敗が表示されます。
  <sub>🙌 ご提案いただいたQQ Jesusleo さん、QQ 宇宙最酷 さんに感謝いたします</sub>
  ![v0.3.4 BattleStats](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_4_BattleStats.jpg)

- **Proパネル折れ線グラフのY軸にランクを表示**: 設定 > 外観 > レイアウトで「戦績ビュー」を選択すると、Proパネルの折れ線グラフのY軸にランクが表示されます。
  <sub>🙌 ご提案いただいたQQ Jesusleo さん、QQ 墨昀uuuun さんに感謝いたします</sub>
  ![v0.3.4 Pro Y Rank](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_4_Pro_Y_Rank.jpg)

### 改善
- **追加ダウンロードルートの提供**: 公式サイトまたはアプリ内アップデート時に、ダウンロードルートが自動選択され、ダウンロード体験が向上します。

### 修正
- **特定シナリオでの勝敗計算の異常**: 特定の状況下で勝敗の計算が正しく行われない問題を修正しました。アップデート後、過去のデータは自動的に修正されます。
  <sub>🙌 フィードバックをいただいたNGA 狗仔至 さんに感謝いたします</sub>

## [0.3.3] - 2026-04-16
[zh]
### 新增
- **Pro面板显示对手头像**：用户可以在设置-外观-图表开启展示对手头像功能，在Pro视图中显示对手的头像，提升用户体验。
  <sub>🙌 特别感谢 QQ @宇宙最酷 提供的建议</sub>
  ![v0.3.3 Pro Head Image](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_3_ProHeadImage.gif)

- **数据分析面板**: 用户可以在设置-数据-数据分析打开数据分析面板，查看简易的分数趋势，胜率，K线图等
  <sub>🙌 特别感谢 NGA @AinJianke 提供的建议</sub>
  ![v0.3.3 Data Analysis](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_3_K_Line.gif)

- **正式支持持久化**：目前自动爬取用户最近100场对战数据并持久化存储，重启应用后数据不会丢失，并且在设置-系统配置备份文件夹位置，通过借助U盘，云盘等方式可实现数据备份。官网因版本更新导致的对战数据不展示，用户可以通过该持久化功能将数据保留在本地。并且使用加密措施，保证用户数据安全。
  <sub>🙌 特别感谢 QQ @宇宙最酷, QQ @墨昀uuuun, QQ @Jesusleo 提供的建议</sub>

### 优化
- **优化登录逻辑**：优化登录流程，提升登录体验和稳定性。

- **优化恢复会话**：将预览版数据持久化功能的恢复会话功能优化并支持当前正式持久化功能。

### 删除
- **删除预览版本数据持久化功能**：由于正式持久化功能的引入，原有的预览版本数据功能已不再必要，因此被移除。

[en]
### Added
- **Opponent Avatar in Pro Panel**: Enable opponent avatar display from Settings > Appearance > Chart. Shows the opponent's avatar in Pro view for an enhanced experience.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the suggestion</sub>
  ![v0.3.3 Pro Head Image](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_3_ProHeadImage.gif)

- **Data Analysis Panel**: Open from Settings > Data > Data Analysis to view score trends, win rates, candlestick charts, and more.
  <sub>🙌 Special thanks to NGA @AinJianke for the suggestion</sub>
  ![v0.3.3 Data Analysis](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_3_K_Line.gif)

- **Official Persistence Support**: Automatically fetches and persists your last 100 battle records locally. Data is retained after restart. Configure a backup folder in Settings > System for USB/cloud backup. Data is also encrypted to ensure security.
  <sub>🙌 Special thanks to QQ @宇宙最酷, QQ @墨昀uuuun, QQ @Jesusleo for the suggestion</sub>

### Improved
- **Improved Login Flow**: Optimized the login process for a smoother and more stable experience.
- **Improved Session Restore**: Enhanced the session restore feature to support the new official persistence system.

### Removed
- **Removed Preview Persistence Feature**: With the introduction of official persistence, the previous preview-version data feature is no longer necessary and has been removed.

[ja]
### 追加
- **Proパネルに対戦相手のアバターを表示**: 設定 > 外観 > グラフから有効化できます。Proビューで対戦相手のアバターが表示され、ユーザー体験が向上します。
  <sub>🙌 ご提案いただいたQQの @宇宙最酷 さんに感謝いたします</sub>
  ![v0.3.3 Pro Head Image](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_3_ProHeadImage.gif)

- **データ分析パネル**: 設定 > データ > データ分析から開き、スコア傾向・勝率・ローソク足チャートなどを確認できます。
  <sub>🙌 ご提案いただいたNGAの @AinJianke さんに感謝いたします</sub>
  ![v0.3.3 Data Analysis](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_3_K_Line.gif)

- **永続化の正式サポート**: 直近100件の対戦データを自動取得してローカルに永続保存します。再起動後もデータは失われません。設定 > システムでバックアップフォルダを設定することで、USBやクラウドを使ったバックアップも可能です。データは暗号化されており、安全に保護されます。
  <sub>🙌 ご提案いただいたQQの @宇宙最酷 さん、QQの @墨昀uuuun さん、QQの @Jesusleo さんに感謝いたします</sub>

### 改善
- **ログインフローの最適化**: ログインプロセスを最適化し、よりスムーズで安定したログイン体験を実現しました。
- **セッション復元の改善**: プレビュー版の復元機能を改善し、正式な永続化機能に対応しました。

### 削除
- **プレビュー版永続化機能の削除**: 正式な永続化機能の導入に伴い、従来のプレビュー版データ機能は不要となったため削除されました。


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
