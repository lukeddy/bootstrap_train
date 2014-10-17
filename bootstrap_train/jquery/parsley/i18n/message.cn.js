// ParsleyConfig definition if not already set
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};

// Define then the messages
window.ParsleyConfig.i18n.cn = $.extend(window.ParsleyConfig.i18n.cn || {}, {
  defaultMessage: "输入的值不符合要求",
  type: {
    email:        "邮箱格式不对.",
    url:          "URL地址不符合要求",
    number:       "请输入数字",
    integer:      "请输入整数.",
    digits:       "只能输入数字",
    alphanum:     "只能为字母跟数字."
  },
  notblank:       "不能为空",
  required:       "必须输入项.",
  pattern:        "输入的值无效",
  min:            "输入的值应该大于等于 %s.",
  max:            "输入的值应该小于等于 %s.",
  range:          "值应该在 %s 与 %s 之内.",
  minlength:      "值太短. 至少 %s 个字符.",
  maxlength:      "值太长. 最多 %s 个字符.",
  length:         "值长度无效. 应该在 %s 与 %s 之间.",
  mincheck:       "至少选择 %s 项.",
  maxcheck:       "最大选择 %s 项.",
  check:          "必须选择 %s 与 %s 之间的项.",
  equalto:        "密码不匹配."
});

// If file is loaded after Parsley main file, auto-load locale
if ('undefined' !== typeof window.ParsleyValidator)
  window.ParsleyValidator.addCatalog('cn', window.ParsleyConfig.i18n.cn, true);
