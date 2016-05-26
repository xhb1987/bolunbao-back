/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var AV = require('avoscloud-sdk');
AV.initialize('G5U1oJpvNaYxCdim8RNxmllc-gzGzoHsz', 'Co6b01uVBWOgh2miRUzTbc3y');
module.exports.leanCloud = {
    
    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    AV: AV
};

