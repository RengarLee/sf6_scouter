# Changelog

[English] | [简体中文](./CHANGELOG_zh.md) | [日本語](./CHANGELOG_ja.md)

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.3] - 2026-10-14

### Added
- **New Character: Arjun**: Added character portraits, a full-body illustration, and a dedicated color theme. Arjun is now included in the random character pool.

## [0.5.2] - 2026-10-05

### Added
- **Replay History and a Detail Drawer**: Browse analyses submitted or successfully viewed on this device. Search by player name, CFN, or replay ID, and filter by character or status. Unfinished tasks update in the background; click a record to open its details in a side drawer.
  <sub>🙌 Special thanks to 焕冥 for the suggestion</sub>
  ![Replay analysis history](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0.5.2/replay-history.png)
- **Replay Analysis Shortcuts**: Right-click a match in Battle Records or Favorite Matches to open its replay analysis directly.
  <sub>🙌 Special thanks to QQ 焕冥 and QQ 痛饮三杯 for the suggestions</sub>
- **Export Replay Analysis Data**: Open the analysis details, choose “Export replay analysis data” under “Status”, and save a Markdown file containing match data and a review prompt for your preferred AI.
  <sub>🙌 Special thanks to QQ 痛饮三杯 for the suggestion</sub>
  ![Replay analysis data export](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0.5.2/ai-export.png)

- **Damage-Prioritized Improvement Suggestions**: The match overview now highlights review priorities based on recorded issues such as missed anti-airs, unsafe attacks being punished, Drive Impact interactions, counter-hit challenges, and whiff punishes. Suggestions prioritize associated damage to help you choose what to practice first.

- **Sponsorship Links**: Find links in System settings to support continued development of SF6Scouter.
### Improved

- **More Detailed Opener and Damage Analysis**: Added statistics for opponents’ opening moves. Nearby events now show the victim’s remaining health after the damage sequence ends.
  ![Match review and improvement suggestions](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0.5.2/replay-review.png)
  <sub>🙌 Special thanks to QQ 悠哈, QQ 太简单, QQ 无道, and QQ 此路<-不通 for the suggestions</sub>
- **Explore Individual Matches from the Rating Trend**: MR/LP charts retain their overview curve and show opponent portraits when zoomed in far enough, with green/red borders for wins/losses. The match list below follows the visible range. Zoom in, zoom out, return to the overview, drag to select a range, or hold Ctrl while dragging or scrolling to pan. Finer numeric scales in the individual-match view make small changes easier to see.
  <sub>🙌 Special thanks to QQ balance for the suggestion</sub>
  ![Individual matches linked to the rating trend](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0.5.2/trend-matches.png)

- **Clearer Match Records**: Battle Records, Favorite Matches, and replay history now share two-line player information and consistent result indicators. Filters and headers remain visible while Battle Records and Favorite Matches scroll within their tables.

## [0.5.1] - 2026-09-25

### Fixed
- **Background Windows Taking Game Focus**: Fixed an issue where background data fetching, rank information syncing, or connectivity checks could take focus away from the game and interrupt gameplay.
  <sub>🙌 Special thanks to QQ www.TH.zz for the feedback</sub>

## [0.5.0] - 2026-09-24

### Added
- **Cloud Replay Analysis**: Enter a replay ID in “Replay Analysis” under Home to load an existing analysis or request a new one. You can also right-click a match in Battle Records or Favorite Matches and select “Replay Analysis” to open it directly.
  ![v0_5_0_Replayer](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_5_0_Replayer.gif)

- **Match Review Overview**: Review round results, damage-taken events, and combo damage distributions in one place. Relative impact ratings based on event frequency and accumulated damage help you prioritize your review. Filter the watchlist by issue and click a record to jump to its round.

- **Interactive Round Timeline**: View both players’ health, Drive Gauge, and stage position alongside damage-taken events, combo damage, and hit counts. Click a chart or record to locate a moment and inspect nearby events. Focus on 1P or 2P and review each round with statistics such as anti-air rate, throw escapes, and time in the corner.

- **Analysis Progress and Quota**: Check task progress under “Status”; results appear automatically when ready, and failed tasks can be retried. Each device allows up to 10 manual analysis submissions per hour, with the quota resetting at the start of each hour. Querying and viewing existing results do not use this quota.

### Special Thanks
- 🙌 Special thanks to QQ 悠哈, QQ 太简单, QQ 冥, QQ 无道, and everyone in the “SF Scouter 战绩面板内测群” QQ beta-testing group for their patient answers and inspiring ideas.
- 🙌 Thanks to the [SF6_Tools](https://github.com/Wael3rd/SF6_Tools) ([Nexus Mods](https://www.nexusmods.com/streetfighter6/mods/3173)), [sf6_re_scripts](https://github.com/lucasteles/sf6_re_scripts), and [SF6Mods](https://github.com/WistfulHopes/SF6Mods) projects for the inspiration.

## [0.4.9] - 2026-09-22

### Added
- **Automatic Login Status Checks and Error Messages**: The app now checks login status automatically and displays an error message if the check encounters a problem, making login issues easier to identify.

### Improved
- **Clearer Wording for Resetting Tracked Scores**: Revised the messages related to resetting tracked scores to clarify what the action does.

### Fixed
- **Game Focus After Extended Play**: Fixed an issue where SF6Scouter could take focus away from the game after about an hour of play, interrupting gameplay.
  <sub>🙌 Special thanks to QQ 此路<-不通 for the feedback</sub>
- **Review Tags Blocking Clicks**: Fixed an issue where review tags could cover other parts of the window and block clicks in those areas.
  <sub>🙌 Special thanks to QQ 焕冥 for the feedback</sub>
- **Window Closing Issue**: Fixed an issue where a window would not close properly.
  <sub>🙌 Special thanks to QQ 啊？ for the feedback</sub>

## [0.4.8] - 2026-08-04

### Added
- **Favorite Battle Records and Review Markers**: Added support for favoriting battle records. You can favorite a battle record directly from the review-tag popup or by right-clicking it in the battle record list. Favorited records are available on the “Favorite Matches” page under Home.
  <sub>🙌 Special thanks to QQ 焕冥 for the suggestion</sub>
- **Yasmine Support**: Added support for displaying Yasmine’s data and image.

### Fixed
- **OCR Settings Not Applied on First Launch**: Fixed an issue where OCR settings were not applied correctly when the app was launched for the first time.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for the feedback</sub>

## [0.4.7] - 2026-07-23

### Fixed
- **Fixed Pro and Mini Panels Not Closing**: Resolved an issue where the Pro and Mini panels could not be closed, and closing them left a transparent border.
  <sub>🙌 Special thanks to QQ 马肯博 and QQ 啊？ for the feedback</sub>

## [0.4.6] - 2026-07-21

### Fixed
- **Fixed Popups Stealing Game Focus**: Resolved an issue where popup windows could unexpectedly steal focus from the game, interrupting gameplay.
  <sub>🙌 Special thanks to QQ 木慕水 for helping with testing</sub>
  <sub>🙌 Special thanks to QQ 太简单, QQ tainanle, QQ Raising, QQ 水蓝蓝, and WeChat 且胆行 for the feedback</sub>

## [0.4.5] - 2026-07-09

### Improved
- **Rank Text Added to Trend Charts**: LP trend charts now show the corresponding rank text on the Y-axis, making it easier to understand your current rank bracket while reading score trends.
  <sub>🙌 Special thanks to QQ Kano, QQ 宇宙最酷, and QQ 啊？ for the feedback</sub>

- **Trend Charts Now Count Ranked Matches Only**: Trend charts now only include ranked-match data, avoiding noise from non-ranked matches.
  <sub>🙌 Special thanks to NGA 贫穷的吸血鬼 for the feedback</sub>

- **Tilt Reminder Now Uses a Dedicated Window**: The tilt-prevention reminder is now shown in a separate window, making it more noticeable and harder to miss. It can still be disabled in "Settings - Data" if you do not need it.
  <sub>🙌 Special thanks to QQ 键 and QQ 游历群星 for the feedback</sub>

- **Improved Update Prompt and Flow**: Refined the update messaging and interaction flow. Clicking update now shows the release notes first, so users can review the changes before deciding whether to continue.
  <sub>🙌 Special thanks to QQ 此路<-不通 for the feedback</sub>

- **Lower Memory Usage While Idle**: Further optimized memory management so the app keeps a steadier and more reasonable memory footprint when idle.
  <sub>🙌 Special thanks to QQ 此路<-不通 for the feedback</sub>

- **New Review Tag**: Added the "Button Mashing" review tag.
  <sub>🙌 Special thanks to QQ 啊？ for the feedback</sub>

## [0.4.4] - 2026-06-29

### Fixed
- **Fixed mode option display errors in battle records and win rate report**: Fixed incorrect mode info display in battle records and incorrect mode dropdown options in the win rate report.
  <sub>🙌 Special thanks to NGA langxiankui for the feedback</sub>

## [0.4.3] - 2026-06-28

### Added
- **Win Rate Report Panel**: Added a new win rate report page to view battle data across different modes and key KPIs (win rate, match count, win/loss streak records, and more).
  <sub>🙌 Special thanks to QQ 焕冥 for the feedback</sub>
  ![v0_4_3_Rate](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_3_Rate.gif)

- **Battle Record Filters**: Added multiple filter options to help users quickly find specific battle records.
  ![v0_4_3_Records](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_3_Records.gif)

- **Battle Record Review Tags**: Right-click any match in the battle record table to directly add a review tag.
  <sub>🙌 Special thanks to QQ 宇宙最酷, QQ 林无穷, and QQ 觿子 for the inspiration</sub>
  ![v0_4_3_Tag](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_3_Tag.gif)

- **Quick Tag Access in Match Detail Drawer**: The match detail drawer now shows the top 5 most-used review tags. Click one to instantly filter matches with that tag.
  ![v0_4_3_Tag_Filter](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_3_Tag_Filter.gif)

- **Manual Sync for Battle History**: Added a manual sync entry in the top-right corner of the battle record table to sync historical battle records and view sync status.
  <sub>🙌 Special thanks to QQ 浅海 for the feedback</sub>
  ![v0_4_3_Load](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_3_Load.gif)

### Improved
- **New Review Tags**: Added two new review tags: "Always Grabbed" and "No Reaction to Drive Impact".
  <sub>🙌 Special thanks to NGA 智障的最高境界, NGA langxiankui, and QQ K丶越 for the feedback</sub>

### Fixed
- **Fixed Drawer Always Expanded When Reduce Motion is Enabled on Windows 10**: Resolved an issue where the side drawer remained expanded when the system's "Reduce Motion Effects" option was enabled.
  <sub>🙌 Special thanks to QQ 泠㳕 for the feedback</sub>
- **Fixed Review Prompt Always Expanded**: The review prompt can now be correctly dismissed based on configuration.
  <sub>🙌 Special thanks to QQ 此路<-不通 for the feedback</sub>

## [0.4.2] - 2026-06-11

### Added
- **Ranked BO3 Quick Review**: When you lose a complete Ranked BO3 match, a tag window will automatically pop up for a quick and simple post-match review. The collected review tags will be summarized in periodic reports to help you analyze your matches. This feature can be disabled in "Settings - Data - Match Review Prompt".
  <sub>🙌 Special thanks to QQ 宇宙最酷, QQ 林无穷, and QQ 觿子 for the inspiration</sub>
  ![v0_4_1_Tags](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_2_Tags.png)
  ![v0_4_1_Tags](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_2_Tags_Show.png)
- **Tracking Target History**: The app will now automatically remember your recently entered tracking targets (up to 5). You can directly click to select them for future inputs, eliminating the need to repeatedly enter CFN IDs.
  <sub>🙌 Special thanks to QQ 游历群星 and QQ 焕冥 for the feedback</sub>

- **Tilt-Prevention Reminder Toggle**: Added a toggle for the tilt-prevention reminder in "Settings - Data", allowing users to freely enable or disable this feature as needed.
  <sub>🙌 Special thanks to 小黑盒 糖泥呵 for the suggestion</sub>

### Improved
- **Single App Instance Limit**: Restricted the application to run only a single instance, preventing performance issues and poor user experience caused by accidentally opening multiple instances.
  <sub>🙌 Special thanks to QQ …… and QQ 浅海 for the feedback</sub>

- **Memory Usage Optimization**: Deeply optimized memory management to prevent abnormal memory usage increases in certain scenarios.
  <sub>🙌 Special thanks to QQ 此路<-不通 for the feedback</sub>

- **Data Sharing Optimization**: Streamlined data upload logic to effectively reduce network requests and resource consumption.

### Fixed
- **Fixed Backup File Loading**: Resolved an issue where backup files could fail to load under certain conditions.
  <sub>🙌 Special thanks to QQ 浅海 for the feedback</sub>

## [0.4.1] - 2026-06-10

### Added

- **Match win rate in Play Data**: In "Home-Play Data", click on a specific character to view their win rate against other characters.
  ![v0_4_1_WinRate](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_1_WinRate.gif)

- **New network connection test**: Added a network test feature in "Settings-Account" to check connection quality to the official website and help diagnose network issues.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for the suggestion</sub>

- **Home page zoom support**: Users can now use `Ctrl + Scroll wheel` to zoom the page in or out, enhancing the interaction experience.
  <sub>🙌 Special thanks to QQ 此路<-不通 for the suggestion</sub>
  ![v0_4_1_Zoom](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_1_Zoom.gif)

- **New random character recommendation**: Click the "Random Character" button in "Home-Others" to get a recommendation. Each character has an equal probability, unlike the official website's logic which prioritizes characters with fewer matches.
  <sub>🙌 Special thanks to QQ 王小川 for the suggestion</sub>
  ![v0_4_1_Random](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_1_Random.gif)

### Improved

- **Custom time range for periodic reports**: Supports custom time range searches to meet various query needs (maximum 30 days per query).
  <sub>🙌 Special thanks to NGA 智障的最高境界 and QQ 浅海 for the feedback</sub>
  ![v0_4_1_Time](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_1_Time.gif)

- **DPI adaptation optimization**: Improved display on high DPI screens to ensure UI elements are clear and layouts are proper.
  <sub>🙌 Special thanks to QQ Kano for the feedback</sub>

- **Home page choice memory**: The sidebar now remembers the last selected option to avoid repetitive selections and improve user experience.
  <sub>🙌 Special thanks to QQ 浅海 and QQ❄ for the suggestion</sub>

### Fixed
- **Fixed empty character list in tracking starting point**: Resolved an issue where the tracking starting point character list could be empty under certain conditions.
  <sub>🙌 Special thanks to QQ w158 for the feedback</sub>

## [0.4.0] - 2026-06-03

### Added

- **Anti-tilt assistant**: When users lose several matches in a short period, the app shows a reminder window suggesting a short break to avoid tilt-driven rank loss.
  <sub>🙌 Special thanks to QQ 看不腻的唐, QQ 第一百零五天, QQ 踢, and QQ 绯木 for their suggestions</sub>

- **Auto-show view on game launch**: When the game is detected as running, the app can automatically open the Mini or Pro view, reducing manual steps. Users can disable this behavior from Settings > System > App Behavior.
  <sub>🙌 Special thanks to QQ Kano for the inspiration</sub>
    ![v0_4_0_Auto_Start](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_0_Auto_Start.gif)
    ![v0_4_0_Auto_End](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_0_Auto_End.gif)

- **System tray support**: After launch, the app can minimize to the system tray. Users can right-click the tray icon to quickly open the main window, Mini panel, Pro panel, or exit the app.

- **Launch on startup**: Users can enable launch-on-startup from Settings > System. Once enabled, the app will run automatically when the system starts, with no manual launch required.

### Improved

- **Improved window interaction flow**: Introduced a home window that consolidates and optimizes the previous window behavior, improving the overall user experience. The home window is now the main entry point after users open the app, providing clearer access to features. Window switching logic has also been refined so moving between modules feels smoother and more natural.
  <sub>🙌 Special thanks to QQ aaa 乐 for the feedback</sub>
![v0_4_0_Home](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_4_0_Home.gif)

- **Optimized proxy downloads**: Improved proxy download behavior on the official website and in the app, increasing download speed and stability so users can download the app faster and more reliably.
  <sub>🙌 Special thanks to QQ 风, QQ 宇宙最酷, QQ 蠹, QQ 林无穷, WeChat kumoito, and WeChat HENRY for their feedback</sub>

- **Periodic reports now support latest scores**: Score information in periodic reports now supports the user's latest current score, making it easier to understand current score status and trends accurately.
  <sub>🙌 Special thanks to QQ 宇宙最酷, NGA 智障的最高境界, and 小黑盒 Art0r1as for their feedback</sub>

- **Expanded "Make SF6 Scouter Smarter" content**: When the "Make SF6 Scouter Smarter" toggle is enabled, player play data will be uploaded for future feature development.

### Fixed
- **App not fully exiting after closing the window**: Fixed an issue where the app could continue running in the background after the window was closed, ensuring resources are released when users close the app.
  <sub>🙌 Special thanks to QQ 宇宙最酷 and GitHub Yuck1125 for their feedback</sub>

### Removed
- **Removed settings entry points from Mini and Pro windows**: To simplify the interface, the settings entry points in the Mini and Pro windows have been removed. The settings entry is now located in the lower-left corner of the home window.

## [0.3.11] - 2026-05-22

### Added

- **Win rate by rank segment in battle details**: Added win rates against opponents of different LP gaps and different rank segments in the Weekly Report → Battle Details screen. Users can now intuitively understand their performance against opponents of varying LP differences and rank tiers. A week-over-week win rate comparison is also shown to help users track their trend. A summary with actionable insights is provided to help users better understand the data.
  ![v0_3_11_Rate](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_11_Rate.gif)
  <sub>🙌 Special thanks to QQ 看不腻的唐, QQ 宇宙最强, and QQ 绯木 for their suggestions</sub>

- **Win rate info in Play Data screen**: Added win rate and match count information to the Play Data screen, giving users a clearer picture of their opponents' game performance.
  ![v0_3_11_Play_Data_Rate](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_11_Play_Data_Rate.png)

- **K-line chart color toggle**: Users can now switch between two color schemes on the K-line chart page — green for gains / red for losses, or red for gains / green for losses.
  <sub>🙌 Special thanks to QQ 觿子 for the suggestion</sub>

- **Borderless transparent mode**: Users can enable borderless transparent mode in Settings → Appearance. When enabled, the panel becomes borderless and transparent, providing a more seamless overlay experience.
  <sub>🙌 Special thanks to WeChat Zn4n and WeChat Naoto for their suggestions</sub>
  ![v0_3_11_Fully_Transparent](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_11_Fully_Transparent.png)

- **Enhanced "Make SF6 Scouter Smarter" feature**: When the "Make SF6 Scouter Smarter" toggle is enabled, the current battle record will now also be uploaded for OCR model training, improving model accuracy and adaptability in preparation for future features.

### Removed
- **Removed score change info from the battle matrix in periodic reports**: Based on user feedback, the score change information in the battle matrix was not meaningful and has been removed.
  <sub>🙌 Special thanks to QQ绯木 and QQ @宇宙最酷 for their feedback</sub>

## [0.3.10] - 2026-05-17

### Improved

- **Adjusted Data Feedback Sampling**: Adjusted the data feedback sampling rate.

## [0.3.9] - 2026-05-17

### Added
- **Opponent profile display on VS screen**: Introduced OCR technology to automatically identify the opponent during the VS loading screen and attempt to display their profile, helping users quickly understand their opponent's habits and tendencies. This feature is enabled by default; the toggle is located at Settings → Data → Opponent Profile → OCR Recognition. The speed of profile display depends on the official website's request rate — slower networks may result in longer wait times.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the inspiration</sub>
  ![v0_3_9_OCR_Vs_Name](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_9_OCR_Vs_Name.gif)

- **Data feedback feature**: Added a data feedback feature. The toggle is located at Settings → System → Make SF6 Scouter Smarter. Users can choose to anonymously send usage data to the developer for product optimization. This feature is enabled by default; users may toggle it according to their preference. Currently the data consists of VS screen recognition results, used to train models for improved accuracy. More data types will be added based on user feedback and needs.

### Improved
- **Optimized opponent profile logic**: Refined the logic for opponent profile retrieval to improve recognition accuracy.

## [0.3.8] - 2026-05-07

### Improved
- **Unranked Character Rank Display**: Characters without a placement rank are now shown as Challenger, improving the user experience.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for the suggestion</sub>

## [0.3.7] - 2026-05-06

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

## [0.3.6] - 2026-04-26

### Added
- **New Pro Layout Feature**: Users can now fully customize the display of each module in the Pro view from Settings > Pro Layout, save their layout, and restore it with one click.
  <sub>🙌 Special thanks to QQ memory, QQ 宇宙最酷 for the suggestion</sub>
  ![v0.3.6 Pro Layout](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_6_Pro_Layout.gif)

- **Configurable Opponent Profile Hint Duration**: Users can now adjust how long opponent profile hints stay visible from Settings > Data Settings.
 <sub>🙌 Special thanks to QQ Hinako for the suggestion</sub>

### Improved
- **Pro View Popup Positioning**: Improved the popup positioning in the Pro view for more reasonable display and to avoid covering main content.
  <sub>🙌 Special thanks to QQ 宇宙最酷 for the suggestion</sub>

## [0.3.5] - 2026-04-23

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

## [0.3.4] - 2026-04-18

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

## [0.3.3] - 2026-04-16

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

## [0.3.2] - 2026-04-11

### Fixed
- **Chart Rendering Issues on Unstable Networks**: Fixed an issue where incorrect tracking calculations under poor network conditions caused chart rendering anomalies.
  <sub>🙌 Special thanks to QQ @宇宙最酷 and QQ @Jesusleo for the feedback</sub>

### Improved
- **Added Multiple Retries for Official API Requests**: Increased data fetch success rate when network connectivity is unstable.

## [0.3.1] - 2026-04-10

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

## [0.3.0] - 2026-04-08

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

## [0.2.3] - 2026-04-07

### Added
- **Auto Switch LP/MR**: Automatically switch between LP and MR display based on whether the current character is a Master。
  <sub>🙌 Special thanks to NGA @AinJianke and QQ @宇宙最酷 for suggestions</sub>
  <sub>🙌 Special thanks to QQ user @宇宙最酷 for testing</sub>

## [0.2.2] - 2026-04-06

### Fixed
- **Fix**: Resolved the issue where LP and MR data tracking failed for characters Akuma, Bison, and Honda.
  <sub>🙌 Special thanks to QQ users @balance and @宇宙最酷 for their feedback and testing</sub>

## [0.2.1] - 2026-04-03

### Added
- **Cross-Tracking**: You can now track other players' IDs after logging in.
  <sub>🙌 Special thanks to NGA user 丧心病狂 of Recall for the suggestions</sub>

- **Pro Panel**: New statistics dashboard featuring line charts to visualize your score trends (LP/MR).
  <sub>🙌 Special thanks to NGA users gjf779, 丧心病狂 of Recall, AinJianke for the suggestions</sub>

- **Smart Config**: The app now remembers your window configuration, automatically restoring to its exact last closed position and size upon reopening.
  <sub>🙌 Special thanks to NGA user 就会玩治疗 for the suggestions</sub>

- **Visual Polish**: Added smooth number scrolling animation effects for data updates.

## [0.1.35] - 2026-03-29

### Improved
- Refactor code structure for improved readability and maintainability.
- Minor UI adjustments and bug fixes.
