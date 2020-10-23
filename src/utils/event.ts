import { objectValues } from './object';

const handlerMap: HandlerMap = {};
export const on = (type: string, handler: Handler): void => {
  if (!type || !handler) return;
  if (!handlerMap[type]) handlerMap[type] = { lastId: 0, record: {} };
  const hmi: HandlerMapItem = handlerMap[type];
  if (!handler) return;
  hmi.record[`${hmi.lastId}`] = handler;
  hmi.record[`${hmi.lastId}`][`$${type}@id`] = hmi.lastId;
  hmi.lastId += 1;
};
export const off = (type: string, handler: Handler): void => {
  if (handlerMap[type]) delete handlerMap[type].record[handler[`$${type}@id`]];
};
export const emit = (type: string, ...arg: any[]): void => {
  objectValues(handlerMap[type]?.record || {}).forEach((handler: Handler) => handler(...arg));
};
export default {
  on, off, emit,
};
