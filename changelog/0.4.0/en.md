# 0.4.0 - 2026-06-03

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
