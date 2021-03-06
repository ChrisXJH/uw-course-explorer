export const ENV = 'prod';

export const SERVER_URL = 'https://uw-course-explorer.herokuapp.com';

export const CONFIG_SERVER_URL =
  'https://raw.githubusercontent.com/ChrisXJH/config-server/master/uw_course_explorer';

export const FEATURE_FLAG_SERVER_URL =
  'https://raw.githubusercontent.com/ChrisXJH/config-server/master/uw_course_explorer/feature_flags/prod.json';

export const FACEBOOK_APP_ID = 507086496600584;

export const GA_TRACKING_ID = 'UA-112067320-3';

export const configList = [
  {
    key: 'popularSubjects',
    url: `${CONFIG_SERVER_URL}/subjects/popular_subjects.json`
  }
];
