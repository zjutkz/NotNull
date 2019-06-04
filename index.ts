const required = function (target, propertyKey: string, parameterIndex: number) {
    if (!target[propertyKey]["required"]) {
        target[propertyKey]["required"] = {}
    }
    target[propertyKey]["required"][parameterIndex] = true
};

const notNull = function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    let originMethod = descriptor.value;
    descriptor.value = function (... params) {
        let args = arguments;
        if(originMethod["required"]) {
            Object.keys(originMethod["required"]).forEach(parameterIndex => {
                if (!args[parameterIndex]) throw Error(`arguments #${parameterIndex} of method ${propertyKey} is null, which require a not null value!`);
            });
        }
        return originMethod.apply(this, params)
    }
};

export {required, notNull};