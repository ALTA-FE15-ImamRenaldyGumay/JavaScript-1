console.log("Problem 1 - Play With Asterik")
function playWithAsterik(n: number) {
  for (let baris = 1; baris <= n; baris++) {
    let bintang = "";
    let spasi = "";

    // Menambahkan spasi
    for (let i = 1; i <= n - baris; i++) {
      spasi += " ";
    }

    // Menambahkan bintang
    for (let j = 1; j <= baris; j++) {
      bintang += "* ";
    }

    // Mencetak baris segitiga
    console.log(spasi + bintang);
  }
}

// Test dengan sample test case
playWithAsterik(5);
