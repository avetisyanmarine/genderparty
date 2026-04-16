export async function preloadFonts() {
  const fonts = [
    new FontFace("", 'url(/font/Vrdznagir.woff2) format("woff2")', {
      style: "normal",
      weight: "400",
    }),
    new FontFace(
      "englishFont",
      'url(/font/HerrVonMuellerhoff-Regular.tff) format("ttf")',
      { style: "normal", weight: "400" },
    ),
  ];

  await Promise.all(
    fonts.map((font) =>
      font.load().then((loadedFont) => document.fonts.add(loadedFont)),
    ),
  );
}
