export async function getIcon(whichIcon) {
  const module = await import(`./icons/${whichIcon}.svg`);
  return module.default;
}
