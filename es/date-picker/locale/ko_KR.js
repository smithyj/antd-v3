function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import CalendarLocale from "rc-calendar/es/locale/ko_KR";
import TimePickerLocale from '../../time-picker/locale/ko_KR'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: '날짜 선택',
    rangePlaceholder: ['시작일', '종료일']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/antd-v3-design/antd-v3-design/blob/master/components/date-picker/locale/example.json

export default locale;
