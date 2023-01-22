function leakyRELU(x) {
    if(x >= 0) {
        return x
    }
    else {
        return 0.01 * x
    }
}

class NeuralNetwork {
    
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
        console.log(`add new layer with ${n} neurons`);

        let newWeights = n * this.structure.at(-1)  //let newWeights = n * this.structure[this.structure.length - 1] Altes Schema
        
        for(let i = 0; i < newWeights; i++) {
            this.weights.push(0.5)
        }
        for(let i = 0; i < n; i++) {
            this.activations.push(null)
            this.biases.push(2)
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
}

const myNet = new NeuralNetwork(2)
myNet.addLayer(3)
myNet.addLayer(2)
myNet.addLayer(2)

console.log("Structure: ", myNet.structure)
console.log("check: ", myNet.getWeightIndex(3,1,0))
const output = myNet.feedForward([4,4]) // should return [6,6] if all weights are 0.5
console.log({output});

