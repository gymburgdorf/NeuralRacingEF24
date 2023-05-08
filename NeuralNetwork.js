function leakyRELU(x) {
    if(x >= 0) {
        return x
    }
    else {
        return 0.01 * x
    }
}

let random = SeedRandom(1e11, 7e11)
function randomBetween(low, high) {
    return low + (high - low) * Math.round(random(1e9) / 1e7) / 100
}

export class NeuralNetwork {
    
    constructor(numInputs) {
        this.inputs = []
        this.activations = []
        this.biases = []
        this.weights = []

        for(let i = 0; i < numInputs; i++) {
            this.inputs.push(i)
            this.activations.push(null) // will be filled in feed forward step
            this.biases.push(null)
        }

        // helpers to store structure
        this.structure = [numInputs]
        this.neuronsBeforeLayer = [0]
        this.weightsBeforeLayer = [0]
    }

    getWeightIndex(layer, neuron, num) {
        let index = this.weightsBeforeLayer[layer-1] // skip full layers
        index += this.structure[layer-1] * neuron // skip full neurons
        return index + num
    }

    getNeuronIndex(layer, neuron) {
        return this.neuronsBeforeLayer[layer] + neuron
    }

    addLayer(n) {
        //console.log(`add new layer with ${n} neurons`);

        let newWeights = n * this.structure.at(-1)  //let newWeights = n * this.structure[this.structure.length - 1] Altes Schema
        
        for(let i = 0; i < newWeights; i++) {
            this.weights.push(randomBetween(-1,1))
        }
        for(let i = 0; i < n; i++) {
            this.activations.push(null)
            this.biases.push(randomBetween(-1,1))
        }
        this.weightsBeforeLayer.push(this.weightsBeforeLayer.at(-1) + newWeights)
        this.neuronsBeforeLayer.push(this.neuronsBeforeLayer.at(-1) + this.structure.at(-1))
        this.structure.push(n)
    }

    fireNeuron(layer, neuron) {
        let sum = 0
        for(let inputNeuron = 0; inputNeuron < this.structure[layer-1]; inputNeuron++) {
            let act = this.activations[this.getNeuronIndex(layer-1, inputNeuron)]
            let weight = this.weights[this.getWeightIndex(layer, neuron, inputNeuron)]
            sum += act * weight
        }
        const myIndex = this.getNeuronIndex(layer, neuron)
        sum += this.biases[myIndex]
        this.activations[myIndex] = leakyRELU(sum)
    }

    feedForward(inputs) { // [4, 4]
        // put inputs in layer 0
        for(let i = 0; i < inputs.length; i++) {
            this.activations[i] = inputs[i]
        }
        // next layers [2, 3, 2, 2]
        for(let layer = 1; layer < this.structure.length; layer+=1) {
            for(let neuron = 0; neuron < this.structure[layer]; neuron++) {
                this.fireNeuron(layer, neuron)
            }
        }
        const sizeOfLastLayer = this.structure.at(-1)
        const output = this.activations.slice(- sizeOfLastLayer)
        return output
    }

    clone() {
        const copy = new NeuralNetwork(this.inputs.length)
        copy.inputs = structuredClone(this.inputs)
        copy.activations = structuredClone(this.activations)
        copy.weights = structuredClone(this.weights)
        copy.biases = structuredClone(this.biases)
        copy.structure = structuredClone(this.structure)
        copy.neuronsBeforeLayer = structuredClone(this.neuronsBeforeLayer)
        copy.weightsBeforeLayer = structuredClone(this.weightsBeforeLayer)
        return copy
    }

    randomAdjust(amount) {
        for(let i = 0; i < this.weights.length; i++) {
            this.weights[i] += randomBetween(-amount, amount)
        }
        for(let i = 0; i < this.biases.length; i++) {
            this.biases[i] += randomBetween(-amount, amount)
        }
    }

    exportData() {
        const {structure, weights, biases} = this
        console.log(JSON.stringify({structure, weights, biases}))
    }
}

// const myNet = new NeuralNetwork(2)
// myNet.addLayer(3)
// myNet.addLayer(2)
// myNet.addLayer(2)

// console.log("Structure: ", myNet.structure)
// console.log("check: ", myNet.getWeightIndex(3,1,0))
// const output = myNet.feedForward([4,4]) // should return [6,6] if all weights are 0.5
// console.log({output});



function SeedRandom(state1, state2){
	var mod1=4294967087
	var mul1=65539
	var mod2=4294965887
	var mul2=65537
	if(typeof state1!="number"){
			state1=+new Date()
	}
	if(typeof state2!="number"){
			state2=state1
	}
	state1=state1%(mod1-1)+1
	state2=state2%(mod2-1)+1
	function random(limit = 1){
			state1=(state1*mul1)%mod1
			state2=(state2*mul2)%mod2
			if(state1<limit && state2<limit && state1<mod1%limit && state2<mod2%limit){
					return random(limit)
			}
			return (state1+state2)%limit
	}
	return random
}
