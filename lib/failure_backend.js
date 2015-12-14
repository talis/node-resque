var failureBackend = function(options){
    var impl = 'redis';
    if (options.failureBackendImplementation) {
        impl = options.failureBackendImplementation;
    }
    var failureBackendImplementation = require(__dirname+"/failure/"+impl+".js").failureBackendImplementation;
    this.failureBackendImplementationObject = new failureBackendImplementation(options);
};

failureBackend.prototype.failedQueueName = function(queue) {
    return this.failureBackendImplementationObject.failedQueueName(queue);
}

exports.failureBackend = failureBackend;
