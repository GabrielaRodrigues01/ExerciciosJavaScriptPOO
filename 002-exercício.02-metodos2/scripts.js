const cachorro = {
    raca: "SRD",
    uivar: function() {
        console.log("Auuuuuuuuuuuu");
    },
    rosnar: function() {
        console.log("grrrrrrrrrrrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é" + this.raca
    }
}

console.log(cachorro.raca);

cachorro.setRaca("Labrador");

console.log(cachorro.raca);

console.log(cachorro.getRaca());