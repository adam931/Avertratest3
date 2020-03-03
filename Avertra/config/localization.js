const languages = {
  en: {
    login: 'Login',
    dashboard: 'Dashboard',
    profile: 'Profile',
  },
  ar: {
    login: 'تسجيل الدخول',
    dashboard: 'قائمة المستخدم',
    profile: 'الملف الشخصي',
  },
};

export const localizedLanguage = language => {
  return languages[language];
};
