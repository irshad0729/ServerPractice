const stripe = require('stripe')

const apiKey = 'pk_test_51O8asJSFXnIILoDvE7jXbDOE8cWVz0RdHcQ37zPAbipGirIIvmydxBcf7RuMDtHVoeG6AkYH1dNrIDj5g0WufIOP00SIa0guZb'
const secretKey = 'sk_test_51O8asJSFXnIILoDvc4zsIYV2aHk19ifWesLTPNNTSlTJcXFc1vvrnO2eQhja0s27Sk0esk2N7O3xvsyB076uqFPF00u7LLF7xQ'

stripe.setApiKey(apiKey, secretKey)