class NeuralNetwork {
    
    constructor(numInputs) {
        this.inputs = []
        this.activations = []
        this.weights = []
        this.biases = []

        for(let i = 0; i < numInputs; i++) {
            this.inputs.push(i)
            this.activations.push(null) // will be filled in feed forward step
            this.biases.push(null) // no bias for input layer
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

    getActivationIndex(layer, neuron) {
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
            this.biases.push(0)
        }
        this.weightsBeforeLayer.push(this.weightsBeforeLayer.at(-1) + newWeights)
        this.neuronsBeforeLayer.push(this.neuronsBeforeLayer.at(-1) + n)
        // todo: bias
        this.structure.push(n)

    }

    fireNeuron(layer, neuron) {
        let sum = 0
        for(let inputNeuron = 0; inputNeuron < this.structure[layer-1]; inputNeuron++) {
            let act = this.activations[this.getActivationIndex(layer-1, inputNeuron)]
            let weight = this.weights[this.getWeightIndex(layer, neuron, inputNeuron)]
            sum += act * weight
        }
        sum += this.biases[this.getActivationIndex(layer, neuron)]
        this.activations[this.getActivationIndex(layer, neuron)] = sum
    }

    feedForward(inputs) { // [4, 4]
        //Input layer
        for(let i = 0; i < inputs.length; i++) {
            this.activations[i] = inputs[i]
        }
        for(let layer = 1; layer < this.structure.length; layer++) {
            for(let neuron = 0; neuron < this.structure[layer]; neuron++) {
                this.fireNeuron(layer, neuron)
            }
        }
        let output = this.activations.slice(-this.structure.at(-1))
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

