//testy kalkulatora


//1. Test sprawdzający poprawność działania kalkulatora promili dla mężczyzn:

const sampleObj = 25;
const sampleTime = 1;

const sampleWeights = [100, 73, 54, 83];
const sampleResults = [0.21,0.34,0.51,0.28];

function testMan(){
	return sampleWeights.map(value => ((sampleObj/(0.6*value)-sampleTime*0.15).toFixed(0))); 
	
	// podstawiam wzór służący do wyliczania promili dla mężczyzn (zamiast zmiennych z calculator.js używam stałych i podanej tablicy - dla któryc znam wyniki, dzięki czemu mogę sprawdzić czy rówanie działa prawidłowo) 
}

describe('testMan', () => {
	it('test powinien przejsc dla wszystkich liczb w tablicy', () =>{
		expect(testMan([100, 73, 54, 83])).to.deep.equal([0.21,0.34,0.51,0.28])
	})
})

//2. Test sprawdzający przeliczanie ml danego alkoholu na gramy

const ml = 200;

const alkConst = [30, 250, 100];
const results = [67, 8, 20];


function testGrams() {
	return alkConst.map(value => (((ml)/value*10).toFixed(0)));
	
	// podstawiam wzór na przeliczanie ml danego alkoholu na gramy, zamiast zmiennych z pliku calculator.js używam stałych, dla których znam wyniki.
}

describe('testGrams', () => {
	it('test powinien przejsc dla wszystkich liczb w tablicy', () =>{
		expect(tesGrams([30, 250, 100])).to.deep.equal([67, 8, 20]])
	})
})

//test filtrowania

//1. Testowanie dezaktywacji pola do wpisania nazwy drinka po filtrowaniu i aktywacji po resecie filtrów:

describe('Filtrowanie', () => {
	it('test powinien spowodwać zmienie stanu pola "find" na disabled', () =>{
		Filtrowanie();
		expect(find.disabled == true)
		Reset();
		expect(find.disabled == false)
	})
})

