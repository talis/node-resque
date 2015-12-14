var failureBackendImplementation = function(options){
};

failureBackendImplementation.prototype.failedQueueName = function(queue) {
    return 'failed';
}
exports.failureBackendImplementation = failureBackendImplementation;
