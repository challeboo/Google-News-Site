// Write your Javascript excercises here:


// What you want to print on your page goes here:
const welcomeText = "Välkommen "
const greeting = "Hej"
const name = "Charlotta"
const lastname = "Nilsson"
const age = 30
const articles = [{
    'title': 'Jo, placebo funkar – även när man vet att det är fejk',
    'description': 'Hur kommer det sig att vissa mår bättre av alternativmedicin, när den i sig saknar effekt? Varför kan placebo hjälpa mot smärta, men inte cancer? KIT reder ut vad vi vet och inte vet om placeboeffekten.',
    'urlToImage': 'https://imgix.kitcdn.se/https%3A%2F%2Fstatic.kitcdn.se%2Fcws%2F2018%2F05%2F024266abb3bfb3553183441f8d6d75a6_1525249688681.jpg?fit=crop&h=&ixlib=php-1.1.0&w=2880&s=7291ea459cd4b4ff274a5046f70461e5',
    'url': 'https://kit.se/2018/05/18/107089/jo-placebo-funkar-aven-nar-man-vet-att-det-ar-fejk/'
    },
    {
      'title': 'Vilken version av dig umgås dina vänner med i kväll?',
      'description': 'Hur vi beter oss under påverkan av alkohol kan ha stark påverkan på människorna runtomkring oss. I grund och botten handlar det om hur alkoholen styr kemiska processer i din hjärna.',
      'urlToImage': 'https://imgix.kitcdn.se/https%3A%2F%2Fstatic.kitcdn.se%2Fcws%2F2018%2F05%2F6ecc7c419c3f1ff7eab2217534f3e518_1525442257910.jpg?fit=crop&h=&ixlib=php-1.1.0&w=2880&s=0b82f2b0d9309324328c7dc04af614d3',
      'url': 'https://kit.se/2018/04/27/106963/iq-vilken-version-av-dig-traffar-dina-vanner/'
      },
    {
        'title': 'Männen, självmorden och tystnaden',
        'description': 'Efter en lögn som gick för långt ville Fredrik få slut på allt. Något är skevt med män och självmord – men varför är de mindre benägna än kvinnor att söka hjälp när livet brister?',
        'urlToImage': 'https://imgix.kitcdn.se/https%3A%2F%2Fstatic.kitcdn.se%2Fcws%2F2018%2F05%2F5c6f651a1191238c6ec4a0204374a48c_1525778979943.jpg?fit=crop&h=&ixlib=php-1.1.0&w=2880&s=d1507518b94794dc78f560a5dec68bb3',
        'url': 'https://kit.se/2018/05/14/107391/mannen-sjalvmorden-och-tystnaden/'
      }
]
articles.forEach((article) => {
document.querySelector(".result").appendChild(document.createTextNode(`${article.title}`));
})

console.log('valli är en liten anka')
const myFunction = () => {
  document.querySelector(".readMore").classList.toggle("hideDIV");
}
