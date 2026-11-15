# 0.5.2 - 2026-10-05

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
