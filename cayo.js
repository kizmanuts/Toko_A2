const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
});
function tam(productId){
    let input = document.getElementById(productId);
    input.value = parseInt(input.value) + 1;
    total();
  }

  function kur(productId){
    let input = document.getElementById(productId);
    if(parseInt(input.value) > 0){
      input.value = parseInt(input.value) - 1;
      total();
    }
  }

  function total(){
    let products = ["gula", "sb", "psp","KKMK","KKMS","KKMG","KKMG1","KKMG2","plw","pud",
  "npc","nsc","npb","nps","sk","agp","ags","miny","cc","cm","bkp4","bkp6","bkp8","bkp2","kjg"];
    let totl = 0;
    products.forEach(function(productId) {
      let quantity = parseInt(document.getElementById(productId).value);
      totl += quantity * (productId === "gula" ? 16000 : 
      (productId === "sb" ? 12000 : 
      (productId === "psp" ? 7000 : 
      (productId === "KKMK" ? 12000 : 
      (productId === "KKMS" ? 15000 : 
      (productId === "KKMG" ? 18000 : 
      (productId === "KKMG1" ? 18000 : 
      (productId === "KKMG2" ? 35000:
      (productId === "pud" ? 9500 : 
      (productId==="plw"?9000:
      (productId === "npc" ? 31000: 
      (productId === "nsc" ? 3000 :
      (productId === "npb" ? 22000:
      (productId === "nps" ? 2500:
      (productId === "sk" ? 13000:
      (productId === "agp" ? 50000: 
      (productId === "ags" ? 5000 :
      (productId === "miny" ? 30000:
      (productId === "cc" ? 15000:
      (productId === "cm" ? 13000:
      (productId === "bkp4" ? 58000: 
      (productId === "bkp6" ? 60000 :
      (productId === "bkp8" ? 53000:
      (productId === "bkp2" ? 55000:
      (productId === "kjg" ? 13000:0)))))))))))))))))))))))));
    });
    document.getElementById("cart-total").textContent = `Rp${totl.toFixed(0)}`;
  }
  
  function openWhatsApp() {
    let message = "Assalamualaikum, pakde saya *(MASUKAN NAMA ANDA)* mau pesen : ";
    let products = ["gula", "sb", "psp", "KKMK", "KKMS", "KKMG","KKMG1","KKMG2","plw","pud",
    "npc","nsc","npb","nps","sk","agp","ags","miny","cc","cm","bkp4","bkp6","bkp8","bkp2","kjg"];
    products.forEach(function(productId) {
      let quantity = parseInt(document.getElementById(productId).value);
      if (quantity > 0) {
        message += `${productId === "gula" ? 'Gulaku' :  
                    (productId === "sb" ? 'Segitiga biru 1kg' : 
                    (productId === "psp" ? 'Plastik Bawang ukuran (Isi ukuran)' : 
                    (productId === "KKMK" ? 'Kantong Kresek Tiger Merah 24' : 
                    (productId === "KKMS" ? 'Kantong Kresek Tiger Merah 28' :
                    (productId === "KKMG" ? 'Kantong Kresek Tiger Merah 35' : 
                    (productId === "KKMG1" ? 'Kantong Kresek Tiger Merah 40' : 
                    (productId === "KKMG2" ? 'Kantong Kresek Tiger Merah 50' : 
                    (productId === "plw" ? 'Plastik Wayang ukuran (isi ukuran)' : 
                    (productId === "pud" ? 'pudding rasa (isi rasa)' : 
                    (productId === "npc" ? 'Nutrijell coklat per pack': 
                    (productId === "nsc" ?  'nutrijell coklat satuan':
                    (productId === "npb" ? 'nutrijell buah per pack':
                    (productId === "nps" ? 'nutrijell buah satuan':
                    (productId === "sk" ? 'susu kental manis bendera kaleng':
                    (productId === "agp" ? 'ager swallow per pack': 
                    (productId === "ags" ? 'ager swallow satuan' :
                    (productId === "miny" ? 'minyak-kita w liter':
                    (productId === "cc" ? 'coklat batang colatta':
                    (productId === "cm" ? 'coklat batang mercoladc':
                    (productId === "bkp4" ? 'Box kue putih 12x14 per pack': 
                    (productId === "bkp6" ? 'Box kue putih 12x16 per pack' :
                    (productId === "bkp8" ? 'Box nasi putih 18x18 per pack':
                    (productId === "bkp2" ? 'Box nasi putih 20x20 per pack':
                    (productId === "kjg" ? 'Keju procise gold 250gr':''))))))))))))))))))))))))}: ${quantity}, `;
      }
                  });
    window.open(`https://wa.me/+6287725994558/?text=${encodeURIComponent(message)}`, '_blank');
  }
// kalk
function display(value){
  document.getElementById("result").value += value;
}
function bersihkan(){
  document.getElementById("result").value ="";
}
function itung(){
  var pers=document.getElementById("result").value;
  var sec=eval(pers);
  document.getElementById("result").value =sec;
}