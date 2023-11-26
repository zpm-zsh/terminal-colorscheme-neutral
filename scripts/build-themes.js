const windConfig = require("../theme/settings.json");
const fs = require("fs/promises");
const Color = require("color");

const themePrefix = __dirname + "/..";

const toRGB = (hex) => {
  const colorRaw = Color(hex);
  return colorRaw.rgb().array().join(",");
};

const toRed = (hex) => {
  const colorRaw = Color(hex);
  return colorRaw.rgb().array()[0] / 255;
};

const toGreen = (hex) => {
  const colorRaw = Color(hex);
  return colorRaw.rgb().array()[1] / 255;
};

const toBlue = (hex) => {
  const colorRaw = Color(hex);
  return colorRaw.rgb().array()[2] / 255;
};

const themes = ["Neutral", "Neutral Light"];

themes.map(async (theme) => {
  const colors = windConfig[theme];

  fs.writeFile(
    themePrefix + "/theme/windows-terminal/" + theme + ".json",
    `{
    "background": "${colors?.background}",
    "black": "${colors?.black}",
    "blue": "${colors?.blue}",
    "brightBlack": "${colors?.brightBlack}",
    "brightBlue": "${colors?.brightBlue}",
    "brightCyan": "${colors?.brightCyan}",
    "brightGreen": "${colors?.brightGreen}",
    "brightPurple": "${colors?.brightPurple}",
    "brightRed": "${colors?.brightRed}",
    "brightWhite": "${colors?.brightWhite}",
    "brightYellow": "${colors?.brightYellow}",
    "cursorColor": "${colors?.cursorColor}",
    "cyan": "${colors?.cyan}",
    "foreground": "${colors?.foreground}",
    "green": "${colors?.green}",
    "name": "${theme}",
    "purple": "${colors?.purple}",
    "red": "${colors?.red}",
    "selectionBackground": "${colors?.selectionBackground}",
    "white": "${colors?.white}",
    "yellow": "${colors?.yellowd}"
}`
  );

  fs.writeFile(
    themePrefix + "/theme/tilix/" + theme + ".json",
    `{
  "background-color": "${colors?.background}",
  "foreground-color": "${colors?.foreground}",
  "badge-color": "#ffffff",
  "comment": "",
  "cursor-background-color": "${colors?.cursorColor}",
  "cursor-foreground-color": "#ffffff",
  "dim-color": "#000000",
  "highlight-background-color": "${colors?.selectionBackground}",
  "highlight-foreground-color": "#D9DFE3",
  "name": "${theme}",
  "palette": [
    "${colors?.black}",
    "${colors?.red}",
    "${colors?.green}",
    "${colors?.yellow}",
    "${colors?.blue}",
    "${colors?.purple}",
    "${colors?.cyan}",
    "${colors?.white}",
    "${colors?.brightBlack}",
    "${colors?.brightRed}",
    "${colors?.brightGreen}",
    "${colors?.brightYellow}",
    "${colors?.brightBlue}",
    "${colors?.brightPurple}",
    "${colors?.brightCyan}",
    "${colors?.brightWhite}"
  ],
  "use-badge-color": true,
  "use-cursor-color": true,
  "use-dim-color": false,
  "use-highlight-color": false,
  "use-theme-colors": false
}
`
  );

  fs.writeFile(
    themePrefix + "/theme/vscode/" + theme + ".json",
    `
{
  "workbench.colorCustomizations": {
    "terminal.background":"${colors?.background}",
    "terminal.foreground":"${colors?.foreground}",
    "terminal.ansiBlack":"${colors?.black}",
    "terminal.ansiRed":"${colors?.red}",
    "terminal.ansiYellow":"${colors?.yellow}",
    "terminal.ansiGreen":"${colors?.green}",
    "terminal.ansiCyan":"${colors?.cyan}",
    "terminal.ansiBlue":"${colors?.blue}",
    "terminal.ansiMagenta":"${colors?.purple}",
    "terminal.ansiWhite":"${colors?.white}",

    "terminal.ansiBrightBlack":"${colors?.brightBlack}",
    "terminal.ansiBrightRed":"${colors?.brightRed}",
    "terminal.ansiBrightYellow":"${colors?.brightYellow}",
    "terminal.ansiBrightGreen":"${colors?.brightGreen}",
    "terminal.ansiBrightCyan":"${colors?.brightCyan}",
    "terminal.ansiBrightBlue":"${colors?.brightBlue}",
    "terminal.ansiBrightMagenta":"${colors?.brightPurple}",
    "terminal.ansiBrightWhite":"${colors?.brightWhite}"
  },
  "terminal.integrated.minimumContrastRatio": 1,
}
`
  );

  fs.writeFile(
    themePrefix + "/theme/termux/" + theme + ".properties",
    `
background : ${colors?.background}
foreground : ${colors?.foreground}
cursor     : ${colors?.cursorColor}

color0     : ${colors?.black}
color1     : ${colors?.red}
color2     : ${colors?.green}
color3     : ${colors?.yellow}
color4     : ${colors?.blue}
color5     : ${colors?.purple}
color6     : ${colors?.cyan}
color7     : ${colors?.white}
color8     : ${colors?.brightBlack}
color9     : ${colors?.brightRed}
color10    : ${colors?.brightGreen}
color11    : ${colors?.brightYellow}
color12    : ${colors?.brightBlue}
color13    : ${colors?.brightPurple}
color14    : ${colors?.brightCyan}
color15    : ${colors?.brightWhite}
`
  );

  // Konsole
  fs.writeFile(
    themePrefix + "/theme/konsole/" + theme + ".colorscheme",
    `

    [Background]
    Color=${toRGB(colors?.background)}

    [BackgroundFaint]
    Color=${toRGB(colors?.background)}

    [BackgroundIntense]
    Color=${toRGB(colors?.background)}

    [Color0]
    Color=${toRGB(colors?.black)}

    [Color0Faint]
    Color=${toRGB(colors?.black)}

    [Color0Intense]
    Color=${toRGB(colors?.brightBlack)}

    [Color1]
    Color=${toRGB(colors?.red)}

    [Color1Faint]
    Color=${toRGB(colors?.red)}

    [Color1Intense]
    Color=${toRGB(colors?.brightRed)}

    [Color2]
    Color=${toRGB(colors?.green)}

    [Color2Faint]
    Color=${toRGB(colors?.green)}

    [Color2Intense]
    Color=${toRGB(colors?.brightGreen)}

    [Color3]
    Color=${toRGB(colors?.yellow)}

    [Color3Faint]
    Color=${toRGB(colors?.yellow)}

    [Color3Intense]
    Color=${toRGB(colors?.brightYellow)}

    [Color4]
    Color=${toRGB(colors?.blue)}

    [Color4Faint]
    Color=${toRGB(colors?.blue)}

    [Color4Intense]
    Color=${toRGB(colors?.brightBlue)}

    [Color5]
    Color=${toRGB(colors?.purple)}

    [Color5Faint]
    Color=${toRGB(colors?.purple)}

    [Color5Intense]
    Color=${toRGB(colors?.brightPurple)}

    [Color6]
    Color=${toRGB(colors?.cyan)}

    [Color6Faint]
    Color=${toRGB(colors?.cyan)}

    [Color6Intense]
    Color=${toRGB(colors?.brightCyan)}

    [Color7]
    Color=${toRGB(colors?.white)}

    [Color7Faint]
    Color=${toRGB(colors?.white)}

    [Color7Intense]
    Color=${toRGB(colors?.brightWhite)}

    [Foreground]
    Color=${toRGB(colors?.foreground)}

    [ForegroundFaint]
    Color=${toRGB(colors?.foreground)}

    [ForegroundIntense]
    Color=${toRGB(colors?.foreground)}

    [General]
    Anchor=0.5,0.5
    Blur=false
    ColorRandomization=false
    Description=${theme}
    FillStyle=Tile
    Opacity=1
    Wallpaper=
    WallpaperFlipType=NoFlip
    WallpaperOpacity=1
`
  );

  const rgbToApple = (rgbColor, padding = 4) => {
    return `${" ".repeat(padding)}<dict>
${" ".repeat(padding)}  <key>Color Space</key>
${" ".repeat(padding)}  <string>sRGB</string>
${" ".repeat(padding)}  <key>Alpha Component</key>
${" ".repeat(padding)}  <real>1</real>
${" ".repeat(padding)}  <key>Red Component</key>
${" ".repeat(padding)}  <real>${toRed(rgbColor)}</real>
${" ".repeat(padding)}  <key>Green Component</key>
${" ".repeat(padding)}  <real>${toGreen(rgbColor)}</real>
${" ".repeat(padding)}  <key>Blue Component</key>
${" ".repeat(padding)}  <real>${toBlue(rgbColor)}</real>
${" ".repeat(padding)}</dict>`;
  };

  // Iterm2
  fs.writeFile(
    themePrefix + "/theme/iterm/" + theme + ".itermcolors",
    `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Ansi 0 Color</key>
${rgbToApple(colors?.black)}

    <key>Ansi 1 Color</key>
${rgbToApple(colors?.red)}

    <key>Ansi 2 Color</key>
${rgbToApple(colors?.green)}

    <key>Ansi 3 Color</key>
${rgbToApple(colors?.yellow)}

    <key>Ansi 4 Color</key>
${rgbToApple(colors?.blue)}

    <key>Ansi 5 Color</key>
${rgbToApple(colors?.purple)}

    <key>Ansi 6 Color</key>
${rgbToApple(colors?.cyan)}

    <key>Ansi 7 Color</key>
${rgbToApple(colors?.white)}

    <key>Ansi 8 Color</key>
${rgbToApple(colors?.brightBlack)}

    <key>Ansi 9 Color</key>
${rgbToApple(colors?.brightRed)}

    <key>Ansi 10 Color</key>
${rgbToApple(colors?.brightGreen)}

    <key>Ansi 11 Color</key>
${rgbToApple(colors?.brightYellow)}

    <key>Ansi 12 Color</key>
${rgbToApple(colors?.brightBlue)}

    <key>Ansi 13 Color</key>
${rgbToApple(colors?.brightPurple)}

    <key>Ansi 14 Color</key>
${rgbToApple(colors?.brightCyan)}

    <key>Ansi 15 Color</key>
${rgbToApple(colors?.brightWhite)}

    <key>Background Color</key>
${rgbToApple(colors?.background)}

    <key>Badge Color</key>
${rgbToApple(colors?.yellow)}

    <key>Bold Color</key>
${rgbToApple(colors?.foreground)}

    <key>Cursor Color</key>
${rgbToApple(colors?.cursorColor)}

    <key>Cursor Guide Color</key>
${rgbToApple(colors?.yellow)}

    <key>Cursor Text Color</key>
${rgbToApple(colors?.foreground)}

    <key>Foreground Color</key>
${rgbToApple(colors?.foreground)}

    <key>Link Color</key>
${rgbToApple(colors?.blue)}

    <key>Selected Text Color</key>
${rgbToApple(colors?.foreground)}

    <key>Selection Color</key>
${rgbToApple(colors?.selectionBackground)}

    <key>Tab Color</key>
${rgbToApple(colors?.brightRed)}
  </dict>
</plist>
    `
  );
});
