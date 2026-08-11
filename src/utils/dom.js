export function createEl(el, cls, text) {
  const element = document.createElement(el);
  if(cls) element.classList.add(cls);
  if(text) element.textContent = text;
  return element;
}