const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, group: 'nonmetal', state: 'gas', radioactive: false, position: { row: 1, col: 1 } },
    { number: 2, symbol: 'He', name: 'Helium', mass: 4.0026, group: 'noble gas', state: 'gas', radioactive: false, position: { row: 1, col: 18 } },
    { number: 3, symbol: 'Li', name: 'Lithium', mass: 6.94, group: 'alkali metal', state: 'solid', radioactive: false, position: { row: 2, col: 1 } },
    { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.0122, group: 'alkaline earth metal', state: 'solid', radioactive: false, position: { row: 2, col: 2 } },
    { number: 5, symbol: 'B', name: 'Boron', mass: 10.81, group: 'metalloid', state: 'solid', radioactive: false, position: { row: 2, col: 13 } },
    { number: 6, symbol: 'C', name: 'Carbon', mass: 12.011, group: 'nonmetal', state: 'solid', radioactive: false, position: { row: 2, col: 14 } },
    { number: 7, symbol: 'N', name: 'Nitrogen', mass: 14.007, group: 'nonmetal', state: 'gas', radioactive: false, position: { row: 2, col: 15 } },
    { number: 8, symbol: 'O', name: 'Oxygen', mass: 15.999, group: 'nonmetal', state: 'gas', radioactive: false, position: { row: 2, col: 16 } },
    { number: 9, symbol: 'F', name: 'Fluorine', mass: 18.998, group: 'halogen', state: 'gas', radioactive: false, position: { row: 2, col: 17 } },
    { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, group: 'noble gas', state: 'gas', radioactive: false, position: { row: 2, col: 18 } },
    { number: 11, symbol: 'Na', name: 'Sodium', mass: 22.990, group: 'alkali metal', state: 'solid', radioactive: false, position: { row: 3, col: 1 } },
    { number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.305, group: 'alkaline earth metal', state: 'solid', radioactive: false, position: { row: 3, col: 2 } },
    { number: 13, symbol: 'Al', name: 'Aluminum', mass: 26.982, group: 'metal', state: 'solid', radioactive: false, position: { row: 3, col: 13 } },
    { number: 14, symbol: 'Si', name: 'Silicon', mass: 28.085, group: 'metalloid', state: 'solid', radioactive: false, position: { row: 3, col: 14 } },
    { number: 15, symbol: 'P', name: 'Phosphorus', mass: 30.974, group: 'nonmetal', state: 'solid', radioactive: false, position: { row: 3, col: 15 } },
    { number: 16, symbol: 'S', name: 'Sulfur', mass: 32.06, group: 'nonmetal', state: 'solid', radioactive: false, position: { row: 3, col: 16 } },
    { number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.45, group: 'halogen', state: 'gas', radioactive: false, position: { row: 3, col: 17 } },
    { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.948, group: 'noble gas', state: 'gas', radioactive: false, position: { row: 3, col: 18 } },
    { number: 19, symbol: 'K', name: 'Potassium', mass: 39.098, group: 'alkali metal', state: 'solid', radioactive: false, position: { row: 4, col: 1 } },
    { number: 20, symbol: 'Ca', name: 'Calcium', mass: 40.078, group: 'alkaline earth metal', state: 'solid', radioactive: false, position: { row: 4, col: 2 } },
    { number: 21, symbol: 'Sc', name: 'Scandium', mass: 44.956, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 3 } },
    { number: 22, symbol: 'Ti', name: 'Titanium', mass: 47.867, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 4 } },
    { number: 23, symbol: 'V', name: 'Vanadium', mass: 50.942, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 5 } },
    { number: 24, symbol: 'Cr', name: 'Chromium', mass: 51.996, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 6 } },
    { number: 25, symbol: 'Mn', name: 'Manganese', mass: 54.938, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 7 } },
    { number: 26, symbol: 'Fe', name: 'Iron', mass: 55.845, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 8 } },
    { number: 27, symbol: 'Co', name: 'Cobalt', mass: 58.933, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 9 } },
    { number: 28, symbol: 'Ni', name: 'Nickel', mass: 58.693, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 10 } },
    { number: 29, symbol: 'Cu', name: 'Copper', mass: 63.546, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 11 } },
    { number: 30, symbol: 'Zn', name: 'Zinc', mass: 65.38, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 4, col: 12 } },
    { number: 31, symbol: 'Ga', name: 'Gallium', mass: 69.723, group: 'metal', state: 'solid', radioactive: false, position: { row: 4, col: 13 } },
    { number: 32, symbol: 'Ge', name: 'Germanium', mass: 72.63, group: 'metalloid', state: 'solid', radioactive: false, position: { row: 4, col: 14 } },
    { number: 33, symbol: 'As', name: 'Arsenic', mass: 74.922, group: 'metalloid', state: 'solid', radioactive: false, position: { row: 4, col: 15 } },
    { number: 34, symbol: 'Se', name: 'Selenium', mass: 78.96, group: 'nonmetal', state: 'solid', radioactive: false, position: { row: 4, col: 16 } },
    { number: 35, symbol: 'Br', name: 'Bromine', mass: 79.904, group: 'halogen', state: 'liquid', radioactive: false, position: { row: 4, col: 17 } },
    { number: 36, symbol: 'Kr', name: 'Krypton', mass: 83.798, group: 'noble gas', state: 'gas', radioactive: false, position: { row: 4, col: 18 } },
    { number: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.468, group: 'alkali metal', state: 'solid', radioactive: false, position: { row: 5, col: 1 } },
    { number: 38, symbol: 'Sr', name: 'Strontium', mass: 87.62, group: 'alkaline earth metal', state: 'solid', radioactive: false, position: { row: 5, col: 2 } },
    { number: 39, symbol: 'Y', name: 'Yttrium', mass: 88.906, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 5, col: 3 } },
    { number: 40, symbol: 'Zr', name: 'Zirconium', mass: 91.224, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 5, col: 4 } },
    { number: 41, symbol: 'Nb', name: 'Niobium', mass: 92.906, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 5, col: 5 } },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: 95.95, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 5, col: 6 } },
    { number: 43, symbol: 'Tc', name: 'Technetium', mass: 98, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 5, col: 7 } },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: 101.07, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 5, col: 8 } },
    { number: 45, symbol: 'Rh', name: 'Rhodium', mass: 102.91, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 5, col: 9 } },
    { number: 46, symbol: 'Pd', name: 'Palladium', mass: 106.42, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 5, col: 10 } },
    { number: 47, symbol: 'Ag', name: 'Silver', mass: 107.87, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 5, col: 11 } },
    { number: 48, symbol: 'Cd', name: 'Cadmium', mass: 112.41, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 5, col: 12 } },
    { number: 49, symbol: 'In', name: 'Indium', mass: 114.82, group: 'metal', state: 'solid', radioactive: false, position: { row: 5, col: 13 } },
    { number: 50, symbol: 'Sn', name: 'Tin', mass: 118.71, group: 'metal', state: 'solid', radioactive: false, position: { row: 5, col: 14 } },
    { number: 51, symbol: 'Sb', name: 'Antimony', mass: 121.76, group: 'metalloid', state: 'solid', radioactive: false, position: { row: 5, col: 15 } },
    { number: 52, symbol: 'Te', name: 'Tellurium', mass: 127.60, group: 'metalloid', state: 'solid', radioactive: false, position: { row: 5, col: 16 } },
    { number: 53, symbol: 'I', name: 'Iodine', mass: 126.90, group: 'halogen', state: 'solid', radioactive: false, position: { row: 5, col: 17 } },
    { number: 54, symbol: 'Xe', name: 'Xenon', mass: 131.29, group: 'noble gas', state: 'gas', radioactive: false, position: { row: 5, col: 18 } },
    { number: 55, symbol: 'Cs', name: 'Cesium', mass: 132.91, group: 'alkali metal', state: 'solid', radioactive: false, position: { row: 6, col: 1 } },
    { number: 56, symbol: 'Ba', name: 'Barium', mass: 137.33, group: 'alkaline earth metal', state: 'solid', radioactive: false, position: { row: 6, col: 2 } },
    { number: 57, symbol: 'La', name: 'Lanthanum', mass: 138.91, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 6, col: 3 } },
    { number: 58, symbol: 'Ce', name: 'Cerium', mass: 140.12, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 4} },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', mass: 140.91, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 5} },
    { number: 60, symbol: 'Nd', name: 'Neodymium', mass: 144.24, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 6} },
    { number: 61, symbol: 'Pm', name: 'Promethium', mass: 145, group: 'lanthanide', state: 'solid', radioactive: true, position: { row: 9, col: 7} },
    { number: 62, symbol: 'Sm', name: 'Samarium', mass: 150.36, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 8} },
    { number: 63, symbol: 'Eu', name: 'Europium', mass: 151.96, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 9} },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: 157.25, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 10} },
    { number: 65, symbol: 'Tb', name: 'Terbium', mass: 158.93, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 11} },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: 162.50, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 12} },
    { number: 67, symbol: 'Ho', name: 'Holmium', mass: 164.93, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 13} },
	 { number: 68, symbol: 'Er', name: 'Erbium', mass: 167.26, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 14 } },
    { number: 69, symbol: 'Tm', name: 'Thulium', mass: 168.93, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 15 } },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: 173.05, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 16 } },
    { number: 71, symbol: 'Lu', name: 'Lutetium', mass: 174.97, group: 'lanthanide', state: 'solid', radioactive: false, position: { row: 9, col: 17 } },
    { number: 72, symbol: 'Hf', name: 'Hafnium', mass: 178.49, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 6, col: 4 } },
    { number: 73, symbol: 'Ta', name: 'Tantalum', mass: 180.95, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 6, col: 5 } },
    { number: 74, symbol: 'W', name: 'Tungsten', mass: 183.84, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 6, col: 6 } },
    { number: 75, symbol: 'Re', name: 'Rhenium', mass: 186.21, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 6, col: 7 } },
    { number: 76, symbol: 'Os', name: 'Osmium', mass: 190.23, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 6, col: 8 } },
    { number: 77, symbol: 'Ir', name: 'Iridium', mass: 192.22, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 6, col: 9 } },
    { number: 78, symbol: 'Pt', name: 'Platinum', mass: 195.08, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 6, col: 10 } },
    { number: 79, symbol: 'Au', name: 'Gold', mass: 196.97, group: 'transition metal', state: 'solid', radioactive: false, position: { row: 6, col: 11 } },
    { number: 80, symbol: 'Hg', name: 'Mercury', mass: 200.59, group: 'transition metal', state: 'liquid', radioactive: false, position: { row: 6, col: 12 } },
    { number: 81, symbol: 'Tl', name: 'Thallium', mass: 204.38, group: 'metal', state: 'solid', radioactive: false, position: { row: 6, col: 13 } },
    { number: 82, symbol: 'Pb', name: 'Lead', mass: 207.2, group: 'metal', state: 'solid', radioactive: false, position: { row: 6, col: 14 } },
    { number: 83, symbol: 'Bi', name: 'Bismuth', mass: 208.98, group: 'metal', state: 'solid', radioactive: false, position: { row: 6, col: 15 } },
    { number: 84, symbol: 'Po', name: 'Polonium', mass: 209, group: 'metalloid', state: 'solid', radioactive: true, position: { row: 6, col: 16 } },
    { number: 85, symbol: 'At', name: 'Astatine', mass: 210, group: 'halogen', state: 'solid', radioactive: true, position: { row: 6, col: 17 } },
    { number: 86, symbol: 'Rn', name: 'Radon', mass: 222, group: 'noble gas', state: 'gas', radioactive: true, position: { row: 6, col: 18 } },
    { number: 87, symbol: 'Fr', name: 'Francium', mass: 223, group: 'alkali metal', state: 'solid', radioactive: true, position: { row: 7, col: 1 } },
    { number: 88, symbol: 'Ra', name: 'Radium', mass: 226, group: 'alkaline earth metal', state: 'solid', radioactive: true, position: { row: 7, col: 2 } },
    { number: 89, symbol: 'Ac', name: 'Actinium', mass: 227, group: 'actinide', state: 'solid', radioactive: true, position: { row: 7, col: 3 } },
    { number: 90, symbol: 'Th', name: 'Thorium', mass: 232.04, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 4} },
    { number: 91, symbol: 'Pa', name: 'Protactinium', mass: 231.04, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 5} },
    { number: 92, symbol: 'U', name: 'Uranium', mass: 238.03, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 6} },
    { number: 93, symbol: 'Np', name: 'Neptunium', mass: 237, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 7} },
    { number: 94, symbol: 'Pu', name: 'Plutonium', mass: 244, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 8} },
    { number: 95, symbol: 'Am', name: 'Americium', mass: 243, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 9} },
    { number: 96, symbol: 'Cm', name: 'Curium', mass: 247, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 10} },
    { number: 97, symbol: 'Bk', name: 'Berkelium', mass: 247, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 11} },
    { number: 98, symbol: 'Cf', name: 'Californium', mass: 251, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 12} },
    { number: 99, symbol: 'Es', name: 'Einsteinium', mass: 252, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 13} },
    { number: 100, symbol: 'Fm', name: 'Fermium', mass: 257, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 14} },
    { number: 101, symbol: 'Md', name: 'Mendelevium', mass: 258, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 15} },
    { number: 102, symbol: 'No', name: 'Nobelium', mass: 259, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 16 } },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: 262, group: 'actinide', state: 'solid', radioactive: true, position: { row: 10, col: 17 } },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 267, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 7, col: 4 } },
    { number: 105, symbol: 'Db', name: 'Dubnium', mass: 268, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 7, col: 5 } },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: 271, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 7, col: 6 } },
    { number: 107, symbol: 'Bh', name: 'Bohrium', mass: 272, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 7, col: 7 } },
    { number: 108, symbol: 'Hs', name: 'Hassium', mass: 277, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 7, col: 8 } },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: 278, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 7, col: 9 } },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 281, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 7, col: 10 } },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: 282, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 7, col: 11 } },
    { number: 112, symbol: 'Cn', name: 'Copernicium', mass: 285, group: 'transition metal', state: 'solid', radioactive: true, position: { row: 7, col: 12 } },
    { number: 113, symbol: 'Nh', name: 'Nihonium', mass: 286, group: 'metal', state: 'solid', radioactive: true, position: { row: 7, col: 13 } },
    { number: 114, symbol: 'Fl', name: 'Flerovium', mass: 289, group: 'metal', state: 'solid', radioactive: true, position: { row: 7, col: 14 } },
    { number: 115, symbol: 'Mc', name: 'Moscovium', mass: 290, group: 'metal', state: 'solid', radioactive: true, position: { row: 7, col: 15 } },
    { number: 116, symbol: 'Lv', name: 'Livermorium', mass: 293, group: 'metal', state: 'solid', radioactive: true, position: { row: 7, col: 16 } },
    { number: 117, symbol: 'Ts', name: 'Tennessine', mass: 294, group: 'halogen', state: 'solid', radioactive: true, position: { row: 7, col: 17 } },
    { number: 118, symbol: 'Og', name: 'Oganesson', mass: 294, group: 'noble gas', state: 'solid', radioactive: true, position: { row: 7, col: 18 } }
];

class PeriodicTable {
  constructor() {
    this.currentView = 'group';
    this.selectedElement = null;
    this.tableEl = document.getElementById('periodicTable');
    this.detailsContent = document.querySelector('.details-content');
    this.groupViewBtn = document.getElementById('groupView');
    this.stateViewBtn = document.getElementById('stateView');
    this.resetBtn = document.getElementById('resetView');
    this.groupLegend = document.getElementById('groupLegend');
    this.stateLegend = document.getElementById('stateLegend');
    this.searchInput = document.getElementById('searchInput');
    this.tooltipTimeout = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderTable();
    this.setupSearch();
  }

  setupEventListeners() {
    this.groupViewBtn.addEventListener('click', () => this.toggleView('group'));
    this.stateViewBtn.addEventListener('click', () => this.toggleView('state'));
    this.resetBtn.addEventListener('click', () => this.reset());

    this.tableEl.addEventListener('keydown', (e) => {
      if (e.target.classList.contains('element') && e.key === 'Enter') {
        const element = elements[parseInt(e.target.dataset.number) - 1];
        this.showElementDetails(element);
      }
    });
  }

  setupSearch() {
    this.searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      this.searchElements(searchTerm);
    });
  }

  searchElements(term) {
    document.querySelectorAll('.element').forEach((node) => {
      const elementData = elements[parseInt(node.dataset.number) - 1];
      const matches =
        elementData.name.toLowerCase().includes(term) ||
        elementData.symbol.toLowerCase().includes(term);
      node.style.opacity = matches || term === '' ? '1' : '0.3';
    });
  }

  toggleView(view) {
    this.currentView = view;
    this.groupViewBtn.classList.toggle('active', view === 'group');
    this.stateViewBtn.classList.toggle('active', view === 'state');
    this.groupViewBtn.setAttribute('aria-pressed', view === 'group');
    this.stateViewBtn.setAttribute('aria-pressed', view === 'state');

    this.groupLegend.classList.toggle('hidden', view === 'state');
    this.stateLegend.classList.toggle('hidden', view === 'group');

    this.updateElementStyles();
  }

  updateElementStyles() {
    document.querySelectorAll('.element').forEach((node) => {
      const elementData = elements[parseInt(node.dataset.number) - 1];
      node.className = `element ${elementData[this.currentView]}${elementData.radioactive ? ' radioactive' : ''}`;
    });
  }

  reset() {
    this.selectedElement = null;
    this.toggleView('group');
    this.searchInput.value = '';
    this.searchElements('');
    this.updateElementDetails();
  }

  renderTable() {
    this.tableEl.innerHTML = '';
    elements.forEach((element) => {
      const elementDiv = document.createElement('div');
      elementDiv.className = `element ${element[this.currentView]}${element.radioactive ? ' radioactive' : ''}`;
      elementDiv.tabIndex = 0;
      elementDiv.dataset.number = element.number;
      elementDiv.style.gridRow = element.position.row;
      elementDiv.style.gridColumn = element.position.col;

      elementDiv.innerHTML = `
        <span class="number">${element.number}</span>
        <span class="symbol">${element.symbol}</span>
        <span class="mass">${element.mass}</span>
      `;

      elementDiv.addEventListener('click', () => this.showElementDetails(element));

      elementDiv.addEventListener('mouseenter', () => {
        this.tooltipTimeout = setTimeout(() => this.showTooltip(element, elementDiv), 300);
      });
      elementDiv.addEventListener('mouseleave', () => {
        clearTimeout(this.tooltipTimeout);
        this.hideTooltip();
      });

      this.tableEl.appendChild(elementDiv);
    });
  }

  showElementDetails(element) {
    this.selectedElement = element;
    this.updateElementDetails();
  }

  updateElementDetails() {
    if (!this.selectedElement) {
      this.detailsContent.innerHTML = '<p>Click an element to view details</p>';
      return;
    }
    this.detailsContent.innerHTML = `
      <h3>${this.selectedElement.name}</h3>
      <p><strong>Symbol:</strong> ${this.selectedElement.symbol}</p>
      <p><strong>Atomic Number:</strong> ${this.selectedElement.number}</p>
      <p><strong>Atomic Mass:</strong> ${this.selectedElement.mass}</p>
      <p><strong>Group:</strong> ${this.selectedElement.group.replace('-', ' ')}</p>
      <p><strong>State at Room Temperature:</strong> ${this.selectedElement.state}</p>
      ${this.selectedElement.radioactive ? '<p><strong>Radioactive:</strong> Yes</p>' : ''}
    `;
  }

  showTooltip(element, elementDiv) {
    if (elementDiv.querySelector('.tooltip')) return;
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `
      <strong>${element.name}</strong><br>
      ${element.symbol} (${element.number})<br>
      Mass: ${element.mass}
    `;
    elementDiv.appendChild(tooltip);
  }

  hideTooltip() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach((tooltip) => tooltip.remove());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PeriodicTable();
});
