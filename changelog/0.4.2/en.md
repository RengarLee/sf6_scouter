# 0.4.2 - 2026-06-11

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
