function tutarHesapla(yardimYapanlar) {
  // Ahmet isminde bulunan harfler
  const ahmet = 'ahmet';
  let toplamHarfSayisi = 0;

  // Her bir yardım yapanın isminde Ahmet ismindeki harflerin sayısını hesapla
  for (const isim of yardimYapanlar) {
    for (const harf of ahmet) {
      toplamHarfSayisi += isim.toLowerCase().split(harf).length - 1;
    }
  }

  // Ahmet'in bağış miktarını hesapla (1000 katı)
  return toplamHarfSayisi * 1000;
}

// Test
const yardimYapanlar1 = [
  'Leyla Mert',
  'Fevzi Kaya',
  'Aysel Hataylı',
  'Furkan Menekşe',
  'Zeliha Aydın',
];
console.log(tutarHesapla(yardimYapanlar1)); // 23000

const yardimYapanlar2 = ['Alex De Souza', 'Hagi', 'Sergen Yalçin'];
console.log(tutarHesapla(yardimYapanlar2)); // 9000

const yardimYapanlar3 = [
  'ahmet zorlu',
  'emre şahiner',
  'tuğrul türkkan',
  'tunca özdemir',
  'fatih aydın',
];
console.log(tutarHesapla(yardimYapanlar3)); // 22000

// Yardım yapan listesi boş
console.log(tutarHesapla([])); // 0

// Fonksiyonun dönüş değeri number türündedir
console.log(typeof tutarHesapla(yardimYapanlar1)); // 'number'

module.exports = tutarHesapla;
