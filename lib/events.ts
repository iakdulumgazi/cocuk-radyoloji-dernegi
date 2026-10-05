// Webinar / çevrimiçi toplantı verileri — hem Haberler sayfası hem ana sayfa
// önizlemesi buradan beslenir. Yeni etkinlik eklemek için diziye yeni bir
// nesne ekleyin (en yeni tarih en üstte).

export type Person = { name: string; affil?: string };

export type WebinarEvent = {
  slug: string;
  poster: string;
  date: string; // görünen tarih
  iso: string; // sıralama için YYYY-MM-DD
  time: string;
  topic: string; // ana başlık
  series: string; // toplantı serisi
  moderators: Person[];
  speakers: Person[];
  register: string; // kayıt linki (boşsa buton gösterilmez)
  kind?: "webinar" | "duyuru";
  body?: string; // duyuru metni
  pdf?: string; // duyuru PDF'i
};

const all: WebinarEvent[] = [
  {
    slug: "olagan-genel-kurul-2026",
    poster: "/events/genel-kurul.jpg",
    date: "24 Ekim 2026",
    iso: "2026-10-24",
    time: "10:00",
    topic: "Olağan Genel Kurul Toplantısı",
    series: "Çocuk Radyolojisi Derneği Yönetim Kurulu Duyurusu",
    moderators: [],
    speakers: [],
    register: "",
    kind: "duyuru",
    pdf: "/genel-kurul-2026.pdf",
    body:
      "Derneğimizin Olağan Genel Kurul Toplantısı 24 Ekim 2026 Cumartesi günü saat 10.00'da " +
      "Erciyes Üniversitesi Tıp Fakültesi Çocuk Radyolojisi Bilim Dalı'nda aşağıdaki gündem " +
      "maddeleri ile yapılacaktır. Bu toplantıda yeterli yasal çoğunluk sağlanamadığı takdirde " +
      "ikinci toplantı, çoğunluk aranmaksızın 26 Kasım 2026 Perşembe günü saat 17.20'de " +
      "Pine Beach Belek Kongre Merkezi, Salon 3, Antalya adresinde gerçekleştirilecektir. " +
      "Dernekler Kanunu gereği Genel Kurul'da vekaletle oy kullanılamamaktadır; toplantıya " +
      "bizzat katılmanız ve kimlik ibraz etmeniz gerekmektedir.",
  },
  {
    slug: "cocuklarda-snik-goruntuleme",
    poster: "/events/snik.jpg",
    date: "17 Eylül 2026",
    iso: "2026-09-17",
    time: "19:30",
    topic: "Çocuklarda Sensörinöral İşitme Kaybında Görüntüleme: Sendromik SNİK için İpuçları",
    series: "TRD Pediatrik Radyoloji Eğitim ve Bilimsel Araştırma Grubu Çevrim İçi Toplantısı",
    moderators: [
      { name: "Prof. Dr. Ömer Suat Fitoz", affil: "Ankara Üniversitesi Tıp Fakültesi, Radyoloji Anabilim Dalı" },
    ],
    speakers: [
      { name: "Dr. Öğr. Üyesi Seda Kaynak Şahap", affil: "Ankara Üniversitesi Tıp Fakültesi, Radyoloji Anabilim Dalı" },
    ],
    register: "https://serenaslive.zoom.us/webinar/register/WN_-3BebVg3TK22cw1RXeZghw#/registration",
  },
  {
    slug: "pediatrik-ards",
    poster: "/events/ards.jpg",
    date: "16 Haziran 2026",
    iso: "2026-06-16",
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
    iso: "2026-05-14",
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
    iso: "2026-04-22",
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
    iso: "2026-04-11",
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
    iso: "2026-04-09",
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

export const events: WebinarEvent[] = [...all].sort((a, b) => b.iso.localeCompare(a.iso));
