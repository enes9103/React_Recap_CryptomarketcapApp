# React içinden fetch() ve axios ile veri almak

API'den veri almak asekron bir işlemdir, sayfa render edilirken veride aynı zamanda gelebilir.

useEffect hook u içinde axios ve fecth kullanıyoruz

calback func ve dibendis alıyor içerisine

***fetch kullanımı =>

fetch react yapısı içinde olan özellik,kuruluma ihtiyacı yok

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
   .then(response => response.json())
   .then( response=> console.log(response))


---burada fetch içerisinden promis  olarak dönen veriyi json şekl,nde alabilmek için fetch in bir özelliği olan json ile then içerisinde çağırdık,
ikinci seferde json veriyi göstermek için kullandık,,

bu verileri sayfada göstermek için yakalamamız ve hafızaya almamız gerekiyor,

bu işlem için useState() hook unu kullanıyoruz.

const [coin, setCoin] = useState() 

buradaki;
coin => state tutacak değer,
setCoin=> state değiştirecek fonksiyon


bu bilgileri ekrana yazdırmak için gelen verinin içerisine map ile giriyoruz ve 

 {
   coin.map(coins=>{
     return (<div key={coins.id}> 
         <img src={coins.image} alt="" style={{width :'20px'}} />
         {coins.name}
         <hr />
     </div>
   )})
 }

*** axios kullanımı => 


 
axios kullanabilmek için import ve install edilmesi gerekiyor 

npm install axios

useEffect(() =>{

axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(response => setCoin(response.data))
.catch(error => console.log({error}));
}, [])
burada gelen response data ile yakaladık

 {
   coin.map(coins=>{
     return (<div key={coins.id}> 
         <img src={coins.image} alt="" style={{width :'20px'}} />
         {coins.name}
         <hr />
     </div>
   )})
 }






*** bir değişkene atayarak yapma

 const getCoin = ()=> axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
 .then(res=>{
    setCoin(res.data)
    // console.log(res.data[0].name)
 }) 


  burada  değişkene atandığnda then kullanılmasaydı, async await kullanılması gerekirdi. 

  ayrıca useEffect içinde promis yapısı kullanılmıyor yanı, useEffect içinde async await yapısı kullanmıyoruz.

useEffect(() => {
  getCoin()
}, [])














kaynakça: 

1. https://medium.com/kocsistem/a-dan-z-ye-react-facce30533d0

2. https://www.youtube.com/watch?v=jNwU5gcrIrg&ab_channel=ReactDersleri