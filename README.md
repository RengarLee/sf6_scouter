# <img src="./images/logo.png" alt="SF6 Scouter Logo" width="40" valign="middle"> SF6 Scouter

**SF6 Scouter** is an **all-around data analysis and smart companion** for Street Fighter 6 players and streamers. Beyond seamless **live match tracking** and **Pro overlays**, it features built-in **deep data analysis**, **OCR opponent profiling**, and an **anti-tilt assistant** to help you rank up scientifically.

> **Hover to track scores, leverage data to read opponents; win while you're hot, stop smart when tilted.**

[English] | [简体中文](./README_zh.md) | [日本語](./README_ja.md)

## Repository Scope

This repository is the **distribution repository for the runnable SF6 Scouter application**, including its website, previews, release notes, and download entry points.

- It provides the app package and related public assets.
- It does **not** contain the application source code.
- If you are here to use SF6 Scouter, check the release and download content rather than looking for a buildable source project.

## Core Features

- **Unlimited match history**: The official site only keeps your last 100 matches. SF6 Scouter accumulates every match you play — your history is never lost.
- **Real-time match tracking**: Track wins, losses, win rate, and score changes during the current session.
- **Deep data & periodic reports**: View win rate matrices, candlestick trends, matchup win rates, and weekly performance reviews.
- **VS screen OCR & opponent profiles**: Automatically identify opponents during the VS loading screen and get habit hints to support your decision-making.
- **Anti-tilt assistant**: Get smart pop-up reminders during loss streaks to protect your precious rank points.
- **LP / MR dual support**: Follow both League Points and Master Rate with clear delta display.
- **CFN account tracking**: After logging in once, track your own account or switch to other CFN IDs.
- **Mini & Pro overlays**: Choose between a compact panel or a denser layout with charts and richer information views.
- **OBS-friendly transparency**: Make it easy to use as a stream overlay.
- **Layout memory**: Restore window position, size, transparency, and related display settings automatically.
- **Built-in updater**: Receive new versions directly inside the app.

## Feature Preview

### Mini View

| LP Tracking | MR Tracking | Real-time Changes | Transparent Mode |
| :---: | :---: | :---: | :---: |
| ![LP Tracking](./images/lp.png) | ![MR Tracking](./images/mr.png) | ![Real-time Changes](./images/change.gif) | ![Transparent Mode](./images/Transparent.jpg) |

| Compact real-time tracking |
| :---: |
| ![Mini View Demo](./images/mini.gif) |

### Pro View

| Transparent Pro Overlay with Official Background | OBS-ready Stream Layout |
| :---: | :---: |
| ![Pro Panel](./images/Pro.gif) | ![Pro with OBS](./images/ProWithOBS.gif) |

| Play Data Inside Pro View | Opponent Habit Hints |
| :---: | :---: |
| ![Pro Play Data](./images/v0_3_5_Pro_PlayData.gif) | ![Opponent Habit Hints](./images/v0_3_5_user_image.jpg) |

### Data Analysis

| Score Trend Breakdown | Match and Character Insights | Weekly Report Review |
| :---: | :---: | :---: |
| ![Data Analysis K Line](./images/v0_3_3_K_Line.gif) | ![Play Data Analysis](./images/v0_3_5_PlayData.gif) | ![Weekly Report](./images/v0_3_7_Report.png) |

## How to Use

1. Download and launch `SF6 Scouter`.
2. Log in to **CFN** in the popup window.
3. Track your own account by default, or enter another **CFN ID** to inspect a different player.
4. Switch between **Mini** and **Pro** depending on your use case.
5. Open the **data analysis pages** when you need trends and deeper breakdowns.
6. Adjust transparency, layout, and display behavior as needed; the app remembers your settings.

## OBS Setup

1. Add a **Window Capture** source in OBS.
2. Select the `SF6 Scouter` window.
3. Use the **Windows 10 (1903 and up)** capture method.
4. Adjust transparency and related display settings inside the app as needed.

## Community

- **Discord**: [Join our Discord](https://discord.gg/xg93c5mmx2)
- **QQ Group**: Scan the QR code in `./images/qq.jpg`

| Discord | QQ Group |
| :---: | :---: |
| ![Discord](./images/discord.png) | ![QQ](./images/qq.jpg) |

## Safety

Released builds are checked with [VirusTotal](https://www.virustotal.com/) before distribution.

## License

This repository is licensed under **GPL-3.0**.

- **Disclaimer**: This project is not affiliated with Capcom. Use it at your own risk.
- **Distribution note**: This repository distributes the runnable application and related assets, not the application source code.
