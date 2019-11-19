import { isDef } from './util';

function checkRequired(val, rule) {
  if (isDef(rule.required) && rule.required) {
    if (!val) return false;
  }
  return true;
}
function checkLength(val, rule) {
  if (isDef(rule.len)) {
    if (val.length !== rule.len) return false;
  }
  return true;
}
function checkPattern(val, rule) {
  if (isDef(rule.pattern)) {
    if (!rule.pattern.test(val)) return false;
  }
  return true;
}

export default function validator(formdata, ruleData) {
  const series = {};
  Object.keys(formdata).forEach((name) => {
    const ruleItems = ruleData[name];
    const value = formdata[name];
    series[name] = {
      type: 'success',
    };
    if (ruleItems && ruleItems.length) {
      ruleItems.some((item) => {
        if (!checkRequired(value, item)) {
          series[name].message = item.message;
          series[name].type = 'error';
          return true;
        }
        if (!checkLength(value, item)) {
          series[name].message = item.message;
          series[name].type = 'error';
          return true;
        }
        if (!checkPattern(value, item)) {
          series[name].message = item.message;
          series[name].type = 'error';
          return true;
        }
        return false;
      });
    }
  });
  const pass = Object.values(series).every(item => item.type === 'success');
  return {
    pass,
    series,
  };
}
