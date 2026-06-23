// Webinar / çevrimiçi toplantı verileri — hem Haberler sayfası hem ana sayfa
// önizlemesi buradan beslenir. Yeni etkinlik eklemek için diziye yeni bir
// nesne ekleyin (en yeni tarih en üstte).

export type Person = { name: string; affil?: string };

export type WebinarEvent = {
  slug: string;
  poster: string;
  date: string; // görünen tarih
  time: string;
  topic: string; // ana başlık
  series: string; // toplantı serisi
  moderators: Person[];
  speakers: Person[];
  register: string; // kayıt linki (boşsa buton gösterilmez)
};

export const events: WebinarEvent[] = [
  {
    slug: "pediatrik-ards",
    poster: "/events/ards.jpg",
    date: "16 Haziran 2026",
    time: "19:30",
    topic: "Olgularla Pediatrik ARDS'de Tanı ve Ayırıcı Tanı",
    series: "TRD Pediatrik Radyoloji Eğitim ve Bilimsel Araştırma Grubu Çevrimiçi Toplantısı",
    moderators: [
      { name: "Prof. Dr. Meltem Ceyhan Bilgici", affil: "Ondokuz Mayıs Üniversitesi Tıp Fakültesi Radyoloji Anabilim Dalı" },
    ],
    speakers: [
      { name: "Doç. Dr. Derya Bako", affil: "Ondokuz Mayıs Üniversitesi Tıp Fakültesi Radyoloji Anabilim Dalı" },
    ],
    register: "",
  },
  {
    slug: "yenidogan-akciger",
    poster: "/events/yenidogan.jpg",
    date: "14 Mayıs 2026",
    time: "20:00",
    topic: "Yenidoğan Akciğer Hastalıklarında Klinik–Radyoloji Diyaloğu",
    series: "Çocuk Radyolojisi Derneği Sürekli Eğitim Toplantıları",
    moderators: [],
    speakers: [
      { name: "Prof. Dr. Mustafa Ali Akın", affil: "Ondokuz Mayıs Üniversitesi Çocuk Sağlığı ve Hastalıkları AD, Yenidoğan Bilim Dalı" },
      { name: "Doç. Dr. Ali Yıkılmaz", affil: "McMaster University, Department of Medical Imaging, Hamilton, Kanada" },
    ],
    register: "",
  },
  {
    slug: "minik-hastalar-buyuk-aciller",
    poster: "/events/aciller.jpg",
    date: "22 Nisan 2026",
    time: "19:30",
    topic: "Minik Hastalar Büyük Aciller",
    series: "TRD Acil Radyoloji Eğitim ve Bilimsel Araştırma Grubu Çevrimiçi Toplantısı",
    moderators: [
      { name: "Doç. Dr. Çiğdem Üner", affil: "Ankara Etlik Şehir Hastanesi Çocuk Radyoloji Kliniği" },
    ],
    speakers: [
      { name: "Doç. Dr. Çiğdem Üner", affil: "Ankara Etlik Şehir Hastanesi Çocuk Radyoloji Kliniği" },
      { name: "Doç. Dr. H. Gökçe Çınar", affil: "Ankara Etlik Şehir Hastanesi Çocuk Radyoloji Kliniği" },
      { name: "Uzm. Dr. Şükriye Yılmaz", affil: "Ankara Etlik Şehir Hastanesi Çocuk Radyoloji Kliniği" },
      { name: "Uzm. Dr. Bilgesu Arıkan Ergün", affil: "Ankara Etlik Şehir Hastanesi Çocuk Radyoloji Kliniği" },
    ],
    register: "",
  },
  {
    slug: "kore-pediatrik-radyoloji",
    poster: "/events/kore.jpg",
    date: "11 Nisan 2026",
    time: "20:00",
    topic: "Kore ve Kore'de Pediatrik Radyoloji ile İlgili Deneyimlerim",
    series: "Çocuk Radyolojisi Derneği Sürekli Eğitim Toplantıları",
    moderators: [
      { name: "Doç. Dr. Evrim Özmen", affil: "Koç Üniversitesi Tıp Fakültesi, Radyoloji AD, İstanbul" },
    ],
    speakers: [
      { name: "Prof. Dr. Figen Palabıyık", affil: "Sağlık Bilimleri Üniversitesi, Hamidiye Tıp Fakültesi, Bakırköy Dr. Sadi Konuk SUAM, İstanbul" },
    ],
    register: "",
  },
  {
    slug: "pediatrik-karaciger-tumorleri",
    poster: "/events/karaciger.jpg",
    date: "9 Nisan 2026",
    time: "19:30",
    topic: "Pediatrik Karaciğer Tümörleri",
    series: "TRD Pediatrik Radyoloji Eğitim ve Bilimsel Araştırma Grubu Çevrimiçi Toplantısı",
    moderators: [
      { name: "Prof. Dr. Mithat Haliloğlu", affil: "Hacettepe Üniversitesi Tıp Fakültesi Çocuk Radyolojisi Bilim Dalı" },
    ],
    speakers: [
      { name: "Prof. Dr. H. Nursun Özcan", affil: "Hacettepe Üniversitesi Tıp Fakültesi Çocuk Radyolojisi Bilim Dalı" },
    ],
    register: "",
  },
];
