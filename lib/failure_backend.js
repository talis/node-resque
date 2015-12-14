var failureBackend = function(options){
    var impl = 'redis'
    if (options.failureBackendImplementation) {
        impl = options.failureBackendImplementation;
    }
    this.failureBackendImplementationObject = require(__dirname+"/failure/"+impl+".js").failureBackendImplementation;
};

failureBackend.prototype.failedQueueName = function(queue) {
    return this.failureBackendImplementationObject.failedQueueName(queue);
}

exports.failureBackend = failureBackend;
