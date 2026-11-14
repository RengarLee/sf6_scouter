# 0.3.9 - 2026-05-17

### Added
- **Opponent profile display on VS screen**: Introduced OCR technology to automatically identify the opponent during the VS loading screen and attempt to display their profile, helping users quickly understand their opponent's habits and tendencies. This feature is enabled by default; the toggle is located at Settings → Data → Opponent Profile → OCR Recognition. The speed of profile display depends on the official website's request rate — slower networks may result in longer wait times.
  <sub>🙌 Special thanks to QQ @宇宙最酷 for the inspiration</sub>
  ![v0_3_9_OCR_Vs_Name](https://raw.githubusercontent.com/RengarLee/sf6_scouter/main/images/v0_3_9_OCR_Vs_Name.gif)

- **Data feedback feature**: Added a data feedback feature. The toggle is located at Settings → System → Make SF6 Scouter Smarter. Users can choose to anonymously send usage data to the developer for product optimization. This feature is enabled by default; users may toggle it according to their preference. Currently the data consists of VS screen recognition results, used to train models for improved accuracy. More data types will be added based on user feedback and needs.

### Improved
- **Optimized opponent profile logic**: Refined the logic for opponent profile retrieval to improve recognition accuracy.
