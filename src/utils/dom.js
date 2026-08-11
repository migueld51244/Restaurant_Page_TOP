export function createEl(el, cls, text) {
  const element = document.createElement(el);
  if(cls) el.classList.add(cls);
  if(text) el.textContent = text;
  return el;
}