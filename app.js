const names = [
    "Arabella Church",
    "Terrance Ahmed",
    "Jolie Le",
    "Damien Macdonald",
    "Rosalia Callahan",
    "Quinton Raymond",
    "Hadlee Beard",
    "Nathanael Hinton",
    "Jaelynn Robinson",
    "Matthew Sparks",
    "Aisha Peck",
    "Yousef Livingston",
    "Milena Cantu",
    "Anakin Flynn",
    "Dorothy Sellers",
    "Madden Collins",
    "Kinsley Roberts",
    "Josiah Blackburn",
    "Frida Lopez",
    "Michael Hurley",
    "Rylan Giles",
    "Kole Young",
    "Zoey Ware",
    "Tadeo Singleton",
    "Malaysia Copeland",
    "Axton Shelton",
    "Makenzie Ward",
    "Jameson Corona",
    "Marianna Livingston",
    "Ambrose Patterson",
    "Kaylee Hampton",
    "Hank Garza",
    "River Jennings",
    "Corbin Nixon",
    "Deborah Maynard",
    "Landry Warren",
    "Sloane Petersen",
    "Samson Leal",
    "Murphy Armstrong",
    "Grant Robles",
    "Felicity Hubbard",
    "Forrest Bryant",
    "Parker Melendez",
    "Nikolas Pearson",
    "Kiara Shepherd",
    "Ronald Choi",
    "Karla Huff",
    "Finnley Trujillo",
    "Danielle Wolfe",
    "Donovan Lawson",
    "Phoebe Salinas",
    "Edgar ONeill",
    "Kenna Blankenship",
    "Ernesto Knapp",
    "Linda Blackwell",
    "Marcellus Cline",
    "Lina Callahan",
    "Quinton Jennings",
    "Palmer Elliott",
    "Blake Harrison",
    "Jasmine Clayton",
    "Boston Mack",
    "Nadia Rowland",
    "Eliezer Reilly",
    "Tori Harmon",
    "Roberto Bradshaw",
    "Berkley Kramer",
    "Kylan Ayers",
    "Simone Galindo",
    "Salvatore Stephens",
    "Millie Matthews",
    "Preston Montoya",
    "Kamryn Rollins",
    "Wes Schroeder",
    "Cameron Suarez"
]

const usedIndexes = new Set()
const nameElement = document.getElementById("name")

function generateName() {
    if (usedIndexes.size >= names.length){
        usedIndexes.clear()
    }

    while (true){
        const randomIdx = Math.floor(Math.random() * names.length)

        if (usedIndexes.has(randomIdx)) continue

        const name = names[randomIdx]
        nameElement.innerHTML = name;
        usedIndexes.add(randomIdx)
        break
    }

}