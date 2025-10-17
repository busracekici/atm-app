// ATM uygulaması

let yeniSatır = "\r\n";
let metin =
  "1-Bakiye sorgulama" +
  yeniSatır +
  "2- Para çekme" +
  yeniSatır +
  "3-Para yatırma" +
  yeniSatır +
  "4-Çıkış";

let bakiye = 2500;

let secim = prompt(metin);

switch (secim) {
  case "1":
    alert("bakiyeniz:" + bakiye);
    break;

  case "2":
    let cekilenPara = Number(prompt("Çekilecek tutarı giriniz:"));
    if (cekilenPara <= bakiye) {
      kalanPara = bakiye - cekilenPara;
      alert("Kalan bakiyeniz:" + kalanPara);
    } else {
      alert("Yeterli bakiyeniz bulunmamaktadır");
    }
    break;
  case "3":
    let yatırılanPara = Number(prompt("Yatırılan tutarı giriniz:"));
    yeniBakiye = bakiye + yatırılanPara;
    alert("Güncel bakiyeniz:" + yeniBakiye);
    break;
  case "4":
    alert("hoşçakalın");
    break;
  default:
    "geçerli bir işlem giriniz";
}
