/**
 * flow
 * 1. membuat kondisi yang direturn sesuai dengan data 
 * 2. Karena outputny ada 3 kita buat kondisnya
 * 2. kondisi pertama holy knight menang telak stamina > undead karena 1 stamina = 1 undead
 * 3. kondisi kedua holy night gugur atau stamina < undead
 * 4. kondisi ketiga holy night menang dengan beruntung 
 */

function hollyKnight(name, stamina, undead) {

  if(stamina > undead){
    return `Holly Knight ${name} memenangkan pertempuran dengan mudah!`
  }
  else if(stamina < undead){
    return `Holly knight ${name} mengalahkan ${stamina} undead, namun sayang holly knight ${name} gugur di medan perang!`
  }else {
    return `Beruntung Holly knight ${name} berhasil mengalahkan ${undead} undead!`
  }
  //return null TODO: replace this
}

console.log(hollyKnight('Lancelot', 30, 20)); // Holly Knight Lancelot memenangkan pertempuran dengan mudah!
console.log(hollyKnight('Gallahad', 10, 10)); // Beruntung Holly knight Gallahad berhasil mengalahkan 10 undead!
console.log(hollyKnight('Tristan', 100, 110)); // Holly knight Tristan mengalahkan 100 undead, namun sayang holly knight Tristan gugur di medan perang!

module.exports = hollyKnight;
