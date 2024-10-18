 let tekSayilar = [];
 let ciftSayilar = [];
 
function sayiEkle() {

  let yeniSayiEkle = Number(prompt('Kaç tane sayı eklemek istersiniz?'));
 for (let i = 0; i < yeniSayiEkle; i++) {

   let sayi = prompt('Sayı giriniz');
 
   if (sayi % 2 === 0) {

     ciftSayilar.push (sayi);
    
   } else {
    tekSayilar.push(sayi);
    
   }

 } 
 console.log('Çift Sayılar: ' + ciftSayilar);
 console.log('Tek Sayılar: ' +  tekSayilar);
 }

 let toplamTek = 0;
 let toplamCift = 0;
 
function sayilariTopla () {

 
  for(let i=0; i < ciftSayilar.length; i++){

  toplamCift += Number(ciftSayilar[i]);

 
} 
 
  for(let i=0; i<tekSayilar.length; i++){

  toplamTek += Number(tekSayilar[i]);

}
console.log(`Çift sayıların toplamı:  ${toplamCift}`);
console.log(`Tek sayıların toplamı:  ${toplamTek}`);
}



 sayiEkle();

 sayilariTopla ();
