type CallbackResolve = (value: void | PromiseLike<void>) => void
type CallbackFunction = () => void

interface Resolver {
    resolve: CallbackResolve
    callback?: CallbackFunction
}

abstract class CallbackService {
    private resolvers: Resolver[]
    
    constructor() {
        this.resolvers = []
    }

    async addListenner(callback?: CallbackFunction): Promise<void> {
        return new Promise<void>(resolve => {
            const resolver: Resolver = {
                resolve: resolve,
                callback: callback
            }

            this.resolvers.push(resolver)
        })
    }

    protected async resolve() {
        this.resolvers.forEach(resolver => {
            if (resolver.callback) {
                resolver.callback()
            } else {
                resolver.resolve()
            }
        })
    }

    private resolveAll = (result: boolean) => {
		setTimeout(() => this.resolveAll(result), 0)
	}
}

export default CallbackService