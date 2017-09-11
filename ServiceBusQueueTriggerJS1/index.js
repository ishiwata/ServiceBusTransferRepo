module.exports = function(context, mySbMsg) {
    context.log('JavaScript ServiceBus queue trigger function processed message', mySbMsg);
    var date = Date.now();
    var partitionKey = Math.floor(date / (24 * 60 * 60 * 1000)) + '';
    var rowKey = date + '';
    context.bindings.outputTable = {
        "partitionKey": partitionKey,
        "rowKey": rowKey,
        "message": JSON.stringify(mySbMsg)
    };
    context.done();
};