export function createEl(element, cls, text) {
  const element = document.createElement(element);
  if(cls) element.classList.add(cls);
  if(text) element.textContent = text;
  return element;
}