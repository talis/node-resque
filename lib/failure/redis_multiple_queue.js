var failureBackendImplementation = function(options){
};

failureBackendImplementation.prototype.failedQueueName = function(queue) {
    return queue + '_failed';
}
exports.failureBackendImplementation = failureBackendImplementation;
