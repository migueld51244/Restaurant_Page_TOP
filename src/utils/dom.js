export function createEl(el, {cls, text, attrs} = {}) {
  const element = document.createElement(el);
  if(cls) element.classList.add(cls);
  if(text) element.textContent = text;
  if(attrs) Object.entries(attrs).forEach(([k, v]) => {
    element.setAttribute(k, v);
  })
  return element;
}