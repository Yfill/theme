export const createStyleItem = (
  instance: StyleInterface,
  id: string,
): StyleItem => {
  const createStyleEl = ():HTMLElement => {
    const target = document.createElement('style');
    target.innerText = instance.exportStyle();
    target.setAttribute('theme-item', id);
    return target;
  };

  const init = () => {
    const themeStyleWrap = document.head;
    if (themeStyleWrap.querySelector(`[theme-item="${id}"]`)) return;
    const el = createStyleEl();
    if (instance.addEvent) instance.addEvent();
    themeStyleWrap.appendChild(el);
  };

  const destroy = () => {
    const themeStyleWrap = document.head;
    const el = themeStyleWrap.querySelector(`[theme-item="${id}"]`);
    if (instance.removeEvent) instance.removeEvent();
    if (el) themeStyleWrap.removeChild(el);
  };

  return {
    id,
    init,
    destroy,
  };
};
export default {
  createStyleItem,
};
