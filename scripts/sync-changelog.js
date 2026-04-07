/**
 * Automated Changelog Sync Script
 * Converts CHANGELOG.md (Markdown) to public-docs/web/index.html (HTML)
 * Supports: Multi-lang ([zh], [en], [ja]), Images, Thanks (🙌), Bold (**)
 */
const fs = require('fs');
const path = require('path');

// Configure paths relative to the project root (assumed to be public-docs)
const CHANGELOG_PATH = path.join(__dirname, '../CHANGELOG.md');
const INDEX_HTML_PATH = path.join(__dirname, '../index.html');
const START_MARKER = '<!-- AUTOMATED_CHANGELOG_HERE -->';

try {
  if (!fs.existsSync(CHANGELOG_PATH)) {
    console.error(`Changelog not found at ${CHANGELOG_PATH}`);
    process.exit(1);
  }
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error(`index.html not found at ${INDEX_HTML_PATH}`);
    process.exit(1);
  }

  const changelog = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  let html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');

  // Split by versions (starts with ## [version])
  const versionBlocks = changelog.split(/^## \[/m).slice(1);
  let generatedHtml = '';

  versionBlocks.forEach(block => {
    const lines = block.split('\n');
    const headerMatch = lines[0].match(/(\d+\.\d+\.\d+)\] - (\d{4}-\d{2}-\d{2})/);
    if (!headerMatch) return;

    const [_, version, date] = headerMatch;
    const formattedDate = date.replace(/-/g, '.');

    generatedHtml += '    <div class="changelog-item">\n';
    generatedHtml += '      <div class="changelog-header">\n';
    generatedHtml += '        <span class="version">v' + version + '</span>\n';
    generatedHtml += '        <span class="date">' + formattedDate + '</span>\n';
    generatedHtml += '      </div>\n';

    // Multi-language parsing
    const langMap = { 'zh': [], 'en': [], 'ja': [] };
    let currentLang = 'zh'; // Default to zh

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      if (line === '[zh]') { currentLang = 'zh'; continue; }
      if (line === '[en]') { currentLang = 'en'; continue; }
      if (line === '[ja]') { currentLang = 'ja'; continue; }

      // Handle Markdown Image Syntax: ![alt](url)
      const imageStyle = 'display:block; max-width:100%; max-height:500px; object-fit:contain; border-radius:12px; margin:20px auto; border:1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 30px rgba(0,0,0,0.4);';
      
      if (line.startsWith('- ')) {
        let itemText = line.substring(2)
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/!\[(.*?)\]\((.*?)\)/g, `<img src="$2" alt="$1" style="${imageStyle}">`);
        langMap[currentLang].push('        <li>' + itemText + '</li>');
      } 
      else if (line.includes('🙌')) {
        const list = langMap[currentLang];
        if (list.length > 0) {
          list[list.length - 1] = list[list.length - 1].replace('</li>', ' <span class="thanks">' + line + '</span></li>');
        }
      } 
      else if (line.startsWith('![')) {
        // Standalone image outside list
        const imgHtml = line.replace(/!\[(.*?)\]\((.*?)\)/g, `<img src="$2" alt="$1" style="${imageStyle}">`);
        langMap[currentLang].push('        <div style="text-align:center; width:100%;">' + imgHtml + '</div>');
      }
    }

    Object.keys(langMap).forEach(lang => {
      if (langMap[lang].length > 0) {
        generatedHtml += '      <ul class="changelog-list" data-lang="' + lang + '">\n';
        generatedHtml += langMap[lang].join('\n') + '\n';
        generatedHtml += '      </ul>\n';
      }
    });

    generatedHtml += '    </div>\n\n';
  });

  // Since we run in CI or manually, we need to reset the HTML placeholder area every time
  // to avoid duplication. We find markers: <!-- CHANGELOG_START --> and <!-- CHANGELOG_END -->
  const startMarker = '<!-- CHANGELOG_START -->';
  const endMarker = '<!-- CHANGELOG_END -->';
  
  const startIdx = html.indexOf(startMarker);
  const endIdx = html.indexOf(endMarker);

  if (startIdx !== -1 && endIdx !== -1) {
    const prefix = html.substring(0, startIdx + startMarker.length);
    const suffix = html.substring(endIdx);
    
    // We recreate the entries div with the automated content
    const middle = '\n    <div id="changelog-entries">\n' + generatedHtml + '    </div>\n    ';
    
    const newHtml = prefix + middle + suffix;
    fs.writeFileSync(INDEX_HTML_PATH, newHtml);
    console.log('Successfully updated index.html from CHANGELOG.md');
  } else {
    console.error('Markers (START/END) not found in index.html');
    process.exit(1);
  }

} catch (err) {
  console.error('Error during synchronization:', err);
  process.exit(1);
}
