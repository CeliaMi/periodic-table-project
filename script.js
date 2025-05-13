// Datos de los elementos
const elements = [
    { number: 1, symbol: 'H', name: 'Hidrógeno', category: 'nonmetal' },
    { number: 2, symbol: 'He', name: 'Helio', category: 'noble-gas' },
    { number: 3, symbol: 'Li', name: 'Litio', category: 'alkali-metal' },
    { number: 4, symbol: 'Be', name: 'Berilio', category: 'alkaline-earth' },
    { number: 5, symbol: 'B', name: 'Boro', category: 'metalloid' },
    { number: 6, symbol: 'C', name: 'Carbono', category: 'nonmetal', page: 'https://celiami.github.io/6-carbon/' },
    { number: 7, symbol: 'N', name: 'Nitrógeno', category: 'nonmetal' },
    { number: 8, symbol: 'O', name: 'Oxígeno', category: 'nonmetal' },
    { number: 9, symbol: 'F', name: 'Flúor', category: 'halogen' },
    { number: 10, symbol: 'Ne', name: 'Neón', category: 'noble-gas' },
    { number: 11, symbol: 'Na', name: 'Sodio', category: 'alkali-metal' },
    { number: 12, symbol: 'Mg', name: 'Magnesio', category: 'alkaline-earth' },
    { number: 13, symbol: 'Al', name: 'Aluminio', category: 'post-transition' },
    { number: 14, symbol: 'Si', name: 'Silicio', category: 'metalloid' },
    { number: 15, symbol: 'P', name: 'Fósforo', category: 'nonmetal' },
    { number: 16, symbol: 'S', name: 'Azufre', category: 'nonmetal' },
    { number: 17, symbol: 'Cl', name: 'Cloro', category: 'halogen' },
    { number: 18, symbol: 'Ar', name: 'Argón', category: 'noble-gas' },
    { number: 19, symbol: 'K', name: 'Potasio', category: 'alkali-metal' },
    { number: 20, symbol: 'Ca', name: 'Calcio', category: 'alkaline-earth' },
    { number: 21, symbol: 'Sc', name: 'Escandio', category: 'transition-metal' },
    { number: 22, symbol: 'Ti', name: 'Titanio', category: 'transition-metal' },
    { number: 23, symbol: 'V', name: 'Vanadio', category: 'transition-metal' },
    { number: 24, symbol: 'Cr', name: 'Cromo', category: 'transition-metal' },
    { number: 25, symbol: 'Mn', name: 'Manganeso', category: 'transition-metal' },
    { number: 26, symbol: 'Fe', name: 'Hierro', category: 'transition-metal' },
    { number: 27, symbol: 'Co', name: 'Cobalto', category: 'transition-metal' },
    { number: 28, symbol: 'Ni', name: 'Níquel', category: 'transition-metal' },
    { number: 29, symbol: 'Cu', name: 'Cobre', category: 'transition-metal' },
    { number: 30, symbol: 'Zn', name: 'Cinc', category: 'transition-metal' },
    { number: 31, symbol: 'Ga', name: 'Galio', category: 'post-transition' },
    { number: 32, symbol: 'Ge', name: 'Germanio', category: 'metalloid' },
    { number: 33, symbol: 'As', name: 'Arsénico', category: 'metalloid' },
    { number: 34, symbol: 'Se', name: 'Selenio', category: 'nonmetal' },
    { number: 35, symbol: 'Br', name: 'Bromo', category: 'halogen' },
    { number: 36, symbol: 'Kr', name: 'Kriptón', category: 'noble-gas' },
    { number: 37, symbol: 'Rb', name: 'Rubidio', category: 'alkali-metal' },
    { number: 38, symbol: 'Sr', name: 'Estroncio', category: 'alkaline-earth' },
    { number: 39, symbol: 'Y', name: 'Itrio', category: 'transition-metal' },
    { number: 40, symbol: 'Zr', name: 'Circonio', category: 'transition-metal' },
    { number: 41, symbol: 'Nb', name: 'Niobio', category: 'transition-metal' },
    { number: 42, symbol: 'Mo', name: 'Molibdeno', category: 'transition-metal' },
    { number: 43, symbol: 'Tc', name: 'Tecnecio', category: 'transition-metal' },
    { number: 44, symbol: 'Ru', name: 'Rutenio', category: 'transition-metal' },
    { number: 45, symbol: 'Rh', name: 'Rodio', category: 'transition-metal' },
    { number: 46, symbol: 'Pd', name: 'Paladio', category: 'transition-metal' },
    { number: 47, symbol: 'Ag', name: 'Plata', category: 'transition-metal' },
    { number: 48, symbol: 'Cd', name: 'Cadmio', category: 'transition-metal' },
    { number: 49, symbol: 'In', name: 'Indio', category: 'post-transition' },
    { number: 50, symbol: 'Sn', name: 'Estaño', category: 'post-transition' },
    { number: 51, symbol: 'Sb', name: 'Antimonio', category: 'metalloid' },
    { number: 52, symbol: 'Te', name: 'Telurio', category: 'metalloid' },
    { number: 53, symbol: 'I', name: 'Yodo', category: 'halogen' },
    { number: 54, symbol: 'Xe', name: 'Xenón', category: 'noble-gas' },
    { number: 55, symbol: 'Cs', name: 'Cesio', category: 'alkali-metal' },
    { number: 56, symbol: 'Ba', name: 'Bario', category: 'alkaline-earth' },
    { number: 57, symbol: 'La', name: 'Lantano', category: 'lanthanide' },
    { number: 58, symbol: 'Ce', name: 'Cerio', category: 'lanthanide' },
    { number: 59, symbol: 'Pr', name: 'Praseodimio', category: 'lanthanide' },
    { number: 60, symbol: 'Nd', name: 'Neodimio', category: 'lanthanide' },
    { number: 61, symbol: 'Pm', name: 'Prometio', category: 'lanthanide' },
    { number: 62, symbol: 'Sm', name: 'Samario', category: 'lanthanide' },
    { number: 63, symbol: 'Eu', name: 'Europio', category: 'lanthanide' },
    { number: 64, symbol: 'Gd', name: 'Gadolinio', category: 'lanthanide' },
    { number: 65, symbol: 'Tb', name: 'Terbio', category: 'lanthanide' },
    { number: 66, symbol: 'Dy', name: 'Disprosio', category: 'lanthanide' },
    { number: 67, symbol: 'Ho', name: 'Holmio', category: 'lanthanide' },
    { number: 68, symbol: 'Er', name: 'Erbio', category: 'lanthanide' },
    { number: 69, symbol: 'Tm', name: 'Tulio', category: 'lanthanide' },
    { number: 70, symbol: 'Yb', name: 'Iterbio', category: 'lanthanide' },
    { number: 71, symbol: 'Lu', name: 'Lutecio', category: 'lanthanide' },
    { number: 72, symbol: 'Hf', name: 'Hafnio', category: 'transition-metal' },
    { number: 73, symbol: 'Ta', name: 'Tantalio', category: 'transition-metal' },
    { number: 74, symbol: 'W', name: 'Wolframio', category: 'transition-metal' },
    { number: 75, symbol: 'Re', name: 'Renio', category: 'transition-metal' },
    { number: 76, symbol: 'Os', name: 'Osmio', category: 'transition-metal' },
    { number: 77, symbol: 'Ir', name: 'Iridio', category: 'transition-metal' },
    { number: 78, symbol: 'Pt', name: 'Platino', category: 'transition-metal' },
    { number: 79, symbol: 'Au', name: 'Oro', category: 'transition-metal' },
    { number: 80, symbol: 'Hg', name: 'Mercurio', category: 'transition-metal' },
    { number: 81, symbol: 'Tl', name: 'Talio', category: 'post-transition' },
    { number: 82, symbol: 'Pb', name: 'Plomo', category: 'post-transition' },
    { number: 83, symbol: 'Bi', name: 'Bismuto', category: 'post-transition' },
    { number: 84, symbol: 'Po', name: 'Polonio', category: 'metalloid' },
    { number: 85, symbol: 'At', name: 'Astato', category: 'halogen' },
    { number: 86, symbol: 'Rn', name: 'Radón', category: 'noble-gas' },
    { number: 87, symbol: 'Fr', name: 'Francio', category: 'alkali-metal' },
    { number: 88, symbol: 'Ra', name: 'Radio', category: 'alkaline-earth' },
    { number: 89, symbol: 'Ac', name: 'Actinio', category: 'actinide' },
    { number: 90, symbol: 'Th', name: 'Torio', category: 'actinide' },
    { number: 91, symbol: 'Pa', name: 'Protactinio', category: 'actinide' },
    { number: 92, symbol: 'U', name: 'Uranio', category: 'actinide' },
    { number: 93, symbol: 'Np', name: 'Neptunio', category: 'actinide' },
    { number: 94, symbol: 'Pu', name: 'Plutonio', category: 'actinide' },
    { number: 95, symbol: 'Am', name: 'Americio', category: 'actinide' },
    { number: 96, symbol: 'Cm', name: 'Curio', category: 'actinide' },
    { number: 97, symbol: 'Bk', name: 'Berkelio', category: 'actinide' },
    { number: 98, symbol: 'Cf', name: 'Californio', category: 'actinide' },
    { number: 99, symbol: 'Es', name: 'Einstenio', category: 'actinide' },
    { number: 100, symbol: 'Fm', name: 'Fermio', category: 'actinide' },
    { number: 101, symbol: 'Md', name: 'Mendelevio', category: 'actinide' },
    { number: 102, symbol: 'No', name: 'Nobelio', category: 'actinide' },
    { number: 103, symbol: 'Lr', name: 'Lawrencio', category: 'actinide' },
    { number: 104, symbol: 'Rf', name: 'Rutherfordio', category: 'transition-metal' },
    { number: 105, symbol: 'Db', name: 'Dubnio', category: 'transition-metal' },
    { number: 106, symbol: 'Sg', name: 'Seaborgio', category: 'transition-metal' },
    { number: 107, symbol: 'Bh', name: 'Bohrio', category: 'transition-metal' },
    { number: 108, symbol: 'Hs', name: 'Hassio', category: 'transition-metal' },
    { number: 109, symbol: 'Mt', name: 'Meitnerio', category: 'transition-metal' },
    { number: 110, symbol: 'Ds', name: 'Darmstatio', category: 'transition-metal' },
    { number: 111, symbol: 'Rg', name: 'Roentgenio', category: 'transition-metal' },
    { number: 112, symbol: 'Cn', name: 'Copernicio', category: 'transition-metal' },
    { number: 113, symbol: 'Nh', name: 'Nihonio', category: 'post-transition' },
    { number: 114, symbol: 'Fl', name: 'Flerovio', category: 'post-transition' },
    { number: 115, symbol: 'Mc', name: 'Moscovio', category: 'post-transition' },
    { number: 116, symbol: 'Lv', name: 'Livermorio', category: 'post-transition' },
    { number: 117, symbol: 'Ts', name: 'Teneso', category: 'halogen' },
    { number: 118, symbol: 'Og', name: 'Oganesón', category: 'noble-gas' }
];

// Posiciones en la tabla periódica (fila, columna)
const positions = {
    1: [1, 1],    // H
    2: [1, 18],   // He
    3: [2, 1],    // Li
    4: [2, 2],    // Be
    5: [2, 13],   // B
    6: [2, 14],   // C
    7: [2, 15],   // N
    8: [2, 16],   // O
    9: [2, 17],   // F
    10: [2, 18],  // Ne
    11: [3, 1],   // Na
    12: [3, 2],   // Mg
    13: [3, 13],  // Al
    14: [3, 14],  // Si
    15: [3, 15],  // P
    16: [3, 16],  // S
    17: [3, 17],  // Cl
    18: [3, 18],  // Ar
    19: [4, 1],   // K
    20: [4, 2],   // Ca
    21: [4, 3],   // Sc
    22: [4, 4],   // Ti
    23: [4, 5],   // V
    24: [4, 6],   // Cr
    25: [4, 7],   // Mn
    26: [4, 8],   // Fe
    27: [4, 9],   // Co
    28: [4, 10],  // Ni
    29: [4, 11],  // Cu
    30: [4, 12],  // Zn
    31: [4, 13],  // Ga
    32: [4, 14],  // Ge
    33: [4, 15],  // As
    34: [4, 16],  // Se
    35: [4, 17],  // Br
    36: [4, 18],  // Kr
    37: [5, 1],   // Rb
    38: [5, 2],   // Sr
    39: [5, 3],   // Y
    40: [5, 4],   // Zr
    41: [5, 5],   // Nb
    42: [5, 6],   // Mo
    43: [5, 7],   // Tc
    44: [5, 8],   // Ru
    45: [5, 9],   // Rh
    46: [5, 10],  // Pd
    47: [5, 11],  // Ag
    48: [5, 12],  // Cd
    49: [5, 13],  // In
    50: [5, 14],  // Sn
    51: [5, 15],  // Sb
    52: [5, 16],  // Te
    53: [5, 17],  // I
    54: [5, 18],  // Xe
    55: [6, 1],   // Cs
    56: [6, 2],   // Ba
    57: [6, 3],   // La
    72: [6, 4],   // Hf
    73: [6, 5],   // Ta
    74: [6, 6],   // W
    75: [6, 7],   // Re
    76: [6, 8],   // Os
    77: [6, 9],   // Ir
    78: [6, 10],  // Pt
    79: [6, 11],  // Au
    80: [6, 12],  // Hg
    81: [6, 13],  // Tl
    82: [6, 14],  // Pb
    83: [6, 15],  // Bi
    84: [6, 16],  // Po
    85: [6, 17],  // At
    86: [6, 18],  // Rn
    87: [7, 1],   // Fr
    88: [7, 2],   // Ra
    89: [7, 3],   // Ac
    104: [7, 4],  // Rf
    105: [7, 5],  // Db
    106: [7, 6],  // Sg
    107: [7, 7],  // Bh
    108: [7, 8],  // Hs
    109: [7, 9],  // Mt
    110: [7, 10], // Ds
    111: [7, 11], // Rg
    112: [7, 12], // Cn
    113: [7, 13], // Nh
    114: [7, 14], // Fl
    115: [7, 15], // Mc
    116: [7, 16], // Lv
    117: [7, 17], // Ts
    118: [7, 18], // Og
    // Lantánidos
    58: [8, 3],   // Ce
    59: [8, 4],   // Pr
    60: [8, 5],   // Nd
    61: [8, 6],   // Pm
    62: [8, 7],   // Sm
    63: [8, 8],   // Eu
    64: [8, 9],   // Gd
    65: [8, 10],  // Tb
    66: [8, 11],  // Dy
    67: [8, 12],  // Ho
    68: [8, 13],  // Er
    69: [8, 14],  // Tm
    70: [8, 15],  // Yb
    71: [8, 16],  // Lu
    // Actínidos
    90: [9, 3],   // Th
    91: [9, 4],   // Pa
    92: [9, 5],   // U
    93: [9, 6],   // Np
    94: [9, 7],   // Pu
    95: [9, 8],   // Am
    96: [9, 9],   // Cm
    97: [9, 10],  // Bk
    98: [9, 11],  // Cf
    99: [9, 12],  // Es
    100: [9, 13], // Fm
    101: [9, 14], // Md
    102: [9, 15], // No
    103: [9, 16]  // Lr
};

// Función para crear un elemento de la tabla periódica
function createElement(element) {
    const div = document.createElement('div');
    div.className = `element ${element.symbol.toLowerCase()} ${element.category}`;
    
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = element.number;
    
    const symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = element.symbol;
    
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = element.name;
    
    div.appendChild(number);
    div.appendChild(symbol);
    div.appendChild(name);
    
    // Añadir clase y botón si tiene página
    if (element.page) {
        div.classList.add('completed');
        const button = document.createElement('button');
        button.addEventListener('click', () => {
            window.location.href = element.page;
        });
        div.appendChild(button);
    } else {
        div.classList.add('incomplete');
    }
    
    return div;
}

// Función para generar la tabla periódica
function generatePeriodicTable() {
    const table = document.getElementById('periodicTable');
    
    // Crear una matriz de 7x18 para la tabla periódica
    for (let row = 1; row <= 7; row++) {
        for (let col = 1; col <= 18; col++) {
            const element = elements.find(e => {
                const [r, c] = positions[e.number];
                return r === row && c === col;
            });
            
            if (element) {
                table.appendChild(createElement(element));
            } else {
                const empty = document.createElement('div');
                empty.className = 'empty';
                table.appendChild(empty);
            }
        }
    }
}

// Control del modal de la leyenda
const legendHeader = document.querySelector('.legend-header');
const legendModal = document.querySelector('.legend-modal');
const closeModal = document.querySelector('.close-modal');

// Abrir modal al hacer click
legendHeader.addEventListener('click', () => {
    legendModal.classList.add('active');
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    legendModal.classList.remove('active');
});

// Cerrar modal al hacer click fuera
legendModal.addEventListener('click', (e) => {
    if (e.target === legendModal) {
        legendModal.classList.remove('active');
    }
});

// Cerrar modal al presionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && legendModal.classList.contains('active')) {
        legendModal.classList.remove('active');
    }
});

// Inicializar la tabla cuando se carga la página
document.addEventListener('DOMContentLoaded', generatePeriodicTable); 