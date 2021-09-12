import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
  homeTitle: "About Scorp",
  homeText:
    "It was established in 2014 by 4 Turkish university students, including Sercan Işık and İzzet Zakuto. Scorp is designed to be a topic driven app. The content in Scorp consists of 15-second videos. A live broadcast feature was added in 2015. After its success in Turkey, Scorp continued its activities as an initiative aimed at foreign markets. With more than 10 million users in 2017, it was named one of the most successful startups by Wired UK. At Brandweek, an event organized in cooperation with Google Turkey towards 2017, Ekşi Sözlük founder Fatih Aker, Scorp co-founder Sercan Işık, Scorp General Manager Batu Uğrasız had the opportunity to introduce users who produce organic content to Turkish advertisers about new media and organic content. Penti, the first women's brand to use Scorp towards the end of 2017, made more than 4 million young people say #İçindenGeldi and integrated its new commercial into digital, resulting in 764 videos uploaded by users to the relevant topic in Scorp at the end of the campaign, reaching 4,400,583 people. Eight times the success of the campaign target, the advertising agency Utopic Farm won an award thanks to the project.",
  contactPageName: "Contact Page",
  contactButton: "Contact Us",
  login: "Login",
  logout: "Log out",
  emailAdress: "Email Address",
  cancel: "Cancel",
  password: "Password",
  footer: "Footer",
  languageOption: "Use in English",
  languageLabel: "Language",
  //country names
  TR: "Turkey",
  US: "United States of America",
  GB: "United Kingdom",
  DE: "Germany",
  SE: "Sweden",
  KE: "Kenya",
  BR: "Brazil",
  ZW: "Zimbabwe",
  //validations
  titleErr: "title is not valid",
  nameErr: "name is not valid",
  emailErr: "email is not valid",
  phoneNumberErr: "phone number is not valid",
  countryErr: "select a country",
  //form field names
  title: "Title",
  name: "Name",
  email: "Email",
  phoneNumber: "Phone number",
  countryName: "Country Name",
  message: "Message",
  send: "send",
  required: "(required)",
  //snackbar messages
  formSubmit: "You successfully send the form",
};

const translationsTr = {
  homeTitle: "Scorp hakkında",
  homeText:
    "2014 yılında Sercan Işık ve İzzet Zakuto'nun aralarında bulunduğu 4 Türk üniversite öğrencisi tarafından yaratılmıştır. Scorp, konu başlığı odaklı bir uygulama olması için tasarlanmıştır. Scorp'ta yer alan içerik 15 saniyelik videolardan oluşmaktadır. 2015 yılında canlı yayın yapma özelliği eklenmiştir Scorp, Türkiyedeki başarısının ardından yurtdışı pazarları hedeflemiş bir girişim olarak faaliyetine devam etmiştir. 2017 yılında 10 milyondan fazla kullanıcı sayısı ile, Wired UK tarafından en başarılı girişimler arasında gösterilmiştir. 2017 yılına doğru Google Türkiye işbirliğiyle düzenlenen bir etkinlik olan Brandweek'de Ekşi Sözlük kurucusu Fatih Aker, Scorp kurucularından Sercan Işık, Scorp Genel Müdürü Batu Uğrasız yeni medya ve organik içerik hakkında türk reklam verenlere organik içerik üreten kullanıcıları tanıtma fırsatı elde etmişlerdir. 2017 yılının sonuna doğru Scorp’u ilk kullanan kadın markası olan Penti, 4 milyondan fazla gence  #İçimdenGeldi dedirterek yeni reklam filmini dijitale entegre ederek kampanya sonunda Scorp’ta yer alan ilgili konu başlığına kullanıcılar tarafından 764 video yüklenirken, 4.400.583 kişiye erişilmiştir. Kampanya hedefinin sekiz katı bir başarı elde edilmiş, reklam ajansı olan Utopic Farm proje sayesinde ödül kazanmıştır.",
  contactPageName: "İletişim sayfası",
  contactButton: "İletişime geç",
  login: "Giriş yap",
  logout: "Çıkış yap",
  emailAdress: "Email Adresi",
  cancel: "Çıkış yap",
  password: "Şifre",
  footer: "Alt Bilgi",
  languageOption: "Türkçe kullan",
  languageLabel: "Dil",
  //country names
  TR: "Türkiye",
  US: "Amerika Birleşik Devletleri",
  GB: "Birleşik Krallık",
  DE: "Almanya",
  SE: "İsveç",
  KE: "Kenya",
  BR: "Brazilya",
  ZW: "Zimbabwe",
  //form field names
  title: "Başlık",
  name: "İsim",
  email: "Email",
  phoneNumber: "Telefon numarası",
  countryName: "Ülke adı",
  message: "Mesaj",
  send: "Gönder",
  required: "(zorunlu)",
  //validations
  titleErr: "başlık uygun değil",
  nameErr: "isim uygun değil",
  emailErr: "email uygun değil",
  phoneNumberErr: "telefon numarası uygun değil",
  countryErr: "bir ülke seçiniz",
  //snackbar messages
  formSubmit: "Formu başarıyla gönderdiniz",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    tr: { translation: translationsTr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
